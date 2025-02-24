"use client";

import { font } from '@/app/Components/font/font';
import React from 'react'
import Header from '@/app/Components/Header';
import Partners from '@/app/Components/Partners';
import Approach from '@/app/Components/Approach';
import Web from '@/app/Components/Web';
import Portfolio from '@/app/Components/Portfolio';
import Talk from '@/app/Components/Talk';
import Contact from '@/app/Components/Contact';
import Footer from '@/app/Components/Footer';
import WebSpecial from '@/app/Components/WebSpecial';
import LeadingFirmWeb from '@/app/Components/LeadingFirmWeb';

const page = () => {
  return (
    <div className={`${font.className} `}>
        <Header/>
        <section className={` ${font.className} relative h-screen md:h-[50rem] px-20  bg-background`}>
            <div className="container mx-auto px-4 py-48 relative z-20">
              <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="text-white max-w-4xl">
                  
                  <h1 className="font-oswald text-4xl max-w-xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-wide">
                  Custom Web Application
                  Development
                  </h1>
                  <p className='md:text-xl text-sm py-4 text-white'>Our web developers are experts in making reliable, secure, and flexible web apps that meet your specific needs.

Now is the moment to begin developing software that takes advantage of flexible layouts. Contact us NOW!</p>
                  <a href='/about'><button className="btn-primary text-cyan-300 text-lg uppercase tracking-wider">
                    Discover Our Data-Driven Strategies
                  </button></a>
                </div>
              </div>
          </div>
        </section>
        <Partners/>
        <Approach/>
        <Web/>
        <Portfolio/>
        <WebSpecial/>
        <LeadingFirmWeb/>
        <Talk/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default page