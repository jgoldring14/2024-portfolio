import { type Metadata } from 'next'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { SocialMedia } from '@/components/SocialMedia'
import { RESUME_URL } from '@/lib/site'
import { ContactForm } from './contact-form'

function ContactDetails() {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-bold text-neutral-950 dark:text-white">
        Resume
      </h2>
      <p className="mt-6 text-base text-neutral-600 dark:text-neutral-400">
        One page covering my work at Mahalo Banking and Vamo.
      </p>
      <Button
        href={RESUME_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6"
      >
        View resume (PDF)
      </Button>
      <Border className="mt-8 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950 dark:text-white">
          Get in touch
        </h2>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          {[
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
          ].map((item) => (
            <div key={item.label}>
              <dt className="font-semibold text-neutral-950 dark:text-white">
                {item.label}
              </dt>
              <dd className="mt-1 break-words">
                <Link
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="text-neutral-600 transition hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white"
                >
                  {item.display}
                </Link>
              </dd>
            </div>
          ))}
        </dl>
      </Border>

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950 dark:text-white">
          Connect with me
        </h2>
        <SocialMedia className="mt-6" />
      </Border>
    </FadeIn>
  )
}

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Jacob Goldring by email, LinkedIn or the contact form.',
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

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </>
  )
}
