import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { RESUME_URL } from '@/lib/site'

/** Primary contact button with a secondary resume link, for the hero and about page. */
export function ProfileActions({ className }: { className?: string }) {
  return (
    <div className={clsx('flex flex-wrap items-center gap-x-8 gap-y-4', className)}>
      <Button href="/contact">
        Get in touch
      </Button>
      <Link
        href={RESUME_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-semibold text-neutral-950 transition hover:text-neutral-600 dark:text-white dark:hover:text-neutral-300"
      >
        View resume <span aria-hidden="true">→</span>
      </Link>
    </div>
  )
}
