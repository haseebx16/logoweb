import React from 'react';
import { font } from '@/app/Components/font/font';
import { FaLaptopCode, FaCode, FaRocket, FaChartLine, FaSearch, FaFileAlt } from 'react-icons/fa';

const services = [
  {
    title: 'Event Video Services',
    description: "We offer event video services for enterprises with Website Bravo and add to your event professional and, also memorable aspects.",
    icon: <FaLaptopCode className="text-cyan-400 text-3xl" />
  },
  {
    title: 'Commercial/Advertising Video Services',
    description: 'Our professionals can offer an excellent advertising video platform for your products and services.',
    icon: <FaCode className="text-cyan-400 text-3xl" />
  },
  {
    title: 'Promotional Documentary Video Services',
    description: "With our promotional documentary video services, get your message across creatively and succinctly that caters to clients’ needs.",
    icon: <FaRocket className="text-cyan-400 text-3xl" />
  },
  {
    title: 'Corporate Video Services',
    description: "Our video production team offers corporate video services with professionalism in mind",
    icon: <FaChartLine className="text-cyan-400 text-3xl" />
  },
  {
    title: 'Real Estate Video Services',
    description: "Get videos produced with our animators and video services and show off your property from angles that increase your estate’s value.",
    icon: <FaChartLine className="text-cyan-400 text-3xl" />
  },
  {
    title: 'Educational Video Services',
    description: "We produce educational video services that are engaging and informative.",
    icon: <FaChartLine className="text-cyan-400 text-3xl" />
  },
  {
    title: 'Music Video Services',
    description: "We offer music video services that are eye-catching and attention grasping.",
    icon: <FaChartLine className="text-cyan-400 text-3xl" />
  },
  {
    title: 'Social Media Video Services',
    description: "Enhance your social media engagement ratio with our social media video services.",
    icon: <FaChartLine className="text-cyan-400 text-3xl" />
  },
];

const Ecom = () => {
  return (
    <div className={`${font.className} bg-background text-white py-20 px-6 md:px-20`}>
      <h1 className='text-2xl md:text-4xl text-center font-extrabold mb-10'>
      Popular Professional Video Production Services
      </h1>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        
        <div className="space-y-8">
          <img src='/multifaceted.png' className='w-full md:w-96 mx-auto' alt="Development Process" />
          {services.slice(0, 2).map((service, index) => (
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
          {services.slice(3, 8).map((service, index) => (
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
