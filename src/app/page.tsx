import { type Metadata } from 'next'
import Image, { type StaticImageData } from 'next/image'

import { AppIconFlip } from '@/components/AppIconFlip'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { MarketFlow } from '@/components/MarketFlow'
import { MemberCount } from '@/components/MemberCount'
import { ProfileActions } from '@/components/ProfileActions'
import { SectionIntro } from '@/components/SectionIntro'
import { Tilt } from '@/components/Tilt'
import imageJacobIllustrated from '../../public/images/jacob-illustrated.webp'
import imageLaptopDesk from '../../public/images/laptop-desk.jpg'
import imageVamoHostIcon from '../../public/images/vamo-host-icon.png'
import imageVamoIcon from '../../public/images/vamo-icon.png'

type ProductLink = { label: string; href: string }

type Product = {
  name: string
  audience: string
  icon: StaticImageData
  description: string
  links: Array<ProductLink>
  comingSoon?: string
}

const products: Array<Product> = [
  {
    name: 'Vamo',
    audience: 'For shoppers and vendors',
    icon: imageVamoIcon,
    description:
      "Find night markets, farmers markets and pop-ups near you. Scroll the feed or check the map, then get walking directions right to a vendor's spot. Vendors use the same app to apply for a spot, pay for it and chat with the host. Available on iOS and Android.",
    links: [
      {
        label: 'App Store',
        href: 'https://apps.apple.com/us/app/vamo-discover-street-food/id6737868193',
      },
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.vamo.app',
      },
    ],
  },
  {
    name: 'Vamo Host',
    audience: 'For hosts',
    icon: imageVamoHostIcon,
    description:
      "This one's for the people who run markets. Hosts set up their spots, pick their vendors and get paid after every market, right from their phone. The first live market is in November 2026.",
    links: [
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.vamo.host',
      },
    ],
    comingSoon: 'iOS coming soon',
  },
  {
    name: 'Vamo Website',
    audience: 'No download needed',
    icon: imageVamoIcon,
    description:
      "Everything the apps do, right in your browser. Great if you don't want to download anything. The apps are still the better pick when you're out at a market.",
    links: [{ label: 'hellovamo.app', href: 'https://hellovamo.app' }],
  },
]

const stats = [
  { value: '~200', label: 'vendors on Vamo' },
  { value: '2', label: 'hosts with live markets in November 2026' },
  { value: '2024', label: 'launched on the App Store' },
]

const stack = [
  {
    id: 'mobile',
    title: 'Mobile',
    items: 'React Native, Expo, TypeScript, Redux Toolkit, React Native Web',
  },
  { id: 'web', title: 'Web', items: 'Next.js, React, Vue, Tailwind, Figma' },
  {
    id: 'api',
    title: 'API',
    items: 'C#, .NET Web API, Entity Framework, Dapper, Azure, Docker, Swagger',
  },
  {
    id: 'data',
    title: 'Data',
    items: 'SQL Server, PostgreSQL, Supabase, MySQL, SQLite',
  },
]

/**
 * A raised diamond, turned 45deg like an infield, with the illustrated portrait kept
 * upright in an inset well and zoomed just enough to fill the diamond's corners. The
 * image has extra background above and beside the figure so the whole head fits.
 */
function Portrait() {
  return (
    <Tilt className="mx-auto hidden p-14 lg:block">
      <div className="flex h-64 w-64 rotate-45 items-center justify-center rounded-[3rem] bg-surface bg-convex-diamond shadow-neu-diamond xl:h-80 xl:w-80 xl:rounded-[3.75rem]">
        <div className="rounded-[2.25rem] p-4 shadow-neu-diamond-inset xl:rounded-[2.75rem] xl:p-5">
          <div className="h-44 w-44 overflow-hidden rounded-[1.5rem] xl:h-56 xl:w-56 xl:rounded-[1.75rem]">
            <Image
              src={imageJacobIllustrated}
              alt="Jacob Goldring"
              className="h-full w-full object-cover [transform:rotate(-45deg)_scale(1.45)]"
              sizes="20rem"
              priority
            />
          </div>
        </div>
      </div>
    </Tilt>
  )
}

