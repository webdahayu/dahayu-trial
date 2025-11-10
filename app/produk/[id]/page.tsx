"use client";

import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { ShoppingBag, Share2, Heart, ArrowLeft, Check } from "lucide-react";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Kalung Dewi",
    price: "Rp 8.500.000",
    priceNumber: 8500000,
    category: "Kalung",
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80&auto=format&fit=crop",
    ],
    description:
      "Keindahan dewi dalam setiap detail. Kalung eksklusif yang menggabungkan keanggunan desain tradisional Bali dengan sentuhan modern yang elegan.",
    material: "Emas 24K",
    weight: "15.5 gram",
    dimensions: "45cm panjang",
    features: [
      "Emas murni 24 karat",
      "Desain eksklusif terinspirasi budaya Bali",
      "Dikerjakan oleh pengrajin berpengalaman",
      "Sertifikat keaslian",
      "Garansi seumur hidup",
      "Kotak mewah gratis",
    ],
    story:
      "Terinspirasi oleh keindahan dewi-dewi dalam mitologi Bali, kalung ini dirancang untuk memancarkan keanggunan dan kemurnian. Setiap detail dikerjakan dengan presisi tinggi oleh pengrajin master kami.",
  },
  {
    id: 2,
    name: "Anting Melati",
    price: "Rp 3.200.000",
    priceNumber: 3200000,
    category: "Anting",
    images: [
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=800&q=80&fit=crop",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=800&q=80&fit=crop",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&h=800&q=80&fit=crop",
    ],
    description:
      "Elegan seperti bunga melati yang mekar di pagi hari. Anting ini sempurna untuk acara formal maupun kasual.",
    material: "Emas 22K",
    weight: "8.2 gram",
    dimensions: "2.5cm x 1.5cm",
    features: [
      "Emas 22 karat berkualitas tinggi",
      "Desain bunga melati yang ikonik",
      "Ringan dan nyaman dipakai",
      "Sertifikat keaslian",
      "Garansi 2 tahun",
    ],
    story:
      "Melati adalah bunga yang sangat dihormati dalam budaya Indonesia. Anting ini menangkap esensi keindahan dan kesederhanaan bunga melati dalam bentuk emas murni.",
  },
  {
    id: 3,
    name: "Gelang Frangipani",
    price: "Rp 5.800.000",
    priceNumber: 5800000,
    category: "Gelang",
    images: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80&auto=format&fit=crop",
    ],
    description:
      "Pesona frangipani Bali dalam setiap detailnya. Gelang mewah yang menggabungkan keindahan bunga khas Bali dengan kemewahan emas murni.",
    material: "Emas 22K",
    weight: "12.3 gram",
    dimensions: "18cm keliling",
    features: [
      "Emas 22 karat berkualitas premium",
      "Motif bunga frangipani yang detail",
      "Desain yang nyaman di pergelangan tangan",
      "Sertifikat keaslian",
      "Garansi 3 tahun",
      "Box eksklusif",
    ],
    story:
      "Frangipani adalah bunga ikonik Bali yang melambangkan keindahan spiritual. Gelang ini menangkap esensi bunga suci tersebut dalam bentuk emas yang mengalir indah di pergelangan tangan Anda.",
  },
  {
    id: 4,
    name: "Cincin Surya",
    price: "Rp 4.500.000",
    priceNumber: 4500000,
    category: "Cincin",
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1588444650700-089e7b8b8948?w=800&q=80&auto=format&fit=crop",
    ],
    description:
      "Cahaya matahari dalam emas. Cincin yang memancarkan kehangatan dan kemewahan dengan desain yang timeless.",
    material: "Emas 24K",
    weight: "10.8 gram",
    dimensions: "Ring size adjustable",
    features: [
      "Emas murni 24 karat",
      "Desain inspired by sun rays",
      "Finishing glossy dan matte contrast",
      "Sertifikat keaslian",
      "Garansi seumur hidup",
      "Packaging mewah",
    ],
    story:
      "Terinspirasi oleh cahaya matahari yang memberikan kehidupan, cincin Surya dirancang untuk memancarkan energi positif dan kemewahan yang abadi.",
  },
  {
    id: 5,
    name: "Kalung Lotus",
    price: "Rp 9.200.000",
    priceNumber: 9200000,
    category: "Kalung",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80&auto=format&fit=crop",
    ],
    description:
      "Simbol kemurnian dan keanggunan. Kalung Lotus adalah masterpiece yang menggabungkan spiritualitas dengan kemewahan.",
    material: "Emas 24K",
    weight: "18.7 gram",
    dimensions: "50cm panjang",
    features: [
      "Emas murni 24 karat",
      "Pendant lotus yang detail dan artistik",
      "Chain premium dengan kualitas terbaik",
      "Sertifikat keaslian dan appraisal",
      "Garansi seumur hidup",
      "Luxury gift box",
    ],
    story:
      "Bunga lotus melambangkan kemurnian dan pencerahan spiritual. Kalung ini adalah representasi sempurna dari filosofi tersebut, dikerjakan dengan detail yang luar biasa oleh pengrajin master kami.",
  },
  {
    id: 6,
    name: "Gelang Permata",
    price: "Rp 12.500.000",
    priceNumber: 12500000,
    category: "Gelang",
    images: [
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80&auto=format&fit=crop",
    ],
    description:
      "Kilau permata yang mempesona. Kombinasi sempurna antara emas murni dan berlian pilihan untuk kemewahan maksimal.",
    material: "Emas 24K + Berlian",
    weight: "14.5 gram",
    dimensions: "19cm keliling",
    features: [
      "Emas 24 karat dengan berlian natural",
      "Berlian VVS clarity",
      "Setting premium dan aman",
      "Sertifikat berlian dan emas",
      "Garansi lifetime",
      "Exclusive packaging",
    ],
    story:
      "Koleksi Permata adalah puncak dari keahlian kami. Setiap berlian dipilih dengan teliti dan di-set dengan presisi tinggi untuk menghasilkan karya yang benar-benar istimewa.",
  },
  {
    id: 7,
    name: "Anting Bintang",
    price: "Rp 4.800.000",
    priceNumber: 4800000,
    category: "Anting",
    images: [
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1535556116002-6281ff3e9f35?w=800&q=80&auto=format&fit=crop",
    ],
    description:
      "Bercahaya seperti bintang di langit malam. Anting yang memancarkan elegance dan sophistication.",
    material: "Emas 22K",
    weight: "9.5 gram",
    dimensions: "3cm x 2cm",
    features: [
      "Emas 22 karat premium quality",
      "Desain star-inspired yang modern",
      "Comfortable untuk pemakaian sepanjang hari",
      "Sertifikat keaslian",
      "Garansi 2 tahun",
      "Premium gift box",
    ],
    story:
      "Terinspirasi oleh keindahan bintang yang berkilauan di langit malam Bali, anting Bintang dirancang untuk membuat pemakainya bersinar dengan percaya diri.",
  },
  {
    id: 8,
    name: "Cincin Engagement",
    price: "Rp 15.000.000",
    priceNumber: 15000000,
    category: "Cincin",
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&h=800&q=80&fit=crop",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=800&q=80&fit=crop",
      "https://images.unsplash.com/photo-1611652022419-a9419f74343a?w=800&h=800&q=80&fit=crop",
    ],
    description:
      "Lambang cinta abadi. Cincin pertunangan yang sempurna untuk momen spesial Anda dengan desain yang timeless dan elegant.",
    material: "Emas 24K + Berlian",
    weight: "11.2 gram",
    dimensions: "Ring size custom",
    features: [
      "Emas murni 24 karat",
      "Center stone: Berlian 0.5 carat",
      "Side stones: Berlian accent",
      "Clarity: VVS1",
      "Custom engraving gratis",
      "Sertifikat internasional",
      "Garansi seumur hidup",
      "Luxury presentation box",
    ],
    story:
      "Cincin Engagement kami adalah simbol dari komitmen cinta yang abadi. Setiap cincin dibuat khusus dengan perhatian penuh terhadap detail, untuk menjadi saksi dari momen terindah dalam hidup Anda.",
  },
];

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState(0);
  const [liked, setLiked] = useState(false);

  const product = products.find((p) => p.id === parseInt(params.id as string));

  if (!product) {
    return (
      <div className="min-h-screen bg-dark flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-cream mb-4">Produk tidak ditemukan</h1>
          <button
            onClick={() => router.push("/koleksi")}
            className="text-gold hover:underline"
          >
            Kembali ke Koleksi
          </button>
        </div>
      </div>
    );
  }

  const handleWhatsAppOrder = () => {
    const message =
      `Halo, saya tertarik dengan produk:\n\n` +
      `Nama: ${product.name}\n` +
      `Harga: ${product.price}\n` +
      `Material: ${product.material}\n` +
      `Berat: ${product.weight}\n\n` +
      `Mohon informasi lebih lanjut.`;

    const phoneNumber = "6281234567890"; // Replace with actual WhatsApp number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <main className="min-h-screen bg-dark">
      <Navbar />

      {/* Back Button */}
      <div className="pt-32 pb-8 max-w-7xl mx-auto px-6 md:px-12">
        <motion.button
          whileHover={{ x: -5 }}
          onClick={() => router.push("/koleksi")}
          className="flex items-center gap-2 text-cream/70 hover:text-gold transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Kembali ke Koleksi
        </motion.button>
      </div>

      {/* Product Detail */}
      <section className="relative pb-20">
        <div className="grain-overlay" />

        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Main Image */}
              <div className="relative mb-6 rounded-2xl overflow-hidden border border-gold/20">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-[600px] object-cover"
                />

                {/* Favorite Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setLiked(!liked)}
                  className="absolute top-6 right-6 w-12 h-12 bg-dark/80 backdrop-blur-sm rounded-full border border-gold/30 flex items-center justify-center"
                >
                  <Heart
                    className={`w-6 h-6 ${
                      liked ? "fill-gold text-gold" : "text-cream"
                    }`}
                  />
                </motion.button>
              </div>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-3 gap-4">
                {product.images.map((image, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setSelectedImage(index)}
                    className={`relative rounded-xl overflow-hidden border-2 transition-all ${
                      selectedImage === index ? "border-gold" : "border-gold/20"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-32 object-cover"
                    />
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div>
                <span className="inline-block px-4 py-2 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm mb-4">
                  {product.category}
                </span>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-gradient mb-4">
                  {product.name}
                </h1>
                <p className="text-cream/70 text-lg leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Price */}
              <div className="py-6 border-y border-gold/20">
                <div className="text-3xl font-bold text-gold">
                  {product.price}
                </div>
                <p className="text-cream/60 text-sm mt-2">
                  Harga sudah termasuk pajak
                </p>
              </div>

              {/* Specifications */}
              <div className="space-y-3">
                <h3 className="text-xl font-serif font-bold text-cream">
                  Spesifikasi
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-dark-lighter p-4 rounded-xl border border-gold/10">
                    <div className="text-cream/60 text-sm mb-1">Material</div>
                    <div className="text-cream font-semibold">
                      {product.material}
                    </div>
                  </div>
                  <div className="bg-dark-lighter p-4 rounded-xl border border-gold/10">
                    <div className="text-cream/60 text-sm mb-1">Berat</div>
                    <div className="text-cream font-semibold">
                      {product.weight}
                    </div>
                  </div>
                  <div className="bg-dark-lighter p-4 rounded-xl border border-gold/10 col-span-2">
                    <div className="text-cream/60 text-sm mb-1">Dimensi</div>
                    <div className="text-cream font-semibold">
                      {product.dimensions}
                    </div>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3">
                <h3 className="text-xl font-serif font-bold text-cream">
                  Keunggulan
                </h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <Check className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                      <span className="text-cream/80">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-4 pt-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleWhatsAppOrder}
                  className="flex-1 bg-gold text-dark px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-3 hover:bg-gold-light transition-colors shadow-lg shadow-gold/20"
                >
                  <ShoppingBag className="w-6 h-6" />
                  Beli via WhatsApp
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-14 h-14 bg-dark-lighter border border-gold/30 rounded-full flex items-center justify-center hover:border-gold transition-colors"
                >
                  <Share2 className="w-6 h-6 text-gold" />
                </motion.button>
              </div>

              {/* Story */}
              <div className="bg-linear-to-br from-gold/5 to-transparent p-6 rounded-2xl border border-gold/10">
                <h3 className="text-xl font-serif font-bold text-cream mb-3">
                  Cerita Produk
                </h3>
                <p className="text-cream/70 leading-relaxed">{product.story}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
