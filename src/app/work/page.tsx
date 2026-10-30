import { type Metadata } from 'next'
import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { ProjectsSection } from '@/components/ProjectsSection'
import { SectionIntro } from '@/components/SectionIntro'
import imageLawsOfUxCover from '../../../public/images/laws-of-ux-cover.png'

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Vamo, Vamo Host and the Vamo website: one platform for local markets, built by two people on one backend.',
  alternates: { canonical: '/work' },
}

function CaseStudySection() {
  return (
    <>
      <SectionIntro title="Case study" className="mt-24 sm:mt-32 lg:mt-40" />
      <Container className="mt-12">
        <FadeIn>
          <article className="grid items-center gap-8 rounded-[2.5rem] bg-surface p-6 shadow-neu transition duration-300 ease-apple-out hover:-translate-y-1 hover:shadow-neu-lg motion-reduce:hover:translate-y-0 sm:grid-cols-[14rem_1fr] sm:p-8 lg:gap-12">
            <div className="rounded-[1.75rem] p-3 shadow-neu-inset">
              <Image
                src={imageLawsOfUxCover}
                alt="Cover slide of the laws-of-ux carousel: Your users shouldn't need a manual."
                className="h-auto w-full rounded-[1.25rem]"
                sizes="(min-width: 640px) 13rem, 100vw"
              />
            </div>
            <div className="max-w-2xl">
              <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Claude skill
              </p>
              <h3 className="mt-3 font-display text-3xl font-semibold text-ink">
                laws-of-ux
              </h3>
              <p className="mt-4 text-base text-muted">
                A skill that reviews mobile and web UI against ten UX laws from
                psychology, and tells you how to fix what breaks them. I wrote
                the spec from Jon Yablonski&apos;s book and built it to review
                Vamo and Vamo Host.
              </p>
              <Button href="/work/laws-of-ux" className="mt-8">
                Read the case study
              </Button>
            </div>
          </article>
        </FadeIn>
      </Container>
    </>
  )
}

export default function Work() {
  return (
    <>
      <PageIntro eyebrow="Work" title="What I build.">
        <p>
          One platform for local markets: two apps and a website on one backend,
          built by two people. This is the work I can point at.
        </p>
      </PageIntro>

      <ProjectsSection />

      <CaseStudySection />
    </>
  )
}
