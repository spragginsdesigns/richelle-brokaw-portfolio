"use client";

import Link from "next/link";
import { profile, RESUME_PDF_PATH } from "@/content/resume";
import { DownloadIcon } from "./Icons";
import { NAV_ITEMS } from "./navigation";
import { useActiveNav } from "./useActiveNav";

export function SiteHeader() {
  const isActive = useActiveNav();

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur-md print:hidden">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-5 md:h-16 md:px-8">
        <Link
          href="/#top"
          className="font-display text-lg font-semibold tracking-tight"
        >
          {profile.name}
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {NAV_ITEMS.filter((item) => item.section !== "top").map((item) => {
              const current = isActive(item);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={current}
                    className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                      current
                        ? "bg-accent-soft text-accent"
                        : "text-muted hover:text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <a
          href={RESUME_PDF_PATH}
          download
          aria-label="Download résumé PDF"
          className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-surface px-4 text-sm font-semibold text-ink transition-colors hover:border-accent"
        >
          <DownloadIcon className="text-base" />
          <span>PDF</span>
        </a>
      </div>
    </header>
  );
}
