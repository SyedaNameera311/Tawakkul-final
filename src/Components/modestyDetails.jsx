import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import card01Image from "../assets/card-01-everyday-abaya.png";
import card02Image from "../assets/card-02-classic-black-abaya.png";
import card03Image from "../assets/card-03-open-front-abaya.png";
import card04Image from "../assets/card-04-occasion-abaya.png";
import card05Image from "../assets/card-05-jilbab.png";
import card06Image from "../assets/card-06-everyday-khimar.png";
import card07Image from "../assets/card-07-long-khimar.png";
import card08Image from "../assets/card-08-essential-hijab.png";
import card09Image from "../assets/card-09-chiffon-hijab.png";
import card10Image from "../assets/card-10-jersey-hijab.png";
import card11Image from "../assets/card-11-modest-dress.png";
import card12Image from "../assets/card-12-flowing-maxi-dress.png";
import card13Image from "../assets/card-13-occasion-dress.png";
import card14Image from "../assets/card-14-modest-tunic.png";
import card15Image from "../assets/card-15-longline-shirt.png";
import card16Image from "../assets/card-16-wide-leg-trousers.jpg";
import card17Image from "../assets/card-17-modest-skirt.jpg";
import card18Image from "../assets/card-18-modest-coords.jpg";
import card19Image from "../assets/card-19-modest-outerwear.jpg";
import card20Image from "../assets/card-20-kaftan.jpg";
import card21Image from "../assets/card-21-prayer-wear.jpg";
import card22Image from "../assets/card-22-niqab.png";
import card23Image from "../assets/card-23-underscarves.jpg";
import card24Image from "../assets/card-24-accessories.jpg";

