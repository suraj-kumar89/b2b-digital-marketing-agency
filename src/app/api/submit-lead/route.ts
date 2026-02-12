import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const {
      firstname,
      email,
      website,
      services,
      growth_blocker,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_term,
      utm_content
    } = body

    const { error } = await supabase.from('leads').insert([
      {
        full_name: firstname,
        email,
        website,
        services,
        growth_blocker,
        utm_source,
        utm_medium,
        utm_campaign,
        utm_term,
        utm_content,
      },
    ])

    // Duplicate email handling
    if (error) {
      if (error.code === '23505') {
        return NextResponse.json(
          { error: 'EMAIL_EXISTS' },
          { status: 409 }
        )
      }
      throw error
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json(
      { error: 'SERVER_ERROR' },
      { status: 500 }
    )
  }
}
