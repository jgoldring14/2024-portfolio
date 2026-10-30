'use client'

import { useEffect, useId, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import {
  AnimatePresence,
  motion,
  MotionConfig,
  useReducedMotion,
} from 'framer-motion'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { SocialMedia } from '@/components/SocialMedia'
import { ThemeToggle } from '@/components/ThemeToggle'

const navigation = [
  { title: 'Work', href: '/work' },
  { title: 'About', href: '/about' },
]

function XIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="m5.636 4.223 14.142 14.142-1.414 1.414L4.222 5.637z" />
      <path d="M4.222 18.363 18.364 4.22l1.414 1.414L5.636 19.777z" />
    </svg>
  )
}

function MenuIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M2 6h20v2H2zM2 16h20v2H2z" />
    </svg>
  )
}

function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  let pathname = usePathname()
  let active = pathname === href || pathname.startsWith(`${href}/`)

  return (
    <Link
      href={href}
      aria-current={active ? 'page' : undefined}
      className={clsx(
        'flex h-11 items-center rounded-full px-5 text-sm font-semibold transition duration-150',
        active
          ? 'text-primary-text shadow-neu-inset-sm'
          : 'text-ink hover:text-primary-text',
      )}
    >
      {children}
    </Link>
  )
}

/** Shared header: name, page links, Contact and the theme switch. Collapses to a menu below md. */
function Header() {
  let panelId = useId()
  let [expanded, setExpanded] = useState(false)
  let toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!expanded) return
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setExpanded(false)
        toggleRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [expanded])

  return (
    <header className="relative z-40 pt-6 sm:pt-8">
      <Container>
        <div className="flex items-center justify-between gap-2 rounded-[2rem] bg-surface py-2.5 pl-6 pr-2.5 shadow-neu">
          <Link
            href="/"
            className="whitespace-nowrap font-display text-lg font-semibold tracking-tight text-ink sm:text-xl"
          >
            Jacob Goldring
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-2 md:flex">
            {navigation.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.title}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2 min-[360px]:gap-3">
            <Button href="/contact" className="hidden md:inline-flex">
              Contact
            </Button>
            <ThemeToggle />
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setExpanded((open) => !open)}
              aria-expanded={expanded}
              aria-controls={panelId}
              aria-label={expanded ? 'Close menu' : 'Open menu'}
              className={clsx(
                'flex h-11 w-11 items-center justify-center rounded-full bg-surface text-ink transition md:hidden',
                expanded ? 'shadow-neu-inset-sm' : 'bg-convex shadow-neu-sm',
              )}
            >
              {expanded ? (
                <XIcon className="h-5 w-5 fill-current" />
              ) : (
                <MenuIcon className="h-5 w-5 fill-current" />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {expanded && (
            <motion.div
              id={panelId}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              className="absolute inset-x-6 top-full mt-4 rounded-[2rem] bg-surface p-4 shadow-neu-lg md:hidden"
            >
              <nav aria-label="Main" className="flex flex-col gap-2">
                {[...navigation, { title: 'Contact', href: '/contact' }].map(
                  (item) => (
                    <NavLink key={item.href} href={item.href}>
                      {item.title}
                    </NavLink>
                  ),
                )}
              </nav>
              <div className="mt-4 border-t border-line/30 px-5 pt-5">
                <SocialMedia />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  )
}

export function RootLayout({ children }: { children: React.ReactNode }) {
  let pathname = usePathname()
  let shouldReduceMotion = useReducedMotion()

  return (
    <MotionConfig transition={shouldReduceMotion ? { duration: 0 } : undefined}>
      <Header key={pathname} />
      <main className="w-full flex-auto">{children}</main>
      <Footer />
    </MotionConfig>
  )
}
