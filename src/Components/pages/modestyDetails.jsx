// import { Link, useParams } from "react-router-dom";

// const collections = [
//   {
//     id: 1,
//     name: "The Everyday Abaya",
//     category: "Abayas",
//     tagline: "Simple. Comfortable. Modest.",
//     description:
//       "A collection created for everyday life — comfortable silhouettes, graceful movement and timeless modesty.",
//     details:
//       "The Everyday Abaya is designed for women who want their clothing to remain simple, elegant and practical throughout the day.",
//   },

//   {
//     id: 2,
//     name: "Classic Black Abaya",
//     category: "Abayas",
//     tagline: "Timeless modesty.",
//     description:
//       "A timeless black abaya collection inspired by simplicity, dignity and elegance.",
//     details:
//       "The collection keeps the silhouette clean, graceful and intentional.",
//   },

//   {
//     id: 3,
//     name: "Open Front Abayas",
//     category: "Abayas",
//     tagline: "Layer your modesty.",
//     description:
//       "Versatile open-front designs made for layering and everyday styling.",
//     details:
//       "Designed to work beautifully over dresses, tunics and everyday outfits while maintaining a graceful modest appearance.",
//   },

//   {
//     id: 4,
//     name: "Occasion Abayas",
//     category: "Abayas",
//     tagline: "Grace for meaningful moments.",
//     description:
//       "Elegant abayas designed for weddings, gatherings and special occasions.",
//     details:
//       "Occasion wear can remain modest while still feeling beautiful and refined.",
//   },

//   {
//     id: 5,
//     name: "The Jilbab Collection",
//     category: "Jilbabs",
//     tagline: "Coverage with elegance.",
//     description:
//       "Flowing jilbabs created around simplicity, comfort and full coverage.",
//     details:
//       "The collection is inspired by the idea that modest clothing can be both practical and graceful.",
//   },

//   {
//     id: 6,
//     name: "Everyday Khimar",
//     category: "Khimars",
//     tagline: "Ease in every layer.",
//     description:
//       "Comfortable khimars for everyday modest dressing.",
//     details:
//       "Designed for women looking for an easy and practical way to complete their modest wardrobe.",
//   },

//   {
//     id: 7,
//     name: "Long Khimars",
//     category: "Khimars",
//     tagline: "Flowing. Graceful. Intentional.",
//     description:
//       "Long flowing khimars created for increased coverage.",
//     details:
//       "Long silhouettes provide a graceful layered appearance while keeping the overall look simple and comfortable.",
//   },

//   {
//     id: 8,
//     name: "Essential Hijabs",
//     category: "Hijabs",
//     tagline: "The everyday essential.",
//     description:
//       "Versatile hijabs designed to become part of your everyday wardrobe.",
//     details:
//       "These pieces are designed around comfort, versatility and simplicity.",
//   },

//   {
//     id: 9,
//     name: "Chiffon Hijabs",
//     category: "Hijabs",
//     tagline: "Lightness meets elegance.",
//     description:
//       "Lightweight hijabs for an elegant everyday finish.",
//     details:
//       "Chiffon provides a delicate appearance while allowing you to create a variety of modest looks.",
//   },

//   {
//     id: 10,
//     name: "Jersey Hijabs",
//     category: "Hijabs",
//     tagline: "Comfort without compromise.",
//     description:
//       "Soft and practical hijabs designed for comfortable everyday wear.",
//     details:
//       "A practical choice for women who want a comfortable hijab throughout the day.",
//   },

//   {
//     id: 11,
//     name: "The Modest Dress",
//     category: "Dresses",
//     tagline: "Beauty in simplicity.",
//     description:
//       "Relaxed silhouettes designed around graceful modest dressing.",
//     details:
//       "These dresses provide coverage while keeping the overall appearance contemporary and elegant.",
//   },

//   {
//     id: 12,
//     name: "Flowing Maxi Dresses",
//     category: "Dresses",
//     tagline: "Let your clothing flow.",
//     description:
//       "Long flowing dresses for graceful everyday styling.",
//     details:
//       "Maxi silhouettes create a naturally modest appearance.",
//   },

