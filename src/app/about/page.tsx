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
        <div className="group relative max-w-md overflow-hidden rounded-3xl bg-neutral-100 dark:bg-neutral-900">
          <Image
            alt="Jacob Goldring"
            src={imageJacobGoldring}
            sizes="(min-width: 640px) 28rem, 100vw"
            className="h-96 w-full object-cover grayscale transition duration-500 ease-apple-out motion-safe:group-hover:scale-105"
          />
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
              Jacob Goldring
            </p>
            <p className="mt-2 text-sm text-white">
              Full stack engineer. Co-founder and CTO at Vamo.
            </p>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'Jacob Goldring taught himself to code in 2020 and now builds white-label digital banking software and runs Vamo as co-founder and CTO.',
  alternates: { canonical: '/about' },
}

export default function About() {
  return (
    <>
      <PageIntro eyebrow="About" title="Who I am.">
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            I taught myself to code in 2020 with a course I took after work,
            then went all in. In 2021 I did Flatiron School&apos;s full-time
            immersive program, about 16 hours a day, five or six days a week,
            learning JavaScript, React, Ruby and Rails.
          </p>
          <p>
            Since 2022 I have written software a bank depends on, and I
            co-founded a company that ships to the App Store. The work is the
            same either way: take something complicated and make it feel simple
            to use.
          </p>
          <p>
            Most of what I build is private. A white-label banking platform on
            one side, a company still shipping on the other. What I can show
            lives on the work page.
          </p>
        </div>
        <ProfileActions className="mt-10" />
      </PageIntro>

      <Portrait />
    </>
  )
}
