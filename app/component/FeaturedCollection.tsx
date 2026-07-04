import React from 'react';

const featuredItems = [
  {
    title: 'Executive Gowns',
    description: 'Precision tailoring with sharp structure and premium finishing.',
    tag: 'Bespoke cut',
  },
  {
    title: 'Luxury Shirts',
    description: 'Clean lines, refined fabrics, and effortless everyday elegance.',
    tag: 'Tailored fit',
  },
  {
    title: 'Hijab & Scarves',
    description: 'Elegant and versatile pieces designed to complement any outfit.',
    tag: 'Crafted essentials',
  },
  {
    title: 'Others',
    description: 'A curated selection of accessories and statement pieces to elevate your wardrobe.',
    tag: 'Distinctive accents',
  },
];

const FeaturedCollection = () => {
  return (
    <section className="bg-[#f5f1eb] px-6 py-20 text-black sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-gray-600">Featured Collection</p>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Signature pieces shaped with precision and purpose.
            </h2>
          </div>
          <a href="#" className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-700 hover:text-black">
            View all pieces
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featuredItems.map((item, index) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-[1.75rem] border border-black/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="h-56 bg-gradient-to-br from-[#1f2937] via-[#111827] to-[#2d2433] p-6">
                <div className="flex h-full items-end justify-between rounded-[1.2rem] border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-gray-300">{item.tag}</p>
                    <p className="mt-2 text-xl font-semibold text-white">0{index + 1}</p>
                  </div>
                  <div className="h-14 w-14 rounded-full border border-white/20 bg-white/10" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">{item.description}</p>
                <a href="#" className="mt-6 inline-flex items-center text-sm font-semibold uppercase tracking-[0.25em] text-black hover:text-gray-700">
                  Discover more
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
