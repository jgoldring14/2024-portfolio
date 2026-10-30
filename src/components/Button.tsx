import Link from 'next/link'
import clsx from 'clsx'

type ButtonProps = {
  variant?: 'primary' | 'secondary'
  size?: 'md' | 'lg'
} & (
  | React.ComponentPropsWithoutRef<typeof Link>
  | (React.ComponentPropsWithoutRef<'button'> & { href?: undefined })
)

/**
 * Primary is solid Dodger blue so the main action never depends on a shadow to be seen.
 * Secondary is a raised neumorphic button that presses in when active.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  className = clsx(
    'inline-flex items-center justify-center whitespace-nowrap rounded-full font-semibold transition duration-150 ease-apple-out',
    size === 'md' ? 'h-11 px-5 text-sm' : 'h-14 px-8 text-base',
    variant === 'primary'
      ? 'bg-primary bg-primary-convex text-primary-ink shadow-neu-primary hover:brightness-110 active:shadow-neu-inset-sm active:brightness-95'
      : 'bg-surface bg-convex text-ink shadow-neu-sm hover:text-primary-text active:bg-none active:shadow-neu-inset-sm',
    className,
  )

  if (typeof props.href === 'undefined') {
    return (
      <button className={className} {...props}>
        {children}
      </button>
    )
  }

  return (
    <Link className={className} {...props}>
      {children}
    </Link>
  )
}