//   {
//     id: 13,
//     name: "Modest Occasion Dresses",
//     category: "Dresses",
//     tagline: "Elegance with intention.",
//     description:
//       "Beautiful modest silhouettes for meaningful occasions.",
//     details:
//       "Special occasions do not require compromising your values.",
//   },

//   {
//     id: 14,
//     name: "Modest Tunics",
//     category: "Tops",
//     tagline: "Designed for layering.",
//     description:
//       "Longer silhouettes designed for versatile modest outfits.",
//     details:
//       "Tunics can be paired with wide-leg trousers, skirts and other modest wardrobe essentials.",
//   },

//   {
//     id: 15,
//     name: "Longline Shirts",
//     category: "Tops",
//     tagline: "Everyday, intentionally modest.",
//     description:
//       "Relaxed longline pieces for everyday modest dressing.",
//     details:
//       "Longline designs provide additional coverage while remaining versatile.",
//   },

//   {
//     id: 16,
//     name: "Wide-Leg Trousers",
//     category: "Bottoms",
//     tagline: "Freedom of movement.",
//     description:
//       "Comfortable wide silhouettes designed for modest styling.",
//     details:
//       "Wide-leg trousers pair naturally with longer tops, tunics and abayas.",
//   },

//   {
//     id: 17,
//     name: "Modest Skirts",
//     category: "Bottoms",
//     tagline: "Flow with grace.",
//     description:
//       "Flowing skirts designed to make layering effortless.",
//     details:
//       "A versatile modest wardrobe essential.",
//   },

//   {
//     id: 18,
//     name: "Modest Co-ords",
//     category: "Co-ords",
//     tagline: "Simple dressing, thoughtfully designed.",
//     description:
//       "Matching sets designed for effortless modest styling.",
//     details:
//       "Co-ords make getting dressed simple while maintaining a coordinated appearance.",
//   },

//   {
//     id: 19,
//     name: "Modest Outerwear",
//     category: "Outerwear",
//     tagline: "Complete the layer.",
//     description:
//       "Outer layers created to complete a modest wardrobe.",
//     details:
//       "Outerwear can transform a simple outfit while providing additional coverage.",
//   },

//   {
//     id: 20,
//     name: "The Kaftan Edit",
//     category: "Kaftans",
//     tagline: "Relaxed elegance.",
//     description:
//       "Flowing silhouettes inspired by timeless modest fashion.",
//     details:
//       "Kaftans are known for their flowing shape and effortless elegance.",
//   },

//   {
//     id: 21,
//     name: "Prayer Wear",
//     category: "Prayer",
//     tagline: "Prepare for your prayer.",
//     description:
//       "Comfortable prayer pieces created for moments of worship.",
//     details:
//       "Prayer clothing should allow ease of movement and appropriate coverage.",
//   },

//   {
//     id: 22,
//     name: "Niqab Collection",
//     category: "Niqab",
//     tagline: "A choice of greater coverage.",
//     description:
//       "Simple coverage pieces designed for women who choose niqab.",
//     details:
//       "This collection is designed around simplicity and practicality.",
//   },

//   {
//     id: 23,
//     name: "Underscarves",
//     category: "Accessories",
//     tagline: "The foundation of your hijab.",
//     description:
//       "Practical essentials for comfortable hijab styling.",
//     details:
//       "Underscarves can provide comfort, stability and a clean foundation.",
//   },

//   {
//     id: 24,
//     name: "Modest Accessories",
//     category: "Accessories",
//     tagline: "The details matter.",
//     description:
//       "Thoughtful accessories to complete an intentional modest wardrobe.",
//     details:
//       "Small details can bring an entire outfit together.",
//   },
// ];

// export default function ModestyDetails() {
//   const { id } = useParams();

//   const collection = collections.find(
//     (item) => item.id === Number(id)
//   );

//   if (!collection) {
//     return (
//       <main className="flex min-h-screen items-center justify-center bg-[#080706] px-6 text-white">

//         <div className="text-center">

//           <p className="text-sm uppercase tracking-[0.3em] text-amber-400">
//             Collection Not Found
//           </p>

