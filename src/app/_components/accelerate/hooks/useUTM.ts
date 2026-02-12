'use client'

import { useEffect, useState } from 'react'

type UTM = {
  utm_source: string
  utm_medium: string
  utm_campaign: string
  utm_term: string
  utm_content: string
}

export default function useUTM() {
  const [utm, setUtm] = useState<UTM>({
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    utm_term: '',
    utm_content: '',
  })

  useEffect(() => {
    if (typeof window === 'undefined') return

    const params = new URLSearchParams(window.location.search)

    const keys: (keyof UTM)[] = [
      'utm_source',
      'utm_medium',
      'utm_campaign',
      'utm_term',
      'utm_content',
    ]

    const newUtm: UTM = {
      utm_source: '',
      utm_medium: '',
      utm_campaign: '',
      utm_term: '',
      utm_content: '',
    }

    keys.forEach((key) => {
      const value = params.get(key)

      if (value) {
        localStorage.setItem(key, value)
      }

      newUtm[key] = localStorage.getItem(key) || ''
    })

    setUtm(newUtm)
  }, [])

  return utm
}
