"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    'Ghost Writing Services',
    'Book Writing Services',
    'Book Marketing Services',
    'Book Editing And Proofreading Services',
    'Book Cover Design',
    'Book Formatting',
    'Book Publication',
    'Book Illustration',
    'Book Printing',
    'Author Website',
    'Audio Book',
    'Video Book'
  ];

  const openLiveChat = () => {
    if (typeof Tawk_API !== "undefined") {
      Tawk_API.toggle();
    } else {
      console.error("Tawk_API is not loaded yet.");
    }
  };

  return (
    <header className="bg-background shadow-md sticky top-0 z-50">
      <nav className="max-w-[1400px] mx-auto px-2">
        <div className="flex items-center">
          {/* Logo - Left */}
          <div className="w-1/4 p-6">
            <Link href="/" className="font-oswald text-2xl font-bold">
              <span className="flex items-center">
                <img src='/header.png' className='md:w-[180px] md:h-[60px] w-auto h-auto' />
              </span>
            </Link>
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden text-white md:flex justify-center w-2/4">
            <div className="flex space-x-6">
              <Link href="/" className="nav-link hover:text-cyan-300">
                Home
              </Link>
              <Link href="/about" className="nav-link hover:text-cyan-300">
                About Us
              </Link>
              <div className="relative group">
                <button 
                  className="nav-link hover:text-cyan-300 flex items-center"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  Services
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isServicesOpen && (
                  <div 
                    className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-lg  w-64 z-50"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    {services.map((service, index) => (
                      <Link 
                        key={index} 
                        href={`/services/${service.toLowerCase().replace(/\s+/g, '')}`}
                        className="block px-4 py-2 bg-blue-950 text-sm text-cyan-200 hover:bg-blue-300 hover:text-cyan-800"
                      >
                        {service}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link href="/testimonials" className="nav-link hover:text-cyan-300">
                Testimonials
              </Link>
              <Link href="/portfolio" className="nav-link hover:text-cyan-300">
                Portfolio
              </Link>
              <Link href="/contact" className="nav-link hover:text-cyan-300">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Phone Number - Right */}
          <div className="hidden md:flex space-x-2 w-1/4 justify-end">
            <a href='tel:(512)387-2951' className="font-oswald text-cyan-500 rounded-md p-2 border-2 border-cyan-500 font-bold whitespace-nowrap">
            + (512) 387-2951
            </a>
            <button onClick={openLiveChat} className="font-oswald hover:bg-white hover:text-cyan-500 text-white bg-cyan-500 p-2 px-4 rounded-md hover:bg-customYellow duration-300 border-orange-500 whitespace-nowrap">
                Live Chat
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden text-cyan-300 ml-auto">
            <button 
              className="p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden absolute top-full left-0 right-0 bg-background shadow-md`}>
          <div className="flex flex-col p-4 space-y-4">
            <Link href="/" className="nav-link text-cyan-300">
              Home
            </Link>
            <Link href="/about" className="nav-link text-cyan-300">
              About Us
            </Link>
            <div>
              <button 
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="nav-link w-full text-left text-cyan-300 flex items-center justify-between"
              >
                Services
                <svg className={`w-4 h-4 transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isServicesOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  {services.map((service, index) => (
                    <Link 
                      key={index}
                      href={`/services/${service.toLowerCase().replace(/\s+/g, '')}`}
                      className="block py-1 text-sm text-cyan-300 hover:text-orange-500"
                    >
                      {service}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/testimonials" className="nav-link text-cyan-300">
              Testimonials
            </Link>
            <Link href="/portfolio" className="nav-link text-cyan-300">
              Portfolio
            </Link>
            <Link href="/contact" className="nav-link text-cyan-300">
              Contact Us
            </Link>
            <a href='mailto:support@amazonlegacypress.com' className="font-oswald text-cyan-500 font-bold">
              support@logowebusa.com
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}