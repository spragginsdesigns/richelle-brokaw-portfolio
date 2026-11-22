import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowIcon,
  DownloadIcon,
  FacebookIcon,
  FileIcon,
  LinkedInIcon,
  MailIcon,
  PinIcon,
} from "@/components/Icons";
import {
  education,
  experience,
  highlights,
  profile,
  RESUME_PDF_PATH,
  SITE_URL,
  skillGroups,
  volunteer,
} from "@/content/resume";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.headline,
  url: SITE_URL,
  image: `${SITE_URL}/images/richelle-headshot.jpg`,
  email: `mailto:${profile.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Fresno",
    addressRegion: "CA",
    addressCountry: "US",
  },
  worksFor: { "@type": "Organization", name: experience[0].company },
  sameAs: [profile.linkedin, profile.facebook],
};

const primaryButton =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-accent px-6 text-base font-semibold text-accent-ink transition-opacity hover:opacity-90";
const secondaryButton =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-line bg-surface px-6 text-base font-semibold text-ink transition-colors hover:border-accent";

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
        {eyebrow}
      </p>
      <h2
        id={`${id}-title`}
        className="mt-2 font-display text-3xl font-semibold tracking-tight md:text-4xl"
      >
        {title}
      </h2>
      <div className="mt-8 md:mt-10">{children}</div>
    </section>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-12 pt-10 md:grid-cols-[1.25fr_1fr] md:gap-14 md:px-8 md:pb-20 md:pt-20"
    >
      <div className="order-2 md:order-1">
        <p className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-3 py-1.5 text-sm font-medium text-accent">
          <PinIcon />
          {profile.location}
        </p>
        <h1 className="mt-5 font-display text-[clamp(2.5rem,9vw,4.5rem)] font-semibold leading-[1.02] tracking-tight">
          {profile.name}
        </h1>
        <p className="mt-3 text-xl font-medium text-accent md:text-2xl">
          {profile.headline}
        </p>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
          {profile.tagline}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href={RESUME_PDF_PATH}
            download
            className={`${primaryButton} whitespace-nowrap`}
          >
            <DownloadIcon />
            Download resume
          </a>
          <a href="#contact" className={`${secondaryButton} whitespace-nowrap`}>
            <MailIcon />
            Get in touch
          </a>
        </div>
      </div>

      <div className="order-1 mx-auto w-44 sm:w-56 md:order-2 md:w-full md:max-w-sm">
        <div className="rotate-2 rounded-[2rem] bg-accent-soft p-2 shadow-sm md:p-3">
          <Image
            src="/images/richelle-headshot.jpg"
            alt={`Portrait of ${profile.name}`}
            width={720}
            height={720}
            priority
            sizes="(min-width: 768px) 384px, 224px"
            className="-rotate-2 rounded-[1.6rem] object-cover"
          />
        </div>
      </div>

      <dl className="order-3 grid gap-3 sm:grid-cols-3 md:col-span-2">
        {highlights.map((item) => (
          <div
            key={item.value}
            className="rounded-2xl border border-line bg-surface px-5 py-4"
          >
            <dt className="text-sm text-muted">{item.label}</dt>
            <dd className="font-display text-xl font-semibold">{item.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="About" title="Organized, reliable and hands-on">
      <div className="grid items-center gap-8 md:grid-cols-[1.3fr_1fr] md:gap-14">
        <div className="space-y-5 text-lg leading-relaxed text-muted">
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <Image
          src="/images/richelle-at-work.jpg"
          alt="Illustration of Richelle checking inventory on a tablet in a warehouse office"
          width={800}
          height={720}
          sizes="(min-width: 768px) 420px, 100vw"
          className="w-full rounded-3xl border border-line"
        />
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I have worked">
      <ol className="space-y-5">
        {experience.map((role) => (
          <li
            key={`${role.company}-${role.start}`}
            className="grid gap-4 rounded-3xl border border-line bg-surface p-6 md:grid-cols-[14rem_1fr] md:gap-8 md:p-8"
          >
            <div>
              <p className="text-sm font-semibold text-accent">
                {role.start} - {role.end}
              </p>
              <h3 className="mt-1 font-display text-2xl font-semibold">
                {role.company}
              </h3>
              <p className="mt-1 font-medium">{role.title}</p>
              <p className="mt-1 text-sm text-muted">{role.location}</p>
            </div>
            <ul className="space-y-3 leading-relaxed text-muted">
              {role.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                  />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
      <p className="mt-6">
        <Link
          href="/resume"
          className="inline-flex min-h-11 items-center gap-2 font-semibold text-accent underline-offset-4 hover:underline"
        >
          <FileIcon />
          View the full resume
          <ArrowIcon />
        </Link>
      </p>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="What I bring to a team">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.label}
            className="rounded-3xl border border-line bg-surface p-6"
          >
            <h3 className="font-display text-xl font-semibold">{group.label}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full bg-accent-soft px-3 py-1.5 text-sm font-medium"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Background() {
  return (
    <Section
      id="education"
      eyebrow="Education & community"
      title="Training and volunteer work"
    >
      <div className="grid gap-5 md:grid-cols-3">
        {education.map((item) => (
          <div
            key={item.school}
            className="rounded-3xl border border-line bg-surface p-6"
          >
            <p className="text-sm font-semibold text-accent">Education</p>
            <h3 className="mt-1 font-display text-xl font-semibold">
              {item.school}
            </h3>
            <p className="mt-1 text-muted">{item.credential}</p>
            {item.detail && (
              <p className="mt-1 text-sm text-muted">{item.detail}</p>
            )}
          </div>
        ))}
        {volunteer.map((item) => (
          <div
            key={item.organization}
            className="rounded-3xl border border-line bg-surface p-6"
          >
            <p className="text-sm font-semibold text-accent">Volunteer</p>
            <h3 className="mt-1 font-display text-xl font-semibold">
              {item.role}
            </h3>
            <p className="mt-1 text-muted">{item.organization}</p>
            <p className="mt-1 text-sm text-muted">
              {item.start} - {item.end}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="mx-auto max-w-6xl px-5 pb-16 pt-6 md:px-8 md:pb-24"
    >
      <div className="rounded-[2rem] bg-accent-soft px-6 py-10 md:px-14 md:py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
          Contact
        </p>
        <h2
          id="contact-title"
          className="mt-2 max-w-2xl font-display text-3xl font-semibold tracking-tight md:text-5xl"
        >
          Hiring for operations, logistics or admin? Let&apos;s talk.
        </h2>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
          Email is the fastest way to reach me. I am based in {profile.location}.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href={`mailto:${profile.email}`}
            className={`${primaryButton} break-all`}
          >
            <MailIcon className="shrink-0" />
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={secondaryButton}
          >
            <LinkedInIcon />
            LinkedIn
          </a>
          <a
            href={profile.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className={secondaryButton}
          >
            <FacebookIcon />
            Facebook
          </a>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Background />
      <Contact />
    </>
  );
}
