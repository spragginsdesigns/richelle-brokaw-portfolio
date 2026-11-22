import { profile } from "@/content/resume";

export function SiteFooter() {
  return (
    <footer className="border-t border-line print:hidden">
      <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-8 text-sm text-muted md:flex-row md:items-center md:justify-between md:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name}. {profile.headline},{" "}
          {profile.location}.
        </p>
        <p>
          Site by{" "}
          <a
            href="https://spragginsdesigns.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-ink underline decoration-line underline-offset-4 hover:decoration-accent"
          >
            Spraggins Designs
          </a>
        </p>
      </div>
    </footer>
  );
}
