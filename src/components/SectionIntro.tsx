import clsx from 'clsx'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

export function SectionIntro({
  title,
  eyebrow,
  children,
  smaller = false,
  ...props
}: Omit<
  React.ComponentPropsWithoutRef<typeof Container>,
  'title' | 'children'
> & {
  title: string
  eyebrow?: string
  children?: React.ReactNode
  smaller?: boolean
}) {
  return (
    <Container {...props}>
      <FadeIn blur className="max-w-2xl">
        <h2>
          {eyebrow && (
            <>
              <span className="mb-6 inline-flex rounded-full px-4 py-1.5 font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent shadow-neu-inset-sm">
                {eyebrow}
              </span>
              <span className="sr-only"> - </span>
            </>
          )}
          <span
            className={clsx(
              'block font-display tracking-tight [text-wrap:balance]',
              smaller
                ? 'text-2xl font-semibold'
                : 'text-4xl font-medium sm:text-5xl',
              'text-ink',
            )}
          >
            {title}
          </span>
        </h2>
        {children && <div className="mt-6 text-xl text-muted">{children}</div>}
      </FadeIn>
    </Container>
  )
}
