'use client'

import { useState, useId, useEffect } from 'react'

import { Button } from '@/components/Button'
import { FadeIn } from '@/components/FadeIn'
import ReCAPTCHA from 'react-google-recaptcha'

import type { ChangeEvent } from 'react'

type FieldChangeEvent = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

interface FormValues {
  name: string
  email: string
  message: string
}

export function ContactForm() {
  const captchaHintId = useId()
  const [captcha, setCaptcha] = useState<string | null>()

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

  useEffect(() => {
    setFormValues({ name: '', email: '', message: '' })
  }, [])

  return (
    <>
      <FadeIn className="lg:order-last">
        <form
          action="https://getform.io/f/1af672b8-86ea-4fb2-9964-74701ee53c0c"
          method="POST"
        >
          <h2 className="font-display text-base font-semibold text-neutral-950 dark:text-white">
            Email Me
          </h2>
          <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50 dark:bg-white/5">
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
            <ReCAPTCHA
              sitekey={String(siteKey)}
              className="mb-4"
              onChange={setCaptcha}
            />
            <Button
              type="submit"
              disabled={!captcha}
              aria-describedby={captcha ? undefined : captchaHintId}
              className="flex h-14 w-72 items-center justify-center rounded-xl disabled:cursor-not-allowed disabled:opacity-40"
            >
              Send
            </Button>
            {!captcha && (
              <p id={captchaHintId} className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
                Check the box above to send.
              </p>
            )}
          </div>
        </form>
      </FadeIn>
    </>
  )
}

function TextArea({
  label,
  name,
  ...props
}: React.ComponentPropsWithoutRef<'textarea'> & { label: string }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <textarea
        name={name}
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full resize-y border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl dark:border-neutral-700 dark:text-white dark:focus:border-white"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-6 top-12 -mt-9 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-1 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-1 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950 dark:peer-focus:text-white dark:peer-[:not(:placeholder-shown)]:text-white"
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
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        name={name}
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl dark:border-neutral-700 dark:text-white dark:focus:border-white"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950 dark:peer-focus:text-white dark:peer-[:not(:placeholder-shown)]:text-white"
      >
        {label}
      </label>
    </div>
  )
}
