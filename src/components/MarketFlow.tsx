'use client'

import { useRef } from 'react'
import { motion, useReducedMotion, useScroll } from 'framer-motion'

import { FadeIn, FadeInStagger } from '@/components/FadeIn'

const steps = [
  {
    app: 'In Vamo Host',
    title: 'Hosts open spaces.',
    body: 'A host sets up a market in Vamo Host: spaces, prices and how vendors arrive.',
  },
  {
    app: 'In Vamo',
    title: 'Vendors apply.',
    body: 'Vendors find the market in Vamo, apply and pay to lock their space, right from the app.',
  },
  {
    app: 'In Vamo',
    title: 'Shoppers show up.',
    body: 'Shoppers see the market, the vendor lineup and the map, and get walking directions to any space.',
  },
]

/**
 * The three steps that connect Vamo Host and Vamo, one card per step. From lg up the
 * numbered badges sit on a rail that fills with the primary color as the row scrolls past.
 */
export function MarketFlow() {
  let ref = useRef<HTMLDivElement>(null)
  let shouldReduceMotion = useReducedMotion()
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 85%', 'end 60%'],
  })

  return (
    <div ref={ref} className="relative">
      <div
        aria-hidden="true"
        className="absolute left-[calc((100%-4rem)/6)] right-[calc((100%-4rem)/6)] top-7 hidden h-0.5 rounded-full bg-line/30 lg:block"
      >
        <motion.div
          style={{ scaleX: shouldReduceMotion ? 1 : scrollYProgress }}
          className="h-full origin-left rounded-full bg-primary"
        />
      </div>
      <FadeInStagger>
        <ol role="list" className="relative grid gap-8 lg:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title} className="flex">
              <FadeIn className="flex w-full flex-col items-center">
                <span
                  aria-hidden="true"
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-surface bg-convex font-display text-xl font-semibold text-primary-text shadow-neu-sm"
                >
                  {index + 1}
                </span>
                <article className="mt-6 w-full flex-auto rounded-[2rem] bg-surface p-8 text-center shadow-neu">
                  <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                    {step.app}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-base text-muted [text-wrap:pretty]">
                    {step.body}
                  </p>
                </article>
              </FadeIn>
            </li>
          ))}
        </ol>
      </FadeInStagger>
    </div>
  )
}
