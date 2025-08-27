
import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="relative">
      <div
        className="flex min-h-[70vh] flex-col items-start justify-center bg-cover bg-center bg-no-repeat px-4 py-16 sm:px-6 md:px-8 lg:px-16"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url("/air-conditioners-7558725_1920.jpg")',
        }}
      >
        <div className="max-w-3xl text-left">
          <h1 className="text-white text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Your Comfort, Our Priority
          </h1>
          <p className="mt-4 max-w-xl text-white/90 text-lg font-normal leading-relaxed sm:text-xl">
            Marvin Air provides top-notch HVAC services, specializing in AC repair and installation. We ensure your home or business stays comfortable year-round with our expert solutions.
          </p>
          <a
            className="mt-8 inline-flex items-center justify-center rounded-md h-12 px-8 text-base font-bold bg-primary text-white hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg"
            href="#contact"
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