const collections = [
  {
    id: 1,
    name: "The Everyday Abaya",
    category: "Abayas",
    tagline: "Simple. Comfortable. Modest.",
    price: "From $89",
    description:
      "A collection created for everyday life — comfortable silhouettes, graceful movement and timeless modesty.",
    details:
      "The Everyday Abaya is designed for women who want their clothing to remain simple, elegant and practical throughout the day.",
    highlights: [
      "Relaxed and graceful silhouette",
      "Designed for everyday movement",
      "Timeless modest aesthetic",
      "Easy to style with hijabs and khimars",
    ],
    colors: ["Obsidian", "Sand", "Mocha"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    images: [
      card01Image,
      card02Image,
      card03Image,
    ],
  },

  {
    id: 2,
    name: "Classic Black Abaya",
    category: "Abayas",
    tagline: "Timeless modesty.",
    price: "From $95",
    description:
      "A timeless black abaya collection inspired by simplicity, dignity and elegance.",
    details:
      "The collection keeps the silhouette clean, graceful and intentional. It is designed for women who appreciate classic modest fashion.",
    highlights: [
      "Classic black design",
      "Elegant and timeless",
      "Comfortable everyday fit",
      "Easy to style",
    ],
    colors: ["Black", "Charcoal", "Obsidian"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    images: [
      card02Image,
      card04Image,
      card01Image,
    ],
  },

  {
    id: 3,
    name: "Open Front Abaya",
    category: "Abayas",
    tagline: "Effortless layering.",
    price: "From $99",
    description:
      "An elegant open-front abaya designed for versatile modest layering.",
    details:
      "A relaxed open silhouette makes this collection easy to style over dresses, sets and everyday outfits.",
    highlights: [
      "Open-front design",
      "Perfect for layering",
      "Relaxed silhouette",
      "Versatile styling",
    ],
    colors: ["Black", "Mocha", "Stone"],
    sizes: ["S", "M", "L", "XL"],
    images: [
      card03Image,
      card01Image,
      card05Image,
    ],
  },

  {
    id: 4,
    name: "Flowing Abaya",
    category: "Abayas",
    tagline: "Grace in every movement.",
    price: "From $110",
    description:
      "A flowing abaya collection designed around movement, comfort and graceful modesty.",
    details:
      "Soft flowing shapes create an elegant appearance while keeping the design comfortable and practical.",
    highlights: [
      "Flowing silhouette",
      "Graceful movement",
      "Comfort-focused",
      "Elegant modest styling",
    ],
    colors: ["Black", "Brown", "Dusty Rose"],
    sizes: ["S", "M", "L", "XL"],
    images: [
      card04Image,
      card03Image,
      card01Image,
    ],
  },

  {
    id: 5,
    name: "Minimal Abaya",
    category: "Abayas",
    tagline: "Less, beautifully.",
    price: "From $89",
    description:
      "A minimalist abaya collection for those who prefer clean lines and understated elegance.",
    details:
      "The design focuses on simplicity without unnecessary details, making every piece easy to wear.",
    highlights: [
      "Minimal design",
      "Clean lines",
      "Understated elegance",
      "Easy everyday wear",
    ],
    colors: ["Black", "Beige", "Taupe"],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      card02Image,
      card03Image,
      card04Image,
    ],
  },

  {
    id: 6,
    name: "Occasion Abaya",
    category: "Abayas",
    tagline: "Made for meaningful moments.",
    price: "From $125",
    description:
      "Elegant occasion abayas created for gatherings, celebrations and special moments.",
    details:
      "Refined silhouettes and subtle details create a polished modest look without compromising comfort.",
    highlights: [
      "Elegant occasion styling",
      "Refined silhouette",
      "Subtle detailing",
      "Perfect for gatherings",
    ],
    colors: ["Black", "Champagne", "Deep Brown"],
    sizes: ["S", "M", "L", "XL"],
    images: [
      card04Image,
      card02Image,
      card20Image,
    ],
  },

  {
    id: 7,
    name: "Everyday Hijabs",
    category: "Hijabs",
    tagline: "Simple. Soft. Everyday.",
    price: "From $18",
    description:
      "Comfortable hijabs designed for everyday styling and effortless modest looks.",
    details:
      "Soft fabrics and versatile colors make these hijabs suitable for daily wear.",
    highlights: [
      "Soft everyday fabric",
      "Easy styling",
      "Versatile colors",
      "Comfort-focused",
    ],
    colors: ["Black", "Beige", "Mocha", "Olive"],
    sizes: ["Standard"],
    images: [
      card08Image,
      card10Image,
      card09Image,
    ],
  },

  {
    id: 8,
    name: "Chiffon Hijabs",
    category: "Hijabs",
    tagline: "Light and graceful.",
    price: "From $22",
    description:
      "Lightweight chiffon hijabs that create an elegant and effortless drape.",
    details:
      "The lightweight fabric makes these hijabs ideal for creating soft, flowing styles.",
    highlights: [
      "Lightweight chiffon",
      "Elegant drape",
      "Breathable feel",
      "Easy to style",
    ],
    colors: ["Black", "Cream", "Dusty Rose", "Brown"],
    sizes: ["Standard"],
    images: [
      card09Image,
      card08Image,
      card10Image,
    ],
  },

  {
    id: 9,
    name: "Jersey Hijabs",
    category: "Hijabs",
    tagline: "Softness that stays.",
    price: "From $20",
    description:
      "Soft jersey hijabs designed for secure, comfortable everyday styling.",
    details:
      "The flexible fabric provides a comfortable fit while making styling simple.",
    highlights: [
      "Soft jersey fabric",
      "Comfortable stretch",
      "Secure styling",
      "Everyday essential",
    ],
    colors: ["Black", "Grey", "Mocha", "Navy"],
    sizes: ["Standard"],
    images: [
      card10Image,
      card08Image,
      card09Image,
    ],
  },

  {
    id: 10,
    name: "Silk Hijabs",
    category: "Hijabs",
    tagline: "Quiet luxury.",
    price: "From $35",
    description:
      "Refined silk hijabs created for elegant occasions and elevated modest styling.",
    details:
      "A smooth luxurious finish adds a sophisticated touch to any modest outfit.",
    highlights: [
      "Premium silk feel",
      "Elegant finish",
      "Occasion ready",
      "Sophisticated styling",
    ],
    colors: ["Black", "Ivory", "Champagne", "Chocolate"],
    sizes: ["Standard"],
    images: [
      card09Image,
      card08Image,
      card10Image,
    ],
  },

  {
    id: 11,
    name: "Neutral Hijab Edit",
    category: "Hijabs",
    tagline: "Colors that go with everything.",
    price: "From $19",
    description:
      "A curated collection of neutral hijabs designed to complement any modest wardrobe.",
    details:
      "Neutral tones make these pieces incredibly versatile and easy to combine.",
    highlights: [
      "Neutral color palette",
      "Easy wardrobe pairing",
      "Timeless styling",
      "Everyday versatility",
    ],
    colors: ["Beige", "Taupe", "Cream", "Mocha"],
    sizes: ["Standard"],
    images: [
      card08Image,
      card09Image,
      card10Image,
    ],
  },

  {
    id: 12,
    name: "Hijab Essentials",
    category: "Hijabs",
    tagline: "Everything you reach for.",
    price: "From $16",
    description:
      "Essential hijabs designed to form the foundation of an intentional modest wardrobe.",
    details:
      "Practical colors, comfortable fabrics and easy styling make these everyday essentials.",
    highlights: [
      "Essential colors",
      "Comfortable fabrics",
      "Easy everyday styling",
      "Wardrobe foundation",
    ],
    colors: ["Black", "White", "Beige", "Grey"],
    sizes: ["Standard"],
    images: [
      card08Image,
      card10Image,
      card09Image,
    ],
  },

  {
    id: 13,
    name: "Daily Khimars",
    category: "Khimars",
    tagline: "Comfortable, complete coverage.",
    price: "From $35",
    description:
      "Practical khimars designed for comfortable everyday coverage.",
    details:
      "Simple silhouettes make these khimars easy to wear throughout the day.",
    highlights: [
      "Full coverage",
      "Comfort-focused",
      "Easy everyday wear",
      "Simple silhouette",
    ],
    colors: ["Black", "Mocha", "Stone"],
    sizes: ["Standard", "Long"],
    images: [
      card06Image,
      card07Image,
      card05Image,
    ],
  },

  {
    id: 14,
    name: "Long Khimars",
    category: "Khimars",
    tagline: "Coverage with grace.",
    price: "From $42",
    description:
      "Longer khimars created for those who prefer extended coverage and graceful draping.",
    details:
      "The longer silhouette provides additional coverage while maintaining an elegant appearance.",
    highlights: [
      "Extended coverage",
      "Graceful drape",
      "Comfortable fit",
      "Modest everyday styling",
    ],
    colors: ["Black", "Brown", "Charcoal"],
    sizes: ["Long", "Extra Long"],
    images: [
      card07Image,
      card06Image,
      card05Image,
    ],
  },

  {
    id: 15,
    name: "Layered Khimars",
    category: "Khimars",
    tagline: "Beautiful layers of coverage.",
    price: "From $48",
    description:
      "Layered khimars designed for a graceful and structured modest look.",
    details:
      "Layered construction adds visual depth while maintaining comfortable coverage.",
    highlights: [
      "Layered design",
      "Graceful structure",
      "Full coverage",
      "Elegant appearance",
    ],
    colors: ["Black", "Mocha", "Olive"],
    sizes: ["Standard", "Long"],
    images: [
      card06Image,
      card07Image,
      card03Image,
    ],
  },

  {
    id: 16,
    name: "Prayer Khimars",
    category: "Khimars",
    tagline: "Made for moments of worship.",
    price: "From $32",
    description:
      "Comfortable prayer khimars designed to make prayer time simple and peaceful.",
    details:
      "Lightweight and practical designs provide easy coverage during salah.",
    highlights: [
      "Prayer-friendly design",
      "Comfortable coverage",
      "Easy to wear",
      "Lightweight feel",
    ],
    colors: ["White", "Black", "Beige"],
    sizes: ["Standard", "Long"],
    images: [
      card21Image,
      card07Image,
      card06Image,
    ],
  },

  {
    id: 17,
    name: "Modest Co-ords",
    category: "Modest Sets",
    tagline: "Effortless modest dressing.",
    price: "From $75",
    description:
      "Matching modest sets designed to make getting dressed simple and elegant.",
    details:
      "Coordinated pieces create a polished look without requiring complicated styling.",
    highlights: [
      "Matching pieces",
      "Easy styling",
      "Comfortable fit",
      "Versatile wardrobe option",
    ],
    colors: ["Black", "Mocha", "Stone"],
    sizes: ["S", "M", "L", "XL"],
    images: [
      card18Image,
      card14Image,
      card15Image,
    ],
  },

  {
    id: 18,
    name: "Modest Dresses",
    category: "Modest Sets",
    tagline: "Graceful from day to evening.",
    price: "From $80",
    description:
      "Elegant modest dresses designed for everyday wear and special occasions.",
    details:
      "Long silhouettes and thoughtful details create a refined modest wardrobe staple.",
    highlights: [
      "Full-length design",
      "Elegant silhouette",
      "Comfortable movement",
      "Day-to-evening versatility",
    ],
    colors: ["Black", "Brown", "Dusty Rose"],
    sizes: ["S", "M", "L", "XL"],
    images: [
      card11Image,
      card12Image,
      card13Image,
    ],
  },

  {
    id: 19,
    name: "Modest Everyday Wear",
    category: "Modest Sets",
    tagline: "Made for real life.",
    price: "From $65",
    description:
      "Relaxed modest pieces created for everyday routines and comfortable living.",
    details:
      "Practical silhouettes make these pieces easy to wear from morning to evening.",
    highlights: [
      "Everyday comfort",
      "Relaxed fit",
      "Practical design",
      "Easy wardrobe pairing",
    ],
    colors: ["Black", "Grey", "Beige"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      card14Image,
      card15Image,
      card18Image,
    ],
  },

  {
    id: 20,
    name: "Niqab Essentials",
    category: "Niqabs",
    tagline: "Simple, secure coverage.",
    price: "From $25",
    description:
      "Practical niqab essentials designed for comfortable everyday coverage.",
    details:
      "Simple designs focus on comfort, coverage and easy everyday wear.",
    highlights: [
      "Comfortable coverage",
      "Simple design",
      "Secure fit",
      "Everyday practicality",
    ],
    colors: ["Black", "Brown", "Charcoal"],
    sizes: ["Standard", "Long"],
    images: [
      card22Image,
      card21Image,
      card05Image,
    ],
  },

  {
    id: 21,
    name: "Niqab Collection",
    category: "Niqabs",
    tagline: "Modesty with intention.",
    price: "From $29",
    description:
      "Simple coverage pieces designed for women who choose niqab.",
    details:
      "This collection is designed around simplicity and practicality.",
    highlights: [
      "Simple coverage design",
      "Comfort-focused",
      "Practical everyday pieces",
      "Easy to pair with modest wear",
    ],
    colors: ["Black", "Brown", "Charcoal"],
    sizes: ["Standard", "Long"],
    images: [
      card22Image,
      card21Image,
      card05Image,
    ],
  },

  {
    id: 22,
    name: "Underscarves",
    category: "Accessories",
    tagline: "The foundation of your hijab.",
    price: "From $12",
    description:
      "Practical essentials for comfortable hijab styling.",
    details:
      "Underscarves can provide comfort, stability and a clean foundation.",
    highlights: [
      "Comfortable foundation",
      "Helps secure hijab styling",
      "Soft everyday fabric",
      "Essential wardrobe piece",
    ],
    colors: ["Black", "Beige", "White"],
    sizes: ["Standard"],
    images: [
      card23Image,
      card08Image,
      card10Image,
    ],
  },

  {
    id: 23,
    name: "Modest Accessories",
    category: "Accessories",
    tagline: "The details matter.",
    price: "From $15",
    description:
      "Thoughtful accessories to complete an intentional modest wardrobe.",
    details:
      "Small details can bring an entire outfit together.",
    highlights: [
      "Designed to complement modest wear",
      "Simple and elegant",
      "Easy everyday styling",
      "Thoughtful finishing details",
    ],
    colors: ["Gold", "Silver", "Black"],
    sizes: ["One Size"],
    images: [
      card24Image,
      card23Image,
      card08Image,
    ],
  },

  {
    id: 24,
    name: "Modest Accessories",
    category: "Accessories",
    tagline: "The details matter.",
    price: "From $15",
    description:
      "Thoughtful accessories to complete an intentional modest wardrobe.",
    details:
      "Small details can bring an entire outfit together.",
    highlights: [
      "Designed to complement modest wear",
      "Simple and elegant",
      "Easy everyday styling",
      "Thoughtful finishing details",
    ],
    colors: ["Gold", "Silver", "Black"],
    sizes: ["One Size"],
    images: [
      card24Image,
      card23Image,
      card08Image,
    ],
  },
];


/* =========================================================
   REVIEWS FOR ALL COLLECTIONS
========================================================= */

const reviewSets = [
  [
    {
      name: "Ayesha K.",
      rating: 5,
      text: "Beautiful quality and very comfortable. The fabric feels premium and the fit is lovely.",
    },
    {
      name: "Maryam S.",
      rating: 5,
      text: "Absolutely love this collection. Elegant, simple and perfect for everyday wear.",
    },
    {
      name: "Fatima R.",
      rating: 4,
      text: "Really lovely piece. The quality is excellent and it looks beautiful in person.",
    },
  ],

  [
    {
      name: "Hiba M.",
      rating: 5,
      text: "The design is so elegant. I love how timeless and easy to style it is.",
    },
    {
      name: "Sara A.",
      rating: 5,
      text: "The black color is beautiful and the quality feels very premium.",
    },
    {
      name: "Zainab R.",
      rating: 5,
      text: "One of my favorite modest pieces. Comfortable and beautifully made.",
    },
  ],

  [
    {
      name: "Amna F.",
      rating: 5,
      text: "The fit is graceful and the fabric moves beautifully. Very happy with it.",
    },
    {
      name: "Mariam H.",
      rating: 4,
      text: "Lovely design and very easy to style with different hijabs.",
    },
    {
      name: "Noor S.",
      rating: 5,
      text: "Elegant, comfortable and exactly what I was looking for.",
    },
  ],
];

const collectionsWithReviews = collections.map((collection, index) => ({
  ...collection,

  rating: [4.8, 4.9, 4.7, 5.0, 4.8, 4.9][index % 6],

  reviewCount: [124, 186, 93, 217, 148, 76][index % 6],

  reviews: reviewSets[index % reviewSets.length],
}));


export default function ModestyDetails() {
  const { id } = useParams();

  const collection = collectionsWithReviews.find(
    (item) => item.id === Number(id)
  );

  const [selectedColor, setSelectedColor] = useState(
    collection?.colors?.[0] || ""
  );

  const [selectedSize, setSelectedSize] = useState(
    collection?.sizes?.[0] || ""
  );

  const [activeImage, setActiveImage] = useState(0);

  if (!collection) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#080706] px-6 text-white">

        <div className="text-center">

          <p className="text-xs uppercase tracking-[0.35em] text-amber-400">
            Tawakkul Modesty
          </p>

          <h1 className="mt-5 text-4xl font-semibold">
            Collection not found
          </h1>

          <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-white/40">
            The collection you are looking for could not be found.
          </p>

          <Link
            to="/modesty"
            className="mt-8 inline-flex rounded-full bg-amber-400 px-7 py-3 text-sm font-semibold text-black transition hover:bg-amber-300"
          >
            ← Back to Modesty
          </Link>

        </div>

      </main>
    );
  }


  return (
    <main className="min-h-screen bg-[#080706] text-white">


      {/* TOP */}

      <div className="border-b border-white/[0.07]">

        <div className="mx-auto flex max-w-7xl items-center px-6 py-5 lg:px-8">

          <Link
            to="/modesty"
            className="text-xs uppercase tracking-[0.25em] text-white/40 transition hover:text-amber-400"
          >
            ← Modesty Collection
          </Link>

          <span className="mx-3 text-white/10">
            /
          </span>

          <span className="text-xs text-white/25">
            {collection.category}
          </span>

        </div>

      </div>


      {/* PRODUCT */}

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">


          {/* IMAGE GALLERY */}

          <div>

            <div className="overflow-hidden rounded-3xl bg-white/[0.03]">

              <img
                src={collection.images[activeImage]}
                alt={collection.name}
                className="aspect-[4/5] w-full object-cover transition duration-700"
              />

            </div>


            <div className="mt-4 grid grid-cols-3 gap-4">

              {collection.images.map((image, index) => (

                <button
                  key={image}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  className={`overflow-hidden rounded-2xl border transition ${
                    activeImage === index
                      ? "border-amber-400"
                      : "border-white/[0.08] hover:border-white/30"
                  }`}
                >

                  <img
                    src={image}
                    alt={`${collection.name} ${index + 1}`}
                    className="aspect-square w-full object-cover"
                  />

                </button>

              ))}

            </div>

          </div>


          {/* INFORMATION */}

          <div className="flex flex-col justify-center">

            <p className="text-xs uppercase tracking-[0.35em] text-amber-400">
              {collection.category}
            </p>


            <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              {collection.name}
            </h1>


            <p className="mt-4 text-lg text-white/50">
              {collection.tagline}
            </p>


            {/* RATING */}

            <div className="mt-5 flex items-center gap-3">

              <div className="flex gap-1 text-amber-400">

                {[1, 2, 3, 4, 5].map((star) => (

                  <span key={star}>

                    {star <= Math.round(collection.rating)
                      ? "★"
                      : "☆"}

                  </span>

                ))}

              </div>

              <span className="text-sm text-white/70">
                {collection.rating}
              </span>

              <span className="text-sm text-white/30">
                ({collection.reviewCount} reviews)
              </span>

            </div>


            <p className="mt-6 text-2xl font-medium text-amber-400">
              {collection.price}
            </p>


            <p className="mt-7 max-w-xl text-sm leading-8 text-white/55">
              {collection.description}
            </p>


            <div className="my-8 h-px w-full bg-white/[0.08]" />


            {/* COLORS */}

            <div>

              <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                Color
              </p>

              <div className="mt-4 flex flex-wrap gap-3">

                {collection.colors.map((color) => (

                  <button
                    key={color}
                    type="button"
                    onClick={() => setSelectedColor(color)}
                    className={`rounded-full border px-5 py-2.5 text-sm transition ${
                      selectedColor === color
                        ? "border-amber-400 bg-amber-400 text-black"
                        : "border-white/10 text-white/60 hover:border-amber-400/50"
                    }`}
                  >
                    {color}
                  </button>

                ))}

              </div>

            </div>


            {/* SIZE */}

            <div className="mt-7">

              <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                Size
              </p>

              <div className="mt-4 flex flex-wrap gap-3">

                {collection.sizes.map((size) => (

                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-12 rounded-full border px-5 py-2.5 text-sm transition ${
                      selectedSize === size
                        ? "border-amber-400 bg-amber-400 text-black"
                        : "border-white/10 text-white/60 hover:border-amber-400/50"
                    }`}
                  >
                    {size}
                  </button>

                ))}

              </div>

            </div>


            {/* SELECTED */}

            <div className="mt-8 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5">

              <p className="text-xs uppercase tracking-[0.25em] text-white/30">
                Your selection
              </p>

              <div className="mt-3 flex flex-wrap gap-5 text-sm text-white/60">

                <span>
                  Color:{" "}
                  <strong className="text-white">
                    {selectedColor}
                  </strong>
                </span>

                <span>
                  Size:{" "}
                  <strong className="text-white">
                    {selectedSize}
                  </strong>
                </span>

              </div>

            </div>


            {/* BUTTON */}

            <button
              type="button"
              className="mt-8 w-full rounded-full bg-amber-400 px-7 py-4 text-sm font-semibold text-black transition hover:bg-amber-300"
            >
              Add to Collection
            </button>


            {/* DETAILS */}

            <div className="mt-10">

              <h2 className="text-lg font-medium">
                About this collection
              </h2>

              <p className="mt-4 text-sm leading-8 text-white/45">
                {collection.details}
              </p>

            </div>


            {/* HIGHLIGHTS */}

            <div className="mt-8">

              <h2 className="text-lg font-medium">
                Highlights
              </h2>

              <ul className="mt-4 space-y-3">

                {collection.highlights.map((highlight) => (

                  <li
                    key={highlight}
                    className="flex items-start gap-3 text-sm text-white/50"
                  >

                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />

                    {highlight}

                  </li>

                ))}

              </ul>

            </div>

          </div>

        </div>

      </section>


      {/* REVIEWS */}

      <section className="border-t border-white/[0.06]">

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">


            {/* RATING SUMMARY */}

            <div>

              <p className="text-xs uppercase tracking-[0.35em] text-amber-400">
                Customer Reviews
              </p>

              <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
                Loved by our community.
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-white/40">
                Discover what our customers think about this collection.
              </p>


              <div className="mt-8 rounded-3xl border border-white/[0.07] bg-white/[0.025] p-7">

                <div className="flex items-center gap-5">

                  <div>

                    <p className="text-5xl font-semibold">
                      {collection.rating}
                    </p>

                    <div className="mt-2 flex gap-1 text-amber-400">

                      {[1, 2, 3, 4, 5].map((star) => (

                        <span key={star}>

                          {star <= Math.round(collection.rating)
                            ? "★"
                            : "☆"}

                        </span>

                      ))}

                    </div>

                    <p className="mt-2 text-xs text-white/30">
                      Based on {collection.reviewCount} reviews
                    </p>

                  </div>

                </div>

              </div>

            </div>


            {/* REVIEWS */}

            <div className="space-y-5">

              {collection.reviews.map((review, index) => (

                <div
                  key={index}
                  className="rounded-3xl border border-white/[0.07] bg-white/[0.025] p-6 transition hover:border-amber-400/20"
                >

                  <div className="flex items-start justify-between gap-4">

                    <div>

                      <p className="font-medium text-white">
                        {review.name}
                      </p>

                      <div className="mt-2 flex gap-1 text-sm text-amber-400">

                        {[1, 2, 3, 4, 5].map((star) => (

                          <span key={star}>

                            {star <= review.rating
                              ? "★"
                              : "☆"}

                          </span>

                        ))}

                      </div>

                    </div>


                    <span className="text-xs uppercase tracking-wider text-white/20">
                      Verified
                    </span>

                  </div>


                  <p className="mt-5 text-sm leading-7 text-white/50">
                    "{review.text}"
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* PHILOSOPHY */}

      <section className="relative overflow-hidden border-t border-white/[0.06]">

        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-400/[0.04] blur-[140px]" />

        <div className="relative mx-auto max-w-4xl px-6 py-28 text-center sm:py-36">

          <p className="text-xs uppercase tracking-[0.4em] text-amber-400">
            Tawakkul Modesty
          </p>

          <h2 className="mt-7 text-4xl font-semibold leading-tight sm:text-6xl">

            Wear with intention.

            <br />

            <span className="text-white/25">
              Live with purpose.
            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-sm leading-8 text-white/35">
            Modesty is not simply about what we wear.
            It is about the intention behind how we live,
            present ourselves and carry our values into the world.
          </p>

          <Link
            to="/modesty"
            className="mt-10 inline-flex rounded-full border border-white/10 px-7 py-3.5 text-sm text-white/60 transition hover:border-amber-400/40 hover:text-amber-400"
          >
            Explore the Modesty Collection
          </Link>

        </div>

      </section>


    </main>
  );
}