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
import EApproach from './vid-approach';
import Ecom from './video';
import EcomSpecial from './VideoSpecial';
import WhyChoose from './WhyChoose';

const page = () => {
  return (
    <div className={`${font.className} `}>
        <Header/>
        <section className={` ${font.className} relative h-screen md:h-[50rem] px-20  bg-background`}>
            <div className="container mx-auto px-4 py-48 relative z-20">
              <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="text-white max-w-4xl">
                  
                  <h1 className="font-oswald text-4xl max-w-xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-wide">
                  Video Production Services
                  </h1>
                  <p className='md:text-xl text-sm py-4 text-white'>Use motion graphics, 2D and 3D animations, videography, and video marketing to make your business stand out.

Benefit from LogoWeb USA's innovative video creation services to create a visually appealing animation for your company's brand.</p>
                  
                  <a href='/about'><button className="btn-primary text-cyan-300 text-lg uppercase tracking-wider">
                    Discover Our Data-Driven Strategies
                  </button></a>
                </div>
              </div>
          </div>
        </section>
        <Partners/>
        <EApproach/>
        <Ecom/>
        <Portfolio/>
        <WhyChoose/>
        <EcomSpecial/>
        <LeadingFirmWeb/>
        <Talk/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default page