import { SiteHeader } from '@/components/portfolio/site-header'
import { Hero } from '@/components/portfolio/hero'
import { ScrollReveal } from '@/components/portfolio/scroll-reveal'
import {
  About,
  Contact,
  Education,
  ExperienceSection,
  Skills,
} from '@/components/portfolio/content-sections'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-6">
        <Hero />
        <About />
        <ExperienceSection />
        <Skills />
        <Education />
        <Contact />
      </main>
      <footer className="snap-end border-t border-foreground">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 text-xs text-muted-foreground">
          <span>© 2026 Serena Lie</span>
          <a href="#top" className="underline-offset-4 hover:underline">
            Back to top
          </a>
        </div>
      </footer>
      <ScrollReveal />
    </>
  )
}
