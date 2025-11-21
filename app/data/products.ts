export interface Product {
  id: number;
  name: string;
  price: string;
  priceNumber: number;
  category: string;
  image?: string;
  images?: string[];
  description: string;
  material: string;
  weight: string;
  dimensions?: string;
  features?: string[];
  story?: string;
}

export const products: Product[] = [
  // Earrings (Anting/Subeng)
  {
    id: 1,
    name: "Blooming Lotus Earrings Gold",
    price: "Rp. 785.000,-",
    priceNumber: 785000,
    category: "Anting",
    image: "/Blooming Lotus Earring Gold/IMG_6374.JPG",
    images: [
      "/Blooming Lotus Earring Gold/IMG_6374.JPG",
      "/Blooming Lotus Earring Gold/IMG_E8121.JPG",
      "/Blooming Lotus Earring Gold/photo1697616014 (8).jpeg",
    ],
    description:
      "Keanggunan lotus yang mekar perlahan simbol pencerahan, ketenangan, dan cahaya batin yang tumbuh dari dalam diri. Desain kelopak lotus yang lembut menciptakan siluet feminin dan elegan, menghadirkan kehangatan emas yang mewah namun tetap subtle.",
    material: "Silver 925 dengan lapisan 18K Gold Plated",
    weight: "——— gram",
    dimensions: "——— cm",
    features: [
      "Silver 925 + 18K Gold Plated",
      "Detail kelopak lotus yang presisi",
      "Handmade oleh pengrajin Bali",
      "Ringan & nyaman dipakai sepanjang hari",
      "Box eksklusif Dahayu",
    ],
    story:
      "Lotus tumbuh dari air tenang, mekar perlahan tanpa tergesa. Ia adalah simbol bahwa keindahan sejati lahir dari kedalaman hati dari ketenangan, dari proses, dari pencerahan kecil yang hadir setiap hari. Blooming Lotus Earrings Gold menangkap momen itu: kelopak yang terbuka lembut, cahaya yang muncul dari dalam, dan energi feminin yang tenang.\n\n✨ Pengalaman yang Dirasakan Pemakai\n• Memberikan rasa tenang & mindful\n• Menambah aura lembut dan feminin\n• Wajah terlihat lebih cerah dan halus\n• Banyak pemakai merasa lebih percaya diri tanpa berusaha keras\n\nMengapa Memilih Blooming Lotus Earrings Gold\nAnting ini cocok bagi Anda yang ingin membawa makna pencerahan dan ketenangan dalam keseharian. Lotus yang mekar lembut menjadi simbol perjalanan diri yang elegan dan penuh harapan.\n\nPerawatan & Garansi\nSebagai bentuk apresiasi, Anda mendapatkan 1x layanan pembersihan atau replating, berlaku 1 tahun sejak tanggal pembelian, (dengan kartu perawatan valid).",
  },
  {
    id: 2,
    name: "Lotus Blooming Earrings Silver",
    price: "Rp. 475.000,-",
    priceNumber: 475000,
    category: "Anting",
    image: "/Lotus Blooming Earring Silver/IMG_6740.jpg",
    images: [
      "/Lotus Blooming Earring Silver/IMG_6740.jpg",
      "/Lotus Blooming Earring Silver/IMG_6733.jpg",
      "/Lotus Blooming Earring Silver/IMG_6729.jpg",
      "/Lotus Blooming Earring Silver/HAL06628 copy1.jpg",
    ],
    description:
      "Lotus versi silver simbol kejernihan, kesucian, dan energi lembut yang menenangkan. Desainnya minimalis namun bermakna, menonjolkan lekuk kelopak lotus yang jernih dan bersih.",
    material: "Silver 925",
    weight: "——— gram",
    dimensions: "——— cm",
    features: [
      "Silver 925 premium",
      "Desain elegan & minimalis",
      "Handmade oleh pengrajin Bali",
      "Cocok untuk daily clean aesthetic",
      "Box eksklusif Dahayu",
    ],
    story:
      "Lotus Blooming Silver merepresentasikan kejernihan hati. Silver memberi makna tambahan: clarity, purity, dan ketenangan batin. Anting ini menjadi simbol bagi perempuan yang memilih untuk tetap jernih di tengah dunia yang bising lembut tetapi kuat, sederhana namun berkarakter.\n\n✨ Pengalaman yang Dirasakan Pemakai\n• Memberikan kesan bersih dan elegan\n• Membuat wajah tampak lebih fresh\n• Memberi energi tenang pada suasana hati\n• Ideal untuk tampilan minimalis yang classy\n\nMengapa Memilih Lotus Blooming Earrings Silver\nAnting ini tepat untuk Anda yang menginginkan simbol kejernihan dan ketenangan. Lotus dalam versi silver memberikan kesan lembut yang elegan, cocok untuk gaya harian maupun formal.\n\nPerawatan & Garansi\nTermasuk 1x layanan pembersihan/replating silver, berlaku 1 tahun, (dengan kartu perawatan).",
  },

  // Rings (Cincin)
  {
    id: 3,
    name: "Calla Lilis Ring",
    price: "Rp. 695.000,-",
    priceNumber: 695000,
    category: "Cincin",
    image: "/Calla Lilis Ring/IMG_5988.jpg",
    images: [
      "/Calla Lilis Ring/IMG_5988.jpg",
      "/Calla Lilis Ring/IMG_5990.jpg",
    ],
    description:
      "Lengkung calla lily yang halus lambang kemurnian, ketenangan, dan elegansi feminin. Desainnya lembut dan artistik, meniru bentuk kelopak calla lily yang ikonik.",
    material: "Silver 925 dengan lapisan 18K Gold Plated",
    weight: "——— gram",
    dimensions: "———",
    features: [
      "Silver 925 + 18K Gold Plated",
      "Desain lengkung yang lembut & anggun",
      "Handmade oleh pengrajin Bali",
      "Ringan & nyaman dipakai",
      "Box eksklusif Dahayu",
    ],
    story:
      "Calla lily adalah bunga yang dikenal sebagai simbol keanggunan murni. Lengkung kelopaknya yang sederhana namun indah mencerminkan keteduhan hati seorang perempuan. Cincin ini diciptakan untuk menghadirkan energi tersebut: anggun, tenang, dan penuh kelembutan.\n\n✨ Pengalaman Pemakai\n• Memberikan aura tenang & refined\n• Membuat tangan tampak lebih elegan\n• Banyak pemakai merasa lebih fokus & lembut\n• Cocok untuk daily elegance\n\nMengapa Memilih Calla Lilis Ring\nJika Anda menyukai keindahan yang simple namun meaningful, cincin ini adalah pilihan terbaik. Desainnya anggun, maknanya dalam, pesonanya lembut.\n\nPerawatan & Garansi\nTermasuk 1x cleaning/replating, berlaku 1 tahun, (dengan kartu valid).",
  },

  // Brooches (Bros)
  {
    id: 4,
    name: "Danayu Brooch Gold",
    price: "Rp. 935.000,-",
    priceNumber: 935000,
    category: "Bros",
    image: "/Danayu Brooch Gold/IMG_E8629.jpg",
    images: [
      "/Danayu Brooch Gold/IMG_E8454.jpg",
      "/Danayu Brooch Gold/IMG_E8629.jpg",
      "/Danayu Brooch Gold/IMG_E8455.jpg",
    ],
    description:
      "Energi feminin yang mengalir lembut brooch dengan desain modern yang membawa ketenangan dan keanggunan.",
    material: "Silver 925 dengan 18K Gold Plated",
    weight: "———",
    dimensions: "———",
    features: [
      "Silver 925 + 18K Gold Plated",
      "Desain flowy yang anggun",
      "Handmade oleh pengrajin Bali",
      "Cocok untuk kebaya, blazer, dress elegan",
      "Box eksklusif Dahayu",
    ],
    story:
      '"Danayu" adalah gambaran energi perempuan yang lembut namun kuat. Desainnya yang mengalir mencerminkan hati yang bijaksana dan langkah yang penuh ketenangan. Brooch ini dibuat untuk melengkapi penampilan dengan sentuhan damai dan elegan.\n\n✨ Pengalaman Pemakai\n• Terlihat lebih dewasa & berkelas\n• Memberikan aura feminin yang calm\n• Cocok untuk event formal & traditional\n• Menambah kewibawaan tanpa terlihat keras\n\nMengapa Memilih Danayu Brooch Gold\nBrooch ini adalah pilihan tepat bagi perempuan yang ingin tampil anggun dan berkarakter, dengan sentuhan simbolik yang mendalam.\n\nPerawatan & Garansi\nTermasuk 1x cleaning/replating, berlaku 1 tahun, (dengan kartu perawatan valid).',
  },

  // Earrings (Anting/Subeng)
  {
    id: 5,
    name: "Danayu Earrings Gold",
    price: "Rp. 655.000,-",
    priceNumber: 655000,
    category: "Anting",
    image: "/Danayu Earrings Gold/HAL06680 copy1.jpg",
    images: [
      "/Danayu Earrings Gold/HAL_DAHAYU_10100.jpg",
      "/Danayu Earrings Gold/HAL06680 copy1.jpg",
      "/Danayu Earrings Gold/HAL06694 copy1.jpg",
    ],
    description:
      "Keanggunan yang mengalir lembut anting berlekuk halus yang memancarkan keindahan feminin yang natural.",
    material: "Silver 925 + 18K Gold Plated",
    weight: "———",
    dimensions: "———",
    features: [
      "Ringan, nyaman",
      "Handmade oleh pengrajin Bali",
      "Desain feminin yang halus",
      "Box eksklusif Dahayu",
      "Silver 925 + 18K Gold Plated",
    ],
    story:
      "Danayu menggambarkan energi yang lembut, mengalir, dan penuh ketenangan. Anting ini mengikuti lekuk organik yang membingkai wajah dengan indah.\n\n✨ Pengalaman Pemakai\n• Menambah aura feminin lembut\n• Wajah tampak lebih halus dan fresh\n• Memberikan rasa percaya diri natural\n• Sangat cocok untuk daily elegance\n\nMengapa Memilih Danayu Earrings Gold\nAnting ini cocok untuk Anda yang menyukai desain flowy dan feminin. Elegan tanpa berlebihan, lembut tanpa kehilangan karakter.\n\nPerawatan & Garansi\nTermasuk 1x cleaning/replating, berlaku 1 tahun, (dengan kartu valid).",
  },
  {
    id: 7,
    name: "Hanging Pucuk Earrings Gold",
    price: "Rp. 295.000,-",
    priceNumber: 295000,
    category: "Anting",
    image: "/Hanging Pucuk Ring Gold/hanging pucuk gold 1.jpg",
    images: [
      "/Hanging Pucuk Ring Gold/1.png",
      "/Hanging Pucuk Ring Gold/2.jpeg",
      "/Hanging Pucuk Ring Gold/3.jpg",
    ],
    description:
      "Simbol tunas yang sedang tumbuh menghadirkan harapan, awal baru, dan energi positif dalam setiap geraknya. Anting ini memiliki bentuk pucuk yang memanjang lembut, memberikan ilusi gerak yang anggun dan feminin saat dikenakan.",
    material: "Silver 925 dengan lapisan 18K Gold Plated",
    weight: "——— gram",
    dimensions: "——— cm",
    features: [
      "Silver 925 + lapisan 18K Gold Plated",
      "Desain tunas yang melambangkan pertumbuhan",
      "Handmade oleh pengrajin Bali",
      "Ringan dan nyaman untuk dipakai seharian",
      "Disertai box eksklusif Dahayu",
    ],
    story:
      "Pucuk adalah simbol bertumbuhnya harapan. Dari tanah yang sunyi, ia tumbuh perlahan menuju cahaya lembut, tenang, namun penuh tekad. Hanging Pucuk Earrings Gold merayakan momen-momen kecil dalam hidup yang sering kali tak terlihat: keberanian memulai, ketekunan, dan harapan baru yang muncul setiap hari. Gerak lembut anting ini mencerminkan perjalanan batin yang terus berkembang.\n\n✨ Pengalaman yang Dirasakan Pemakai\n• Memberikan aura segar & optimis sejak pertama kali dipakai\n• Membuat wajah tampak lebih panjang, halus, dan elegan\n• Banyak pemakai merasa seperti membawa energi baru dalam harinya\n• Menjadi aksesoris yang meningkatkan mood dan kepercayaan diri\n\nMengapa Memilih Hanging Pucuk Earrings Gold\nHanging Pucuk Earrings Gold cocok untuk Anda yang menyukai makna pertumbuhan dan pembaruan. Dengan kualitas Silver 925 + 18K Gold Plated dan gerak anggun yang feminin, anting ini bukan hanya mempercantik tampilan ia hadir sebagai pengingat lembut bahwa setiap hari membawa peluang baru untuk tumbuh.\n\nPerawatan & Garansi\nSebagai bentuk apresiasi, Anda berhak mendapatkan 1x layanan pembersihan atau replating (emas/silver), berlaku 1 tahun sejak tanggal pembelian. Wajib menunjukkan kartu perawatan yang valid.",
  },
  {
    id: 8,
    name: "Hanging Pucuk Earrings Silver",
    price: "Rp. 245.000,-",
    priceNumber: 245000,
    category: "Anting",
    image: "/Hanging Pucuk Ring Silver/hanging pucuk silver 1.jpg",
    images: ["/Hanging Pucuk Ring Silver/1.png"],
    description:
      "Bentuk tunas yang memanjang elegan menghadirkan kejernihan, keberanian, dan awal yang penuh harapan. Versi silver ini memancarkan kesan lebih jernih, minimalis, dan modern.",
    material: "Silver 925",
    weight: "——— gram",
    dimensions: "——— cm",
    features: [
      "Silver 925 berkualitas premium",
      "Desain simbol tumbuh & harapan",
      "Nyaman dipakai seharian",
      "Handmade oleh pengrajin Bali",
      "Box eksklusif Dahayu",
    ],
    story:
      "Hanging Pucuk Silver membawa semangat ketenangan dan kejernihan. Detail pucuk yang panjang menggambarkan tekad yang pelan, tetapi kuat seperti tunas yang dengan sabar menembus tanah menuju sinar pagi. Desain silvernya memberi makna tambahan: kejernihan niat, pikiran, dan langkah hidup.\n\n✨ Pengalaman yang Dirasakan Pemakai\n• Memberikan kesan fresh & clean\n• Cocok bagi pemakai yang ingin tampil minimalis namun bermakna\n• Wajah terlihat lebih cerah dan tegas\n• Meninggalkan rasa optimis dan ringan sepanjang hari\n\nMengapa Memilih Hanging Pucuk Earrings Silver\nAnting ini sempurna untuk Anda yang ingin membawa makna pertumbuhan dengan tampilan yang modern dan jernih. Silver 925 menghadirkan kesan sederhana namun kuat menjadikannya teman setia dalam perjalanan menuju versi diri yang lebih baik.\n\nPerawatan & Garansi\nSebagai bentuk apresiasi, Anda berhak mendapatkan 1x layanan pembersihan atau silver replating, berlaku 1 tahun sejak pembelian. Menggunakan kartu perawatan.",
  },
  {
    id: 9,
    name: "Pucuk Earrings Gold",
    price: "Rp. 395.000,-",
    priceNumber: 395000,
    category: "Anting",
    image: "/Pucuk Earring Gold/IMG_0029.JPG",
    images: [
      "/Pucuk Earring Gold/2.jpg",
      "/Pucuk Earring Gold/IMG_0029.JPG",
      "/Pucuk Earring Gold/3.png",
    ],
    description:
      "Tunas kecil yang baru tumbuh simbol awal baru, semangat yang diperbarui, dan harapan yang lembut. Desainnya pendek, simpel, tetapi sarat makna. Bentuk pucuk kecil ini menjadi simbol pertumbuhan yang paling murni.",
    material: "Silver 925 dengan lapisan 18K Gold Plated",
    weight: "——— gram",
    dimensions: "———",
    features: [
      "Silver 925 + 18K Gold Plated",
      "Simbol pertumbuhan & harapan",
      "Ukuran kecil cocok untuk daily wear",
      "Tidak berat di telinga",
      "Handmade oleh pengrajin Bali",
    ],
    story:
      'Pucuk Earrings Gold adalah bentuk paling sederhana dari pertumbuhan tunas kecil yang baru muncul dari tanah. Ia lembut, kecil, namun membawa seluruh harapan dan potensi di masa depan. Desain ini mewakili keberanian untuk memulai: memulai mimpi baru, kebiasaan baru, atau bab hidup baru.\n\n✨ Pengalaman yang Dirasakan Pemakai\n• Memberikan aura fresh & ringan\n• Membuat tampilan terlihat youthfull dan cerah\n• Sangat nyaman dipakai harian\n• Pemakai merasa lebih optimis setiap kali mengenakannya\n\nMengapa Memilih Pucuk Earrings Gold\nPucuk Earrings Gold cocok bagi Anda yang menginginkan perhiasan dengan makna "awal baru". Dengan desain yang sederhana namun sarat simbol, anting ini menjadi pengingat lembut bahwa pertumbuhan selalu dimulai dari langkah kecil.\n\nPerawatan & Garansi\nTermasuk 1x layanan pembersihan atau replating dalam 1 tahun sejak pembelian, dengan menunjukkan kartu perawatan valid.',
  },
  {
    id: 10,
    name: "Pucuk Earrings Silver",
    price: "Rp. 345.000,-",
    priceNumber: 345000,
    category: "Anting",
    image: "/Pucuk Earring Silver/IMG_0620~photo.JPG",
    images: [
      "/Pucuk Earring Silver/IMG_0620~photo.JPG",
      "/Pucuk Earring Silver/IMG_0616~photo.jpg",
      "/Pucuk Earring Silver/2.png",
    ],
    description:
      "Simbol awal baru yang jernih dan sederhana seperti tunas kecil yang muncul dengan ketenangan dan harapan. Versi silver menghadirkan kesan lebih minimalis, bersih, dan lembut. Bentuk tunas kecilnya memancarkan makna pertumbuhan yang pelan namun pasti.",
    material: "Silver 925",
    weight: "——— gram",
    dimensions: "———",
    features: [
      "Silver 925 premium",
      "Simbol pertumbuhan & pembaruan",
      "Ringan dan nyaman",
      "Handmade oleh pengrajin Bali",
      "Box eksklusif Dahayu",
    ],
    story:
      'Tunas atau "pucuk" adalah lambang awal kehidupan yang paling murni. Kecil, jernih, dan menyimpan potensi besar di dalam diamnya. Pucuk Earrings Silver terinspirasi dari makna itu: tentang setiap awal yang sederhana namun berharga, tentang pertumbuhan yang tidak selalu harus terlihat besar, dan tentang keberanian memilih langkah pertama. Silver memberi kesan kejernihan menjadikannya perhiasan yang menyimbolkan niat baik dan langkah baru dengan hati yang bersih.\n\n✨ Pengalaman yang Dirasakan Pemakai\n• Memberikan aura sederhana, bersih, dan fresh\n• Telinga terasa ringan sehingga nyaman untuk daily wear\n• Menambah kesan lembut pada wajah\n• Memberikan energi "awal baru" yang optimis\n\nMengapa Memilih Pucuk Earrings Silver\nAnting ini cocok untuk Anda yang menyukai tampilan minimalis dengan makna mendalam. Makna pucuk yang jernih dipadukan dengan material Silver 925 premium menjadikannya simbol awal baru yang siap menemani keseharian Anda.\n\nPerawatan & Garansi\nTermasuk 1x layanan pembersihan atau replating silver, berlaku 1 tahun sejak tanggal pembelian. Wajib menunjukkan kartu perawatan valid.',
  },
  {
    id: 11,
    name: "Puspa Earrings Gold",
    price: "Rp. 595.000,-",
    priceNumber: 595000,
    category: "Anting",
    image: "/Puspa Earrings Gold/IMG_0482.JPG",
    images: [
      "/Puspa Earrings Gold/HAL_DAHAYU_10055.jpg",
      "/Puspa Earrings Gold/HAL06899.JPG",
      "/Puspa Earrings Gold/HAL06698 copy.jpg",
    ],
    description:
      "Keindahan bunga yang mekar lembut anting yang memancarkan aura feminin, hangat, dan sangat elegan. Bentuk kelopaknya dirancang untuk memberikan tampilan wajah yang lembut dan bercahaya. Emas 18K memberikan kesan klasik yang timeless.",
    material: "Silver 925 dengan lapisan 18K Gold Plated",
    weight: "——— gram",
    dimensions: "———",
    features: [
      "Silver 925 + 18K Gold Plated",
      "Detail kelopak yang feminin",
      "Cocok untuk acara formal & daily elegan",
      "Handmade oleh pengrajin Bali",
      "Box eksklusif Dahayu",
    ],
    story:
      "Puspa Earrings Gold terinspirasi dari bunga yang mekar sempurna simbol cinta yang lembut, kebijaksanaan perempuan, dan keanggunan yang matang. Desain kelopaknya dirancang untuk menonjolkan kelembutan wajah pemakainya, menghadirkan kesan hangat dan ramah. Ia adalah karya yang menangkap momen puncak keindahan: saat bunga mekar penuh, tanpa terburu-buru, tanpa keraguan.\n\n✨ Pengalaman yang Dirasakan Pemakai\n• Wajah terlihat lebih lembut dan bercahaya\n• Memberikan aura feminin yang natural\n• Menambah kepercayaan diri secara halus\n• Memberi sentuhan kemewahan tanpa berlebihan\n\nMengapa Memilih Puspa Earrings Gold\nAnting ini adalah pilihan tepat untuk Anda yang ingin tampil lembut, elegan, dan feminin. Puspa Earrings Gold bukan hanya perhiasan melainkan simbol keindahan yang telah berkembang penuh, membawa hangatnya cinta dan kebijaksanaan dalam setiap gerak.\n\nPerawatan & Garansi\nTermasuk 1x layanan pembersihan atau replating, berlaku 1 tahun sejak tanggal pembelian. Memerlukan kartu perawatan valid.",
  },
  {
    id: 12,
    name: "Kasih Earrings Silver",
    price: "Rp. 635.000,-",
    priceNumber: 635000,
    category: "Anting",
    image: "/Kasih Earring Silver 925/IMG_9051~photo.jpg",
    images: [
      "/Kasih Earring Silver 925/3.png",
      "/Kasih Earring Silver 925/1.png",
      "/Kasih Earring Silver 925/4.png",
    ],
    description:
      "Simbol ketulusan dan kelembutan hati anting yang memancarkan kehangatan, kesederhanaan, dan cinta yang jujur. Desain Kasih yang minimalis menghadirkan bentuk lembut yang nyaman dilihat, cocok untuk pemakai yang menyukai keindahan yang tenang dan tidak berlebihan.",
    material: "Silver 925",
    weight: "——— gram",
    dimensions: "———",
    features: [
      "Silver 925 premium",
      "Desain lembut dan minimalis",
      "Nyaman untuk dipakai harian",
      "Handmade oleh pengrajin Bali",
      "Box eksklusif Dahayu",
    ],
    story:
      'Kasih Earrings Silver terinspirasi dari bentuk kasih sayang yang sederhana: tulus, jernih, tidak berlebihan namun sangat berarti. Desainnya yang tenang mencerminkan energi cinta yang tidak harus tampak besar untuk dirasakan. Cinta yang lembut, hangat, dan diterima dengan penuh ketulusan. Anting ini mengingatkan pemakainya bahwa kebaikan dan cinta kecil yang diberikan setiap hari adalah bentuk keindahan yang paling nyata.\n\n✨ Pengalaman yang Dirasakan Pemakai\n• Membawa rasa hangat dan lembut dalam tampilan\n• Menambah kesan manis tanpa terlihat berlebihan\n• Banyak pemakai merasa lebih "ramah" dan approachable\n• Ideal untuk daily wear, kerja, atau aktivitas santai\n\nMengapa Memilih Kasih Earrings Silver\nKasih Earrings Silver cocok untuk Anda yang ingin tampil lembut dan tulus. Anting ini memadukan desain minimalis Silver 925 dengan makna ketulusan hati, menjadikannya simbol kehangatan dalam setiap langkah Anda.\n\nPerawatan & Garansi\nTermasuk 1x pembersihan atau replating silver, berlaku 1 tahun sejak pembelian, dengan kartu perawatan valid.',
  },
  {
    id: 13,
    name: "Sachi Klasik Earrings Gold",
    price: "Rp. 436.000,-",
    priceNumber: 436000,
    category: "Anting",
    image: "/Sachi Klasik Earrings Gold/IMG_9057~photo-full.jpg",
    images: [
      "/Sachi Klasik Earrings Gold/1.jpeg",
      "/Sachi Klasik Earrings Gold/1.png",
      "/Sachi Klasik Earrings Gold/2.png",
    ],
    description:
      'Keindahan klasik yang memancarkan kebahagiaan lembut anting dengan desain timeless yang menguatkan rasa percaya diri pemakainya. "Sachi" bermakna kebahagiaan murni. Versi klasik ini menghadirkan bentuk sederhana yang tetap berkarakter.',
    material: "Silver 925 dengan lapisan 18K Gold Plated",
    weight: "——— gram",
    dimensions: "———",
    features: [
      "Silver 925 + 18K Gold Plated",
      "Desain timeless & elegan",
      "Cocok untuk daily sophisticated look",
      "Handmade oleh pengrajin Bali",
      "Box eksklusif Dahayu",
    ],
    story:
      'Sachi Klasik Earrings Gold adalah perhiasan yang lahir dari makna kebahagiaan sederhana. Tidak berlebihan, tidak mencolok namun selalu memancarkan kehangatan dan cahaya positif. Desainnya yang klasik membuat anting ini mudah dipadukan dengan gaya apa pun, menjadikannya pendamping setia untuk hari-hari aktif ataupun momen spesial. Sachi adalah simbol bahwa kebahagiaan sering kali hadir dalam hal-hal kecil yang kita syukuri setiap hari.\n\n✨ Pengalaman yang Dirasakan Pemakai\n• Memberi aura tenang dan penuh self-love\n• Tampilan lebih rapi, elegan, dan berkarakter\n• Menambah kepercayaan diri dalam momen penting\n• Banyak pemakai merasa lebih "glowing" secara natural\n\nMengapa Memilih Sachi Klasik Earrings Gold\nAnting ini sempurna bagi Anda yang menyukai keanggunan sederhana namun bermakna. Sachi Klasik Earrings Gold menghadirkan simbol kebahagiaan murni yang menemani langkah Anda halus, lembut, dan penuh kehangatan.\n\nPerawatan & Garansi\nTermasuk 1x pembersihan atau replating, berlaku 1 tahun sejak tanggal pembelian. dengan kartu perawatan valid.',
  },
  {
    id: 14,
    name: "Sri Earrings Gold",
    price: "Rp. 325.000,-",
    priceNumber: 325000,
    category: "Anting",
    image: "/Sri Earring Gold/HAL06911.jpg",
    images: [
      "/Sri Earring Gold/HAL06911.jpg",
      "/Sri Earring Gold/HAL06912.jpg",
      "/Sri Earring Gold/HAL_DAHAYU_10004.jpg",
    ],
    description:
      "Simbol kemakmuran dan rasa syukur anting berbentuk padi Bali yang menghadirkan makna kelimpahan dalam setiap langkah. Desain Sri memadukan bentuk bulir padi yang elegan dengan lapisan emas lembut, menghasilkan tampilan hangat dan berkarakter.",
    material: "Silver 925 dengan lapisan 18K Gold Plated",
    weight: "——— gram",
    dimensions: "——— cm",
    features: [
      "Silver 925 + 18K Gold Plated",
      "Detail bulir padi khas Bali",
      "Ringan dan nyaman untuk dipakai lama",
      "Handmade oleh pengrajin Bali",
      "Box eksklusif Dahayu",
    ],
    story:
      'Dalam tradisi Bali, padi adalah simbol berkah: makanan, kehidupan, dan kelimpahan. Sri Earrings Gold lahir dari kekayaan makna itu sebuah penghormatan kepada alam, tradisi, dan rasa syukur atas hal-hal kecil yang menopang hidup. Desain bulir padi yang memanjang melambangkan perjalanan hidup yang subur: tumbuh, berbuah, dan memberi manfaat bagi sekeliling. Memakainya berarti membawa "energi kelimpahan" ke dalam keseharian lembut, hangat, dan penuh rasa syukur.\n\n✨ Pengalaman yang Dirasakan Pemakai\n• Memberikan aura hangat dan elegan\n• Membuat wajah terlihat lebih panjang dan berkarakter\n• Menghadirkan energi syukur yang halus\n• Ideal untuk acara tradisional, formal, maupun daily classy look\n\nMengapa Memilih Sri Earrings Gold\nAnting ini cocok untuk Anda yang ingin menghadirkan makna kelimpahan dan rasa syukur dalam setiap langkah. Desainnya yang khas Bali memberikan sentuhan budaya yang elegan, menjadikannya simbol keberkahan yang menemani hari-hari Anda.\n\nPerawatan & Garansi\nTermasuk 1x pembersihan atau replating, berlaku 1 tahun sejak pembelian, dengan kartu perawatan valid.',
  },
  {
    id: 15,
    name: "Subeng Calla Lilis Gold Pink Gemstone",
    price: "Rp. 775.000,-",
    priceNumber: 775000,
    category: "Anting",
    image: "/Subeng Calla Lilis Gold Pink/IMG_9866~photo-full.jpg",
    images: [
      "/Subeng Calla Lilis Gold Pink/3.png",
      "/Subeng Calla Lilis Gold Pink/2.png",
      "/Subeng Calla Lilis Gold Pink/1.png",
    ],
    description:
      "Keanggunan calla lily yang lembut dipadukan dengan gemstone pink yang manis simbol kemurnian, femininitas, dan keteduhan hati. Subeng tradisional Bali dipadukan dengan bentuk calla lily yang modern, menghasilkan karya artistik yang kaya budaya sekaligus elegan.",
    material: "Silver 925 dengan lapisan 18K Gold Plated",
    weight: "——— gram",
    dimensions: "———",
    features: [
      "Silver 925 + 18K Gold Plated",
      "Sentuhan gemstone pink yang feminin",
      "Menggabungkan tradisi Bali & estetika modern",
      "Handmade oleh pengrajin terampil",
      "Box eksklusif Dahayu",
    ],
    story:
      'Subeng Calla Lilis Gold Pink Gemstone terinspirasi dari kesucian calla lily bunga yang melambangkan kemurnian hati, keteduhan, dan keanggunan lembut. Dipadukan dengan bentuk subeng Bali, ia menciptakan karya yang merayakan dua energi:\n• energi tradisi,\n• energi feminin modern.\nGemstone pink memberikan nuansa manis dan hangat, menambah sentuhan emosional pada desain yang sudah penuh makna.\n\n✨ Pengalaman yang Dirasakan Pemakai\n• Membawa aura lembut, manis, dan feminin\n• Cocok untuk acara resmi dan budaya\n• Memberikan pancaran elegan yang subtle\n• Banyak pemakai merasakan perhiasan ini sebagai "penyejuk hati"\n\nMengapa Memilih Subeng Calla Lilis Gold Pink Gemstone\nKarya ini cocok untuk Anda yang ingin tampil lembut namun tetap berkarakter. Dengan makna keteduhan hati dan keanggunan calla lily, subeng ini menjadi simbol kecantikan perempuan yang lembut, anggun, dan penuh kehangatan.\n\nPerawatan & Garansi\nTermasuk 1x layanan pembersihan atau replating, berlaku 1 tahun sejak pembelian. Kartu perawatan wajib ditunjukkan.',
  },
  {
    id: 16,
    name: "Subeng Calla Lilis Gold White Gemstone",
    price: "Rp. 755.000,-",
    priceNumber: 755000,
    category: "Anting",
    image: "/Subeng Calla Lilis Gold White/1.png",
    images: [
      "/Subeng Calla Lilis Gold White/17-1-768x768.png",
      "/Subeng Calla Lilis Gold White/1.png",
      "/Subeng Calla Lilis Gold White/2.png",
    ],
    description:
      "Kemurnian dan keanggunan dalam satu karya perpaduan subeng tradisional Bali dengan lekuk calla lily serta sentuhan white gemstone yang jernih. Perhiasan ini menghadirkan kombinasi budaya dan estetika modern, memancarkan kedamaian serta kelembutan hati yang elegan.",
    material: "Silver 925 dengan lapisan 18K Gold Plated",
    weight: "——— gram",
    dimensions: "———",
    features: [
      "Silver 925 + lapisan 18K Gold Plated",
      "White gemstone yang melambangkan kemurnian & keteduhan",
      "Paduan subeng Bali dan gaya modern",
      "Handmade oleh pengrajin Bali",
      "Box eksklusif Dahayu",
    ],
    story:
      'Calla lily adalah bunga yang dikenal sebagai simbol kemurnian, cinta yang tenang, dan keteduhan hati. Ketika dipadukan dengan bentuk subeng Bali, terciptalah energi baru: perpaduan tradisi dan kelembutan modern. White gemstone menambahkan sentuhan spiritual, melambangkan kejernihan pikiran dan hati yang terang. Subeng Calla Lilis Gold White Gemstone adalah karya yang membawa ketenangan, kecantikan, dan keanggunan dalam bentuk yang paling elegan.\n\n✨ Pengalaman yang Dirasakan Pemakai\n• Memberikan aura tenang, bersih, dan anggun\n• Wajah terlihat lebih cerah dan refined\n• Membersihkan mood dan menghadirkan rasa damai\n• Banyak pemakai merasa perhiasan ini memberi "energi jernih" di hari sibuk\n\nMengapa Memilih Subeng Calla Lilis Gold White Gemstone\nPilihan ideal bagi Anda yang menyukai keanggunan lembut berpadu dengan simbol kemurnian. Subeng ini menjadi representasi kecantikan batin yang jernih, sekaligus penghormatan kepada tradisi Bali yang kaya makna.\n\nPerawatan & Garansi\nTermasuk 1x pembersihan atau replating, berlaku 1 tahun sejak pembelian, dengan kartu perawatan valid.',
  },
  {
    id: 17,
    name: "Subeng Gantari Gold",
    price: "Rp. 785.000,-",
    priceNumber: 785000,
    category: "Anting",
    image: "/Subeng Gantari Gold/IMG_0342~photo.JPG",
    images: [
      "/Subeng Gantari Gold/3.png",
      "/Subeng Gantari Gold/2.png",
      "/Subeng Gantari Gold/IMG_7469~photo.JPG",
    ],
    description:
      'Simbol cahaya batin yang memancar subeng dengan desain berkilau lembut yang menghadirkan pesona klasik dan modern sekaligus. "Gantari" berarti cahaya. Karena itu, subeng ini dirancang untuk memancarkan keanggunan yang halus namun nyata.',
    material: "Silver 925 dengan lapisan 18K Gold Plated",
    weight: "——— gram",
    dimensions: "———",
    features: [
      "Silver 925 + 18K Gold Plated",
      "Desain yang memancarkan kesan bercahaya",
      "Elegan untuk acara formal dan tradisional",
      "Handmade oleh pengrajin Bali",
      "Box eksklusif Dahayu",
    ],
    story:
      "Subeng Gantari terinspirasi dari sinar cahaya yang muncul perlahan, menghadirkan kilau yang halus dan tidak berlebihan. Dalam budaya Bali, cahaya melambangkan pencerahan, harapan, dan kejernihan batin. Subeng ini diciptakan sebagai simbol perjalanan perempuan menuju versi dirinya yang lebih bercahaya, lebih yakin, dan lebih penuh keanggunan. Lapisan emas 18K memberikan aura hangat seperti kilau matahari pagi yang lembut.\n\n✨ Pengalaman yang Dirasakan Pemakai\n• Menambah kesan elegan yang bercahaya\n• Membuat penampilan terlihat lebih dewasa dan refined\n• Menghadirkan rasa percaya diri yang lembut\n• Memberikan aksen tradisional-modern yang seimbang\n\nMengapa Memilih Subeng Gantari Gold\nCocok bagi Anda yang ingin membawa simbol cahaya batin dalam penampilan. Subeng Gantari Gold memadukan estetika tradisional dengan aura modern, menciptakan kilau lembut yang menyertai setiap langkah Anda.\n\nPerawatan & Garansi\nTermasuk 1x layanan pembersihan atau replating, berlaku 1 tahun sejak pembelian, dengan kartu perawatan valid.",
  },
  {
    id: 18,
    name: "Subeng Gantari Silver",
    price: "Rp. 725.000,-",
    priceNumber: 725000,
    category: "Anting",
    image: "/subeng Gantari silver/4.jpg",
    images: [
      "/subeng Gantari silver/2.png",
      "/subeng Gantari silver/4.jpg",
      "/subeng Gantari silver/3.png",
    ],
    description:
      "Kilau kejernihan yang memancar subeng silver yang mencerminkan cahaya lembut, ketenangan, dan energi yang jernih. Versi silver menghadirkan kesan lebih modern, bersih, dan subtle.",
    material: "Silver 925",
    weight: "——— gram",
    dimensions: "———",
    features: [
      "Silver 925 premium",
      "Desain bercahaya lembut",
      "Tampilan clean & modern",
      "Handmade oleh pengrajin Bali",
      "Box eksklusif Dahayu",
    ],
    story:
      'Subeng Gantari Silver menggambarkan cahaya yang jernih bukan yang menyilaukan, tetapi yang menenangkan hati. Silver memberikan kesan purity dan clarity, menjadikannya simbol pencerahan batin yang lebih subtil. Desain subeng yang lembut membawa energi tradisional, sementara warna silver menghadirkan nuansa kontemporer.\n\n✨ Pengalaman yang Dirasakan Pemakai\n• Membuat tampilan bersih, tenang, dan elegan\n• Memberikan aura "calm glow"\n• Menambah kesan rapi dan modern\n• Cocok untuk gaya harian maupun acara formal\n\nMengapa Memilih Subeng Gantari Silver\nIdeal untuk Anda yang ingin membawa simbol cahaya jernih dalam penampilan. Subeng Gantari Silver memberikan harmoni antara tradisi dan modernitas, menghasilkan kilau lembut yang indah dan bermakna.\n\nPerawatan & Garansi\nTermasuk 1x layanan pembersihan atau replating silver, berlaku 1 tahun sejak pembelian, dengan kartu perawatan valid.',
  },
  {
    id: 19,
    name: "Subeng Calla Lilis Silver",
    price: "Rp. 625.000,-",
    priceNumber: 625000,
    category: "Anting",
    image: "/Subeng Calla Lilis Silver/1.png",
    images: [
      "/Subeng Calla Lilis Silver/1.png",
      "/Subeng Calla Lilis Silver/2.png",
      "/Subeng Calla Lilis Silver/3.png",
      "/Subeng Calla Lilis Silver/First-Product-launch-5-1-768x768.png",
    ],
    description:
      "Kemurnian calla lily dalam versi silver subeng tradisional Bali yang dipadukan dengan keanggunan bunga calla lily, menghadirkan simbol kemurnian, kejernihan, dan ketenangan hati. Versi silver ini memancarkan kesan lebih minimalis, bersih, dan modern.",
    material: "Silver 925",
    weight: "——— gram",
    dimensions: "———",
    features: [
      "Silver 925 premium",
      "Desain calla lily yang lembut & anggun",
      "Menggabungkan tradisi Bali & estetika modern",
      "Handmade oleh pengrajin terampil",
      "Box eksklusif Dahayu",
    ],
    story:
      "Subeng Calla Lilis Silver membawa makna yang sama dengan versi gold-nya: kemurnian hati dan keanggunan lembut namun dengan sentuhan kejernihan yang lebih dalam. Silver melambangkan clarity dan purity, memperkuat simbol calla lily yang sudah sarat makna. Subeng ini adalah perpaduan sempurna antara tradisi Bali yang kaya akan budaya dan estetika modern yang minimalis.\n\n✨ Pengalaman yang Dirasakan Pemakai\n• Memberikan aura bersih, tenang, dan anggun\n• Wajah terlihat lebih cerah dan fresh\n• Membawa rasa damai dan keteduhan hati\n• Cocok untuk gaya harian minimalis maupun acara formal\n\nMengapa Memilih Subeng Calla Lilis Silver\nSubeng ini sempurna untuk Anda yang menyukai keanggunan lembut dengan sentuhan kejernihan. Dengan material Silver 925 premium dan desain yang kaya makna, subeng ini menjadi simbol kecantikan batin yang jernih dan tenang.\n\nPerawatan & Garansi\nTermasuk 1x layanan pembersihan atau replating silver, berlaku 1 tahun sejak pembelian, dengan kartu perawatan valid.",
  },
  {
    id: 21,
    name: "Tear Drop Gold",
    price: "Rp. 635.000,-",
    priceNumber: 635000,
    category: "Anting",
    image: "/tear drop gold/28.png",
    images: [
      "/tear drop gold/28.png",
      "/tear drop gold/31.png",
      "/tear drop gold/40.png",
    ],
    description:
      "Simbol kejernihan hati tetesan air yang melambangkan keheningan, keikhlasan, dan kedalaman perasaan. Desain Tear Drop Gold menghadirkan bentuk tetesan yang halus dan minimalis, memancarkan aura lembut namun penuh makna.",
    material: "Silver 925 dengan lapisan 18K Gold Plated",
    weight: "——— gram",
    dimensions: "———",
    features: [
      "Silver 925 + 18K Gold Plated",
      "Desain minimalis & elegan",
      "Sangat ringan dan nyaman",
      "Handmade oleh pengrajin Bali",
      "Box eksklusif Dahayu",
    ],
    story:
      "Tetesan air adalah simbol kejernihan hati: sederhana, jujur, dan tidak pernah palsu. Ia jatuh bukan untuk melemah, tetapi untuk melepaskan agar hati menjadi lebih lapang. Tear Drop Gold terinspirasi dari momen ketika hati menemukan ketenangannya sendiri. Lengkung tetesannya mengingatkan bahwa keikhlasan adalah bentuk kekuatan paling lembut, namun paling murni. Desain ini dibuat untuk menemani perjalanan batin, menjadi simbol keseimbangan antara perasaan dan keheningan.\n\n✨ Pengalaman yang Dirasakan Pemakai\n• Menghadirkan rasa tenang dan grounded\n• Memberikan tampilan wajah yang lebih rapi dan elegan\n• Membuat pemakai merasa lebih mindful\n• Sangat cocok untuk tampilan harian yang simple namun refined\n\nMengapa Memilih Tear Drop Gold\nTear Drop Gold cocok bagi Anda yang menyukai makna keikhlasan dan kejernihan dalam keseharian. Desainnya yang sederhana namun penuh simbol menjadikannya pendamping yang manis dan bermakna di hari-hari sibuk maupun tenang.\n\nPerawatan & Garansi\nTermasuk 1x layanan pembersihan atau replating, berlaku 1 tahun sejak pembelian, dengan kartu perawatan valid.",
  },
  {
    id: 20,
    name: "Tunjung Blooming Earring Gold",
    price: "Rp. 755.000,-",
    priceNumber: 755000,
    category: "Anting",
    image: "/Tunjung Blooming Earring Gold/IMG_6729.jpg",
    images: [
      "/Tunjung Blooming Earring Gold/IMG_6749.jpg",
      "/Tunjung Blooming Earring Gold/IMG_6754.jpg",
      "/Tunjung Blooming Earring Gold/IMG_6895.jpg",
    ],
    description:
      'Keindahan teratai yang mekar lembut simbol pencerahan, ketenangan, dan perjalanan jiwa yang menemukan cahayanya. "Tunjung" berarti teratai dalam bahasa Bali, bunga yang tumbuh dari air tenang dan mekar penuh kedamaian.',
    material: "Silver 925 dengan lapisan 18K Gold Plated",
    weight: "——— gram",
    dimensions: "———",
    features: [
      "Silver 925 + 18K Gold Plated",
      "Desain lotus/teratai yang penuh simbol pencerahan",
      "Tampilan feminin & elegan",
      "Handmade oleh pengrajin Bali",
      "Box eksklusif Dahayu",
    ],
    story:
      'Tunjung Blooming terinspirasi dari teratai yang mekar pelan simbol kebangkitan batin, ketenangan, dan cahaya yang muncul dari dalam diri. Bunga teratai selalu tumbuh di air yang tenang. Ia mekar bukan dengan tergesa, tetapi dengan kesadaran penuh akan waktunya sendiri. Anting ini menangkap makna tersebut: bahwa pencerahan bukan datang dari luar, tetapi lahir perlahan dari dalam diri. Desain kelopak yang lembut dan detail yang anggun menciptakan karya yang bukan hanya indah, tetapi juga penuh energi spiritual yang menenangkan.\n\n✨ Pengalaman yang Dirasakan Pemakai\n• Membawa aura tenang dan elegan\n• Menambah kesan feminin yang lembut\n• Banyak pemakai merasa lebih "mindful" ketika mengenakannya\n• Menjadikan wajah tampak lebih cerah dan berkarakter\n\nMengapa Memilih Tunjung Blooming Earring Gold\nAnting ini cocok untuk Anda yang ingin membawa simbol pencerahan dan ketenangan dalam keseharian. Tunjung Blooming bukan hanya mempercantik tetapi mengingatkan Anda bahwa setiap perempuan memiliki cahayanya sendiri, yang mekar pada waktunya.\n\nPerawatan & Garansi\nTermasuk 1x layanan pembersihan atau replating, berlaku 1 tahun sejak pembelian, menggunakan kartu perawatan valid.',
  },
  {
    id: 22,
    name: "Tear Drop Silver",
    price: "Rp. 585.000,-",
    priceNumber: 585000,
    category: "Anting",
    image: "/tear drop Silver/29.png",
    images: [
      "/tear drop Silver/29.png",
      "/tear drop Silver/30.png",
      "/tear drop Silver/post dahayu 2023 (4).png",
    ],
    description:
      "Kejernihan tetesan air dalam versi silver simbol keheningan, keikhlasan, dan kedalaman perasaan yang murni. Desain Tear Drop Silver menghadirkan bentuk tetesan yang halus dan minimalis dengan kesan lebih jernih dan modern.",
    material: "Silver 925",
    weight: "——— gram",
    dimensions: "———",
    features: [
      "Silver 925 premium",
      "Desain minimalis & elegan",
      "Sangat ringan dan nyaman",
      "Handmade oleh pengrajin Bali",
      "Box eksklusif Dahayu",
    ],
    story:
      "Tear Drop Silver membawa makna yang sama dengan versi gold-nya: kejernihan hati yang sederhana, jujur, dan tidak pernah palsu namun dengan sentuhan kemurnian yang lebih dalam. Silver melambangkan purity dan clarity, memperkuat simbol tetesan air yang sudah sarat makna. Desain ini merepresentasikan momen ketika hati menemukan kedamaiannya yang paling jernih, seperti tetesan embun pagi yang bening dan menenangkan.\n\n✨ Pengalaman yang Dirasakan Pemakai\n• Menghadirkan rasa tenang dan grounded\n• Memberikan tampilan wajah yang lebih rapi dan elegan\n• Membuat pemakai merasa lebih mindful dan jernih\n• Sangat cocok untuk tampilan harian yang simple, clean, dan refined\n\nMengapa Memilih Tear Drop Silver\nTear Drop Silver sempurna untuk Anda yang menyukai makna keikhlasan dan kejernihan dengan tampilan yang minimalis dan modern. Desainnya yang sederhana namun penuh simbol menjadikannya pendamping yang manis dan bermakna di hari-hari sibuk maupun tenang.\n\nPerawatan & Garansi\nTermasuk 1x layanan pembersihan atau replating silver, berlaku 1 tahun sejak pembelian, dengan kartu perawatan valid.",
  },

  {
    id: 23,
    name: "Blooming Lotus Ring Gold",
    price: "Rp. 725.000,-",
    priceNumber: 725000,
    category: "Cincin",
    image: "/Danayu Ring Gold/HAL_DAHAYU_10111.jpg",
    images: [
      "/Danayu Ring Gold/HAL_DAHAYU_10111.jpg",
      "/Danayu Ring Gold/HAL_DAHAYU_10109.jpg",
      "/Danayu Ring Gold/HAL06897 copy.jpg",
      "/Danayu Ring Gold/HAL06892 copy.jpg",
      "/Danayu Ring Gold/HAL06738 copy.jpg",
    ],
    description:
      "Keanggunan lotus yang mekar dalam bentuk cincin simbol pencerahan, ketenangan, dan cahaya batin. Desain kelopak lotus yang lembut menciptakan siluet feminin dan elegan di jari Anda.",
    material: "Silver 925 dengan lapisan 18K Gold Plated",
    weight: "——— gram",
    dimensions: "Ring size custom",
    features: [
      "Silver 925 + 18K Gold Plated",
      "Detail kelopak lotus yang presisi",
      "Handmade oleh pengrajin Bali",
      "Cocok untuk daily wear & special occasion",
      "Box eksklusif Dahayu",
    ],
    story:
      "Blooming Lotus Ring Gold membawa makna yang sama dengan anting versinya: ketenangan, pencerahan, dan keindahan yang tumbuh dari dalam. Cincin ini adalah pengingat lembut bahwa setiap hari adalah kesempatan untuk mekar lebih indah.\n\n✨ Pengalaman Pemakai\n• Memberikan rasa tenang & mindful\n• Membuat tangan terlihat lebih elegan\n• Cocok untuk berbagai gaya: casual, formal, traditional\n• Banyak pemakai merasa lebih grounded dan percaya diri\n\nMengapa Memilih Blooming Lotus Ring Gold\nCincin ini sempurna untuk Anda yang ingin membawa makna pencerahan dalam keseharian. Desainnya timeless dan dapat dipadukan dengan perhiasan lainnya.\n\nPerawatan & Garansi\nTermasuk 1x cleaning/replating, berlaku 1 tahun, (dengan kartu valid).",
  },
  {
    id: 24,
    name: "Pucuk Ring Gold",
    price: "Rp. 385.000,-",
    priceNumber: 385000,
    category: "Cincin",
    image: "/Pucuk Ring Gold/HAL06749 copy.jpg",
    images: [
      "/Pucuk Ring Gold/1.png",
      "/Pucuk Ring Gold/HAL06749 copy.jpg",

      "/Pucuk Ring Gold/2.png",
    ],
    description:
      "Cincin bertema tunas kecil yang melambangkan pertumbuhan, harapan, dan keberanian memulai sesuatu yang baru. Desainnya lembut dan halus, menampilkan pucuk yang tampak seperti baru muncul dari tanah kecil namun penuh potensi.",
    material: "Silver 925 dengan lapisan 18K Gold Plated",
    weight: "——— gram",
    dimensions: "———",
    features: [
      "Silver 925 + 18K Gold Plated",
      "Desain simbol pertumbuhan",
      "Nyaman dipakai seharian",
      "Handmade oleh pengrajin Bali",
      "Kotak eksklusif Dahayu",
    ],
    story:
      'Setiap pertumbuhan dimulai dari pucuk kecil sederhana, lembut, dan penuh harapan. Pucuk Ring Gold merayakan momen-momen kecil itu: keberanian mengambil langkah pertama, memilih tujuan baru, atau memulai babak hidup dengan hati yang lebih lapang. Lapisan emas 18K memberikan kesan hangat dan penuh optimisme, menjadikan cincin ini simbol awal baru yang penuh cahaya.\n\n✨ Pengalaman yang Dirasakan Pemakai\n• Memberikan rasa segar & optimis secara instan\n• Membuat tangan terlihat lebih elegan\n• Menjadi pengingat lembut bahwa setiap proses butuh waktu\n• Banyak pemakai merasa cincin ini membawa "energi positif" sepanjang hari\n\nMengapa Memilih Pucuk Ring Gold\nCincin ini cocok untuk Anda yang ingin membawa makna pertumbuhan dalam keseharian. Dengan desain yang halus dan simbolis, ia menjadi teman perjalanan yang menguatkan langkah Anda menuju versi diri yang lebih baik.\n\nPerawatan & Garansi\nGratis 1x layanan pembersihan atau replating, berlaku 1 tahun sejak pembelian. Menggunakan kartu perawatan valid.',
  },
  {
    id: 25,
    name: "Pucuk Ring Silver",
    price: "Rp. 335.000,-",
    priceNumber: 335000,
    category: "Cincin",
    image: "/Pucuk Ring Silver/1.png",
    images: [
      "/Pucuk Ring Silver/1.png",
      "/Pucuk Ring Silver/2.png",
      "/Pucuk Ring Silver/3.png",
    ],
    description:
      "Cincin bernuansa pucuk yang jernih dan minimalis simbol niat baru, keheningan, dan pertumbuhan yang lembut. Versi silver menghadirkan kesan clean, modern, dan sangat subtle.",
    material: "Silver 925",
    weight: "——— gram",
    dimensions: "———",
    features: [
      "Silver 925 premium",
      "Desain minimalis & penuh makna",
      "Tahan lama dan ringan dipakai",
      "Handmade oleh pengrajin Bali",
      "Box eksklusif Dahayu",
    ],
    story:
      "Pucuk Ring Silver adalah representasi awal yang paling jernih niat baik, langkah kecil, atau keputusan lembut yang mengubah hidup secara bertahap. Bentuk ring ini menggambarkan ketenangan yang muncul ketika kita memulai sesuatu dengan hati yang bersih. Silver memberi sentuhan kejernihan, menjadikannya perhiasan yang cocok untuk momen introspektif atau memulai bab baru.\n\n✨ Pengalaman yang Dirasakan Pemakai\n• Memberikan rasa clean dan ringan pada tampilan tangan\n• Membuat pemakai merasa lebih fokus & tenang\n• Menambah estetika minimalis pada style harian\n• Serasi untuk mix-and-match\n\nMengapa Memilih Pucuk Ring Silver\nCocok untuk Anda yang menginginkan cincin dengan makna jernih dan sederhana. Pucuk Ring Silver menjadi representasi niat baik yang selalu menemani langkah Anda sebuah simbol pertumbuhan tanpa tergesa-gesa.\n\nPerawatan & Garansi\nTermasuk 1x layanan pembersihan atau replating silver, berlaku 1 tahun sejak pembelian. dengan kartu perawatan.",
  },
  {
    id: 26,
    name: "Puspa Ring Gold",
    price: "Rp. 355.000,-",
    priceNumber: 355000,
    category: "Cincin",
    image: "/Puspa Ring Gold/IMG_0118.JPG",
    images: [
      "/Puspa Ring Gold/HAL_DAHAYU_10061.jpg",
      "/Puspa Ring Gold/IMG_0118.JPG",

      "/Puspa Ring Gold/HAL_DAHAYU_10063.jpg",
    ],
    description:
      "Cincin bernuansa bunga mekar simbol cinta yang lembut, keindahan jiwa, dan keanggunan yang matang. Dengan desain kelopak yang terbuka indah, cincin ini membawa pesona klasik yang tak lekang waktu.",
    material: "Silver 925 dengan lapisan 18K Gold Plated",
    weight: "——— gram",
    dimensions: "———",
    features: [
      "Silver 925 + 18K Gold Plated",
      "Detail kelopak presisi dan artistik",
      "Nyaman dipakai sehari-hari",
      "Handmade oleh pengrajin Bali",
      "Box eksklusif Dahayu",
    ],
    story:
      'Puspa Ring Gold menggambarkan keindahan yang telah mekar sepenuhnya cinta yang matang, hati yang hangat, dan jiwa yang lembut. Kelopaknya yang terbuka menghadirkan simbol penerimaan, kedewasaan, dan kecantikan yang tumbuh dari proses panjang. Cincin ini dirancang untuk menjadi pengingat bahwa keindahan sejati adalah ketika seorang perempuan menerima dirinya apa adanya, dan membiarkan hatinya mekar dengan tenang.\n\n✨ Pengalaman yang Dirasakan Pemakai\n• Memberikan rasa anggun & lembut\n• Membuat tangan terlihat lebih berkelas\n• Memberi kepercayaan diri yang lebih matang\n• Banyak pemakai merasakan cincin ini sebagai simbol "kedewasaan hati"\n\nMengapa Memilih Puspa Ring Gold\nCincin ini cocok bagi Anda yang ingin menghadirkan keanggunan yang sudah matang keindahan yang tidak perlu ditonjolkan, namun terasa dalam setiap langkah. Puspa Ring Gold menjadi simbol bunga dalam diri Anda yang telah mekar sepenuhnya.\n\nPerawatan & Garansi\nTermasuk 1x layanan pembersihan atau replating, berlaku 1 tahun sejak pembelian. Kartu perawatan wajib ditunjukkan.',
  },
  {
    id: 27,
    name: "Sachi Klasik Ring Gold",
    price: "Rp. 375.000,-",
    priceNumber: 375000,
    category: "Cincin",
    image: "/Sachi Klasik Ring Gold/HAL06718.jpg",
    images: [
      "/Sachi Klasik Ring Gold/HAL06825 copy.jpg",
      "/Sachi Klasik Ring Gold/HAL06718.jpg",

      "/Sachi Klasik Ring Gold/HAL06826 copy.jpg",
    ],
    description:
      "Cincin dengan desain klasik yang memancarkan kebahagiaan murni lembut, elegan, dan penuh ketenangan. Bentuknya sederhana namun penuh pesona, cocok untuk pemakai yang menyukai keanggunan tanpa drama.",
    material: "Silver 925 dengan lapisan 18K Gold Plated",
    weight: "——— gram",
    dimensions: "———",
    features: [
      "Silver 925 + 18K Gold Plated",
      "Ringan dan nyaman",
      "Desain klasik yang selalu relevan",
      "Handmade oleh pengrajin Bali",
      "Box eksklusif Dahayu",
    ],
    story:
      'Sachi berarti kebahagiaan yang tulus. Cincin ini dirancang sebagai simbol kebahagiaan yang hadir dari dalam bukan dari hal besar, tetapi dari momen sederhana yang membuat hati tersenyum. Desain klasiknya tidak pernah gagal memberikan kesan elegan dan matang, membuatnya mudah dipadukan dengan berbagai gaya hidup perempuan modern.\n\n✨ Pengalaman yang Dirasakan Pemakai\n• Menambah aura positif & kelembutan\n• Memberikan tampilan tangan yang elegan\n• Membuat pemakai merasa lebih percaya diri dalam keseharian\n• Memberikan "vibe bahagia" yang subtle namun nyata\n\nMengapa Memilih Sachi Klasik Ring Gold\nSachi Klasik Ring Gold cocok untuk Anda yang ingin membawa kebahagiaan sederhana dalam keseharian. Dengan desain timeless dan makna mendalam, cincin ini menjadi pengingat bahwa kebahagiaan sejati berasal dari hati yang tenang.\n\nPerawatan & Garansi\nTermasuk 1x layanan pembersihan atau replating, berlaku 1 tahun sejak pembelian. Kartu perawatan wajib ditunjukkan.',
  },
  {
    id: 28,
    name: "Sri Pin Gold",
    price: "Rp. 165.000,-",
    priceNumber: 165000,
    category: "Cincin",
    image: "/Sri Ring Pin/HAL06907 copy.jpg",
    images: [
      "/Sri Ring Pin/HAL06907 copy.jpg",
      "/Sri Ring Pin/HAL_DAHAYU_10034.jpg",
      "/Sri Ring Pin/HAL_DAHAYU_10043.jpg",
    ],
    description:
      "Pin bernuansa bulir padi simbol kemakmuran, rasa syukur, dan harmoni dengan alam. Sri Pin menghadirkan bentuk bulir padi yang ramping dan elegan, memberikan sentuhan makna pada busana formal maupun tradisional.",
    material: "Silver 925 dengan lapisan 18K Gold Plated",
    weight: "——— gram",
    dimensions: "———",
    features: [
      "Silver 925 + 18K Gold Plated",
      "Detail bulir padi yang simbolis",
      "Sangat cocok untuk kebaya, blazer, atau dress elegan",
      "Handmade oleh pengrajin Bali",
      "Box eksklusif Dahayu",
    ],
    story:
      'Sri Pin Gold terinspirasi dari nilai-nilai padi dalam budaya Bali: kesuburan, keberkahan, dan rasa syukur yang mendalam. Bentuk pin yang anggun mencerminkan kelimpahan yang tidak berisik seperti bulir padi yang merunduk saat berisi, simbol kerendahan hati dan kebijaksanaan. Pin ini adalah karya yang membawa pesan: "Semakin tumbuh, semakin sederhana hati kita."\n\n✨ Pengalaman yang Dirasakan Pemakai\n• Memberikan tampilan elegan & dewasa\n• Menambah kesan rapi dan berwibawa\n• Banyak pemakai merasakan aura "tenang dan bijaksana"\n• Sangat cocok sebagai statement pada busana formal\n\nMengapa Memilih Sri Pin Gold\nPin ini ideal untuk Anda yang ingin membawa simbol rasa syukur dan kelimpahan ke dalam penampilan. Sri Pin Gold memberikan makna mendalam dengan bentuk yang sederhana namun berwibawa cocok untuk momen-momen penting.\n\nPerawatan & Garansi\nDapatkan 1x layanan pembersihan atau replating, berlaku 1 tahun sejak tanggal pembelian, dengan menunjukkan kartu perawatan valid.',
  },

  // Brooches (Bros)
  {
    id: 29,
    name: "Puspa Broochs Gold",
    price: "Rp. 695.000,-",
    priceNumber: 695000,
    category: "Bros",
    image: "/Puspa Broochs Gold/HAL06768.JPG",
    images: [
      "/Puspa Broochs Gold/HAL_DAHAYU_10066.jpg",
      "/Puspa Broochs Gold/HAL06768.JPG",
      "/Puspa Broochs Gold/HAL06773.JPG",
    ],
    description:
      "Simbol bunga yang mekar dengan penuh keanggunan menghadirkan rasa hangat, cinta lembut, dan karakter klasik yang tak lekang waktu. Desain brooch ini menonjolkan bentuk kelopak yang berkembang sempurna, memadukan unsur tradisional dan modern dalam satu karya yang elegan.",
    material: "Silver 925 dengan lapisan 18K Gold Plated",
    weight: "——— gram",
    dimensions: "———",
    features: [
      "Silver 925 + 18K Gold Plated berkualitas tinggi",
      "Detail kelopak yang rapi dan artistik",
      "Cocok untuk kebaya, blazer, atau dress klasik",
      "Handmade oleh pengrajin Bali",
      "Box eksklusif Dahayu",
    ],
    story:
      '"Puspa" berarti bunga. Dalam tradisi Nusantara, bunga yang mekar melambangkan cinta, keindahan jiwa, dan kematangan batin. Puspa Brooch Gold terinspirasi dari momen ketika kelopak terbuka sepenuhnya lembut, tenang, namun penuh wibawa. Desainnya menghadirkan simbol bahwa keindahan sejati bukan sekadar terlihat, namun dirasakan dalam cara seseorang membawa dirinya. Brooch ini menjadi representasi dari perempuan yang anggun: lembut namun tegas, hangat namun tetap berkarakter.\n\n✨ Pengalaman yang Dirasakan Pemakai\n• Membawa aura klasik, elegan, dan penuh pesona dewasa\n• Meningkatkan kepercayaan diri dalam acara formal\n• Membuat busana tampak lebih berwibawa dan rapi\n• Banyak pemakai merasa brooch ini memberi "sentuhan wibawa" yang halus\n\nMengapa Memilih Puspa Brooch Gold\nBrooch ini cocok bagi Anda yang ingin menampilkan karakter anggun dan dewasa tanpa kehilangan sisi lembut. Puspa Brooch Gold adalah karya yang tidak hanya menghias pakaian tetapi memberi makna pada penampilan Anda: keindahan yang telah mekar, matang, dan penuh cinta.\n\nPerawatan & Garansi\nTermasuk 1x layanan pembersihan atau replating, berlaku 1 tahun sejak pembelian. Hanya dapat digunakan dengan kartu perawatan valid.',
  },
];
