import { Metadata } from "next";

export const siteConfig = {
  name: "Dahayu Jewelry",
  description:
    "Perhiasan emas dan perak berkualitas tinggi dengan desain elegan khas Bali. Koleksi anting, cincin, dan bros handmade untuk penampilan istimewa Anda.",
  url: "https://dahayujewelry.com",
  logo: "/logo.png",
  phone: "+62 857-2336-8060",
  email: "info@dahayujewelry.com",
  address: "Bali, Indonesia",
  social: {
    instagram: "https://instagram.com/dahayujewelry",
    whatsapp: "https://wa.me/6285723368060",
  },
};

export function generateSEO({
  title,
  description,
  image,
  url,
  keywords = [],
  type = "website",
}: {
  title: string;
  description: string;
  image?: string;
  url: string;
  keywords?: string[];
  type?: "website" | "article";
}): Metadata {
  const imageUrl =
    image || `${siteConfig.url}/hero-section/landscape/dahayu-landscape-1.jpg`;

  return {
    title,
    description,
    keywords: [...keywords, "dahayu jewelry", "perhiasan bali", "jewelry bali"],
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "id_ID",
      type,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export function generateProductMetadata({
  name,
  description,
  image,
  price,
  category,
  id,
}: {
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
  id: number;
}) {
  return generateSEO({
    title: `${name} | Dahayu Jewelry`,
    description:
      description ||
      `${name} - Perhiasan ${category} berkualitas tinggi dari Dahayu Jewelry`,
    image: image || undefined,
    url: `${siteConfig.url}/produk/${id}`,
    keywords: [name, category, "perhiasan", "jewelry", "bali", "emas", "perak"],
    type: "website",
  });
}

export function generateArticleMetadata({
  title,
  description,
  image,
  slug,
  publishedTime,
  author,
}: {
  title: string;
  description: string;
  image?: string;
  slug: string;
  publishedTime?: string;
  author?: string;
}) {
  return generateSEO({
    title: `${title} | Blog Dahayu Jewelry`,
    description,
    image,
    url: `${siteConfig.url}/blog/${slug}`,
    type: "article",
  });
}
