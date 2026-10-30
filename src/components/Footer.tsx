import Link from 'next/link'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { socialMediaProfiles } from '@/components/SocialMedia'

const navigation = [
  {
    title: 'Pages',
    links: [
      { title: 'About', href: '/about' },
      { title: 'Work', href: '/work' },
      { title: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Connect',
    links: socialMediaProfiles,
  },
]

function Navigation() {
  return (
    <nav aria-label="Footer">
      <ul role="list" className="grid grid-cols-2 gap-8">
        {navigation.map((section) => (
          <li key={section.title}>
            <div className="font-display text-sm font-semibold tracking-wider text-ink">
              {section.title}
            </div>
            <ul role="list" className="mt-2 text-sm text-muted">
              {section.links.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="inline-flex min-h-10 items-center transition hover:text-primary-text"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function Footer() {
  return (
    <Container as="footer" className="mt-24 w-full pb-10 sm:mt-32 lg:mt-40">
      <FadeIn className="rounded-[2.5rem] bg-surface p-8 shadow-neu sm:p-12">
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
              Say hello
            </h2>
            <Button href="/contact" size="lg" className="mt-8">
              Get in touch
            </Button>
          </div>
          <Navigation />
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t border-line/30 pt-8 text-sm">
          <Link
            href="/"
            className="font-display font-semibold text-ink transition hover:text-primary-text"
          >
            Jacob Goldring
          </Link>
          <p className="text-muted">
            © Jacob Goldring {new Date().getFullYear()}
          </p>
        </div>
      </FadeIn>
    </Container>
  )
}
