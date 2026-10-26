import clsx from 'clsx'
import Link from 'next/link'

type ProjectLink = { label: string; href: string }

type Project = {
  name: string
  description: string
  tech: string
  links: Array<ProjectLink>
}

const projects: Array<Project> = [
  {
    name: 'Vamo',
    description:
      'A street food app with two audiences in one download. Diners find the taco cart, the pop-up and the market happening nearby. Vendors go live on the map, post menus and take pickup and catering requests. Live on iOS and Android.',
    tech: 'React Native, Expo, TypeScript, Tamagui, Supabase, Redux Toolkit',
    links: [
      { label: 'App Store', href: 'https://apps.apple.com/us/app/vamo-discover-street-food/id6737868193' },
      { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.vamo.app' },
    ],
  },
  {
    name: 'Vamo Host',
    description:
      'The organizer side of the marketplace, for the people who run the markets. Vendor applications, slots, payments and event management, on the same backend as the main app. First live market November 2026.',
    tech: 'React Native, Expo, TypeScript, Supabase, Stripe',
    links: [{ label: 'hellovamo.app', href: 'https://hellovamo.app' }],
  },
  {
    name: 'Vamo Website',
    description:
      "Started as a landing page. Now it's growing into a full version of Vamo in the browser, so diners, vendors and organizers can do on the web what they do in the apps.",
    tech: 'Next.js, TypeScript, Tailwind, Supabase',
    links: [{ label: 'hellovamo.app', href: 'https://hellovamo.app' }],
  },
]

function ProjectItem({
  project,
  invert,
}: {
  project: Project
  invert: boolean
}) {
  return (
    <div className={clsx('text-sm', invert ? 'text-neutral-300' : 'text-neutral-600')}>
      <strong
        className={clsx(
          'font-display text-xl font-semibold',
          invert ? 'text-white' : 'text-neutral-950',
        )}
      >
        {project.name}
      </strong>
      <p className="mt-4">{project.description}</p>
      <p className={clsx('mt-4', invert ? 'text-neutral-400' : 'text-neutral-500')}>
        {project.tech}
      </p>
      <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2">
        {project.links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(
              'text-sm font-semibold transition',
              invert
                ? 'text-vamo-400 hover:text-vamo-100'
                : 'text-vamo-600 hover:text-vamo-700',
            )}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  )
}

export function Projects({
  invert = false,
  ...props
}: React.ComponentPropsWithoutRef<'ul'> & { invert?: boolean }) {
  return (
    <ul role="list" {...props}>
      {projects.map((project) => (
        <li key={project.name}>
          <ProjectItem project={project} invert={invert} />
        </li>
      ))}
    </ul>
  )
}
