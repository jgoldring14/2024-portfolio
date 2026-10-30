import { type Metadata } from 'next'
import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import imageLawsOfUxCover from '../../../../public/images/laws-of-ux-cover.png'

const LINKEDIN_POST_URL = 'https://lnkd.in/p/g9TFxZ5H'

const laws = [
  'Jakob',
  'Fitts',
  'Hick',
  'Miller',
  'Postel',
  'Peak-End',
  'Aesthetic-Usability',
  'Von Restorff',
  'Tesler',
  'Doherty',
]

const facts = [
  { value: '10', label: 'UX laws, each with a misuse check' },
  { value: '19', label: 'reference files, loaded only when needed' },
  { value: '33', label: 'checks passed across five test scenarios' },
]

type Finding = {
  source: string
  severity: string
  location: string
  law: string
  wrong: string
  fix: string
}

const findings: Array<Finding> = [
  {
    source: 'Run on this site',
    severity: 'Should fix',
    location: 'src/app/contact/contact-form.tsx',
    law: 'Postel',
    wrong:
      'Send stays disabled until the reCAPTCHA box is checked. If an ad blocker stops reCAPTCHA from loading, Send never enables and nothing says why.',
    fix: 'Notice when reCAPTCHA fails to load and show an email address next to Send.',
  },
  {
    source: 'Found in testing',
    severity: 'Blocker',
    location: 'transfer › success message',
    law: 'Finance (no optimistic UI on money movement) · Doherty',
    wrong: '“Money sent!” shows before the API confirms the transfer.',
    fix: 'Show a pending state. Say “sent” only once the API confirms.',
  },
]

export const metadata: Metadata = {
  title: 'laws-of-ux',
  description:
    'A Claude skill that checks app and website screens against ten UX laws from psychology and tells you how to fix what breaks them.',
  alternates: { canonical: '/work/laws-of-ux' },
}

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <FadeIn blur className="mt-16 first:mt-0">
      <section>
        <h2 className="font-display text-2xl font-semibold text-ink">
          {title}
        </h2>
        <div className="mt-4 space-y-4 text-base text-muted">{children}</div>
      </section>
    </FadeIn>
  )
}

function FindingCard({ finding }: { finding: Finding }) {
  return (
    <div className="rounded-[1.75rem] p-6 shadow-neu-inset">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
        {finding.source}
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <span className="rounded-full bg-surface bg-convex px-3 py-1 text-xs font-semibold text-accent shadow-neu-sm">
          {finding.severity}
        </span>
        <code className="break-all text-sm text-ink">{finding.location}</code>
      </div>
      <dl className="mt-5 grid grid-cols-[3rem_1fr] gap-x-4 gap-y-3 text-sm">
        <dt className="font-semibold text-ink">Law</dt>
        <dd>{finding.law}</dd>
        <dt className="font-semibold text-ink">Wrong</dt>
        <dd>{finding.wrong}</dd>
        <dt className="font-semibold text-ink">Fix</dt>
        <dd className="text-primary-text">{finding.fix}</dd>
      </dl>
    </div>
  )
}

function Aside() {
  return (
    <FadeIn className="space-y-8 lg:sticky lg:top-8">
      <div className="rounded-[2.5rem] bg-surface p-4 shadow-neu">
        <Image
          src={imageLawsOfUxCover}
          alt="Cover slide of the laws-of-ux carousel: Your users shouldn't need a manual."
          className="h-auto w-full rounded-[2rem]"
          sizes="(min-width: 1024px) 20rem, 100vw"
          priority
        />
      </div>
      <dl className="space-y-4">
        {facts.map((fact) => (
          <div
            key={fact.value}
            className="flex items-center gap-5 rounded-[1.75rem] bg-surface p-4 shadow-neu-sm"
          >
            <dt className="order-last text-sm text-muted">{fact.label}</dt>
            <dd className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl font-display text-2xl font-semibold text-primary-text shadow-neu-inset-sm">
              {fact.value}
            </dd>
          </div>
        ))}
      </dl>
    </FadeIn>
  )
}

