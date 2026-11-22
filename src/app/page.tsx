import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowUpRight,
  CalendarDays,
  Camera,
  ClipboardList,
  FileText,
  GraduationCap,
  HandHeart,
  Headset,
  Mail,
  MapPin,
  PackageCheck,
  ShieldCheck,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import { FacebookIcon, LinkedInIcon } from "@/components/Icons";
import { OrganizationMark } from "@/components/OrganizationMark";
import {
  education,
  experience,
  profile,
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
const iconTile =
  "inline-flex size-12 shrink-0 items-center justify-center rounded-xl border border-accent/15 bg-accent-soft text-accent";
const skillIcons: Partial<Record<string, LucideIcon>> = {
  "Logistics & Inventory": PackageCheck,
  Administration: ClipboardList,
  "Compliance & Safety": ShieldCheck,
  Leadership: UsersRound,
  "Customer Service": Headset,
};

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
  const currentRole = experience[0];

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="mx-auto max-w-6xl px-5 pt-9 pb-8 md:px-8 md:pt-16 md:pb-12"
    >
      <div className="grid grid-cols-[minmax(0,1fr)_clamp(4.75rem,24vw,8rem)] items-center gap-x-3 gap-y-5 sm:gap-x-8 md:grid-cols-[1.35fr_1fr] md:gap-x-12">
        <div className="md:self-end">
          <p className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
            <MapPin aria-hidden="true" size={16} />
            {profile.location}
          </p>
          <h1
            id="hero-title"
            className="mt-2 font-display text-[clamp(2.35rem,8vw,4.5rem)] leading-[1.02] font-semibold tracking-tight md:mt-4 md:text-[clamp(3.1rem,5.6vw,4.5rem)]"
          >
            {profile.name}
          </h1>
          <p className="mt-2 font-semibold text-accent sm:text-xl md:mt-3 md:text-2xl">
            {profile.headline}
          </p>
        </div>
        <div className="w-full rotate-2 rounded-2xl border border-line bg-accent-soft p-1.5 sm:rounded-3xl md:col-start-2 md:row-span-2 md:row-start-1 md:max-w-sm md:justify-self-end md:rounded-[2rem] md:p-3">
          <Image
            src="/images/richelle-headshot.jpg"
            alt={`Portrait of ${profile.name}`}
            width={720}
            height={720}
            priority
            unoptimized
            className="h-auto w-full -rotate-2 rounded-xl sm:rounded-[1.1rem] md:rounded-[1.4rem]"
          />
        </div>
        <div className="col-span-2 md:col-span-1 md:self-start">
          <p className="max-w-xl text-lg leading-relaxed text-muted">
            {profile.tagline}
          </p>
          <div className="mt-6 grid gap-2.5 min-[370px]:grid-cols-2 sm:flex sm:flex-wrap md:mt-8">
            <Link href="/resume" className={`${primaryButton} max-sm:px-3`}>
              <FileText aria-hidden="true" size={18} />
              View résumé
            </Link>
            <a href="#contact" className={`${secondaryButton} max-sm:px-3`}>
              <Mail aria-hidden="true" size={18} />
              Get in touch
            </a>
          </div>
        </div>
      </div>

      <ul className="mt-8 grid divide-y divide-line rounded-2xl border border-line bg-surface sm:grid-cols-2 sm:divide-x sm:divide-y-0 md:mt-12">
        <li className="flex items-center gap-3 p-3 sm:p-4">
          {currentRole.brand && <OrganizationMark brand={currentRole.brand} />}
          <div>
            <p className="font-semibold">{currentRole.company}</p>
            <p className="text-sm text-muted">{currentRole.title}</p>
          </div>
        </li>
        <li className="flex items-center gap-3 p-3 sm:p-4">
          <span className={iconTile}>
            <ShieldCheck aria-hidden="true" size={22} />
          </span>
          <div>
            <p className="font-semibold">HIPAA &amp; OSHA</p>
            <p className="text-sm text-muted">Compliance trained</p>
          </div>
        </li>
      </ul>
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
        <figure>
          <Image
            src="/images/richelle-at-work.jpg"
            alt="Richelle checking inventory on a tablet in a warehouse office"
            width={800}
            height={720}
            sizes="(min-width: 768px) 420px, 100vw"
            className="w-full rounded-3xl border border-line"
          />
          <figcaption className="mt-2 text-sm text-muted">AI-generated illustration</figcaption>
        </figure>
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I have worked">
      <ol className="space-y-4">
        {experience.map((role) => (
          <li
            key={`${role.company}-${role.start}`}
            className="grid gap-5 rounded-3xl border border-line bg-surface p-5 md:grid-cols-[14rem_1fr] md:gap-7 md:p-7"
          >
            <div>
              {role.brand ? (
                <OrganizationMark brand={role.brand} />
              ) : (
                <span className={iconTile}>
                  <Camera aria-hidden="true" size={22} />
                </span>
              )}
              <h3 className="mt-3 font-display text-2xl font-semibold">
                {role.company}
              </h3>
              <p className="mt-1 font-semibold">{role.title}</p>
              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-sm text-muted">
                <p className="inline-flex items-center gap-1.5">
                  <CalendarDays aria-hidden="true" size={16} className="text-accent" />
                  {role.start} - {role.end}
                </p>
                <p className="inline-flex items-center gap-1.5">
                  <MapPin aria-hidden="true" size={16} className="text-accent" />
                  {role.location}
                </p>
              </div>
            </div>
            <ul className="self-center space-y-2.5 border-t border-line pt-4 leading-relaxed text-muted md:border-t-0 md:border-l md:pt-0 md:pl-7">
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
          <FileText aria-hidden="true" size={18} />
          View the full resume
          <ArrowUpRight aria-hidden="true" size={16} />
        </Link>
      </p>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="What I bring to a team">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
        {skillGroups.map((group) => {
          const Icon = skillIcons[group.label] ?? ClipboardList;
          return (
            <div
              key={group.label}
              className="rounded-3xl border border-line bg-surface p-6 lg:col-span-2 lg:nth-last-[-n+2]:col-span-3"
            >
              <div className="flex items-center gap-3">
                <span className={iconTile}>
                  <Icon aria-hidden="true" size={22} />
                </span>
                <h3 className="font-display text-xl font-semibold">{group.label}</h3>
              </div>
              <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted marker:text-accent">
                {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </div>
          );
        })}
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
            {item.brand ? (
              <OrganizationMark brand={item.brand} />
            ) : (
              <span className={iconTile}>
                <GraduationCap aria-hidden="true" size={22} />
              </span>
            )}
            <h3 className="mt-3 font-display text-xl font-semibold">
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
            <span className={iconTile}>
              <HandHeart aria-hidden="true" size={22} />
            </span>
            <h3 className="mt-3 font-display text-xl font-semibold">
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
      <div className="rounded-[2rem] bg-accent-soft px-5 py-8 md:px-14 md:py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
          Contact
        </p>
        <h2
          id="contact-title"
          className="mt-2 max-w-2xl font-display text-[clamp(1.75rem,5vw,3rem)] leading-tight font-semibold tracking-tight"
        >
          Hiring for operations, logistics or admin? Let&apos;s talk.
        </h2>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
          Email is the fastest way to reach me. I am based in {profile.location}.
        </p>
        <div className="mt-7 grid grid-cols-2 gap-2.5 sm:flex sm:flex-wrap">
          <a
            href={`mailto:${profile.email}`}
            className={`${primaryButton} col-span-2`}
          >
            <Mail aria-hidden="true" size={18} />
            Email Richelle
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={`${secondaryButton} max-sm:px-2 max-sm:text-sm`}
          >
            <LinkedInIcon />
            LinkedIn
          </a>
          <a
            href={profile.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className={`${secondaryButton} max-sm:px-2 max-sm:text-sm`}
          >
            <FacebookIcon />
            Facebook
          </a>
        </div>
        <p className="mt-3 wrap-anywhere text-sm text-muted">{profile.email}</p>
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
