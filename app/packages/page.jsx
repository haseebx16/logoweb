import React from 'react'
import Header from '../Components/Header'
import { font } from '../Components/font/font'
import Talk from '../Components/Talk'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'
import Packages from '../Components/Packages'

const page = () => {
  return (
    <div>
        <Header/>
        <section className={` ${font.className} relative h-screen md:h-[30rem] px-20  bg-background`}>
                    <div className="container mx-auto px-4 py-48 relative z-20">
                      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                        <div className="text-white text-center max-w-4xl">
                          
                          <h1 className="font-oswald text-center text-4xl  md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-wide">
                          See Our Packages
                          </h1>
                          {/* <p className={`${lightFont.className} md:text-xl text-center font-light text-sm py-4 text-white`}>Our work is a testament to our expertise. It speaks aloud in respect of e-commerce, web and mobile application, SEO, Google ad words and email marketing, branding and social media marketing. It demonstrates the caliber of value achieved for businesses like yours.</p> */}
                          
                          <a href='/about'><button className="btn-primary text-cyan-300 text-lg uppercase tracking-wider">
                            Discover Our Data-Driven Strategies
                          </button></a>
                        </div>
                      </div>
                  </div>
                </section>
                <section className={` ${font.className} p-20 px-16 flex flex-col text-white justify-center items-center bg-zinc-950`}>
                    <Packages/> 
                </section>
                <Talk/>
                <Contact/>
                <Footer/>
    </div>
  )
}

export default page