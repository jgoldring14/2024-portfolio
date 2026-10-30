import { Button } from '@/components/Button'

type ProjectLink = { label: string; href: string }

type Project = {
  name: string
  audience: string
  description: string
  tech: string
  links: Array<ProjectLink>
  comingSoon?: string
}

const projects: Array<Project> = [
  {
    name: 'Vamo',
    audience: 'For shoppers and vendors',
    description:
      'Find night markets, farmers markets and pop-ups near you. See which vendors are coming and follow the market map to any spot. Vendors can apply for a spot and pay for it in the app. They also get their setup time and a group chat for every market. Available on iOS and Android.',
    tech: 'React Native, Expo, TypeScript, Tamagui, Supabase, Redux Toolkit',
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
    description:
      'Vamo Host is for the people who run markets. Hosts set up spots and prices, review vendor applications, build the market map, plan when vendors arrive and get paid out. It runs on the same backend as the main app. The first live market is in November 2026.',
    tech: 'React Native, Expo, TypeScript, Supabase, Stripe',
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
    description:
      "Everything the apps do, right in your browser, for shoppers, vendors and hosts. Great if you don't want to download anything. The apps are still the better pick when you're out at a market.",
    tech: 'Next.js, TypeScript, Tailwind, Supabase',
    links: [{ label: 'hellovamo.app', href: 'https://hellovamo.app' }],
  },
]

function ProjectItem({ project }: { project: Project }) {
  return (
    <article className="flex w-full flex-col rounded-[2rem] bg-surface p-6 shadow-neu transition duration-300 ease-apple-out hover:-translate-y-1 hover:shadow-neu-lg motion-reduce:hover:translate-y-0 sm:p-8">
      <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent">
        {project.audience}
      </p>
      <h3 className="mt-2 font-display text-2xl font-semibold text-ink">
        {project.name}
      </h3>
      <p className="mt-4 flex-auto text-base text-muted">
        {project.description}
      </p>
      <ul
        role="list"
        aria-label="Built with"
        className="mt-6 flex flex-wrap gap-2"
      >
        {project.tech.split(', ').map((item) => (
          <li
            key={item}
            className="cursor-default rounded-full px-3 py-1 text-xs font-semibold text-muted shadow-neu-inset-sm transition duration-200 hover:bg-convex hover:text-primary-text hover:shadow-neu-sm"
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-8 flex flex-wrap gap-2 sm:gap-3 max-sm:[&>*]:px-3.5">
        {project.links.map((link) => (
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
        {project.comingSoon && (
          <span className="inline-flex h-11 items-center rounded-full px-5 text-sm font-semibold text-muted shadow-neu-inset-sm">
            {project.comingSoon}
          </span>
        )}
      </div>
    </article>
  )
}

export function Projects(props: React.ComponentPropsWithoutRef<'ul'>) {
  return (
    <ul role="list" {...props}>
      {projects.map((project) => (
        <li key={project.name} className="flex">
          <ProjectItem project={project} />
        </li>
      ))}
    </ul>
  )
}
