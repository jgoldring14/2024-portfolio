'use client'

import { useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'

import imageVamoHostIcon from '../../public/images/vamo-host-icon.png'
import imageVamoIcon from '../../public/images/vamo-icon.png'

const faceClassName =
  'absolute inset-0 h-full w-full rounded-[22%] shadow-neu [backface-visibility:hidden]'

/**
 * The Vamo and Vamo Host app icons on the two sides of one tile. It flips on hover where
 * the device can hover, and on tap or keyboard everywhere; hover inverts the tapped state.
 */
export function AppIconFlip({ className }: { className?: string }) {
  let [flipped, setFlipped] = useState(false)

  return (
    <div className={clsx('flex flex-col items-center', className)}>
      <button
        type="button"
        aria-pressed={flipped}
        aria-label="Show the Vamo Host app icon"
        onClick={() => setFlipped((value) => !value)}
        className="group rounded-[3rem] p-6 shadow-neu-inset [perspective:1200px]"
      >
        <span
          className={clsx(
            'relative block h-44 w-44 transition-transform duration-700 ease-apple-out [transform-style:preserve-3d] motion-reduce:transition-none sm:h-52 sm:w-52',
            flipped
              ? '[transform:rotateY(180deg)] [@media(hover:hover)]:group-hover:[transform:rotateY(0deg)]'
              : '[@media(hover:hover)]:group-hover:[transform:rotateY(180deg)]',
          )}
        >
          <Image
            src={imageVamoIcon}
            alt=""
            className={faceClassName}
            sizes="13rem"
            priority
          />
          <Image
            src={imageVamoHostIcon}
            alt=""
            className={clsx(
              faceClassName,
              'ring-1 ring-line/20 [transform:rotateY(180deg)]',
            )}
            sizes="13rem"
            priority
          />
        </span>
      </button>
      <p className="mt-6 text-sm font-semibold text-muted" aria-hidden="true">
        Hover or tap to flip
      </p>
    </div>
  )
}
