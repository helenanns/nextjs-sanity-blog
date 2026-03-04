import { notFound } from "next/navigation";
import { sanityClient } from "@/lib/sanity/client";
import { postBySlugQuery } from "@/lib/sanity/queries";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function PostPage({ params }: Props) {
  const { slug } = await params;

  if (!slug) notFound();

  const post = await sanityClient.fetch(postBySlugQuery, { slug });

  if (!post) notFound();

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-semibold">{post.title}</h1>
    </main>
  );
}