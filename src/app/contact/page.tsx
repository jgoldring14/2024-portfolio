import { type Metadata } from 'next'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RESUME_URL } from '@/lib/site'
import { ContactForm } from './contact-form'

const contactLinks = [
  {
    label: 'LinkedIn',
    display: 'jacobgoldring14',
    href: 'https://www.linkedin.com/in/jacobgoldring14',
    external: true,
  },
  {
    label: 'Email',
    display: 'jacobgoldring14@gmail.com',
    href: 'mailto:jacobgoldring14@gmail.com?subject=Hello%20Jacob',
    external: false,
  },
]

function ContactDetails() {
  return (
    <FadeIn className="space-y-8">
      <section className="rounded-[2.5rem] bg-surface p-8 shadow-neu sm:p-10">
        <h2 className="font-display text-xl font-semibold text-ink">Resume</h2>
        <p className="mt-4 text-base text-muted">
          One page covering my work at Mahalo Banking and Vamo.
        </p>
        <Button
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
          variant="secondary"
          className="mt-6"
        >
          View resume (PDF)
        </Button>
      </section>

      <section className="rounded-[2.5rem] bg-surface p-8 shadow-neu sm:p-10">
        <h2 className="font-display text-xl font-semibold text-ink">
          Get in touch
        </h2>
        <dl className="mt-6 space-y-4 text-sm">
          {contactLinks.map((item) => (
            <div
              key={item.label}
              className="rounded-[1.5rem] px-5 py-4 shadow-neu-inset-sm"
            >
              <dt className="font-semibold text-ink">{item.label}</dt>
              <dd className="break-words">
                <Link
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="inline-flex min-h-10 items-center font-semibold text-primary-text underline-offset-4 hover:underline"
                >
                  {item.display}
                </Link>
              </dd>
            </div>
          ))}
        </dl>
      </section>
    </FadeIn>
  )
}

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Jacob Goldring by email, LinkedIn or the contact form.',
  alternates: { canonical: '/contact' },
}

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="Contact" title="Let's work together.">
        <p>
          Send me a note about a role, a project or anything Vamo related. I
          read everything that comes through.
        </p>
      </PageIntro>

      <Container className="mt-16 sm:mt-24">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[3fr_2fr]">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </>
  )
}
