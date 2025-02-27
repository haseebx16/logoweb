import React from 'react'
import Header from '../Components/Header'
import { font } from '../Components/font/font'
import Talk from '../Components/Talk'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'
import { FaShoppingBag } from "react-icons/fa";
import { FaBriefcaseMedical } from "react-icons/fa";
import { GoLaw } from "react-icons/go";
import { LuUtilityPole } from "react-icons/lu";
import { FaHouse } from "react-icons/fa6";
import { GrTechnology } from "react-icons/gr";
import { GiBanknote } from "react-icons/gi";
import { GiLipstick } from "react-icons/gi";
import { RiBookShelfLine } from "react-icons/ri";

const page = () => {
  return (
    <div>
        <Header/>
        <section className={` ${font.className} relative h-screen md:h-[40rem] px-20  bg-background`}>
                    <div className="container mx-auto px-4 py-48 relative z-20">
                      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                        <div className="text-white text-center max-w-4xl">
                          
                          <h1 className="font-oswald text-center text-4xl  md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-wide">
                          We serve all encompassing industries all over the globe
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
                    <div>
                    <h1 className=' md:text-6xl text-3xl font-extrabold text-center'>Industries We Serve In</h1>    
                    </div>
                    <div className='grid mt-8 grid-cols-1 md:grid-cols-3 gap-4'>
                        <div className='bg-transparent hover:bg-white hover:text-black duration-700 flex flex-col justify-center items-center p-12 px-24 border border-zinc-700 '>
                            <FaShoppingBag className='text-7xl text-cyan-700'/>
                            <h2 className='text-2xl font-bold'>Retail</h2>
                        </div>
                        <div className='bg-transparent hover:bg-white hover:text-black duration-700 p-12 flex flex-col justify-center items-center px-24 border border-zinc-700 '>
                        <FaBriefcaseMedical className='text-7xl text-cyan-700'/>
                            
                            <h2 className='text-2xl font-bold'>Medical</h2>
                        </div>
                        <div className='bg-transparent hover:bg-white hover:text-black duration-700 p-12 flex flex-col justify-center items-center px-24 border border-zinc-700 '>
                        <GoLaw className='text-7xl text-cyan-700'/>
                            <h2 className='text-2xl font-bold'>Legal</h2>
                        </div>
                        <div className='bg-transparent hover:bg-white hover:text-black duration-700 flex flex-col justify-center items-center p-12 px-24 border border-zinc-700 '>
                        <GoLaw className='text-7xl text-cyan-700'/>
                            
                            <h2 className='text-2xl font-bold'>Government</h2>
                        </div>
                        <div className='bg-transparent hover:bg-white hover:text-black duration-700 p-12 flex flex-col justify-center items-center px-24 border border-zinc-700 '>
                        <LuUtilityPole className='text-7xl text-cyan-700'/>

                            <h2 className='text-2xl font-bold'>Utilities</h2>
                        </div>
                        <div className='bg-transparent hover:bg-white hover:text-black duration-700 p-12 flex flex-col justify-center items-center px-24 border border-zinc-700 '>
                        <FaHouse className='text-7xl text-cyan-700'/>

                            <h2 className='text-2xl font-bold'>Real Estate</h2>
                        </div>
                        <div className='bg-transparent hover:bg-white hover:text-black duration-700 flex flex-col justify-center items-center p-12 px-24 border border-zinc-700 '>
                        <GrTechnology className='text-7xl text-cyan-700'/>

                            <h2 className='text-2xl font-bold'>Technology</h2>
                        </div>
                        <div className='bg-transparent hover:bg-white hover:text-black duration-700 p-12 flex flex-col justify-center items-center px-24 border border-zinc-700 '>
                        <GiBanknote className='text-7xl text-cyan-700'/>
                            
                            <h2 className='text-2xl font-bold'>Finance</h2>
                        </div>
                        <div className='bg-transparent hover:bg-white hover:text-black duration-700 p-12 flex flex-col justify-center items-center px-24 border border-zinc-700 '>
                            <GiLipstick className='text-7xl text-cyan-700'/>
                            <h2 className='text-2xl font-bold'>Beauty</h2>
                        </div>
                        <div className='bg-transparent hover:bg-white hover:text-black duration-700 flex flex-col justify-center items-center p-12 px-24 border border-zinc-700 '>
                        <RiBookShelfLine className='text-7xl text-cyan-700'/>

                            <h2 className='text-2xl font-bold'>Education</h2>
                        </div>
                       

                    </div>

                    
                </section>
                <Talk/>
                <Contact/>
                <Footer/>
    </div>
  )
}

export default page