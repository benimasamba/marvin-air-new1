import React from 'react';

interface Service {
  title: string;
  description: string;
  imageUrl: string;
}

const servicesData: Service[] = [
  {
    title: 'Maintenance',
    description: 'Regular maintenance ensures your HVAC system operates efficiently, preventing costly repairs and extending its lifespan.',
    imageUrl: '/maintence.jpg',
  },
  {
    title: 'Air Conditioning',
    description: 'From installation to repair, we handle all your AC needs, ensuring your home stays cool during the hottest months.',
    imageUrl: '/air-conditioning.jpg',
  },
  {
    title: 'Residential HVAC',
    description: 'We provide comprehensive HVAC solutions for homes, including heating, ventilation, and air conditioning services.',
    imageUrl: '/residential.jpg',
  },
  {
    title: 'Commercial HVAC',
    description: 'Our commercial services ensure your business maintains a comfortable environment for employees and customers.',
    imageUrl: '/commercial.jpg',
  },
  {
    title: 'New Construction',
    description: 'We offer HVAC system design and installation for new construction projects, ensuring efficient and reliable climate control.',
    imageUrl: '/new-construction.jpg',
  },
   {
    title: 'Heating Services',
    description: 'Stay warm during winter with our expert furnace repair, maintenance, and installation services.',
    imageUrl: '/request-service.jpg',
  },
];

const ServiceCard = ({ service }: { service: Service }) => (
  <div className="flex flex-col rounded-lg bg-white shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
    <img alt={service.title} className="h-48 w-full object-cover" src={service.imageUrl} />
    <div className="flex flex-1 flex-col justify-between p-6">
      <div>
        <h3 className="text-xl font-bold text-text-primary">{service.title}</h3>
        <p className="mt-2 text-base text-text-secondary">{service.description}</p>
      </div>
      <div className="mt-6">
        <a
          href="tel:305-541-8408"
          className="w-full inline-flex items-center justify-center rounded-md px-5 py-3 text-base font-bold bg-primary text-white hover:bg-opacity-90 transition-colors"
        >
          Call Now
        </a>
      </div>
    </div>
  </div>
);


const Services = () => {
  return (
    <section className="bg-gray-50 py-16 sm:py-24" id="services">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-text-primary text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-text-secondary text-lg">
            Comprehensive HVAC solutions for every need.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;