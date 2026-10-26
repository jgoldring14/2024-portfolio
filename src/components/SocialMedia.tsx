import Link from 'next/link'
import clsx from 'clsx'
import Image from 'next/image'

import { RESUME_URL } from '@/lib/site'

import gitHubIcon from '../../public/images/github.svg'
import linkedInIcon from '../../public/images/linkedin.svg'
import mediumIcon from '../../public/images/medium.svg'
import resumeIcon from '../../public/images/resume.svg'

const svgWidth = 35

function GithubIcon() {
  return (
    <div>
      <Image src={gitHubIcon} alt="Github Icon" width={svgWidth} />
    </div>
  )
}
function LinkedInIcon() {
  return (
    <div>
      <Image src={linkedInIcon} alt="LinkedIn Icon" width={svgWidth} />
    </div>
  )
}

function MediumIcon() {
  return (
    <div>
      <Image src={mediumIcon} alt="Medium Icon" width={svgWidth} />
    </div>
  )
}

function ResumeIcon() {
  return (
    <div>
      <Image src={resumeIcon} alt="Resume Icon" width={svgWidth} />
    </div>
  )
}

export const socialMediaProfiles = [
  {
    title: 'GitHub',
    href: 'https://github.com/jgoldring14',
    target: '_blank',
    icon: GithubIcon,
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jacobgoldring14',
    target: '_blank',
    icon: LinkedInIcon,
  },
  {
    title: 'Medium',
    href: 'https://medium.com/@jacobharv00',
    target: '_blank',
    icon: MediumIcon,
  },
  {
    title: 'Resume',
    href: RESUME_URL,
    target: '_blank',
    icon: ResumeIcon,
  },
]

export function SocialMedia({
  className,
  invert = false,
}: {
  className?: string
  invert?: boolean
}) {
  return (
    <ul
      role="list"
      className={clsx(
        'flex gap-x-5',
        invert ? 'text-white' : 'text-neutral-950 dark:text-white',
        className,
      )}
    >
      {socialMediaProfiles.map((socialMediaProfile) => (
        <li key={socialMediaProfile.title}>
          <Link
            target={socialMediaProfile.target}
            href={socialMediaProfile.href}
            aria-label={socialMediaProfile.title}
            className={clsx(
              'transition',
              invert ? 'hover:text-neutral-200' : 'hover:text-neutral-700',
            )}
          >
            <socialMediaProfile.icon />
          </Link>
        </li>
      ))}
    </ul>
  )
}
