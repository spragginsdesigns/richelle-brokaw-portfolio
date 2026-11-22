"use client";

import Link from "next/link";
import type { ComponentType, SVGProps } from "react";
import {
  BriefcaseIcon,
  FileIcon,
  HomeIcon,
  MailIcon,
  SkillsIcon,
} from "./Icons";
import { NAV_ITEMS, type NavItem } from "./navigation";
import { useActiveNav } from "./useActiveNav";

const TAB_ICONS: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  Home: HomeIcon,
  Experience: BriefcaseIcon,
  Skills: SkillsIcon,
  Resume: FileIcon,
  Contact: MailIcon,
};

// Five tabs is the most a phone bar holds comfortably; About folds into Home.
const TABS = NAV_ITEMS.filter((item) => item.label in TAB_ICONS);

export function BottomTabs() {
  const isActive = useActiveNav();
  // While the About section is on screen, Home stays lit so a tab is always active.
  const aboutItem = NAV_ITEMS.find((item) => item.section === "about");
  const tabCurrent = (item: NavItem) =>
    isActive(item) ??
    (item.section === "top" && aboutItem ? isActive(aboutItem) : undefined);

  return (
    <nav
      aria-label="Sections"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-surface/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md md:hidden print:hidden"
    >
      <ul className="mx-auto grid h-(--tabbar-h) max-w-md grid-cols-5">
        {TABS.map((item) => {
          const Icon = TAB_ICONS[item.label];
          const current = tabCurrent(item);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={current}
                className={`flex h-full flex-col items-center justify-center gap-1 text-[0.6875rem] font-medium transition-colors ${
                  current ? "text-accent" : "text-muted"
                }`}
              >
                <span
                  className={`flex h-7 w-12 items-center justify-center rounded-full text-xl transition-colors ${
                    current ? "bg-accent-soft" : ""
                  }`}
                >
                  <Icon />
                </span>
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