//           <h1 className="mt-5 text-4xl font-semibold">
//             This collection does not exist.
//           </h1>

//           <Link
//             to="/modesty"
//             className="mt-8 inline-block rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-black"
//           >
//             Back to Modesty
//           </Link>

//         </div>

//       </main>
//     );
//   }

//   return (
//     <main className="min-h-screen bg-[#080706] text-white">

//       {/* HERO */}

//       <section className="relative overflow-hidden px-6 pb-20 pt-28 sm:pb-28 sm:pt-36">

//         <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[700px] -translate-x-1/2 rounded-full bg-amber-400/[0.05] blur-[160px]" />

//         <div className="relative mx-auto max-w-7xl">

//           <Link
//             to="/modesty"
//             className="text-[10px] uppercase tracking-[0.3em] text-white/40 transition hover:text-amber-400"
//           >
//             ← Back to Collection
//           </Link>

//           <div className="mt-12">

//             <p className="text-[10px] uppercase tracking-[0.4em] text-amber-400">
//               {collection.category}
//             </p>

//             <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[1] tracking-tight sm:text-7xl lg:text-8xl">
//               {collection.name}
//             </h1>

//             <p className="mt-7 text-xl text-white/40 sm:text-2xl">
//               {collection.tagline}
//             </p>

//           </div>

//         </div>

//       </section>


//       {/* CONTENT */}

//       <section className="border-t border-white/[0.07] px-6 py-20 sm:py-28">

//         <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:gap-20">

//           {/* VISUAL */}

//           <div className="flex aspect-[4/5] items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-amber-400/[0.08] to-white/[0.02]">

//             <div className="text-center">

//               <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-amber-400/20 bg-amber-400/[0.05]">

//                 <span className="text-3xl text-amber-400">
//                   {String(collection.id).padStart(2, "0")}
//                 </span>

//               </div>

//               <p className="mt-6 text-xs uppercase tracking-[0.3em] text-white/20">
//                 Tawakkul Collection
//               </p>

//             </div>

//           </div>


//           {/* DETAILS */}

//           <div className="flex flex-col justify-center">

//             <p className="text-[10px] uppercase tracking-[0.35em] text-amber-400">
//               About this collection
//             </p>

//             <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl">
//               {collection.description}
//             </h2>

//             <p className="mt-7 text-base leading-8 text-white/35">
//               {collection.details}
//             </p>


//             <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">

//               <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5">
//                 <p className="text-sm font-medium">
//                   Modest
//                 </p>

//                 <p className="mt-2 text-xs leading-5 text-white/30">
//                   Intentional coverage.
//                 </p>
//               </div>


//               <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5">
//                 <p className="text-sm font-medium">
//                   Elegant
//                 </p>

//                 <p className="mt-2 text-xs leading-5 text-white/30">
//                   Simplicity with beauty.
//                 </p>
//               </div>


//               <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5">
//                 <p className="text-sm font-medium">
//                   Intentional
//                 </p>

//                 <p className="mt-2 text-xs leading-5 text-white/30">
//                   Fashion with meaning.
//                 </p>
//               </div>

//             </div>


//             <Link
//               to="/modesty"
//               className="mt-10 inline-flex w-fit rounded-full border border-white/10 px-7 py-3.5 text-sm text-white/70 transition hover:border-amber-400/40 hover:text-amber-400"
//             >
//               Explore all collections
//             </Link>

//           </div>

//         </div>

//       </section>


//       {/* BOTTOM */}

//       <section className="border-t border-white/[0.07] bg-white/[0.015] px-6 py-28 text-center sm:py-36">

//         <p className="text-[10px] uppercase tracking-[0.4em] text-amber-400">
//           Tawakkul
//         </p>

//         <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl">
//           Wear what reflects
//           <br />

//           <span className="text-white/25">
//             what you value.
//           </span>
//         </h2>

//         <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-white/30">
//           Modesty is more than clothing. It can be an expression
//           of dignity, identity and intentional living.
//         </p>

//       </section>

//     </main>
//   );
// }