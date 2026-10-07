import Image from 'next/image'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { profile } from '@/lib/resume'

export function Hero() {
  return (
    <section id="top" aria-label="Introduction" className="py-16 md:py-24">
      <div className="mb-10 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-muted-foreground">
        <span>Portfolio</span>
        <span>2026</span>
      </div>

      <div className="grid items-end gap-10 md:grid-cols-[1fr_auto] md:gap-16">
        <div>
          <h1 className="font-serif text-7xl leading-[0.9] tracking-tight text-balance sm:text-8xl lg:text-9xl">
            Serena <span className="italic">Lie</span>
          </h1>
          <div className="relative mt-10 grid gap-4 pt-6 text-sm sm:grid-cols-2">
            <span
              aria-hidden="true"
              data-reveal="line"
              className="absolute inset-x-0 top-0 h-px bg-foreground"
            />
            <p>
              <span className="block text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Role
              </span>
              {profile.title}
            </p>
            <p>
              <span className="block text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Studying at
              </span>
              {profile.school}
            </p>
          </div>
        </div>

        <figure className="order-first w-40 shrink-0 sm:w-56 md:order-none md:w-64">
          <div className="aspect-square overflow-hidden rounded-full border border-foreground">
            <Image
              src="/images/serena.png"
              alt="Portrait of Serena Lie"
              width={370}
              height={370}
              priority
              className="h-full w-full scale-105 object-cover"
            />
          </div>
        </figure>
      </div>

      <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
        <a
          href="#about"
          className="inline-flex items-center gap-2 underline-offset-4 hover:underline"
        >
          Read more
          <ArrowDownRight className="size-4" aria-hidden="true" />
        </a>
        <a
          href={profile.linkedinHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-foreground px-3 py-1.5 transition-colors hover:bg-foreground hover:text-background"
        >
          LinkedIn
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
        <span className="text-muted-foreground">{profile.location}</span>
      </div>
    </section>
  )
}
