'use client'

import { motion, useReducedMotion, useSpring } from 'framer-motion'

import type { PointerEvent } from 'react'

const spring = { stiffness: 150, damping: 15 }

/**
 * Leans its children toward a mouse pointer in 3D: the side nearest the pointer comes
 * forward by up to `maxDegrees`. Touch and reduced motion get no tilt.
 */
export function Tilt({
  children,
  className,
  maxDegrees = 10,
}: {
  children: React.ReactNode
  className?: string
  maxDegrees?: number
}) {
  let shouldReduceMotion = useReducedMotion()
  let rotateX = useSpring(0, spring)
  let rotateY = useSpring(0, spring)

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (shouldReduceMotion || event.pointerType !== 'mouse') return
    let rect = event.currentTarget.getBoundingClientRect()
    let x = (event.clientX - rect.left) / rect.width - 0.5
    let y = (event.clientY - rect.top) / rect.height - 0.5
    rotateX.set(y * 2 * maxDegrees)
    rotateY.set(-x * 2 * maxDegrees)
  }

  function handlePointerLeave() {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <motion.div
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
