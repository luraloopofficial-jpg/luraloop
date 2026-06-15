import { createClient } from 'next-sanity'
import { createImageUrlBuilder } from '@sanity/image-url'

let token = process.env.SANITY_API_READ_TOKEN || process.env.NEXT_PUBLIC_SANITY_TOKEN || process.env.SANITY_API_TOKEN
if (token === 'paste_your_secure_sanity_token_here') token = undefined

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '52zh297b',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-03-01',
  useCdn: false, // Critical: Enforce false to bypass cache and pull live stream
  token: token, // Secure read-access token
})

const builder = createImageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}