function Hero() {
  return (
    <Container className="mt-16 sm:mt-24 md:mt-32">
      <FadeIn className="grid items-center gap-16 lg:grid-cols-[1fr_auto]">
        <div className="max-w-4xl">
          <h1 className="font-display text-[clamp(1.5rem,8vw,2.5rem)] font-medium leading-[1.15] tracking-tight text-ink [text-wrap:balance] sm:text-7xl">
            <span className="block">Full stack engineer</span>
            <span className="sr-only">, </span>
            <span className="block">
              <span className="whitespace-nowrap">Co-founder</span> and CTO
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-xl text-muted">
            I build apps people use every day, from the database all the way to
            the screen you tap. By day I work on a banking app that credit
            unions put their own name on. After hours I&apos;m building Vamo, a
            startup I <span className="whitespace-nowrap">co-founded</span> for
            local markets.
          </p>
          <ProfileActions className="mt-10" />
        </div>
        <Portrait />
      </FadeIn>
    </Container>
  )
}

function VamoSection() {
  return (
    <>
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn className="grid items-center gap-8 rounded-[2.5rem] bg-surface p-8 shadow-neu sm:gap-12 sm:p-12 lg:grid-cols-[auto_1fr] lg:gap-16">
          <AppIconFlip />
          <div className="max-w-2xl">
            <h2>
              <span className="mb-6 inline-flex rounded-full px-4 py-1.5 font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent shadow-neu-inset-sm">
                Vamo
              </span>
              <span className="sr-only"> - </span>
              <span className="block font-display text-3xl font-medium tracking-tight text-ink [text-wrap:balance] sm:text-5xl">
                Built for the whole market
              </span>
            </h2>
            <p className="mt-6 text-xl text-muted">
              Vamo started as a street food discovery app. Now it&apos;s two
              apps and a website that bring together everyone at a market. That
              means the shoppers walking around, the vendors selling and the
              hosts who put it all on. It&apos;s just my business partner and
              me, so we both do a lot of everything.
            </p>
            <dl className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-3 rounded-[1.5rem] px-5 py-3 shadow-neu-inset-sm sm:flex-col sm:items-start sm:gap-0 sm:py-4"
                >
                  <dt className="order-last text-sm text-muted sm:mt-1">
                    {stat.label}
                  </dt>
                  <dd className="min-w-[4rem] font-display text-2xl font-semibold tracking-tight text-primary-text sm:min-w-0 sm:text-3xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </FadeIn>

        <FadeInStagger className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {products.map((product) => (
            <FadeIn key={product.name} blur className="flex">
              <article className="flex w-full flex-col rounded-[2rem] bg-surface p-6 shadow-neu transition duration-300 ease-apple-out hover:-translate-y-1 hover:shadow-neu-lg motion-reduce:hover:translate-y-0 sm:p-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl shadow-neu-inset-sm">
                  <Image
                    src={product.icon}
                    alt=""
                    className="h-10 w-10 rounded-[22%] ring-1 ring-line/20"
                    sizes="40px"
                  />
                </div>
                <p className="mt-6 font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  {product.audience}
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-ink">
                  {product.name}
                </h3>
                <p className="mt-4 flex-auto text-base text-muted">
                  {product.description}
                </p>
                <div className="mt-8 flex flex-wrap gap-2 sm:gap-3 max-sm:[&>*]:px-3.5">
                  {product.links.map((link) => (
                    <Button
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="secondary"
                    >
                      {link.label}
                    </Button>
                  ))}
                  {product.comingSoon && (
                    <span className="inline-flex h-11 items-center rounded-full px-5 text-sm font-semibold text-muted shadow-neu-inset-sm">
                      {product.comingSoon}
                    </span>
                  )}
                </div>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>

      <SectionIntro
        eyebrow="The ecosystem"
        title="How it fits together"
        className="mt-24 sm:mt-32"
      />
      <Container className="mt-12">
        <MarketFlow />
      </Container>
    </>
  )
}

function MahaloSection() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="grid items-center gap-12 rounded-[2.5rem] bg-surface p-8 shadow-neu sm:p-12 lg:grid-cols-[1fr_auto]">
        <div className="max-w-2xl">
          <h2>
            <span className="mb-6 inline-flex rounded-full px-4 py-1.5 font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent shadow-neu-inset-sm">
              Mahalo Banking
            </span>
            <span className="sr-only"> - </span>
            <span className="block font-display text-3xl font-medium tracking-tight text-ink [text-wrap:balance] sm:text-5xl">
              One codebase that becomes a different app for every credit union
            </span>
          </h2>
          <p className="mt-6 text-xl text-muted">
            Mahalo builds digital banking for credit unions, and no two of them
            want the same app. So one codebase turns into a different app for
            each one. Each one gets its own look, settings, integrations and
            features. When I ship a feature I&apos;m really shipping every
            version of it that a credit union might turn on.
          </p>
        </div>
        <div className="mx-auto flex h-52 w-52 flex-col items-center justify-center rounded-full text-center shadow-neu-inset">
          <MemberCount className="font-display text-5xl font-semibold tracking-tight text-primary-text" />
          <span className="mt-2 max-w-[8rem] text-sm text-muted">
            credit union members
          </span>
        </div>
      </FadeIn>
    </Container>
  )
}

function StackSection() {
  return (
    <>
      <SectionIntro
        eyebrow="Stack"
        title="What I reach for"
        className="mt-24 sm:mt-32 lg:mt-40"
      />
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {stack.map((group) => (
            <FadeIn key={group.id} blur className="flex">
              <article className="flex w-full flex-col rounded-[2rem] bg-surface p-8 shadow-neu">
                <h3 className="font-display text-2xl font-semibold text-ink">
                  {group.title}
                </h3>
                <ul role="list" className="mt-6 flex flex-wrap gap-3">
                  {group.items.split(', ').map((item) => (
                    <li
                      key={item}
                      className="cursor-default rounded-full px-4 py-2 text-sm font-medium text-ink shadow-neu-inset-sm transition duration-200 hover:bg-convex hover:text-primary-text hover:shadow-neu-sm"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Timeline() {
  return (
    <>
      <SectionIntro
        eyebrow="Timeline"
        title="How I got here"
        className="mt-24 sm:mt-32 lg:mt-40"
      />
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-full max-w-[33.75rem] flex-none lg:w-[36rem] lg:max-w-none">
              <div className="rounded-[2.5rem] bg-surface p-4 shadow-neu sm:p-5">
                <Image
                  src={imageLaptopDesk}
                  alt=""
                  sizes="(min-width: 1024px) 34rem, (min-width: 640px) 31rem, 100vw"
                  className="aspect-[4/3] w-full rounded-[2rem] object-cover grayscale"
                />
              </div>
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-8">
            <ListItem title="Vamo, 2024 to now">
              Co-founder and CTO. Vamo started as a street food discovery app
              and grew into an app for local markets. Now there&apos;s the Vamo
              app on iOS and Android, Vamo Host for the people running markets
              and a website that does it all. My partner and I both do a lot of
              everything. I also handle our mobile DevOps, SDK and package
              upgrades and security checks. I try to keep the code easy to
              maintain and test, since stable code makes for a stable app.
            </ListItem>
            <ListItem title="Mahalo Banking, 2022 to now">
              I started on the frontend and grew into full stack. Today I&apos;m
              a Development Engineer 2. I&apos;ve built big features across the
              mobile app, the website and the APIs behind them, used by over a
              million credit union members. I&apos;m also the backup for our
              mobile releases.
            </ListItem>
            <ListItem title="Flatiron School, 2021">
              A full-time coding bootcamp. I put in about 16 hours a day, five
              or six days a week, learning JavaScript, React, Ruby and Rails.
            </ListItem>
            <ListItem title="Started coding, 2020">
              I took a JavaScript course after work every day and got hooked.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'Jacob Goldring is a full stack engineer who builds banking apps for credit unions. He is also the co-founder and CTO of Vamo, an app for local markets.',
  alternates: { canonical: '/' },
}

export default function Home() {
  return (
    <>
      <Hero />
      <VamoSection />
      <MahaloSection />
      <StackSection />
      <Timeline />
    </>
  )
}
