import type { Metadata } from "next";
import type { ReactNode } from "react";
import { DownloadIcon } from "@/components/Icons";
import { PrintOnlyPhone } from "@/components/PrintOnlyPhone";
import {
  education,
  experience,
  profile,
  references,
  RESUME_PDF_PATH,
  skillGroups,
  volunteer,
} from "@/content/resume";

const description = `Resume of ${profile.name}, ${profile.headline} in ${profile.location}.`;
const socialTitle = `Resume | ${profile.name}`;

export const metadata: Metadata = {
  title: "Resume",
  description,
  alternates: { canonical: "/resume" },
  // Set explicitly: otherwise shared links inherit the home page's title and URL.
  openGraph: {
    type: "profile",
    url: "/resume",
    siteName: profile.name,
    title: socialTitle,
    description,
  },
  twitter: { card: "summary_large_image", title: socialTitle, description },
};

function ResumeSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-8 print:mt-5">
      <h2 className="border-b border-line pb-1.5 text-sm font-bold uppercase tracking-[0.16em] text-accent print:pb-1 print:tracking-normal">
        {title}
      </h2>
      <div className="mt-4 print:mt-2">{children}</div>
    </section>
  );
}

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-8 md:px-8 md:py-14 print:max-w-none print:p-0">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between print:hidden">
        <p className="text-muted">
          Readable here on any screen, or download the one-page PDF.
        </p>
        <a
          href={RESUME_PDF_PATH}
          download
          className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-accent px-6 font-semibold text-accent-ink transition-opacity hover:opacity-90"
        >
          <DownloadIcon />
          Download PDF
        </a>
      </div>

      <article className="rounded-3xl border border-line bg-surface p-6 leading-relaxed md:p-12 print:rounded-none print:border-0 print:p-0 print:leading-snug">
        <header>
          <h1 className="font-display text-4xl font-semibold tracking-tight md:text-5xl print:text-3xl">
            {profile.name}
          </h1>
          <p className="mt-1 text-lg font-medium text-accent print:text-base">
            {profile.headline}
          </p>
          <ul className="mt-3 flex flex-col gap-x-5 gap-y-1 text-sm text-muted sm:flex-row sm:flex-wrap print:mt-2 print:flex-row print:flex-wrap">
            <li>{profile.location}</li>
            <PrintOnlyPhone param="phone" as="li" />
            <li>
              <a href={`mailto:${profile.email}`} className="break-all">
                {profile.email}
              </a>
            </li>
            <li>
              <a href={profile.linkedin} className="break-all">
                {profile.linkedinLabel}
              </a>
            </li>
          </ul>
        </header>

        <ResumeSection title="Summary">
          <p>{profile.summary}</p>
        </ResumeSection>

        <ResumeSection title="Skills">
          <dl className="space-y-2 print:space-y-0.5">
            {skillGroups.map((group) => (
              <div key={group.label} className="sm:flex sm:gap-2 print:flex print:gap-2">
                <dt className="shrink-0 font-semibold">{group.label}:</dt>
                <dd className="text-muted">{group.skills.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </ResumeSection>

        <ResumeSection title="Experience">
          <div className="space-y-6 print:space-y-3">
            {experience.map((role) => (
              <div key={`${role.company}-${role.start}`}>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between sm:gap-4 print:flex-row print:items-baseline print:justify-between print:gap-4">
                  <h3 className="font-semibold">
                    {role.title}, {role.company}
                  </h3>
                  <p className="shrink-0 text-sm text-muted">
                    {role.location} | {role.start} - {role.end}
                  </p>
                </div>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-muted print:mt-1 print:space-y-0.5">
                  {role.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ResumeSection>

        <ResumeSection title="Education">
          <ul className="space-y-2 print:space-y-0.5">
            {education.map((item) => (
              <li key={item.school}>
                <span className="font-semibold">{item.school}</span>
                <span className="text-muted">
                  {" "}
                  | {item.credential}
                  {item.detail ? ` | ${item.detail}` : ""}
                </span>
              </li>
            ))}
          </ul>
        </ResumeSection>

        <ResumeSection title="Volunteer">
          <ul className="space-y-2 print:space-y-0.5">
            {volunteer.map((item) => (
              <li key={item.organization}>
                <span className="font-semibold">
                  {item.role}, {item.organization}
                </span>
                <span className="text-muted">
                  {" "}
                  | {item.start} - {item.end}
                </span>
              </li>
            ))}
          </ul>
        </ResumeSection>

        <ResumeSection title="References">
          <ul className="space-y-2 print:space-y-0.5">
            {references.map((reference) => (
              <li key={reference.name}>
                <span className="font-semibold">{reference.name}</span>
                <span className="text-muted">
                  {" "}
                  | {reference.title} |{" "}
                  <PrintOnlyPhone param={reference.phoneParam} suffix=" | " />
                  <a href={`mailto:${reference.email}`} className="break-all">
                    {reference.email}
                  </a>
                </span>
              </li>
            ))}
          </ul>
        </ResumeSection>
      </article>
    </div>
  );
}
