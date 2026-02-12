'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function useUTM() {
  const params = useSearchParams()

  const [utm, setUtm] = useState({
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    utm_term: '',
    utm_content: '',
  })

  useEffect(() => {
    if (!params) return

    const keys = [
      'utm_source',
      'utm_medium',
      'utm_campaign',
      'utm_term',
      'utm_content',
    ]

    const newUtm: any = {}

    keys.forEach((key) => {
      const value = params.get(key)

      if (value) {
        localStorage.setItem(key, value)
      }

      newUtm[key] = localStorage.getItem(key) || ''
    })

    setUtm(newUtm)
  }, [params])

  return utm
}
