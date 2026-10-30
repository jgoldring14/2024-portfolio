import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

export default function NotFound() {
  return (
    <Container className="flex h-full items-center pt-24 sm:pt-32 lg:pt-40">
      <FadeIn className="mx-auto flex max-w-xl flex-col items-center rounded-[2.5rem] bg-surface px-8 py-12 text-center shadow-neu sm:px-16">
        <p className="flex h-28 w-40 items-center justify-center rounded-[1.75rem] font-display text-5xl font-semibold text-accent shadow-neu-inset">
          404
        </p>
        <h1 className="mt-8 font-display text-2xl font-semibold text-ink">
          Page not found
        </h1>
        <p className="mt-2 text-base text-muted">
          Hmm, that page doesn&apos;t exist. It might have moved when I rebuilt
          the site.
        </p>
        <Button href="/" className="mt-8">
          Take me home
        </Button>
      </FadeIn>
    </Container>
  )
}
