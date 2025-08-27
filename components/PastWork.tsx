
import React from 'react';

const projects = [
  { id: 1, src: '/prasopchok-UcPEiRiKxuk-unsplash.jpg', alt: 'Modern building exterior with HVAC units' },
  { id: 2, src: '/muhammed-faizan-hussain-QoFTD3kG1QM-unsplash.jpg', alt: 'Residential home with new AC installation' },
  { id: 3, src: '/maxwell-odonkor-32sdOfMXRC8-unsplash(1).jpg', alt: 'Commercial rooftop HVAC system' },
  { id: 4, src: '/jose-antonio-gallego-vazquez-bpq1X06_yHQ-unsplash.jpg', alt: 'Interior ventilation system in a warehouse' },
  { id: 5, src: '/jonny-clow-GPVQqep5QNw-unsplash.jpg', alt: 'Technician finalizing an installation' },
  { id: 6, src: '/jimmy-ofisia-f7xiGC81KTE-unsplash.jpg', alt: 'Close-up of a high-efficiency condenser' },
];

const PastWork = () => {
  return (
    <section className="py-16 sm:py-24" id="past-work">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-text-primary text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Our Past Work
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-text-secondary text-lg">
            A glimpse into the quality and variety of projects we've completed.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.id} className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
              <img
                src={project.src}
                alt={project.alt}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastWork;
