import React, { useState } from 'react';

const NavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-base font-medium text-text-secondary hover:text-primary transition-colors block py-2 md:py-0"
  >
    {children}
  </a>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#past-work', label: 'Past Work' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ];
  
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1); // remove the '#'
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerOffset = 100; // Height of the sticky header + top bar to prevent content from being hidden
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="bg-text-primary text-white text-center py-2 text-sm">
        <a href="tel:305-541-8408" className="font-semibold hover:underline">305-541-8408</a> | open 24/7
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        <a className="text-2xl font-bold text-text-primary" href="#">
          Marvin Air
        </a>
        
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href} onClick={(e) => handleLinkClick(e, link.href)}>{link.label}</NavLink>
          ))}
        </nav>
        
        <a
          className="hidden md:inline-flex items-center justify-center rounded-md px-5 py-2.5 text-base font-bold bg-primary text-white hover:bg-opacity-90 transition-colors"
          href="tel:305-541-8408"
        >
          Call Now
        </a>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-text-primary focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md px-4 pt-2 pb-4 space-y-2 absolute top-full left-0 w-full shadow-lg">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href} onClick={(e) => handleLinkClick(e, link.href)}>{link.label}</NavLink>
          ))}
          <a
            className="w-full mt-4 inline-flex items-center justify-center rounded-md px-5 py-2.5 text-base font-bold bg-primary text-white hover:bg-opacity-90 transition-colors"
            href="tel:305-541-8408"
          >
            Call Now
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;