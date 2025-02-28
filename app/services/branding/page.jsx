"use client";

import { font } from '@/app/Components/font/font';
import React from 'react'
import Header from '@/app/Components/Header';
import Partners from '@/app/Components/Partners';
import Portfolio from '@/app/Components/Portfolio';
import Talk from '@/app/Components/Talk';
import Contact from '@/app/Components/Contact';
import Footer from '@/app/Components/Footer';
import LeadingFirmWeb from '@/app/Components/LeadingFirmWeb';
import EApproach from './brand-approach';
import Ecom from './brand';
import EcomSpecial from './BrandSpecial';
import WhyChoose from './WhyChoose';

const page = () => {
  return (
    <div className={`${font.className} `}>
        <Header/>
        <section className={` ${font.className} relative h-screen md:h-[40rem] px-20  bg-background`}>
            <div className="container mx-auto px-4 py-48 relative z-20">
              <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="text-white max-w-4xl">
                  
                  <h1 className="font-oswald text-4xl max-w-xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-wide">
                  Brand Design Prototype
                  </h1>
                  <p className='md:text-xl text-sm py-4 text-white'>The design of your company's brand identity helps customers distinguish your business. We can assist companies located all around the globe with the creation of their corporate identities.</p>
                  
                  <button className="btn-primary text-white bg-cyan-400 px-8 rounded-md py-4 text-lg uppercase tracking-wider">
                    Let's Talk
                  </button>
                </div>
              </div>
          </div>
        </section>
        <Partners/>
        <EApproach/>
        <WhyChoose/>
        <Portfolio/>
        <LeadingFirmWeb/>
        <Talk/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default page