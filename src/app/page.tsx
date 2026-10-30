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
      'Night markets, farmers markets and pop-ups near you, and the vendors who make them. Shoppers browse a feed or a map and get walking directions to any space. Vendors apply for spaces, pay to lock them in and chat with the host, all from the same app. Live on iOS and Android.',
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
      'For the hosts who run the markets. Open your spaces, choose your vendors and get paid after every market, all from your phone. First live market November 2026.',
    links: [
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.vamo.host',
      },
      { label: 'hellovamo.app', href: 'https://hellovamo.app' },
    ],
    comingSoon: 'iOS coming soon',
  },
  {
    name: 'Vamo Website',
    audience: 'No download needed',
    icon: imageVamoIcon,
    description:
      "Everything in the apps, in your browser. Handy when you don't want to download anything, but the apps are better on the go.",
    links: [{ label: 'hellovamo.app', href: 'https://hellovamo.app' }],
  },
]

const stats = [
  { value: '~200', label: 'vendors on Vamo' },
  { value: '2', label: 'hosts live, first markets in November' },
  { value: '2024', label: 'first App Store release' },
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
 * upright in an inset well and zoomed just enough to fill the diamond's corners.
 */
function Portrait() {
  return (
    <Tilt className="mx-auto hidden p-14 lg:block">
      <div className="flex h-64 w-64 rotate-45 items-center justify-center rounded-[3rem] bg-surface bg-convex-diamond shadow-neu-diamond">
        <div className="rounded-[2.25rem] p-4 shadow-neu-diamond-inset">
          <div className="h-44 w-44 overflow-hidden rounded-[1.5rem]">
            <Image
              src={imageJacobIllustrated}
              alt="Jacob Goldring"
              className="h-full w-full object-cover [transform:rotate(-45deg)_scale(1.45)]"
              sizes="16rem"
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
          <h1 className="font-display text-5xl font-medium tracking-tight text-ink [text-wrap:balance] sm:text-7xl">
            Full stack engineer. Co-founder and CTO.
          </h1>
          <p className="mt-8 max-w-2xl text-xl text-muted">
            I build apps people use every day, from the data layer to the screen
            they tap. By day that&apos;s a white-label banking platform for
            credit unions. After hours it&apos;s Vamo, which I co-founded: two
            apps and a website that connect shoppers, vendors and the hosts who
            run local markets.
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
        <FadeIn className="grid items-center gap-12 rounded-[2.5rem] bg-surface p-8 shadow-neu sm:p-12 lg:grid-cols-[auto_1fr] lg:gap-16">
          <AppIconFlip />
          <div className="max-w-2xl">
            <h2>
              <span className="mb-6 inline-flex rounded-full px-4 py-1.5 font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent shadow-neu-inset-sm">
                Vamo
              </span>
              <span className="sr-only"> - </span>
              <span className="block font-display text-4xl font-medium tracking-tight text-ink [text-wrap:balance] sm:text-5xl">
                Built for the whole market.
              </span>
            </h2>
            <p className="mt-6 text-xl text-muted">
              Vamo started as a way to find street food. Now it&apos;s two apps
              and a website on one backend, made for everyone at a market: the
              shoppers, the vendors and the hosts who run it. My co-founder and
              I build all of it. I lead engineering and run every release.
            </p>
            <dl className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col rounded-[1.5rem] px-5 py-4 shadow-neu-inset-sm"
                >
                  <dt className="order-last mt-1 text-sm text-muted">
                    {stat.label}
                  </dt>
                  <dd className="font-display text-3xl font-semibold tracking-tight text-primary-text">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </FadeIn>

        <FadeInStagger className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {products.map((product) => (
            <FadeIn key={product.name} className="flex">
              <article className="flex w-full flex-col rounded-[2rem] bg-surface p-8 shadow-neu transition duration-300 ease-apple-out hover:-translate-y-1 hover:shadow-neu-lg motion-reduce:hover:translate-y-0">
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
                <div className="mt-8 flex flex-wrap gap-3">
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
        title="How it fits together."
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
            <span className="block font-display text-4xl font-medium tracking-tight text-ink [text-wrap:balance] sm:text-5xl">
              One codebase, a different product for every credit union.
            </span>
          </h2>
          <p className="mt-6 text-xl text-muted">
            Digital banking for credit unions, where no two credit unions want
            the same app. One codebase ships as a separately themed, separately
            configured product for each one, down to which vendor integrations
            it talks to and which features exist at all. Shipping a feature
            means shipping every version of it that somebody might switch on.
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
        title="What I reach for."
        className="mt-24 sm:mt-32 lg:mt-40"
      />
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {stack.map((group) => (
            <FadeIn key={group.id} className="flex">
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
        title="How I got here."
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
              Co-founder and CTO. Vamo started as a street food finder and grew
              into a platform for local markets: the Vamo app on iOS and
              Android, Vamo Host for the hosts who run them, and a website for
              both. I lead engineering and run every release.
            </ListItem>
            <ListItem title="Mahalo Banking, 2022 to now">
              Started on the frontend and grew into full stack, now Development
              Engineer 2. I&apos;ve built major features across the mobile app,
              the web platform and the APIs behind them for 1M+ credit union
              members, and I back up our mobile releases.
            </ListItem>
            <ListItem title="Flatiron School, 2021">
              Full-time immersive software engineering program, about 16 hours a
              day, five or six days a week, learning JavaScript, React, Ruby and
              Rails.
            </ListItem>
            <ListItem title="Started programming, 2020">
              Started with a JavaScript course after work, every day, and got
              hooked.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'Jacob Goldring is a full stack engineer working on white-label digital banking, and the co-founder and CTO of Vamo.',
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
