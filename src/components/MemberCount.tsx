'use client'

import { useEffect, useRef } from 'react'
import { animate, useInView, useReducedMotion } from 'framer-motion'

/** Formats a count in thousands, switching to "1M+" once it reaches a million. */
function formatThousands(thousands: number) {
  return thousands >= 1000 ? '1M+' : `${Math.round(thousands)}K+`
}

/**
 * "1M+" that counts up from 0K the first time it scrolls into view. The rendered text is
 * the final value, so no-JS readers and screen readers only ever get "1M+".
 */
export function MemberCount({ className }: { className?: string }) {
  let ref = useRef<HTMLSpanElement>(null)
  let isInView = useInView(ref, { once: true, margin: '0px 0px -160px' })
  let shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const node = ref.current
    if (!isInView || shouldReduceMotion || !node) return
    let controls = animate(0, 1000, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (value) => {
        node.textContent = formatThousands(value)
      },
    })
    return () => controls.stop()
  }, [isInView, shouldReduceMotion])

  return (
    <span ref={ref} className={className}>
      1M+
    </span>
  )
}
