import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { ProfileActions } from '@/components/ProfileActions'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import imageLaptopDesk from '../../public/images/laptop-desk.jpg'
import imageVamoCover from '../../public/images/vamo-cover.png'
import imageVamoLogo from '../../public/images/vamo-logo.png'

type ProductLink = { label: string; href: string }

type Product = {
  name: string
  description: string
  links: Array<ProductLink>
}

const products: Array<Product> = [
  {
    name: 'Vamo',
    description:
      'Open it to see the taco cart, the pop-up, the market happening four blocks away. Vendors run their whole operation from the same download, going live on the map, posting menus, taking pickup and catering requests. Live on iOS and Android.',
    links: [
      { label: 'App Store', href: 'https://apps.apple.com/us/app/vamo-discover-street-food/id6737868193' },
      { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.vamo.app' },
    ],
  },
  {
    name: 'Vamo Host',
    description:
      'The other side of the marketplace, built for the people who run the markets. Vendor applications, slots, payments and events. First live market November 2026.',
    links: [{ label: 'hellovamo.app', href: 'https://hellovamo.app' }],
  },
  {
    name: 'Vamo Website',
    description:
      "Started as a landing page. Now it's growing into a full version of Vamo in the browser, so diners, vendors and organizers can do on the web what they do in the apps.",
    links: [{ label: 'hellovamo.app', href: 'https://hellovamo.app' }],
  },
]

const stack = [
  { id: 'mobile', title: 'Mobile', items: 'React Native, Expo, TypeScript, Redux Toolkit, React Native Web' },
  { id: 'web', title: 'Web', items: 'Next.js, React, Vue, Tailwind, Figma' },
  { id: 'api', title: 'API', items: 'C#, .NET Web API, Entity Framework, Dapper, Azure, Docker, Swagger' },
  { id: 'data', title: 'Data', items: 'SQL Server, PostgreSQL, Supabase, MySQL, SQLite' },
]

function Hero() {
  return (
    <Container className="mt-24 sm:mt-32 md:mt-56">
      <FadeIn className="max-w-4xl">
        <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl dark:text-white">
          Full stack engineer. Co-founder and CTO.
        </h1>
        <p className="mt-8 max-w-2xl text-xl text-neutral-600 dark:text-neutral-400">
          I build apps people use every day, from the data layer to the screen
          they tap. By day that&apos;s a white-label banking platform for credit
          unions. After hours it&apos;s Vamo, the street food marketplace I
          co-founded: one app for diners and vendors, one for market
          organizers, and a website that does both.
        </p>
        <ProfileActions className="mt-10" />
      </FadeIn>
    </Container>
  )
}

function VamoSection() {
  return (
    <>
      <SectionIntro
        eyebrow="Vamo"
        title="Street food, found."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          My co-founder and I build all three on one shared backend. I lead
          engineering and run every release.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <FadeIn>
          <div className="overflow-hidden rounded-3xl bg-vamo-50 ring-1 ring-neutral-950/5 dark:bg-vamo-900/20 dark:ring-white/10">
            <Image
              src={imageVamoCover}
              alt="Vamo"
              className="h-auto w-full"
              sizes="(min-width: 1216px) 68rem, 100vw"
              priority
            />
          </div>
        </FadeIn>

        <FadeInStagger className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {products.map((product) => (
            <FadeIn key={product.name} className="flex">
              <article className="flex w-full flex-col rounded-3xl p-8 ring-1 ring-neutral-950/5 dark:ring-white/10">
                <Image
                  src={imageVamoLogo}
                  alt=""
                  className="h-12 w-12 rounded-xl"
                  sizes="48px"
                />
                <h3 className="mt-6 font-display text-2xl font-semibold text-neutral-950 dark:text-white">
                  {product.name}
                </h3>
                <p className="mt-4 flex-auto text-base text-neutral-600 dark:text-neutral-400">
                  {product.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                  {product.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-vamo-600 transition hover:text-vamo-700 dark:text-vamo-400 dark:hover:text-vamo-100"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function MahaloSection() {
  return (
    <SectionIntro
      eyebrow="Mahalo Banking"
      title="One codebase, a different product for every credit union."
      className="mt-24 sm:mt-32 lg:mt-40"
    >
      <p>
        Digital banking for credit unions, where no two credit unions want the
        same app. One codebase ships as a separately themed, separately
        configured product for each one, down to which vendor integrations it
        talks to and which features exist at all. Shipping a feature means
        shipping every version of it that somebody might switch on.
      </p>
    </SectionIntro>
  )
}

function StackSection() {
  return (
    <>
      <SectionIntro
        eyebrow="Stack"
        title="What I reach for."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>Grouped by where it sits.</p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {stack.map((group) => (
            <FadeIn key={group.id} className="flex">
              <article className="flex w-full flex-col rounded-3xl p-8 ring-1 ring-neutral-950/5 dark:ring-white/10">
                <h3 className="font-display text-2xl font-semibold text-neutral-950 dark:text-white">
                  {group.title}
                </h3>
                <p className="mt-4 text-base text-neutral-600 dark:text-neutral-400">
                  {group.items}
                </p>
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
            <FadeIn className="w-full max-w-[33.75rem] flex-none lg:w-[45rem] lg:max-w-none">
              <StylizedImage
                src={imageLaptopDesk}
                sizes="(min-width: 1024px) 41rem, (min-width: 640px) 31rem, 100vw"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Vamo, 2024 to now">
              Co-founder and CTO. We took Vamo from an idea to a live iOS and
              Android app, and Vamo Host follows for market organizers. I lead
              engineering and run every release.
            </ListItem>
            <ListItem title="Mahalo Banking, 2022 to now">
              Started on the frontend and grew into full stack, now Development
              Engineer 2. I&apos;ve built major features across the mobile app,
              the web platform and the APIs behind them for 1M+ credit union
              members, and I back up our mobile releases.
            </ListItem>
            <ListItem title="Flatiron School, 2021">
              Full-time immersive software engineering program, about 16 hours
              a day, five or six days a week, learning JavaScript, React, Ruby
              and Rails.
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
