import React from 'react'
import Header from '../Components/Header'
import { font } from '../Components/font/font'
import Talk from '../Components/Talk'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'
import { lightFont } from '../Components/font/lightFont'
import { FaPhp } from "react-icons/fa6";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaAndroid } from "react-icons/fa";
import { TbBrandXamarin } from "react-icons/tb";
import { FaLaravel } from "react-icons/fa";
import { DiDjango } from "react-icons/di";

const page = () => {
  return (
    <div>
        <Header/>
        <section className={` ${font.className} relative h-screen md:h-[40rem] px-20  bg-background`}>
                    <div className="container mx-auto px-4 py-48 relative z-20">
                      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                        <div className="text-white text-center max-w-4xl">
                          
                          <h1 className="font-oswald text-center text-red-600 text-4xl  md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-wide">
                          Expertise in various cutting-edge technologies
                          </h1>
                          <p className={`${lightFont.className} md:text-xl text-center font-light text-sm py-4 text-white`}>Our work is a testament to our expertise. It speaks aloud in respect of e-commerce, web and mobile application, SEO, Google ad words and email marketing, branding and social media marketing. It demonstrates the caliber of value achieved for businesses like yours.</p>
                          
                          <a href='/about'><button className="btn-primary text-red-600 text-lg uppercase tracking-wider">
                            Discover Our Data-Driven Strategies
                          </button></a>
                        </div>
                      </div>
                  </div>
                </section>
                <section className={` ${font.className} p-20 px-16 flex flex-col text-white justify-center items-center bg-zinc-950`}>
                    <div>
                    <h1 className=' md:text-6xl text-3xl text-red-600 font-extrabold text-center'>We have complete knowledge of these technologies</h1>    
                    </div>
                    <div className='grid mt-8 grid-cols-1 md:grid-cols-3 gap-4'>
                        <div className='bg-transparent hover:bg-white hover:text-black duration-700 flex flex-col justify-center items-center p-12 px-24 border border-zinc-700 '>
                            <FaPhp className='text-7xl text-red-600'/>
                            <h2 className='text-2xl font-bold'>PHP</h2>
                        </div>
                        <div className='bg-transparent hover:bg-white hover:text-black duration-700 p-12 flex flex-col justify-center items-center px-24 border border-zinc-700 '>
                        <FaPython className='text-7xl text-red-600'/>
                            
                            <h2 className='text-2xl font-bold'>Python</h2>
                        </div>
                        {/* <div className='bg-transparent hover:bg-cyan-400 duration-700 p-12 flex flex-col justify-center items-center px-24 border border-zinc-700 '>
                            <h2 className='text-2xl font-bold'>.NET</h2>
                        </div> */}
                        <div className='bg-transparent hover:bg-white hover:text-black duration-700 flex flex-col justify-center items-center p-12 px-24 border border-zinc-700 '>
                        <FaJava className='text-7xl text-red-600'/>
                            
                            <h2 className='text-2xl font-bold'>Java</h2>
                        </div>
                        <div className='bg-transparent hover:bg-white hover:text-black duration-700 p-12 flex flex-col justify-center items-center px-24 border border-zinc-700 '>
                        <FaNodeJs className='text-7xl text-red-600'/>

                            <h2 className='text-2xl font-bold'>Node.js</h2>
                        </div>
                        <div className='bg-transparent hover:bg-white hover:text-black duration-700 p-12 flex flex-col justify-center items-center px-24 border border-zinc-700 '>
                        <FaAngular className='text-7xl text-red-600'/>

                            <h2 className='text-2xl font-bold'>Angular</h2>
                        </div>
                        <div className='bg-transparent hover:bg-white hover:text-black duration-700 flex flex-col justify-center items-center p-12 px-24 border border-zinc-700 '>
                        <FaVuejs className='text-7xl text-red-600'/>

                            <h2 className='text-2xl font-bold'>Vue.JS</h2>
                        </div>
                        <div className='bg-transparent hover:bg-white hover:text-black duration-700 p-12 flex flex-col justify-center items-center px-24 border border-zinc-700 '>
                        <FaReact className='text-7xl text-red-600'/>
                            
                            <h2 className='text-2xl font-bold'>React</h2>
                        </div>
                        <div className='bg-transparent hover:bg-white hover:text-black duration-700 p-12 flex flex-col justify-center items-center px-24 border border-zinc-700 '>
                            <FaApple className='text-7xl text-red-600'/>
                            <h2 className='text-2xl font-bold'>iOS</h2>
                        </div>
                        <div className='bg-transparent hover:bg-white hover:text-black duration-700 flex flex-col justify-center items-center p-12 px-24 border border-zinc-700 '>
                        <FaAndroid className='text-7xl text-red-600'/>

                            <h2 className='text-2xl font-bold'>Android</h2>
                        </div>
                        <div className='bg-transparent hover:bg-white hover:text-black duration-700 p-12 flex flex-col justify-center items-center px-24 border border-zinc-700 '>
                            <TbBrandXamarin className='text-7xl text-red-600'/>
                            <h2 className='text-2xl font-bold'>Xamarin</h2>
                        </div>
                        <div className='bg-transparent hover:bg-white hover:text-black duration-700 p-12 flex flex-col justify-center items-center px-24 border border-zinc-700 '>
                            <FaLaravel className='text-7xl text-red-600'/>
                            <h2 className='text-2xl font-bold'>Laravel</h2>
                        </div>
                        <div className='bg-transparent hover:bg-white hover:text-black duration-700 p-12 flex flex-col justify-center items-center px-24 border border-zinc-700 '>
                            <DiDjango className='text-7xl text-red-600'/>
                            <h2 className='text-2xl font-extrabold'>Django</h2>
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