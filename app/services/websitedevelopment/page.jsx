"use client";

import { font } from '@/app/Components/font/font';
import React from 'react'
import Header from '@/app/Components/Header';
import Partners from '@/app/Components/Partners';

const page = () => {
  return (
    <div className={`${font.className} `}>
        <Header/>
        <section className={` ${font.className} relative h-screen md:h-[50rem] px-20  bg-background`}>

      <div className="container mx-auto px-4 py-48 relative z-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="text-white max-w-4xl">
            
            <h1 className="font-oswald text-4xl max-w-xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-wide">
            Custom Website
            Development
            </h1>
            <p className='md:text-xl text-sm py-4 text-white'>No matter how big or small, every business can count on Website Bravo as an indispensable ally in its digital expansion. Our expert bespoke website design and development services are carried out with a laser-like concentration on producing quantifiable outcomes. To construct successful enterprises, websites in today's digital age need to be dynamic, engaging, and flexible.</p>
            <p className='md:text-xl text-sm py-4 text-white'>Our UI/UX experts have an in-depth understanding of your company's needs, and they work diligently to build an appealing custom website based on your preferences.</p>
            
            <a href='/about'><button className="btn-primary text-cyan-300 text-lg uppercase tracking-wider">
               Discover Our Data-Driven Strategies
            </button></a>
          </div>
        </div>
    </div>
    </section>
    <Partners/>
    </div>
  )
}

export default page