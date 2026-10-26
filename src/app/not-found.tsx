import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

export default function NotFound() {
  return (
    <Container className="flex h-full items-center pt-24 sm:pt-32 lg:pt-40">
      <FadeIn className="flex max-w-xl flex-col items-center text-center">
        <p className="font-display text-4xl font-semibold text-neutral-950 dark:text-white sm:text-5xl">
          404
        </p>
        <h1 className="mt-4 font-display text-2xl font-semibold text-neutral-950 dark:text-white">
          Page not found
        </h1>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
          That page doesn&apos;t exist. It may have moved when the site was rebuilt.
        </p>
        <Link
          href="/"
          className="mt-4 text-sm font-semibold text-neutral-950 dark:text-white transition hover:text-neutral-700"
        >
          Go to the home page
        </Link>
      </FadeIn>
    </Container>
  )
}
