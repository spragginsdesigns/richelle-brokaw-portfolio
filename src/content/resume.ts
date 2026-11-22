/**
 * Single source of truth for everything the site and the resume PDF say about
 * Richelle. Edit here, then run `npm run resume:pdf` to regenerate the PDF.
 *
 * Phone numbers are deliberately not in this file: they are printed on the PDF
 * only (see scripts/resume-pdf.mjs) so they never ship in the website's HTML.
 */

export type OrganizationBrand =
  | "fedex"
  | "walgreens"
  | "clovis-west"
  | "woodward-bluffs-estates";

export type Role = {
  company: string;
  brand?: OrganizationBrand;
  title: string;
  location: string;
  start: string;
  end: string;
  highlights: string[];
};

export type SkillGroup = {
  label: string;
  skills: string[];
};

export type Education = {
  school: string;
  brand?: OrganizationBrand;
  credential: string;
  detail?: string;
};

type VolunteerRole = {
  organization: string;
  brand?: OrganizationBrand;
  role: string;
  start: string;
  end: string;
};

export const SITE_URL = "https://richelle-brokaw-portfolio.vercel.app";
export const RESUME_PDF_PATH = "/Richelle-Brokaw-Resume.pdf";

export const profile = {
  name: "Richelle Brokaw",
  initials: "RB",
  headline: "Logistics & Operations Specialist",
  location: "Fresno, CA",
  email: "richellebrokaw3@gmail.com",
  linkedin: "https://www.linkedin.com/in/richelle-brokaw-b8ba24256/",
  linkedinLabel: "linkedin.com/in/richelle-brokaw-b8ba24256",
  facebook: "https://www.facebook.com/richelle.brokaw/",
  tagline:
    "I keep inventory accurate, schedules on track and teams supported, from the warehouse floor to the front office.",
  summary:
    "Logistics and operations specialist with experience in logistics management, inventory control and administrative operations. Organized, detail-oriented and comfortable with complex scheduling and coordination across teams. Known for strong customer service and for spotting and resolving issues before they grow.",
  about: [
    "I work in logistics and operations, most recently as an Operations Administrator at FedEx Ground. My background covers inventory control, administrative operations, safety compliance and customer service.",
    "I am organized, I pay attention to detail, and I like solving problems before they slow a team down. I have trained and supervised coworkers, managed vendor relationships and kept records accurate under pressure.",
    "Before logistics I ran my own photography and modeling business, which taught me how to manage projects from start to finish and take care of clients.",
  ],
} as const;

export const experience: Role[] = [
  {
    company: "FedEx Ground",
    brand: "fedex",
    title: "Operations Administrator",
    location: "Fresno, CA",
    start: "Sep 2021",
    end: "Present",
    highlights: [
      "Improved logistics and workflow processes to raise operational throughput and efficiency.",
      "Resolved customer inquiries and issues quickly, keeping satisfaction and loyalty high.",
      "Led, mentored and trained team members, reinforcing best practices and continuous improvement.",
      "Managed core administrative functions, from documentation to process improvements that supported business decisions.",
    ],
  },
  {
    company: "Walgreens",
    brand: "walgreens",
    title: "Inventory Specialist (SFL)",
    location: "Fresno, CA",
    start: "Mar 2023",
    end: "Oct 2023",
    highlights: [
      "Ran inventory control operations, tracking stock to keep levels accurate and improving replenishment procedures.",
      "Enforced health and safety compliance, including hazardous materials handling and company policy.",
      "Managed vendor relationships and coordinated supply chain logistics to keep deliveries on time.",
      "Worked with pharmacy and retail teams to align inventory management with business goals.",
    ],
  },
  {
    company: "Self-Employed",
    title: "Photographer & Model",
    location: "Fresno, CA",
    start: "Feb 2017",
    end: "Jun 2019",
    highlights: [
      "Built and grew a personal photography and modeling brand, networking to win client work.",
      "Delivered creative projects from concept to final delivery, handling project management and creative direction.",
      "Used marketing and social media, guided by analytics, to grow the brand and reach new clients.",
      "Gave each client a personalized experience with close attention to their needs and feedback.",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    label: "Logistics & Inventory",
    skills: [
      "Logistics management",
      "Inventory management",
      "Hazardous material handling & documentation",
      "Scheduling & coordination",
    ],
  },
  {
    label: "Administration",
    skills: [
      "Administrative operations",
      "Records management",
      "Data entry",
      "Computer & office software",
    ],
  },
  {
    label: "Compliance & Safety",
    skills: ["HIPAA standards", "OSHA standards", "Safety & service standards"],
  },
  {
    label: "Leadership",
    skills: [
      "Team leadership",
      "Training & supervision",
      "Strategic planning",
      "Problem solving",
    ],
  },
  {
    label: "Customer Service",
    skills: [
      "Customer service",
      "Communication",
      "Interpersonal skills",
      "Organization",
    ],
  },
];

export const education: Education[] = [
  {
    school: "Kaplan Institute",
    credential: "Associate of Arts, Medical Office Assistance",
  },
  {
    school: "Clovis West High School",
    brand: "clovis-west",
    credential: "High School Diploma",
    detail: "2004 - 2008",
  },
];

export const volunteer: VolunteerRole[] = [
  {
    organization: "Woodward Bluffs Activities Committee",
    brand: "woodward-bluffs-estates",
    role: "Board Member",
    start: "Jan 2023",
    end: "Present",
  },
];

export const references = [
  {
    name: "Austin Spraggins",
    title: "Professional Web Developer | Marketing Specialist",
    email: "spragginsdesigns@gmail.com",
    /** URL parameter the PDF script uses to print this person's phone number. */
    phoneParam: "referencePhone",
  },
];
