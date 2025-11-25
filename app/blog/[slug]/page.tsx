"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { client } from "@/lib/sanity";
import Link from "next/link";
import { PortableText } from "@portabletext/react";

interface Post {
  title: string;
  slug: { current: string };
  excerpt: string;
  publishedAt: string;
  author: string;
  body: any;
  mainImage?: {
    asset: {
      url: string;
    };
    alt?: string;
  };
}

const portableTextComponents = {
  types: {
    image: ({ value }: any) => {
      const imageUrl = value?.asset?.url;

      if (!imageUrl) {
        console.log("Image value:", value);
        return null;
      }

      return (
        <div className="relative w-full h-[400px] rounded-xl my-8 overflow-hidden">
          <Image
            src={imageUrl}
            alt={value.alt || ""}
            fill
            className="object-cover"
            sizes="100vw"
            loading="lazy"
          />
        </div>
      );
    },
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-4xl font-serif font-light text-cream mb-6 mt-8">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-3xl font-serif font-light text-cream mb-4 mt-6">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl font-serif font-light text-cream mb-3 mt-5">
        {children}
      </h3>
    ),
    normal: ({ children }: any) => (
      <p className="text-cream/80 text-lg leading-relaxed mb-6">{children}</p>
    ),
  },
};

export default function BlogPostPage() {
  const params = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      const query = `*[_type == "post" && slug.current == $slug][0] {
        title,
        slug,
        excerpt,
        publishedAt,
        author,
        body[] {
          ...,
          _type == "image" => {
            ...,
            asset->
          }
        },
        mainImage {
          asset->{url},
          alt
        }
      }`;

      const data = await client.fetch(query, { slug: params.slug });
      setPost(data);
      setLoading(false);
    };

    if (params.slug) {
      fetchPost();
    }
  }, [params.slug]);

  if (loading) {
    return (
      <main className="min-h-screen bg-dark flex items-center justify-center">
        <div className="text-cream/60">Loading...</div>
      </main>
    );
  }

  if (!post) {
    return (
      <main className="min-h-screen bg-dark flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-serif font-light text-cream mb-4">
            Artikel tidak ditemukan
          </h1>
          <Link
            href="/blog"
            className="text-gold hover:text-gold-light transition-colors"
          >
            Kembali ke Blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-dark relative overflow-hidden">
      <Navbar />

      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -80, 0], x: [0, 50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/20 rounded-full blur-3xl"
        />
      </div>

      {/* Article */}
      <article className="relative pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          {/* Back Button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-cream/60 hover:text-gold transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Blog</span>
          </Link>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-serif font-light text-gradient mb-6">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex items-center gap-6 text-cream/50">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>
                  {new Date(post.publishedAt).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>{post.author}</span>
              </div>
            </div>
          </motion.div>

          {/* Featured Image */}
          {post.mainImage?.asset?.url && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mb-12 rounded-2xl overflow-hidden border border-gold/20 h-[500px]"
            >
              <Image
                src={post.mainImage.asset.url}
                alt={post.mainImage.alt || post.title}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </motion.div>
          )}

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="prose prose-invert prose-gold max-w-none"
          >
            <PortableText
              value={post.body}
              components={portableTextComponents}
            />
          </motion.div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
