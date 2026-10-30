import { type Metadata } from 'next'
import Image from 'next/image'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { ProfileActions } from '@/components/ProfileActions'
import imageJacobGoldring from '../../../public/images/jacob-goldring.jpg'

function Portrait() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <figure className="max-w-md rounded-[2.5rem] bg-surface p-4 shadow-neu">
          <div className="overflow-hidden rounded-[2rem] shadow-neu-inset">
            <Image
              alt="Jacob Goldring"
              src={imageJacobGoldring}
              sizes="(min-width: 640px) 28rem, 100vw"
              className="aspect-[4/5] w-full object-cover object-[center_38%]"
            />
          </div>
          <figcaption className="px-4 pb-2 pt-5">
            <p className="font-display text-base/6 font-semibold tracking-wide text-ink">
              Jacob Goldring
            </p>
            <p className="mt-1 text-sm text-muted">
              Full stack engineer and CTO at Vamo
            </p>
          </figcaption>
        </figure>
      </FadeIn>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'Jacob Goldring started coding in 2020. He builds banking apps for credit unions and is the co-founder and CTO of Vamo.',
  alternates: { canonical: '/about' },
}

export default function About() {
  return (
    <>
      <PageIntro eyebrow="About" title="Who I am">
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            I started coding in 2020 with a course I took after work. I was
            hooked, so in 2021 I went all in on Flatiron School&apos;s full-time
            bootcamp. That meant about 16 hours a day, five or six days a week,
            learning JavaScript, React, Ruby and Rails.
          </p>
          <p>
            Since 2022 I&apos;ve built software that credit union members use to
            move their money. In 2024 I co-founded Vamo. Both jobs come down to
            the same thing for me. I take something complicated and make it feel
            simple for the person holding the phone.
          </p>
          <p>
            A lot of what I build is private, so I can&apos;t show all of it.
            What I can share is on the work page.
          </p>
        </div>
        <ProfileActions className="mt-10" />
      </PageIntro>

      <Portrait />
    </>
  )
}
