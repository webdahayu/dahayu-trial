import { Metadata } from "next";
import { products } from "@/app/data/products";
import { generateProductMetadata } from "@/lib/seo";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = products.find((p) => p.id === parseInt(params.id));

  if (!product) {
    return {
      title: "Produk Tidak Ditemukan | Dahayu Jewelry",
      description: "Produk yang Anda cari tidak ditemukan.",
    };
  }

  return generateProductMetadata({
    name: product.name,
    description: product.description || "",
    image: product.images?.[0] || "",
    price: parseFloat(product.price.replace(/[^0-9]/g, "")),
    category: product.category,
    id: product.id,
  });
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
