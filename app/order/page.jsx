"use client";

import React, { useState } from 'react'
import Header from '../Components/Header'
import { font } from '../Components/font/font'
import Talk from '../Components/Talk'
import Footer from '../Components/Footer'

const page = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    
      const [isSubmitting, setIsSubmitting] = useState(false);

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }));
      };

  return (
    <div>
        <Header/>
        <section className={` ${font.className} relative h-screen md:h-[30rem] px-20  bg-background`}>
                    <div className="container mx-auto px-4 py-48 relative z-20">
                      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                        <div className="text-white text-center max-w-4xl">
                          
                          <h1 className="font-oswald text-red-600 text-center text-4xl  md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-wide">
                          Order Now !
                          </h1>
                          
                          <a href='/about'><button className="btn-primary text-red-600 text-lg uppercase tracking-wider">
                            Discover Our Data-Driven Strategies
                          </button></a>
                        </div>
                      </div>
                  </div>
                </section>
                <section className={` ${font.className} p-20 pt-12 px-16 flex flex-col text-white justify-center items-center bg-zinc-950`}> 
                    <h1 className='text-red-600 text-4xl font-bold'>Fill Up This Form</h1>
                    <form
                  
                    className="w-full mt-8 text-black md:mt-0 max-w-lg md:max-w-2xl p-8 rounded-lg"
                >
                    <div data-aos="fade-right" className="mb-4">
                    <label
                        htmlFor="name"
                        className="block text-cyan-300 font-semibold"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    </div>

                    <div data-aos="fade-left" className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-cyan-300 font-semibold"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    </div>

                    <div data-aos="fade-up-right" className="mb-4">
                    <label
                        htmlFor="phone"
                        className="block text-cyan-300 font-semibold"
                    >
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your Phone Number"
                        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    </div>

                    <div data-aos="fade-up-left" className="mb-4">
                    <label
                        htmlFor="message"
                        className="block text-cyan-300 font-semibold"
                    >
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows="4"
                        required
                    ></textarea>
                    </div>

                    <button
                    data-aos="flip-right"
                    type="submit"
                    className="w-full bg-red-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-black duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    disabled={isSubmitting}
                    >
                    {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
          </form>
                </section>
                <Talk/>
                <Footer/>
    </div>
  )
}

export default page