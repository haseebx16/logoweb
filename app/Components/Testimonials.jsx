"use client";

import React, { useEffect } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { font } from "./font/font";

const Testimonials = () => {

    const testimonials = [
        {
            text: " Our company has grown thanks to the LogoWeb USA Their expert solutions never fail to amaze us, and their expertise has accelerated our sales. They have successfull produced four separate websites for our businesses I would use them for any of my future projects and would highly suggest them!",
            name: "Meghan Bowen",
            role: "CEO",
        },
        {
            text: "The We wanted to express how satisfied we were with LogoWeb USA’s customerservice,expertise, and devotion. We got the services of a highly costly,well-known website provider to build our Website, but we receivedmore care and efficiency from this company—and at a very economical price. ",
            name: "Jonathan Carter",
            role: "Business Consultant",
        },
        {
            text: "It’s been a wonderful experience working with LogoWeb USA.They are the most skilled and knowledgeable web design companyI have dealt with in my many years of experience in the industry.They tackle each project with exceptional attention and creativity and havegreat understanding",
            name: "Emily Roberts",
            role: "Entrepreneur",
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <section className={`${font.className} pt-4 relative bg-zinc-900 overflow-hidden`}>
            {/* Heading */}
            <div className="flex justify-center items-center">
                <h1 data-aos="fade-down" className="text-3xl md:text-5xl md:max-w-5xl font-bold p-4 text-center relative">
                    
                    <span className="relative text-white md:text-white z-10">
                        Testimonials
                    </span>
                </h1>
            </div>

            {/* Testimonial Section */}
            <div className="mt-8 px-4 md:px-20 lg:px-40">
                <Slider {...settings}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="p-6 bg-zinc-900 rounded-lg shadow-lg relative">
                            {/* Testimonial Text */}
                            <p data-aos="fade-up" className={`${font.className} text-white text-lg md:text-2xl leading-relaxed`}>{testimonial.text}</p>

                            {/* Author Info */}
                            <div className="flex items-center mt-6">
                                <div className="p-2 bg-cyan-500 text-white rounded-full">
                                    <i className="fas fa-quote-left text-xl"></i>
                                </div>
                                <div className={`${font.className} ml-4`}>
                                    <p data-aos="fade-right" className="text-cyan-300 font-semibold">{testimonial.name}</p>
                                    <p className="text-white text-sm">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Testimonials;