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
      className="grid scroll-mt-20 gap-8 border-t border-foreground py-16 md:grid-cols-[220px_1fr] md:gap-12 md:py-24"
    >
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
