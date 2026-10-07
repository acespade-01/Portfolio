const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-foreground bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="font-serif text-xl tracking-tight">
          Serena Lie
        </a>
        <nav aria-label="Primary">
          <ul className="hidden items-center gap-8 text-sm md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="underline-offset-4 transition-colors hover:underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="border border-foreground px-3 py-1.5 text-sm transition-colors hover:bg-foreground hover:text-background md:hidden"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}
