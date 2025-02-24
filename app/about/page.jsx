import React from 'react'
import Header from '../Components/Header'
import { font } from '../Components/font/font'
import Philosophy from '../Components/Philosophy'
import TakeCare from '../Components/TakeCare'
import OurExpertise from '../Components/OurExpertise'
import Talk from '../Components/Talk'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'
import DataUse from '../Components/DataUse'
import Reliable from '../Components/Reliable'
import GooglePartner from '../Components/GooglePartner'

const page = () => {
  return (
    <div>
        <Header/>
         <section className={` ${font.className} relative overflow-hidden h-screen md:h-[55rem] px-20 flex flex-col justify-center items-center bg-background`}>
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black/60 z-10"></div>
                    <div 
                        className="w-full h-full bg-cover bg-center"
                        style={{
                            backgroundImage: `url('/about.png')`,
                        }}
                    ></div>
            </div>
              <div className="container absolute px-4 py-20 z-20">
                <div className="flex flex-col md:flex-row items-center justify-center">
                  <div className="text-white flex flex-col items-center justify-center text-center">
                    
                    <h1 className="font-oswald text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-wide">
                    Helping Ambitious Brands Punch Above Their Weight
                    </h1>
                    <p className='text-sm md:text-xl max-w-4xl'>Driven by curiosity. Based on a plan. We are a creative web design company that digitally connects your business strategy and vision. Our imagination assists in turning your dreams into practical concepts and inspiring success tales that shake up the digital economy.</p>
                    <p className='text-sm md:text-xl mt-4 max-w-4xl'>We are devoted to supporting new companies in connecting with the right audiences at the appropriate moment! Our guiding principles drive us to explore new features to help you develop new connections, form new collaborations, and offer creative design solutions to your company to assist you in succeeding in the digital marketing ecosystem.</p>
                  </div>
                </div>
            </div>
            </section>
            <Philosophy/>
            <TakeCare/>
            <OurExpertise/>
            <DataUse/>
            <Reliable/>
            <GooglePartner/>
            <Talk/>
            <Contact/>
            <Footer/>
    </div>
  )
}

export default page