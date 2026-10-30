'use client'

import { useState, useId, useEffect } from 'react'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { FadeIn } from '@/components/FadeIn'
import ReCAPTCHA from 'react-google-recaptcha'

import type { ChangeEvent, FormEvent } from 'react'

type FieldChangeEvent = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

type CaptchaState = 'loading' | 'ready' | 'failed'

type SendState = 'idle' | 'sending' | 'sent' | 'error'

const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

const formEndpoint = 'https://getform.io/f/1af672b8-86ea-4fb2-9964-74701ee53c0c'

const email = 'jacobgoldring14@gmail.com'

/** How long reCAPTCHA gets to load before we assume a blocker stopped it. Its loader also
 * calls asyncScriptOnLoad when the script fails, so that callback checks for grecaptcha. */
const captchaTimeoutMs = 8000

interface FormValues {
  name: string
  email: string
  message: string
}

function EmailLink() {
  return (
    <Link
      href={`mailto:${email}?subject=Hello%20Jacob`}
      className="font-semibold text-primary-text underline underline-offset-4"
    >
      {email}
    </Link>
  )
}

/**
 * Contact form posted to getform.io with fetch, so the visitor stays on the page and
 * sees a sending state and a thank-you. If reCAPTCHA never loads, Send stays disabled
 * and the hint offers the email address instead.
 */
export function ContactForm() {
  const hintId = useId()
  const [captcha, setCaptcha] = useState<string | null>()
  const [captchaState, setCaptchaState] = useState<CaptchaState>('loading')
  const [sendState, setSendState] = useState<SendState>('idle')

  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: FieldChangeEvent) => {
    const { name, value } = e.target

    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSendState('sending')

    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        body: new FormData(e.currentTarget),
        headers: { Accept: 'application/json' },
      })
      setSendState(response.ok ? 'sent' : 'error')
    } catch {
      setSendState('error')
    }
  }

  useEffect(() => {
    setFormValues({ name: '', email: '', message: '' })
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setCaptchaState((state) => (state === 'loading' ? 'failed' : state))
    }, captchaTimeoutMs)
    return () => clearTimeout(timer)
  }, [])

  if (sendState === 'sent') {
    return (
      <FadeIn className="rounded-[2.5rem] bg-surface p-8 shadow-neu sm:p-10">
        <h2
          className="font-display text-2xl font-semibold text-ink"
          role="status"
        >
          Thanks, your message is on its way.
        </h2>
        <p className="mt-4 text-base text-muted">
          I&apos;ll reply to {formValues.email}.
        </p>
      </FadeIn>
    )
  }

  const isSending = sendState === 'sending'

  return (
    <FadeIn className="rounded-[2.5rem] bg-surface p-8 shadow-neu sm:p-10">
      <form onSubmit={handleSubmit}>
        <h2 className="font-display text-xl font-semibold text-ink">
          Email me
        </h2>
        <div className="mt-6 space-y-5">
          <TextInput
            required
            label="Name"
            type="text"
            name="name"
            autoComplete="name"
            maxLength={100}
            value={formValues.name}
            onChange={handleChange}
          />
          <TextInput
            required
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            maxLength={254}
            value={formValues.email}
            onChange={handleChange}
          />
          <TextArea
            required
            label="Message"
            name="message"
            rows={5}
            maxLength={2000}
            value={formValues.message}
            onChange={handleChange}
          />
        </div>
        <div className="flex w-full flex-col items-end pt-6">
          {captchaState !== 'failed' && (
            <ReCAPTCHA
              sitekey={String(siteKey)}
              className="mb-4"
              onChange={setCaptcha}
              onExpired={() => setCaptcha(null)}
              onErrored={() => setCaptchaState('failed')}
              asyncScriptOnLoad={() =>
                setCaptchaState('grecaptcha' in window ? 'ready' : 'failed')
              }
            />
          )}
          <Button
            type="submit"
            size="lg"
            disabled={!captcha || isSending}
            aria-describedby={captcha ? undefined : hintId}
            className="w-full disabled:cursor-not-allowed disabled:opacity-50 sm:w-72"
          >
            {isSending ? 'Sending…' : 'Send'}
          </Button>
          {!captcha && captchaState !== 'failed' && (
            <p id={hintId} className="mt-3 text-sm text-muted">
              Check the box above to send.
            </p>
          )}
          {captchaState === 'failed' && (
            <p id={hintId} className="mt-3 text-right text-sm text-muted">
              The spam check didn&apos;t load, so this form can&apos;t send.
              Email me at <EmailLink /> instead.
            </p>
          )}
          {sendState === 'error' && (
            <p role="alert" className="mt-3 text-right text-sm text-accent">
              That didn&apos;t send. Try again, or email me at <EmailLink />.
            </p>
          )}
        </div>
      </form>
    </FadeIn>
  )
}

const fieldClassName =
  'peer block w-full rounded-2xl border border-line/40 bg-surface px-6 pb-4 pt-12 text-base/6 text-ink shadow-neu-inset-sm transition focus:border-primary-text'

const labelClassName =
  'pointer-events-none absolute left-6 origin-left text-base/6 text-muted transition-all duration-200 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-ink peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-ink'

function TextArea({
  label,
  name,
  ...props
}: React.ComponentPropsWithoutRef<'textarea'> & { label: string }) {
  let id = useId()

  return (
    <div className="relative">
      <textarea
        name={name}
        id={id}
        {...props}
        placeholder=" "
        className={`${fieldClassName} resize-y`}
      />
      <label
        htmlFor={id}
        className={`${labelClassName} top-3 peer-focus:-translate-y-1 peer-[:not(:placeholder-shown)]:-translate-y-1`}
      >
        {label}
      </label>
    </div>
  )
}

function TextInput({
  label,
  name,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  let id = useId()

  return (
    <div className="relative">
      <input
        name={name}
        id={id}
        {...props}
        placeholder=" "
        className={fieldClassName}
      />
      <label
        htmlFor={id}
        className={`${labelClassName} top-1/2 -mt-3 peer-focus:-translate-y-4 peer-[:not(:placeholder-shown)]:-translate-y-4`}
      >
        {label}
      </label>
    </div>
  )
}
