// app/api/partner-register/route.js – Server Action (Next.js 13 App Router)
import { NextResponse } from 'next/server'

// Server‑side validation helpers
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(req) {
  try {
    const payload = await req.json()

    // Basic validation (mirrors client‑side)
    const errors = {}
    if (!payload.fullName?.trim()) errors.fullName = 'Full name required.'
    if (!payload.companyName?.trim()) errors.companyName = 'Company name required.'
    if (!EMAIL_REGEX.test(payload.corporateEmail)) errors.corporateEmail = 'Valid corporate email required.'
    if (payload.website && !/^https?:\/\/.+/.test(payload.website)) errors.website = 'Invalid URL.'
    if (!payload.volume) errors.volume = 'Estimated volume required.'
    if (!payload.description?.trim() || payload.description.trim().length < 10) errors.description = 'Description too short.'

    if (Object.keys(errors).length) {
      return NextResponse.json({ errors }, { status: 400 })
    }

    // Build a readable HTML email body
    const html = `
      <h2>🛠️ New Agency Partner Application</h2>
      <ul style="list-style:none; padding:0;">
        <li><strong>Full Name:</strong> ${payload.fullName}</li>
        <li><strong>Company Name:</strong> ${payload.companyName}</li>
        <li><strong>Corporate Email:</strong> ${payload.corporateEmail}</li>
        <li><strong>Website / LinkedIn:</strong> ${payload.website || 'N/A'}</li>
        <li><strong>Estimated Monthly Volume:</strong> ${payload.volume}</li>
        <li><strong>Outsourcing Needs:</strong><br/>${payload.description.replace(/\n/g, '<br/>')}</li>
        <li><strong>Submitted At:</strong> ${new Date().toISOString()}</li>
      </ul>
    `

    // ---------- Resend integration ----------
    // • Set RESEND_API_KEY in .env.local – never expose to the browser.
    const resendKey = process.env.RESEND_API_KEY
    if (!resendKey) {
      console.error('Resend API key missing')
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'no-reply@luraloop.com', // must be verified in Resend dashboard
        to: ['luraloop.official@gmail.com'],
        subject: 'Agency Partner Registration – LuraLoop',
        html,
      }),
    })

    const result = await response.json()
    if (!response.ok) {
      console.error('Resend error', result)
      return NextResponse.json({ error: 'Email dispatch failed', details: result }, { status: 502 })
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err) {
    console.error('Partner registration error', err)
    return NextResponse.json({ error: 'Unexpected server error' }, { status: 500 })
  }
}
