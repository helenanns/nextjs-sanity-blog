import { groq } from 'next-sanity'

export const postsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    mainImage,
    author->{
      name,
      "slug": slug.current,
      avatar
    },
    categories[]->{
      title,
      "slug": slug.current
    }
  }
`

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    mainImage,
    body,
    seo,
    author->{
      name,
      "slug": slug.current,
      avatar
    },
    categories[]->{
      title,
      "slug": slug.current
    }
  }
`