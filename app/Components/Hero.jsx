'use client';

import { font } from './font/font';

export default function Hero() {
  return (
    <section className={` ${font.className} relative h-screen md:h-[44rem] px-20  bg-background`}>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="text-white max-w-xl">
            
            <h1 className="font-oswald text-4xl max-w-xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-wide">
              BRAND.DESIGN.<br/>PRODUCT. IN-HOUSE
                DEVELOPMENT
                & MORE
            </h1>
            <a href='/about'><button className="btn-primary text-cyan-300 text-lg uppercase tracking-wider">
               Discover Our Data-Driven Strategies
            </button></a>
          </div>
          <div className='flex items-center justify-center'>
            <img src='homeBanner-img.png' className='w-full h-full '/>
          </div>
        </div>
    </div>
    </section>
  );
}