import Link from 'next/link'
import { sanityClient } from '@/lib/sanity/client'
import { postsQuery } from '@/lib/sanity/queries'

export const revalidate = 60 // ISR: atualiza a cada 60s

type Post = {
  _id: string
  title: string
  slug: string
  excerpt: string
  publishedAt: string
}

export default async function BlogPage() {
  const posts = await sanityClient.fetch<Post[]>(postsQuery)

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight mb-8">Blog</h1>

      <ul className="space-y-8">
        {posts.map((post) => (
          <li key={post._id}>
            <Link href={`/blog/${post.slug}`} >
              <article>
                <h3 className="mb-2 text-xl">{post.title}</h3>
                <p className="mb-2 text-sm text-zinc-600">{post.excerpt}</p>
                <p className="text-sm text-zinc-500">
                  {new Date(post.publishedAt).toLocaleDateString('en-US')}
                </p>
              </article>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}