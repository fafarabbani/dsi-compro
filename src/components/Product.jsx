import React, { useState } from "react";
import { Link } from 'react-router-dom';
import louverImage from '../assets/Louver.PNG';
import zincImage from '../assets/Zinc.jpg';
import spandekImage from '../assets/Spandek.PNG';
import cableImage from '../assets/Cable.PNG';
import interiorImage from '../assets/Interior.PNG';
import resinImage from '../assets/Resin.PNG';

import {
  ArrowUpRight,
} from "lucide-react";

const Product = () => {

  const [selectedProduct, setSelectedProduct] = useState(null);

  const product = [
    {
      title: "Louver Steel Panel",
      description:
        "Our Louvered Steel Plate is crafted exclusively from 100% high-quality Korean materials, provides reliable, long-lasting protection and efficiency, standing out as a superior choice in the market.",
      image: louverImage,
      features: ["Cloud Integration", "Scalable Architecture", "24/7 Support"],
      link: "/brands/spandek", 
    },
    {
      title: "Zinc Steel Panel",
      description:
        "Our Zinc Steel Panel is made from 100% premium Korean materials, offering exceptional strength and durability. Its flexible design ensures easy installation and adaptability for various projects.",
      image: zincImage,
      features: ["Cloud Integration", "Scalable Architecture", "24/7 Support"],
      link: "/brands/spandek", 
    },
    {
      title: "Spandek Steel Panel",
      description:
        "Our Zinc Steel Panel is made from 100% premium Korean materials, offering exceptional strength and durability. Its flexible design ensures easy installation and adaptability for various projects.",
      image: spandekImage,
      features: ["Cloud Integration", "Scalable Architecture", "24/7 Support"],
      link: "/brands/spandek", 
    },
    {
      title: "Cable Tray",
      description:
        "Our Zinc Steel Panel is made from 100% premium Korean materials, offering exceptional strength and durability. Its flexible design ensures easy installation and adaptability for various projects.",
      image: cableImage,
      features: ["Cloud Integration", "Scalable Architecture", "24/7 Support"],
      link: "/brands/tray", 
    },
    {
      title: "Epoxy & Interior Epoxy",
      description:
        "Our Zinc Steel Panel is made from 100% premium Korean materials, offering exceptional strength and durability. Its flexible design ensures easy installation and adaptability for various projects.",
      image: interiorImage,
      features: ["Cloud Integration", "Scalable Architecture", "24/7 Support"],
      link: "/products", 
    },
    {
      title: "Resin Epoxy",
      description:
        "Our Zinc Steel Panel is made from 100% premium Korean materials, offering exceptional strength and durability. Its flexible design ensures easy installation and adaptability for various projects.",
      image: resinImage,
      features: ["Cloud Integration", "Scalable Architecture", "24/7 Support"],
      link: "/products", 
    },
  ];

  const handleModalOpen = (product) => {
    setSelectedProduct(product);
  };

  return (
    <section className="relative py-32 bg-slate-50">
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-full h-full">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-violet-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
          <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col lg:flex-row gap-10 mb-24 items-center justify-center">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-[#f00606] to-[#DC2525] bg-clip-text text-transparent lg:text-6xl">
            Top
            <span className="ml-5 mt-2 bg-gradient-to-r from-blue-900 to-indigo-600 bg-clip-text text-transparent">
              Quality
            </span>
          </h2>
          <h2 className="text-5xl font-bold tracking-tight text-[#DC2525] lg:text-6xl">
            Best
            <span className="ml-5 mt-2 bg-gradient-to-r from-blue-900 to-indigo-600 bg-clip-text text-transparent">
              Product
            </span>
          </h2>
            <h2 className="text-5xl font-bold tracking-tight text-[#DC2525] lg:text-6xl">
              Best
              <span className="ml-5 mt-2 bg-gradient-to-r from-blue-900 to-indigo-600 bg-clip-text text-transparent">
                Price
              </span>
            </h2>
        </div>

        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group">
            <span className="text-sm font-medium">Our product</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>

        {/* product grid */}
        <div className="mt-5 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {product.map((product) => (
            <div
              key={product.title}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-slate-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative space-y-6">
                <div>
                  <img 
                    src={product.image}
                    alt={product.title}
                    class="w-full rounded-xl"
                    />
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-900 uppercase">
                    <Link to={product.link}>
                      <span className="text-[#0000ff] mr-1">PRODUCT</span>{product.title}
                    </Link>
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-justify">
                    {product.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100">
                  <button 
                    className={`group inline-flex items-center text-sm font-medium text-slate-900 hover:text-[#0000ff] transition-colors`}>
                        <Link to={product.link}>
                          View Details
                        </Link>
                    <ArrowUpRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Product