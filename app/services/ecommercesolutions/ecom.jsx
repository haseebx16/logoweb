import React from 'react';
import { font } from './font/font';
import { FaLaptopCode, FaCode, FaRocket, FaChartLine, FaSearch, FaFileAlt } from 'react-icons/fa';

const services = [
  {
    title: 'Drupal Commerce',
    description: "Drupal Commerce's scalability, adaptability, and built-in security allow you to build a shop that is both secure and highly useful. In addition, to boost conversions and sales, it provides customers with individualized experiences across various interfaces and devices.",
    icon: <FaLaptopCode className="text-cyan-400 text-3xl" />
  },
  {
    title: 'Custom Ecommerce Solution',
    description: 'Our developers are highly skilled and flexible in providing custom e-commerce solutions that cater to clients’ needs.',
    icon: <FaCode className="text-cyan-400 text-3xl" />
  },
  {
    title: 'WooCommerce',
    description: 'WooCommerce is a free and open-source WordPress plugin that enables you to set up and manage a fully functional online shop with the ability to sell an infinite number of items.',
    icon: <FaRocket className="text-cyan-400 text-3xl" />
  },
  {
    title: 'Magento',
    description: "Magento's multi-store administration features make it easy to oversee all your online shops from a single location. In addition to its worldwide support, shipping, and order administration capabilities, it also supports several languages and currencies.",
    icon: <FaChartLine className="text-cyan-400 text-3xl" />
  },
];

const Ecom = () => {
  return (
    <div className={`${font.className} bg-background text-white py-20 px-6 md:px-20`}>
      <h1 className='text-2xl md:text-4xl text-center font-extrabold mb-10'>
      Frameworks For Online Stores We Offer Solutions For
      </h1>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        
        <div className="space-y-8">
          <img src='/multifaceted.png' className='w-full md:w-96 mx-auto' alt="Development Process" />
          {services.slice(0, 1).map((service, index) => (
            <div key={index} className="flex space-x-4 items-start">
              <div className="p-3 bg-gray-800 rounded-lg">{service.icon}</div>
              <div>
                <h2 className="text-xl font-bold">{service.title}</h2>
                <p className="text-gray-300">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-8">
          {services.slice(1, 4).map((service, index) => (
            <div key={index} className="flex space-x-4 items-start">
              <div className="p-3 bg-gray-800 rounded-lg">{service.icon}</div>
              <div>
                <h2 className="text-xl font-bold">{service.title}</h2>
                <p className="text-gray-300">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Ecom;
