type SectionProps = {
  id: string
  index: string
  title: string
  children: React.ReactNode
}

export function Section({ id, index, title, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="relative grid min-h-[calc(100svh-3.5rem)] snap-start content-center gap-8 py-16 md:grid-cols-[220px_1fr] md:gap-12 md:py-20"
    >
      <span
        aria-hidden="true"
        data-reveal="line"
        className="absolute inset-x-0 top-0 h-px bg-foreground"
      />
      <div className="flex items-baseline gap-4 md:flex-col md:gap-2">
        <span className="font-mono text-xs tracking-widest text-muted-foreground">{index}</span>
        <h2
          id={`${id}-heading`}
          className="font-serif text-4xl leading-none tracking-tight md:text-5xl"
        >
          {title}
        </h2>
      </div>
      <div>{children}</div>
    </section>
  )
}
