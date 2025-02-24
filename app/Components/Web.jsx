import React from 'react';
import { font } from './font/font';
import { FaLaptopCode, FaCode, FaRocket, FaChartLine, FaSearch, FaFileAlt } from 'react-icons/fa';

const services = [
  {
    title: 'Wireframes & Design Concepts',
    description: 'Before investing significant time into creating comprehensive mockups of the user interface replete with colors, fonts, and other design aspects, our designers check to ensure they are moving in the correct path.',
    icon: <FaLaptopCode className="text-cyan-400 text-3xl" />
  },
  {
    title: 'Web Development & Site Testing',
    description: 'Online testing is intended to evaluate every part of the operation of a web application. This includes checking for faults in usability, compatibility, security, and overall performance.',
    icon: <FaCode className="text-cyan-400 text-3xl" />
  },
  {
    title: 'Website Launch',
    description: 'When the site testing is complete, it will be ready for launch. Your website will be live on the internet and be accessible to users from all over the world.',
    icon: <FaRocket className="text-cyan-400 text-3xl" />
  },
  {
    title: 'Monitoring & Optimizing',
    description: 'Website monitoring optimizes page loading, reduces fault time, and improves user experience. Our developers ensure that company websites are up and running smoothly.',
    icon: <FaChartLine className="text-cyan-400 text-3xl" />
  },
  {
    title: 'Information Architecture',
    description: 'The information architecture of a website or application describes several characteristics, including structure, navigation, functionality, and interactions.',
    icon: <FaSearch className="text-cyan-400 text-3xl" />
  },
  {
    title: 'Website Content Development',
    description: 'It includes material on your website that is pertinent to your business and meets your description. Our specialists will optimize your website so that it attracts a more significant number of visitors.',
    icon: <FaFileAlt className="text-cyan-400 text-3xl" />
  },
  {
    title: 'Website Launch',
    description: 'When the site testing is complete, it will be ready for launch. Your website will be live on the internet and be accessible to users from all over the world.',
    icon: <FaFileAlt className="text-cyan-400 text-3xl" />
  },
  {
    title: 'Monitoring & Optimizing',
    description: 'Website monitoring optimizes page loading, reduces fault time, and improves user experience. Our developers ensure that company websites are up and running smoothly.',
    icon: <FaFileAlt className="text-cyan-400 text-3xl" />
  },
  {
    title: 'Discovery',
    description: "Website Bravo knows how to create customized solutions and apps to meet your company's requirements.",
    icon: <FaFileAlt className="text-cyan-400 text-3xl" />
  },
];

const Web = () => {
  return (
    <div className={`${font.className} bg-background text-white py-20 px-6 md:px-20`}>
      <h1 className='text-2xl md:text-4xl text-center font-extrabold mb-10'>
        Our Custom Web Development Services Process
      </h1>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        
        <div className="space-y-8">
          <img src='/multifaceted.png' className='w-full md:w-96 mx-auto' alt="Development Process" />
          {services.slice(0, 3).map((service, index) => (
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
          {services.slice(3, 9).map((service, index) => (
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

export default Web;
