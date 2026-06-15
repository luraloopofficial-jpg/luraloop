import { client, urlFor } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Footer from '@/components/Footer'
import CTA from '@/components/CTA'
import { notFound } from 'next/navigation'

export async function generateMetadata({ params }) {
  const { slug } = params
  const query = `*[_type == "post" && slug.current == $slug][0]`
  const post = await client.fetch(query, { slug }, { perspective: 'published', next: { revalidate: 60 } })
  if (!post) return { title: 'Post Not Found' }
  return {
    title: `${post.title} | LuraLoop Blog`,
    description: post.excerpt || 'Read this article on LuraLoop.',
  }
}

export default async function BlogPostPage({ params }) {
  const { slug } = params
  
  const query = `*[_type == "post" && slug.current == $slug][0] {
    title,
    mainImage,
    publishedAt,
    body,
    excerpt,
    categories[]->{ title }
  }`
  
  const post = await client.fetch(query, { slug }, { perspective: 'published', next: { revalidate: 60 } })
  
  if (!post) {
    notFound()
  }

  const imageUrl = post.mainImage ? urlFor(post.mainImage).width(1200).url() : null
  const date = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    : 'Recently Published'

  // PortableText components for custom styling
  const ptComponents = {
    types: {
      image: ({ value }) => {
        if (!value?.asset?._ref) {
          return null
        }
        return (
          <div className="relative w-full h-96 my-8 rounded-2xl overflow-hidden border border-zinc-800">
            <Image
              src={urlFor(value).width(800).url()}
              alt={value.alt || 'Blog Image'}
              fill
              className="object-cover"
            />
          </div>
        )
      }
    },
    marks: {
      link: ({children, value}) => {
        const rel = !value.href?.startsWith('/') ? 'noreferrer noopener' : undefined
        return (
          <a href={value.href} rel={rel} className="text-orange-500 hover:text-orange-400 underline transition-colors">
            {children}
          </a>
        )
      },
      strong: ({children}) => <strong className="font-bold text-white">{children}</strong>,
    },
    block: {
      h1: ({children}) => <h1 className="text-4xl font-bold text-white mt-12 mb-6">{children}</h1>,
      h2: ({children}) => <h2 className="text-3xl font-bold text-white mt-10 mb-5 tracking-tight">{children}</h2>,
      h3: ({children}) => <h3 className="text-2xl font-bold text-white mt-8 mb-4">{children}</h3>,
      h4: ({children}) => <h4 className="text-xl font-bold text-white mt-6 mb-3">{children}</h4>,
      normal: ({children}) => <p className="text-zinc-300 leading-relaxed mb-6 text-[17px]">{children}</p>,
      blockquote: ({children}) => <blockquote className="border-l-4 border-orange-500 bg-orange-500/5 pl-6 py-4 italic text-zinc-400 my-8 rounded-r-xl">{children}</blockquote>,
    },
    list: {
      bullet: ({children}) => <ul className="list-disc pl-6 text-zinc-300 mb-6 space-y-3">{children}</ul>,
      number: ({children}) => <ol className="list-decimal pl-6 text-zinc-300 mb-6 space-y-3">{children}</ol>,
    },
    listItem: {
      bullet: ({children}) => <li className="pl-2">{children}</li>,
      number: ({children}) => <li className="pl-2">{children}</li>,
    }
  }

  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white flex flex-col selection:bg-orange-500/30 selection:text-white">
      
      <article className="flex-1 pt-12 md:pt-16 pb-20 px-6 max-w-3xl mx-auto w-full">
        <Link href="/#" className="inline-flex items-center gap-2 text-zinc-400 hover:text-orange-500 transition-colors mb-12 text-sm font-medium group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to LuraLoop Core
        </Link>

        {/* Header */}
        <header className="mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-orange-500 text-xs font-bold tracking-widest uppercase bg-orange-500/10 px-4 py-1.5 rounded-full border border-orange-500/20">
              {post.categories?.[0]?.title || 'Architecture & Engine'}
            </span>
            <span className="text-zinc-500 text-sm font-medium">{date}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
            {post.title}
          </h1>
          {post.excerpt && (
            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              {post.excerpt}
            </p>
          )}
        </header>

        {/* Hero Image */}
        {imageUrl && (
          <div className="relative w-full h-[300px] md:h-[450px] rounded-3xl overflow-hidden mb-16 border border-zinc-800 shadow-2xl">
            <Image
              src={imageUrl}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent opacity-60" />
          </div>
        )}

        {/* Body Content */}
        <div className="prose prose-invert max-w-none">
          {post.body ? (
            <PortableText value={post.body} components={ptComponents} />
          ) : (
            <p className="text-zinc-400 italic">No content available for this post.</p>
          )}
        </div>
      </article>

      <CTA />
      <Footer />
    </main>
  )
}
