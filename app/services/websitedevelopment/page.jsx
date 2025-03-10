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
                  
                  <h1 className="font-oswald text-red-600 text-4xl max-w-xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-wide">
                  Custom Website
                  Development
                  </h1>
                  <p className='md:text-xl text-sm py-4 text-white'>No matter how big or small, every business can count on LogoWeb USA as an indispensable ally in its digital expansion. Our expert bespoke website design and development services are carried out with a laser-like concentration on producing quantifiable outcomes. To construct successful enterprises, websites in today's digital age need to be dynamic, engaging, and flexible.</p>
                  <p className='md:text-xl text-sm py-4 text-white'>Our UI/UX experts have an in-depth understanding of your company's needs, and they work diligently to build an appealing custom website based on your preferences.</p>
                  
                  <button className="btn-primary text-white bg-red-600 px-8 rounded-md py-4 text-lg uppercase tracking-wider">
                    Let's Talk
                  </button>
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