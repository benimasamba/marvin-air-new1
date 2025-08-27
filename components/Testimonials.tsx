
import React from 'react';

const StarIcon = () => (
    <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg">
        <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
    </svg>
);

const Rating = ({ count }: { count: number }) => (
    <div className="flex text-yellow-400">
        {Array.from({ length: count }).map((_, i) => <StarIcon key={i} />)}
    </div>
);

interface Testimonial {
  name: string;
  avatarUrl: string;
  quote: string;
  rating: number;
}

const testimonialsData: Testimonial[] = [
  {
    name: 'Sarah Miller',
    avatarUrl: 'https://picsum.photos/100/100?image=306',
    quote: "Marvin Air provided excellent service when our AC broke down. They were prompt, professional, and fixed the issue quickly. Highly recommend!",
    rating: 5,
  },
  {
    name: 'David Clark',
    avatarUrl: 'https://picsum.photos/100/100?image=338',
    quote: "We had Marvin Air install a new HVAC system in our home. The team was efficient, and the system works perfectly. Great experience!",
    rating: 5,
  },
];


const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="rounded-lg bg-gray-50 p-6 shadow-sm">
    <div className="flex items-start gap-4">
      <img alt={testimonial.name} className="h-14 w-14 rounded-full object-cover" src={testimonial.avatarUrl} />
      <div>
        <p className="text-lg font-semibold text-text-primary">{testimonial.name}</p>
        <div className="mt-1 flex items-center">
          <Rating count={testimonial.rating} />
        </div>
      </div>
    </div>
    <blockquote className="mt-4 text-text-secondary italic">
      "{testimonial.quote}"
    </blockquote>
  </div>
);

const Testimonials = () => {
  return (
    <section className="bg-white py-16 sm:py-24" id="testimonials">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-text-primary text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-text-secondary text-lg">
            Real stories from satisfied clients.
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-2 max-w-4xl mx-auto">
            {testimonialsData.map(t => <TestimonialCard key={t.name} testimonial={t} />)}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
