'use client'

import { createContext, useContext } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const FadeInStaggerContext = createContext(false)

const viewport = { once: true, amount: 0.2 }

const easeAppleOut = [0.22, 1, 0.36, 1] as const

/**
 * Fades a block up into place once a fifth of it is on screen. `blur` also brings it
 * from soft to sharp; keep that for text and cards, since blurring a large panel is
 * expensive to draw. Only opacity, transform and filter animate, so the neumorphic
 * shadows are never repainted frame by frame.
 */
export function FadeIn({
  blur = false,
  ...props
}: React.ComponentPropsWithoutRef<typeof motion.div> & { blur?: boolean }) {
  let shouldReduceMotion = useReducedMotion()
  let isInStaggerGroup = useContext(FadeInStaggerContext)

  return (
    <motion.div
      variants={{
        hidden: shouldReduceMotion
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: 24, ...(blur ? { filter: 'blur(6px)' } : {}) },
        visible: {
          opacity: 1,
          y: 0,
          ...(blur
            ? { filter: 'blur(0px)', transitionEnd: { filter: 'none' } }
            : {}),
        },
      }}
      transition={{ duration: 0.7, ease: easeAppleOut }}
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
