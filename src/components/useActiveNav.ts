"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HOME_SECTION_IDS, type NavItem } from "./navigation";

/** How far down the viewport a section's top must reach to count as current. */
const ACTIVATION_LINE = 0.35;

function findActiveSection(): string {
  const page = document.documentElement;
  // The last section is often too short to reach the activation line, so
  // being at the bottom of the page always selects it.
  if (window.innerHeight + window.scrollY >= page.scrollHeight - 2) {
    return HOME_SECTION_IDS[HOME_SECTION_IDS.length - 1];
  }

  const line = window.innerHeight * ACTIVATION_LINE;
  let active = HOME_SECTION_IDS[0];
  for (const id of HOME_SECTION_IDS) {
    const section = document.getElementById(id);
    if (section && section.getBoundingClientRect().top <= line) active = id;
  }
  return active;
}

/**
 * Tracks which home-page section is on screen so the header and the mobile tab
 * bar can highlight it. Off the home page, the route decides instead.
 */
export function useActiveNav(): (item: NavItem) => "page" | "true" | undefined {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState(HOME_SECTION_IDS[0]);

  useEffect(() => {
    if (pathname !== "/") return;

    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setActiveSection(findActiveSection()));
    };

    // Also runs once on arrival, so a link like /#contact from another page
    // highlights the right item instead of whatever was active last time.
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [pathname]);

  return (item) => {
    if (item.section === null) {
      return pathname === item.href ? "page" : undefined;
    }
    return pathname === "/" && activeSection === item.section
      ? "true"
      : undefined;
  };
}
