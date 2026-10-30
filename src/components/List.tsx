'use client'

import { useRef } from 'react'
import clsx from 'clsx'
import { motion, useReducedMotion, useScroll } from 'framer-motion'

import { FadeIn, FadeInStagger } from '@/components/FadeIn'

/** A list on a rail. The rail fills with the primary color as the list scrolls past. */
export function List({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  let ref = useRef<HTMLUListElement>(null)
  let shouldReduceMotion = useReducedMotion()
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 75%', 'end 50%'],
  })

  return (
    <FadeInStagger>
      <ul
        ref={ref}
        role="list"
        className={clsx(
          'relative text-base text-muted before:absolute before:bottom-3 before:left-[0.6875rem] before:top-3 before:w-0.5 before:rounded-full before:bg-line/30',
          className,
        )}
      >
        <motion.span
          aria-hidden="true"
          style={{ scaleY: shouldReduceMotion ? 1 : scrollYProgress }}
          className="absolute bottom-3 left-[0.6875rem] top-3 w-0.5 origin-top rounded-full bg-primary"
        />
        {children}
      </ul>
    </FadeInStagger>
  )
}

export function ListItem({
  children,
  title,
}: {
  children: React.ReactNode
  title?: string
}) {
  return (
    <li className="relative mt-10 pl-12 first:mt-0">
      <FadeIn>
        <span
          aria-hidden="true"
          className="absolute left-0 top-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-surface bg-convex shadow-neu-sm"
        >
          <motion.span
            variants={{ hidden: { scale: 0 }, visible: { scale: 1 } }}
            transition={{
              type: 'spring',
              stiffness: 400,
              damping: 15,
              delay: 0.2,
            }}
            className="h-2 w-2 rounded-full bg-accent"
          />
        </span>
        {title && (
          <strong className="font-semibold text-ink">{`${title}. `}</strong>
        )}
        {children}
      </FadeIn>
    </li>
  )
}
