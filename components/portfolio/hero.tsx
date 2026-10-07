import Image from 'next/image'
import { ArrowDownRight } from 'lucide-react'
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
          <div className="mt-10 grid gap-4 border-t border-foreground pt-6 text-sm sm:grid-cols-2">
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

      <a
        href="#about"
        className="mt-16 inline-flex items-center gap-2 text-sm underline-offset-4 hover:underline"
      >
        Read more
        <ArrowDownRight className="size-4" aria-hidden="true" />
      </a>
    </section>
  )
}