export default function LawsOfUx() {
  return (
    <>
      <PageIntro
        eyebrow="Claude skill"
        title="Your users shouldn't need a manual"
      >
        <p>
          laws-of-ux is a Claude skill that checks app and website screens
          against ten UX laws from psychology. When something breaks a law it
          tells you how to fix it.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button
            href={LINKEDIN_POST_URL}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
          >
            Read the LinkedIn post
          </Button>
          <Button href="/work" variant="secondary">
            Back to work
          </Button>
        </div>
      </PageIntro>

      <Container className="mt-16 sm:mt-24">
        <div className="grid gap-16 lg:grid-cols-[1fr_20rem]">
          <div className="max-w-2xl">
            <Section title="The problem">
              <p>
                I&apos;m not a UX designer, but I design every screen in the
                apps I build. I want Vamo and Vamo Host to make sense without
                anyone having to explain them. I also want them to look modern
                and polished, not just work.
              </p>
            </Section>

            <Section title="From book to skill">
              <p>
                I read <em>Laws of UX</em> by Jon Yablonski. It takes what
                psychology knows about how people use things and turns it into
                design rules. For example, more choices slow us down. We
                remember an experience by its best or worst moment and how it
                ended. And we expect a new app to work like the ones we already
                use.
              </p>
              <p>
                Before I built anything I wrote a spec. It covered which ten
                laws to use, what a finding looks like and what should never get
                flagged. Then I built the skill from that spec with a little
                help from Claude and Anthropic&apos;s skill-creator workflow.
                The main file is about 90 lines. The details live in 19
                reference files that only load when a review needs them.
              </p>
              <ul
                role="list"
                aria-label="The ten laws"
                className="flex flex-wrap gap-2 pt-2"
              >
                {laws.map((law) => (
                  <li
                    key={law}
                    className="cursor-default rounded-full px-3 py-1 text-xs font-semibold text-ink shadow-neu-inset-sm transition duration-200 hover:bg-convex hover:text-primary-text hover:shadow-neu-sm"
                  >
                    {law}
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="How it works">
              <p>
                It works from code or a screenshot. When Claude is building UI
                it applies the laws as it goes and only mentions the trade-offs.
                When I ask for a review it goes through five steps.
              </p>
              <List className="pt-4">
                <ListItem title="Scope">
                  It lists the screens and flows to review. If it gets a whole
                  repo it starts with the main task.
                </ListItem>
                <ListItem title="Platform">
                  It reads package.json or the device frame in a screenshot to
                  figure out mobile, web or both. Then it loads only the guides
                  it needs. An Expo app that also ships to the web gets both.
                </ListItem>
                <ListItem title="Ten quick checks">
                  One question per law. When a check hits it reads that
                  law&apos;s file before writing anything down, including how
                  the law gets misused.
                </ListItem>
                <ListItem title="Ethics every time">
                  Pre-checked consent, fake urgency, hidden costs and a cancel
                  button you can&apos;t find are always Blockers. Apps that
                  handle money, shopping or social get extra rules on top.
                </ListItem>
                <ListItem title="Report">
                  Every finding lists where it is, the law, what&apos;s wrong
                  and how to fix it. They&apos;re grouped as Blocker, Should fix
                  or Nice to have. It also says what it checked and found fine,
                  plus anything it couldn&apos;t verify without a real device.
                </ListItem>
              </List>
              <p className="pt-4">
                The laws are reasons, not quotas. If it can&apos;t name who gets
                slowed down or misled, it doesn&apos;t flag it.
              </p>
            </Section>

            <Section title="Example findings">
              <p>
                The first one came from running the skill on this site before
                the redesign. I fixed it as part of the redesign. The second
                came from a test scenario.
              </p>
              <div className="grid gap-6 pt-4">
                {findings.map((finding) => (
                  <FindingCard key={finding.source} finding={finding} />
                ))}
              </div>
            </Section>

            <Section title="Testing">
              <p>
                I tested it on five scenarios, from a React Native login screen
                to a SQL question it should ignore. All 33 checks passed.
              </p>
              <p>
                The same Claude session that helped build the skill also ran
                those checks. So they show it does what the spec says, but they
                don&apos;t replace a review from someone who designs for a
                living.
              </p>
            </Section>
          </div>

          <aside aria-label="At a glance" className="order-first lg:order-none">
            <Aside />
          </aside>
        </div>
      </Container>
    </>
  )
}
