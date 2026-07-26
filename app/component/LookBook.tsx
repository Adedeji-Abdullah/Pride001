import React from 'react';

const spreads = [
  {
    title: 'Serene Abaya Stories',
    subtitle: 'Soft silhouettes for day-to-night comfort',
    details: [
      'Flowing Jacquard abayas with delicate embroidery.',
      'Satin collars and cuff details for elevated modest styling.',
      'Neutral tones accented by deep jewel hues.',
    ],
    theme: 'Classic Abaya',
    shop: 'Shop the look',
  },
  {
    title: 'Majestic Kaftan Pages',
    subtitle: 'Modern prints with traditional gowns',
    details: [
      'Rich brocade textures in loose, airy cuts.',
      'Statement sleeves with subtle volume.',
      'Layered styling for curated modest looks.',
    ],
    theme: 'Print & Draping',
    shop: 'Shop the look',
  },
  {
    title: 'Majestic Hijabs Pages',
    subtitle: 'Modern prints with traditional hijabs',
    details: [
        'Rich brocade textures in loose, airy cuts.',
        'Statement sleeves with subtle volume.',
        'Layered styling for curated modest looks.',
    ],
    theme: 'Print & Draping',
    shop: 'Shop the look',
  },
];

const LookBook = () => {
  return (
    <section className="bg-[#faf7f4] py-24 text-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-gray-500">Lookbook</p>
          <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">Muslim Dress Book</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-gray-600">
            Explore each page as a styled spread of modest elegance — from fluid abayas to luxe kaftans, prayer-ready sets, and evening-ready gowns.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-[1.1fr_auto_1.1fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-lg shadow-slate-200/50">
            <div className="mb-8 rounded-3xl bg-slate-950/5 p-6">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Soft Story</p>
                <h3 className="mt-3 text-2xl font-semibold">Elegant Abaya Edition</h3>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-sm leading-7 text-slate-600">
                Lightweight layers, premium textures, and quiet luxury for modern modest dressing. Each spread brings a refined sense of grace and movement.
              </p>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4">Minimalist abayas with contrast cuffs.</li>
                <li className="rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4">Hidden button plackets for easy styling.</li>
                <li className="rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4">Muted palettes paired with jewelled accents.</li>
              </ul>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center">
            <div className="relative h-96 w-14 overflow-hidden rounded-full bg-slate-200/80 shadow-inner">
              <div className="absolute inset-x-0 top-10 h-4 bg-slate-300" />
              <div className="absolute inset-x-0 top-28 h-4 bg-slate-300" />
              <div className="absolute inset-x-0 top-46 h-4 bg-slate-300" />
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-lg shadow-slate-200/50">
            <div className="mb-8 rounded-3xl bg-slate-950/5 p-6">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Style Spread</p>
                <h3 className="mt-3 text-2xl font-semibold">Kaftan Couture</h3>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-sm leading-7 text-slate-600">
                Open the page to printed kaftans and luxe shapes designed for special occasions and everyday confidence alike.
              </p>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4">Oversized silhouettes with statement sleeves.</li>
                <li className="rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4">Gold-stitched trims framing the neckline.</li>
                <li className="rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4">Layered drapes in warm evening shades.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {spreads.map((item) => (
            <article key={item.title} className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <p className="text-xs uppercase tracking-[0.35em] text-slate-500">{item.theme}</p>
              <h3 className="mt-4 text-2xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.subtitle}</p>
              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                {item.details.map((detail) => (
                  <li key={detail} className="rounded-3xl bg-white px-4 py-3 shadow-sm">{detail}</li>
                ))}
              </ul>
              <div className="mt-6 text-xs uppercase tracking-[0.35em] text-slate-500">
                Details:
              </div>
              <button className="mt-6 w-full pointer-events-auto cursor-pointer rounded-3xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                {item.shop}
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LookBook;
