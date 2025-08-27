
import React from 'react';

const About = () => {
  return (
    <section className="py-16 sm:py-24" id="about">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <h2 className="text-text-primary text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              About Marvin Air
            </h2>
            <p className="mt-4 text-text-secondary text-lg leading-relaxed">
              Marvin Air has been serving the community for over 20 years, providing reliable and efficient HVAC solutions. Our customer-first approach ensures every client receives personalized service and high-quality workmanship. We are committed to excellence and your satisfaction.
            </p>
            <div className="mt-8">
              <a
                className="inline-flex items-center justify-center rounded-md h-12 px-6 text-base font-bold bg-secondary text-text-primary hover:bg-gray-200 transition-colors"
                href="#services"
              >
                Our Services
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              alt="Technician working on an AC unit"
              className="rounded-lg shadow-lg object-cover w-full h-full aspect-square"
              src="assets/man-7043157_640.jpg"
            />
            <img
              alt="Clean air conditioner unit outdoors"
              className="rounded-lg shadow-lg object-cover w-full h-full aspect-square mt-0 sm:mt-8"
              src="assets/worker-7043152_640.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
