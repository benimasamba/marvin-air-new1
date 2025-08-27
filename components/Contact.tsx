import React from 'react';

const ContactInfoItem = ({ icon, text, href }: { icon: React.ReactNode; text: string; href: string; }) => (
  <a href={href} className="flex items-center space-x-4 text-lg text-white/90 hover:text-white transition-colors group">
    <span className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
        {icon}
    </span>
    <span>{text}</span>
  </a>
);


const Contact = () => {
  return (
    <section className="bg-gray-50 py-16 sm:py-24" id="contact">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-gradient-to-br from-primary to-cyan-600 p-8 sm:p-12 text-white shadow-2xl overflow-hidden">
             <div className="absolute top-0 right-0 -mt-12 -mr-12 w-48 h-48 bg-white/10 rounded-full"></div>
             <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-36 h-36 bg-white/10 rounded-full"></div>
            <div className="relative z-10 text-center">
                <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Ready to Experience the Difference?
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-white/90">
                Get in touch with us today for a free quote or to schedule a service. Our team is ready to help!
                </p>
                <div className="mt-10 flex flex-col items-center justify-center space-y-6 sm:flex-row sm:space-y-0 sm:space-x-12">
                   <ContactInfoItem 
                    href="tel:305-541-8408"
                    text="(305) 541-8408"
                    icon={<svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>}
                   />
                   <ContactInfoItem 
                    href="mailto:marvinair@aol.com"
                    text="marvinair@aol.com"
                    icon={<svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>}
                   />
                </div>
                 <div className="mt-12">
                    <a href="tel:305-541-8408" className="inline-flex items-center justify-center rounded-md h-14 px-10 text-lg font-bold bg-white text-primary hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
                        Call for a Free Quote
                    </a>
                 </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;