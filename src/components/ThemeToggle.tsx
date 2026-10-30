'use client'

import { useEffect, useState } from 'react'
import clsx from 'clsx'

const storageKey = 'theme'

function SunIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="4" fill="currentColor" />
      <path
        d="M12 2.5v2.5M12 19v2.5M2.5 12H5M19 12h2.5M5.3 5.3l1.8 1.8M16.9 16.9l1.8 1.8M5.3 18.7l1.8-1.8M16.9 7.1l1.8-1.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

function MoonIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M20.5 14.6A8.5 8.5 0 0 1 9.4 3.5a8.5 8.5 0 1 0 11.1 11.1Z"
      />
    </svg>
  )
}

/** Light/dark switch. The knob position is pure CSS (`dark:`), so it never flashes on load. */
export function ThemeToggle({ className }: { className?: string }) {
  let [isDark, setIsDark] = useState(false)

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'))

    let media = window.matchMedia('(prefers-color-scheme: dark)')
    function onSystemChange(event: MediaQueryListEvent) {
      if (localStorage.getItem(storageKey)) return
      document.documentElement.classList.toggle('dark', event.matches)
      setIsDark(event.matches)
    }
    media.addEventListener('change', onSystemChange)
    return () => media.removeEventListener('change', onSystemChange)
  }, [])

  function toggle() {
    let next = !document.documentElement.classList.contains('dark')
    document.documentElement.classList.toggle('dark', next)
    try {
      localStorage.setItem(storageKey, next ? 'dark' : 'light')
    } catch {}
    setIsDark(next)
  }

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Dark mode"
      onClick={toggle}
      className={clsx(
        'relative inline-flex h-10 w-[4.5rem] shrink-0 items-center rounded-full border border-line/60 bg-surface p-1 shadow-neu-inset-sm transition-colors',
        className,
      )}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-surface bg-convex text-accent shadow-neu-sm transition-transform duration-200 ease-apple-out dark:translate-x-8 dark:text-primary-text">
        <SunIcon className="h-5 w-5 dark:hidden" />
        <MoonIcon className="hidden h-5 w-5 dark:block" />
      </span>
    </button>
  )
}
