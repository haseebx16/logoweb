"use client";

import React, { useState } from "react";
import { font } from "./font/font";

const Packages = () => {
  const [tab, setTab] = useState("Logo Design");

  const packageDetails = {
    "Logo Design": [
      {
        title: "BASIC LOGO PACKAGE",
        price: "$30",
        description: "Ideal for startups and brand revamps.",
        features: ["3 Custom Logo Concepts", "1 Designer", "4 Revisions", "24-48 hours TAT", "100% Unique Design Guarantee"],
      },
      {
        title: "START UP LOGO PACKAGE",
        price: "$60",
        description: "Perfect for growing businesses.",
        features: ["5 Custom Logo Concepts", "2 Designers", "Unlimited Revisions", "48-72 hours TAT", "Final Files in AI, PSD, PNG, PDF"],
      },
      {
        title: "LOGO GROWUP PACKAGE",
        price: "$85",
        description: "For established businesses.",
        features: ["8 Custom Logo Concepts", "3 Designers", "Unlimited Revisions", "Stationary Design", "Free MS Word Letterhead"],
      },
      {
        title: "Website Bravo SPECIAL PACKAGE",
        price: "$175",
        description: "Comprehensive branding solution.",
        features: ["Unlimited Logo Concepts", "5 Award-Winning Designers", "Stationary & Icon Design"],
      },
    ],
    "Website Development": [
      {
        title: "BASIC WEBSITE PACKAGE",
        price: "$199",
        description: "Ideal for small businesses and startups.",
        features: ["5 Pages Website", "Responsive Design", "SEO Ready", "1 Revision", "24/7 Support"],
      },
      {
        title: "BUSINESS WEBSITE PACKAGE",
        price: "$399",
        description: "Suitable for businesses looking for expansion.",
        features: ["10 Pages Website", "CMS Integration", "SEO Optimization", "3 Revisions", "Live Chat Feature"],
      },
      {
        title: "E-COMMERCE PACKAGE",
        price: "$799",
        description: "Best for online stores.",
        features: ["15+ Products Setup", "Payment Gateway", "Custom Design", "Unlimited Revisions", "Advanced Security"],
      },
      {
        title: "PREMIUM WEBSITE PACKAGE",
        price: "$1,499",
        description: "Complete web solution.",
        features: ["Custom Website", "Unlimited Pages", "Premium Hosting", "Advanced SEO", "Unlimited Revisions"],
      },
    ],
    "Animations": [
      {
        title: "BASIC ANIMATION",
        price: "$150",
        description: "Simple logo animations.",
        features: ["2D Logo Animation", "3 Revisions", "Fast Turnaround", "HD Quality"],
      },
      {
        title: "EXPLAINER VIDEO PACKAGE",
        price: "$350",
        description: "Short explainer video for businesses.",
        features: ["60 Sec Animation", "Professional Voiceover", "Storyboarding", "Custom Characters"],
      },
      {
        title: "WHITEBOARD ANIMATION",
        price: "$500",
        description: "Ideal for corporate storytelling.",
        features: ["90 Sec Animation", "Scriptwriting", "Voiceover", "Multiple Revisions"],
      },
      {
        title: "PREMIUM 3D ANIMATION",
        price: "$1,200",
        description: "High-end animation package.",
        features: ["3D Animation", "Advanced Visual Effects", "Custom Storytelling", "Unlimited Revisions"],
      },
    ],
    "E-Commerce": [
      {
        title: "STARTER E-COMMERCE PACKAGE",
        price: "$299",
        description: "Basic online store setup.",
        features: ["Up to 10 Products", "Secure Checkout", "Mobile Optimized"],
      },
      {
        title: "GROWING STORE PACKAGE",
        price: "$599",
        description: "For businesses scaling up.",
        features: ["Up to 50 Products", "SEO & Marketing Tools", "Multi-Currency Support"],
      },
      {
        title: "ADVANCED STORE PACKAGE",
        price: "$999",
        description: "Full-featured e-commerce solution.",
        features: ["Unlimited Products", "Advanced Filters", "Custom Integrations"],
      },
      {
        title: "ENTERPRISE PACKAGE",
        price: "$2,500",
        description: "For high-scale businesses.",
        features: ["Custom Design", "Advanced Features", "AI-Based Recommendations"],
      },
    ],
    "Branding": [
      {
        title: "STARTER BRANDING PACKAGE",
        price: "$150",
        description: "Basic branding essentials.",
        features: ["Logo Design", "Business Card", "Letterhead"],
      },
      {
        title: "BUSINESS BRANDING PACKAGE",
        price: "$400",
        description: "Full branding package for businesses.",
        features: ["Custom Logo", "Brand Guidelines", "Stationery Design"],
      },
      {
        title: "PREMIUM BRANDING PACKAGE",
        price: "$850",
        description: "Complete identity package.",
        features: ["Custom Branding", "Social Media Kit", "Merchandise Design"],
      },
      {
        title: "ULTIMATE BRANDING PACKAGE",
        price: "$1,500",
        description: "End-to-end branding solutions.",
        features: ["All-Inclusive Branding", "Marketing Strategy", "Unlimited Revisions"],
      },
    ],
    "SEO": [
      {
        title: "BASIC SEO PACKAGE",
        price: "$100",
        description: "Ideal for small websites.",
        features: ["On-Page SEO", "Basic Keywords", "Site Audit"],
      },
      {
        title: "ADVANCED SEO PACKAGE",
        price: "$350",
        description: "For ranking growth.",
        features: ["Off-Page SEO", "Content Optimization", "Keyword Strategy"],
      },
      {
        title: "PREMIUM SEO PACKAGE",
        price: "$700",
        description: "Complete SEO strategy.",
        features: ["Competitor Analysis", "Backlink Building", "Monthly Reports"],
      },
      {
        title: "ENTERPRISE SEO PACKAGE",
        price: "$1,500",
        description: "For large-scale businesses.",
        features: ["Full SEO Strategy", "Content & Link Building", "Advanced Analytics"],
      },
    ],
    "Content Writing": [
      {
        title: "BLOG WRITING PACKAGE",
        price: "$50",
        description: "SEO-optimized blog content.",
        features: ["500 Words", "Keyword Research", "Plagiarism-Free"],
      },
      {
        title: "WEB CONTENT PACKAGE",
        price: "$200",
        description: "Professional website content.",
        features: ["Home, About, Services", "SEO Optimized", "Engaging Writing"],
      },
      {
        title: "PREMIUM WRITING PACKAGE",
        price: "$500",
        description: "Extensive content creation.",
        features: ["Long-Form Content", "Multiple Revisions", "Expert Writers"],
      },
      {
        title: "COPYWRITING PACKAGE",
        price: "$1,000",
        description: "For marketing & ads.",
        features: ["Sales Copy", "Landing Pages", "Conversion-Optimized"],
      },
    ],
    "Social Media": [
      {
        title: "BASIC SOCIAL MEDIA PACKAGE",
        price: "$100",
        description: "Ideal for small businesses.",
        features: ["5 Posts per Week", "Hashtag Research", "Basic Analytics"],
      },
      {
        title: "GROWTH PACKAGE",
        price: "$300",
        description: "For improving engagement.",
        features: ["10 Posts per Week", "Content Strategy", "Engagement Boosting"],
      },
      {
        title: "PREMIUM SOCIAL MEDIA PACKAGE",
        price: "$700",
        description: "Complete social media management.",
        features: ["Custom Designs", "Ad Campaigns", "Influencer Outreach"],
      },
      {
        title: "ULTIMATE SOCIAL MEDIA PACKAGE",
        price: "$1,500",
        description: "For brands aiming for massive growth.",
        features: ["Full Campaign Strategy", "24/7 Monitoring", "ROI Tracking"],
      },
    ],
  };

  return (
    <section className={`${font.className} flex flex-col text-white justify-center items-center p-12 bg-zinc-950`}>
      <h1 className="text-2xl text-center md:text-5xl font-bold">See Our Packages</h1>
      <div className="flex flex-wrap justify-center gap-4 pt-12 text-lg">
        {Object.keys(packageDetails).map((category) => (
          <button
            key={category}
            onClick={() => setTab(category)}
            className={`px-4 py-2 rounded-md transition-all duration-300 ${
              tab === category ? "bg-blue-600 text-white font-bold" : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {packageDetails[tab]?.map((pkg, index) => (
          <div key={index} className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold">{pkg.title}</h2>
            <p className="text-lg text-blue-400">{pkg.price}</p>
            <p className="text-sm text-gray-400">{pkg.description}</p>
            <ul className="mt-4 text-sm text-gray-300 list-disc pl-5">
              {pkg.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Packages;
