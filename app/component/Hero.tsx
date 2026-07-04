import React from 'react';
import Image from 'next/image';
import Radar from '../../components/Radar';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0 z-0">
        <Radar
          speed={0.2}
          scale={0.6}
          ringCount={4}
          spokeCount={8}
          ringThickness={0.02}
          spokeThickness={0.01}
          sweepSpeed={1.6}
          sweepWidth={2}
          sweepLobes={1}
          color="#5e348c"
          backgroundColor="#000000"
          falloff={2}
          brightness={1.5}
          enableMouseInteraction
          mouseInfluence={9.5}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center gap-12 px-6 py-20 lg:flex-row lg:px-10">
        <div className="max-w-2xl text-center lg:text-left">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-gray-300">New Season / Limited Drop</p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-7xl">
            Elevate your style with bold fashion essentials.
          </h1>
          <p className="mt-6 text-lg text-gray-300 sm:text-xl">
            Discover sculpted silhouettes, premium fabrics, and statement pieces crafted for modern confidence.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#"
              className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition hover:bg-gray-200"
            >
              Shop Collection
            </a>
            <a
              href="#"
              className="rounded-full border border-white/30 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Explore Lookbook
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-300 lg:justify-start">
            <span>Premium tailoring</span>
            <span className="h-1 w-1 rounded-full bg-gray-500" />
            <span>Luxury fabrics</span>
            <span className="h-1 w-1 rounded-full bg-gray-500" />
            <span>Fast delivery</span>
          </div>
        </div>

        <div className="w-full max-w-xl rounded-[2rem] border border-white/10 bg-white/10 p-3 shadow-2xl backdrop-blur-xl">
          <div className="overflow-hidden rounded-[1.5rem] bg-zinc-900">
            <Image
              src="/industrial-tailoring-machine.svg"
              alt="Industrial tailoring machine illustration"
              width={1200}
              height={1400}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;