import React from 'react';
import Radar from '../../components/Radar';

const Hero = () => {
  return (
    <section className="relative max-h-[90vh] overflow-hidden bg-black text-white">
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

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <p className="text-4xl font-semibold">Hi</p>
      </div>
    </section>
  );
};

export default Hero;