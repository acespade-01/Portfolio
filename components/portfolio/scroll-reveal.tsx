'use client'

import { useEffect } from 'react'

const MEDIA_SELECTOR = 'img, svg, [data-reveal]'
const STAGGER_MS = 70
const MAX_STAGGER_STEPS = 8

function hasDirectText(element: Element) {
  return Array.from(element.childNodes).some(
    (node) => node.nodeType === Node.TEXT_NODE && node.textContent?.trim(),
  )
}

function isDecorativeLine(element: Element) {
  return (
    element.getAttribute('aria-hidden') === 'true' &&
    element.tagName === 'SPAN' &&
    element.children.length === 0
  )
}

function collectTargets(root: Element) {
  const targets: HTMLElement[] = []
  const all = root.querySelectorAll<HTMLElement>('*')

  for (const element of all) {
    const isCandidate =
      element.matches(MEDIA_SELECTOR) || hasDirectText(element) || isDecorativeLine(element)
    if (!isCandidate) continue
    if (targets.some((target) => target.contains(element))) continue
    targets.push(element)
  }

  return targets
}

export function ScrollReveal() {
  useEffect(() => {
    const root = document.documentElement
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const containers = document.querySelectorAll('main, footer')

    if (reduceMotion) {
      root.classList.remove('reveal-pending')
      return
    }

    const targets = Array.from(containers).flatMap(collectTargets)
    for (const target of targets) {
      target.classList.add(target.dataset.reveal === 'line' ? 'reveal-line' : 'reveal-item')
    }
    root.classList.remove('reveal-pending')

    const observer = new IntersectionObserver(
      (entries) => {
        const entering = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        entering.forEach((entry, index) => {
          const element = entry.target as HTMLElement
          const step = Math.min(index, MAX_STAGGER_STEPS)
          element.style.transitionDelay = `${step * STAGGER_MS}ms`
          element.classList.add('is-visible')
          observer.unobserve(element)
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.1 },
    )

    for (const target of targets) observer.observe(target)

    return () => observer.disconnect()
  }, [])

  return null
}
