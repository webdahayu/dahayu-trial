import { Metadata } from "next";
import { client } from "@/lib/sanity";
import { generateArticleMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      title,
      excerpt,
      publishedAt,
      author,
      mainImage {
        asset->{url},
        alt
      }
    }`,
    { slug }
  );

  if (!post) {
    return {
      title: "Post Not Found | Dahayu Jewelry",
      description: "The blog post you're looking for doesn't exist.",
    };
  }

  return generateArticleMetadata({
    title: post.title,
    description: post.excerpt || post.title,
    image: post.mainImage?.asset?.url,
    slug: slug,
    publishedTime: post.publishedAt,
    author: post.author || "Dahayu Jewelry",
  });
}

export async function generateStaticParams() {
  const posts = await client.fetch<Array<{ slug: { current: string } }>>(`
    *[_type == "post"] {
      slug
    }
  `);

  return posts.map((post) => ({
    slug: post.slug.current,
  }));
}

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
