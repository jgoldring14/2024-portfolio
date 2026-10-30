import { type Metadata } from 'next'

import { RootLayout } from '@/components/RootLayout'
import { SITE_NAME, SITE_URL } from '@/lib/site'

import '@/styles/tailwind.css'

const description =
  'Jacob Goldring is a full stack engineer working on white-label digital banking, and the co-founder and CTO of Vamo, two apps and a website that connect shoppers, vendors and the hosts who run local markets.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: `%s | ${SITE_NAME}`,
    default: `${SITE_NAME}, full stack engineer and CTO`,
  },
  description,
  alternates: { canonical: '/' },
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    url: SITE_URL,
    title: `${SITE_NAME}, full stack engineer and CTO`,
    description,
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME}, full stack engineer and CTO`,
    description,
    images: ['/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: SITE_NAME,
  url: SITE_URL,
  jobTitle: ['Full stack engineer', 'Co-founder and CTO'],
  description,
  worksFor: [
    {
      '@type': 'Organization',
      name: 'Mahalo Banking',
      url: 'https://mahalobanking.com',
    },
    { '@type': 'Organization', name: 'Vamo', url: 'https://hellovamo.app' },
  ],
  knowsAbout: [
    'React Native',
    'TypeScript',
    'Next.js',
    'C#',
    '.NET',
    'SQL Server',
    'PostgreSQL',
    'Mobile DevOps',
  ],
  sameAs: [
    'https://github.com/jgoldring14',
    'https://www.linkedin.com/in/jacobgoldring14',
    'https://medium.com/@jacobharv00',
  ],
}

/**
 * Escapes characters that could terminate the surrounding script tag before the
 * JSON-LD payload is injected. The payload is static, this is defence in depth.
 */
function serializeJsonLd(data: object) {
  return JSON.stringify(data).replace(/</g, '\\u003c')
}

/** Runs before paint so a saved or system dark preference never flashes light first. */
const themeScript = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d)}catch(e){}})()`

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className="h-full bg-surface text-base text-ink antialiased"
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(personSchema) }}
        />
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
