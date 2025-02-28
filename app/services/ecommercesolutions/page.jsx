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
import EApproach from './e-approach';
import Ecom from './ecom';
import EcomSpecial from './EcomSpecial';

const page = () => {
  return (
    <div className={`${font.className} `}>
        <Header/>
        <section className={` ${font.className} relative h-screen md:h-[40rem] px-20  bg-background`}>
            <div className="container mx-auto px-4 py-48 relative z-20">
              <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="text-white max-w-4xl">
                  
                  <h1 className="font-oswald text-4xl max-w-xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-wide">
                  Ecommerce
                  Solutions
                  </h1>
                  <p className='md:text-xl text-sm py-4 text-white'>LogoWeb USA assists companies in establishing a dynamic and client-focused e-commerce website to facilitate the expansion of their online operations.</p>
                  <p className='md:text-xl text-sm py-4 text-white'>Contact us for e-commerce web development solutions!</p>
                  
                <button className="btn-primary text-white bg-cyan-400 px-8 rounded-md py-4 text-lg uppercase tracking-wider">
                    Let's Talk
                  </button>
                </div>
              </div>
          </div>
        </section>
        <Partners/>
        <EApproach/>
        <Ecom/>
        <Portfolio/>
        <EcomSpecial/>
        <LeadingFirmWeb/>
        <Talk/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default page