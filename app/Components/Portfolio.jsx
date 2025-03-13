"use client";

import React, { useState } from "react";
import Image from "next/image";
import { font } from "./font/font";

const Portfolio = () => {
  const [tab, setTab] = useState("Animations");

  const tabImages = {
    "Website Development": [
      "01.png",
      "02.png",
      "03.png",
      "04.png",
      "05.png",
      "06.png",
    ],
    Ecommerce: [
      "ecom1.png",
      "ecom2.png",
      "ecom3.png",
      "ecom4.png",
      "ecom5.png",
      "ecom6.png",
    ],
    Animations: [
      "anim1.jpg",
      "anim2.jpg",
      "anim3.jpg",
      "anim4.jpg",
      "anim5.jpg",
      "anim6.jpg",
    ],
    "Logo Design": [
      "logo1.jpg",
      "logo2.jpg",
      "logo3.gif",
      "logo4.gif",
      "logo5.jpg",
      "logo6.jpg",
    ],
    "Mobile Applications": [
      "mp1.jpg",
      "mp2.jpg",
      "mp3.jpg",
      "mp4.jpg",
      "mp5.jpg",
      "mp6.jpg",
    ],
  };

  return (
    <section className={`${font.className} flex flex-col text-white justify-center items-center p-12 bg-zinc-900`}>
      <h1 className="text-2xl text-center md:text-5xl text-red-600 font-bold">See Our Work</h1>
      <div className="flex flex-wrap justify-center gap-4 pt-12 text-lg">
        {Object.keys(tabImages).map((category) => (
          <button
            key={category}
            onClick={() => setTab(category)}
            className={`px-4 py-2 rounded-md transition-all duration-300 ${
              tab === category ? "bg-red-600 text-white font-bold" : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {tabImages[tab].map((image, index) => (
          <div key={index} className="relative w-full h-64">
            <Image
              src={`/${image}`}
              alt={`${tab} ${index + 1}`}
              width={400}
              height={100}
              layout="responsive"
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
