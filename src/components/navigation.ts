export type NavItem = {
  /** Section id on the home page, or null for a standalone route. */
  section: string | null;
  href: string;
  label: string;
};

export const NAV_ITEMS: NavItem[] = [
  { section: "top", href: "/#top", label: "Home" },
  { section: "about", href: "/#about", label: "About" },
  { section: "experience", href: "/#experience", label: "Experience" },
  { section: "skills", href: "/#skills", label: "Skills" },
  { section: null, href: "/resume", label: "Resume" },
  { section: "contact", href: "/#contact", label: "Contact" },
];

export const HOME_SECTION_IDS = NAV_ITEMS.flatMap((item) =>
  item.section ? [item.section] : [],
);
