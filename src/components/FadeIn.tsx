'use client'

import { createContext, useContext, useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const FadeInStaggerContext = createContext(false)

const viewport = { once: true, margin: '0px 0px -160px' }

const easeAppleOut = [0.22, 1, 0.36, 1] as const

/**
 * Fades a block up into place as it scrolls into view. Its neumorphic shadows rise with
 * it: --lift follows the fade's opacity, and the Tailwind `neu` shadows scale by it.
 */
export function FadeIn(
  props: React.ComponentPropsWithoutRef<typeof motion.div>,
) {
  let shouldReduceMotion = useReducedMotion()
  let isInStaggerGroup = useContext(FadeInStaggerContext)
  let ref = useRef<HTMLDivElement>(null)

  return (
    <motion.div
      ref={ref}
      onUpdate={(latest) =>
        ref.current?.style.setProperty('--lift', String(latest.opacity))
      }
      variants={{
        hidden: shouldReduceMotion
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: 12 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.8, ease: easeAppleOut }}
      {...(isInStaggerGroup
        ? {}
        : {
            initial: 'hidden',
            whileInView: 'visible',
            viewport,
          })}
      {...props}
    />
  )
}

export function FadeInStagger({
  faster = false,
  ...props
}: React.ComponentPropsWithoutRef<typeof motion.div> & { faster?: boolean }) {
  return (
    <FadeInStaggerContext.Provider value={true}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        transition={{ staggerChildren: faster ? 0.08 : 0.12 }}
        {...props}
      />
    </FadeInStaggerContext.Provider>
  )
}
