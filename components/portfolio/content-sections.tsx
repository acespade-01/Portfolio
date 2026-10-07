import { ArrowUpRight } from 'lucide-react'
import { Section } from './section'
import {
  education,
  experience,
  hardSkills,
  languages,
  profile,
  softSkills,
} from '@/lib/resume'

export function About() {
  return (
    <Section id="about" index="01" title="About">
      <p className="max-w-2xl font-serif text-3xl leading-snug text-pretty md:text-4xl">
        {profile.about}
      </p>
    </Section>
  )
}

export function ExperienceSection() {
  return (
    <Section id="experience" index="02" title="Experience">
      <ol className="divide-y divide-foreground/20 border-y border-foreground/20">
        {experience.map((item) => (
          <li key={item.role} className="grid gap-3 py-8 sm:grid-cols-[1fr_auto] sm:gap-x-8">
            <div>
              <h3 className="text-lg font-medium text-balance">{item.role}</h3>
              {item.organization && (
                <p className="text-sm text-muted-foreground">{item.organization}</p>
              )}
            </div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground sm:text-right">
              {item.term}
            </p>
            <ul className="mt-2 space-y-2 text-sm leading-relaxed sm:col-span-2">
              {item.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2.5 h-px w-4 shrink-0 bg-foreground" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  )
}

function SkillList({ heading, items }: { heading: string; items: string[] }) {
  return (
    <div>
      <h3 className="mb-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">{heading}</h3>
      <ul className="border-t border-foreground/20">
        {items.map((item) => (
          <li key={item} className="border-b border-foreground/20 py-3 text-sm">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Skills() {
  return (
    <Section id="skills" index="03" title="Skills">
      <div className="grid gap-10 sm:grid-cols-3">
        <SkillList heading="Soft skills" items={softSkills} />
        <SkillList heading="Hard skills" items={hardSkills} />
        <div>
          <h3 className="mb-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Languages
          </h3>
          <ul className="border-t border-foreground/20">
            {languages.map((language) => (
              <li
                key={language.name}
                className="flex items-baseline justify-between border-b border-foreground/20 py-3 text-sm"
              >
                <span>{language.name}</span>
                <span className="text-xs text-muted-foreground">{language.level}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}

export function Education() {
  return (
    <Section id="education" index="04" title="Education">
      <ul className="grid gap-px border border-foreground bg-foreground sm:grid-cols-2">
        {education.map((item) => (
          <li key={item.school} className="flex flex-col gap-6 bg-background p-6 md:p-8">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {item.year}
            </p>
            <div>
              <h3 className="font-serif text-3xl leading-tight">{item.school}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.detail}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export function Contact() {
  const channels = [
    { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { label: 'Phone', value: profile.phone, href: profile.phoneHref },
  ]

  return (
    <Section id="contact" index="05" title="Contact">
      <p className="mb-10 max-w-xl text-pretty text-muted-foreground">
        {"Open to opportunities in youth advocacy, community programs, and research. Let's talk."}
      </p>
      <ul className="border-t border-foreground">
        {channels.map((channel) => (
          <li key={channel.label} className="border-b border-foreground">
            <a
              href={channel.href}
              className="group flex items-center justify-between gap-4 py-6 transition-colors hover:bg-foreground hover:text-background md:px-4"
            >
              <span className="text-xs uppercase tracking-[0.2em]">{channel.label}</span>
              <span className="flex items-center gap-3 font-serif text-2xl break-all md:text-4xl">
                {channel.value}
                <ArrowUpRight
                  className="size-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
