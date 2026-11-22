/**
 * Prints the /resume page to public/Richelle-Brokaw-Resume.pdf.
 *
 *   npm run build && npm run resume:pdf
 *
 * Starts the production server on a spare port, prints the page with headless
 * Chrome, then stops the server. RESUME_PHONE and REFERENCE_PHONE (from
 * .env.local) are passed in the URL so the numbers appear on the PDF but never
 * in the website's HTML.
 */
import { spawn, execFile } from "node:child_process";
import { existsSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";

const run = promisify(execFile);
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const output = path.join(root, "public", "Richelle-Brokaw-Resume.pdf");
const port = 4317;

const phone = process.env.RESUME_PHONE;
const referencePhone = process.env.REFERENCE_PHONE;
if (!phone || !referencePhone) {
  throw new Error(
    "RESUME_PHONE and REFERENCE_PHONE must be set. Add them to .env.local (see .env.example).",
  );
}

function findChrome() {
  const candidates = [
    process.env.CHROME_PATH,
    "C:/Program Files/Google/Chrome/Application/chrome.exe",
    "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/usr/bin/google-chrome",
    "/usr/bin/chromium",
  ].filter(Boolean);
  const found = candidates.find((candidate) => existsSync(candidate));
  if (!found) {
    throw new Error("Chrome not found. Set CHROME_PATH in .env.local.");
  }
  return found;
}

async function waitForServer(url, server) {
  for (let attempt = 0; attempt < 60; attempt += 1) {
    // An early exit means the port was taken; without this check the script
    // would print from whatever older server is already listening there.
    if (server.exitCode !== null) {
      throw new Error(`next start exited early. Is port ${port} already in use?`);
    }
    try {
      const response = await fetch(url);
      if (response.ok) return;
    } catch {
      // Server is still starting.
    }
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
  throw new Error(`Server did not start at ${url}`);
}

if (!existsSync(path.join(root, ".next", "BUILD_ID"))) {
  throw new Error("No production build found. Run `npm run build` first.");
}

const nextBin = path.join(root, "node_modules", "next", "dist", "bin", "next");
const server = spawn(process.execPath, [nextBin, "start", "-p", String(port)], {
  cwd: root,
  stdio: "ignore",
});

try {
  const base = `http://localhost:${port}/resume`;
  await waitForServer(base, server);
  const chrome = findChrome();
  const url = `${base}?${new URLSearchParams({ phone, referencePhone })}`;
  const flags = ["--headless=new", "--disable-gpu", "--virtual-time-budget=8000"];

  // The numbers are added by client-side code, so confirm they rendered before
  // printing rather than shipping a PDF that silently lacks them.
  const { stdout: dom } = await run(chrome, [...flags, "--dump-dom", url], {
    maxBuffer: 16 * 1024 * 1024,
  });
  for (const param of ["phone", "referencePhone"]) {
    if (!dom.includes(`data-print-phone="${param}"`)) {
      throw new Error(`The ${param} number did not render on /resume.`);
    }
  }

  await run(chrome, [
    ...flags,
    "--no-pdf-header-footer",
    `--print-to-pdf=${output}`,
    url,
  ]);
  console.log(`Wrote ${output} (${statSync(output).size} bytes)`);
} finally {
  server.kill();
}
