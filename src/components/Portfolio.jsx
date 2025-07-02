import React, { useState } from "react";
import { ExternalLink, ArrowUpRight, Code } from "lucide-react";
import LazyImage from "./LazyImage";

import sevenImage from '../assets/product/louver/Seven.png';
import FourImage from '../assets/product/louver/Four2.png';
import ThreeImage from '../assets/product/louver/Three2.png';
import zinc370Image from '../assets/product/zinc/Three.png';
import zinc450Image from '../assets/product/zinc/Four.png';
import spandekImage from '../assets/product/spandek/Spandekcolour.PNG';
import posmacImage from '../assets/product/cable/Posmac.PNG';
import accessoriessImage from '../assets/product/cable/Accessories.PNG';
import aluminiumImage from '../assets/product/cable/Aluminiumladdertray.PNG';
import giCableImage from '../assets/product/cable/Gicableduct.PNG';
import hdgCableImage from '../assets/product/cable/Hdgcableduct.PNG';
import hdgLadderImage from '../assets/product/cable/Hdgladdertray.PNG';
import pcCableImage from '../assets/product/cable/Pccableduct.PNG';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = 
  [
    "All",
    "Louver Steel Panel",
    "Zinc Steel Panel",
    "Spandek Steel Panel",
    "Cable Tray",
    "Interior Epoxy",
    "Resin Epoxy",
  ];

  const projects = [
    // Louver
    {
      title: "Louver Steel Panel",
      description: "Our Louvered Steel Plate is crafted exclusively from 100% high-quality Korean materials, provides reliable, long-lasting protection and efficiency, standing out as a superior choice in the market.",
      image: sevenImage,
      category: "Louver Steel Panel",
      details: [
        { label: "Thickness", value: "0.51 m/m" },
        { label: "Coil Width", value: "610 MM" },
        { label: "Product Thx", value: "17.5 T" },
      ],
      limits: [
        { label: "Width", value: "345 mm" },
        { label: "Length", value: "900 mm" },
        { label: "Corner", value: "Var" },
      ],
    },
    {
      title: "Louver Steel Panel",
      description: "Our Louvered Steel Plate is crafted exclusively from 100% high-quality Korean materials, provides reliable, long-lasting protection and efficiency, standing out as a superior choice in the market.",
      image: FourImage,
      category: "Louver Steel Panel",
      details: [
        { label: "Thickness", value: "0.51 m/m" },
        { label: "Coil Width", value: "610 MM" },
        { label: "Product Thx", value: "17.5 T" },
      ],
      limits: [
        { label: "Width", value: "345 mm" },
        { label: "Length", value: "900 mm" },
        { label: "Corner", value: "Var" },
      ],
    },
    {
      title: "Louver Steel Panel",
      description: "Our Louvered Steel Plate is crafted exclusively from 100% high-quality Korean materials, provides reliable, long-lasting protection and efficiency, standing out as a superior choice in the market.",
      image: ThreeImage,
      category: "Louver Steel Panel",
      details: [
        { label: "Thickness", value: "0.51 m/m" },
        { label: "Coil Width", value: "610 MM" },
        { label: "Product Thx", value: "17.5 T" },
      ],
      limits: [
        { label: "Width", value: "355 mm" },
        { label: "Length", value: "900 mm" },
        { label: "Corner", value: "Var" },
      ],
    },

    // Zinc
    {
      title: "Zinc Steel Panel 370 Width",
      description: "Our Zinc Steel Panel is made from 100% premium Korean materials, offering exceptional strength and durability. Its flexible design ensures easy installation and adaptability for various projects.",
      image: zinc370Image,
      category: "Zinc Steel Panel",
      details: [
        { label: "Thickness", value: "0.51 m/m" },
        { label: "Coil Width", value: "530 MM" },
        { label: "Product Thx", value: "38 T" },
      ],
      limits: [
        { label: "Width", value: "396.5 mm" },
        { label: "Length", value: "min 900 mm" },
        { label: "Corner", value: "Lock" },
      ],
    },
    {
      title: "Zinc Steel Panel 450 Width",
      description: "Our Zinc Steel Panel is made from 100% premium Korean materials, offering exceptional strength and durability. Its flexible design ensures easy installation and adaptability for various projects.",
      image: zinc450Image,
      category: "Zinc Steel Panel",
      details: [
        { label: "Thickness", value: "0.51 m/m" },
        { label: "Coil Width", value: "530 MM" },
        { label: "Product Thx", value: "38 T" },
      ],
      limits: [
        { label: "Width", value: "476.5 mm" },
        { label: "Length", value: "min 900 mm" },
        { label: "Corner", value: "Lock" },
      ],
    },

    // Spandek
    {
      title: "Spandek",
      description: "Our Rooff Steel / Spandek, has three to six times better corrosion resistance compared to other zinc coated (galvanized) steel sheet of the same coating thickness. We issues a 25 year warranty for Roof Steel in case of residential applications.",
      image: spandekImage,
      category: "Spandek Steel Panel",
      details: [
        { label: "Thickness", value: "0.4 m/m" },
        { label: "Coil Width", value: "530 MM" },
        { label: "Product Thx", value: "38 T" },
      ],
      limits: [
        { label: "Width", value: "396.5 mm" },
        { label: "Length", value: "min 900 mm" },
        { label: "Corner", value: "Lock" },
      ],
    },

    // Cable Tray
    {
      title: "Posmac Ladder Tray",
      description: "Our Rooff Steel / Spandek, has three to six times better corrosion resistance compared to other zinc coated (galvanized) steel sheet of the same coating thickness. We issues a 25 year warranty for Roof Steel in case of residential applications.",
      image: posmacImage,
      category: "Cable Tray",
      details: [
        { label: "Thickness", value: "0.4 m/m" },
        { label: "Coil Width", value: "530 MM" },
        { label: "Product Thx", value: "38 T" },
      ],
      limits: [
        { label: "Width", value: "396.5 mm" },
        { label: "Length", value: "min 900 mm" },
        { label: "Corner", value: "Lock" },
      ],
    },
    {
      title: "Aluminium Ladder Tray",
      description: "Our Rooff Steel / Spandek, has three to six times better corrosion resistance compared to other zinc coated (galvanized) steel sheet of the same coating thickness. We issues a 25 year warranty for Roof Steel in case of residential applications.",
      image: aluminiumImage,
      category: "Cable Tray",
      details: [
        { label: "Thickness", value: "0.4 m/m" },
        { label: "Coil Width", value: "530 MM" },
        { label: "Product Thx", value: "38 T" },
      ],
      limits: [
        { label: "Width", value: "396.5 mm" },
        { label: "Length", value: "min 900 mm" },
        { label: "Corner", value: "Lock" },
      ],
    },
    {
      title: "Hot-Dip Galvanized Cable Duct",
      description: "Our Rooff Steel / Spandek, has three to six times better corrosion resistance compared to other zinc coated (galvanized) steel sheet of the same coating thickness. We issues a 25 year warranty for Roof Steel in case of residential applications.",
      image: hdgCableImage,
      category: "Cable Tray",
      details: [
        { label: "Thickness", value: "0.4 m/m" },
        { label: "Coil Width", value: "530 MM" },
        { label: "Product Thx", value: "38 T" },
      ],
      limits: [
        { label: "Width", value: "396.5 mm" },
        { label: "Length", value: "min 900 mm" },
        { label: "Corner", value: "Lock" },
      ],
    },
    {
      title: "Galvanized Iron Cable Duct",
      description: "Our Rooff Steel / Spandek, has three to six times better corrosion resistance compared to other zinc coated (galvanized) steel sheet of the same coating thickness. We issues a 25 year warranty for Roof Steel in case of residential applications.",
      image: giCableImage,
      category: "Cable Tray",
      details: [
        { label: "Thickness", value: "0.4 m/m" },
        { label: "Coil Width", value: "530 MM" },
        { label: "Product Thx", value: "38 T" },
      ],
      limits: [
        { label: "Width", value: "396.5 mm" },
        { label: "Length", value: "min 900 mm" },
        { label: "Corner", value: "Lock" },
      ],
    },
    {
      title: "Hot-Dip Galvanized Ladder Tray",
      description: "Our Rooff Steel / Spandek, has three to six times better corrosion resistance compared to other zinc coated (galvanized) steel sheet of the same coating thickness. We issues a 25 year warranty for Roof Steel in case of residential applications.",
      image: hdgLadderImage,
      category: "Cable Tray",
      details: [
        { label: "Thickness", value: "0.4 m/m" },
        { label: "Coil Width", value: "530 MM" },
        { label: "Product Thx", value: "38 T" },
      ],
      limits: [
        { label: "Width", value: "396.5 mm" },
        { label: "Length", value: "min 900 mm" },
        { label: "Corner", value: "Lock" },
      ],
    },
    {
      title: "Powder Coated Cable Duct",
      description: "Our Rooff Steel / Spandek, has three to six times better corrosion resistance compared to other zinc coated (galvanized) steel sheet of the same coating thickness. We issues a 25 year warranty for Roof Steel in case of residential applications.",
      image: pcCableImage,
      category: "Cable Tray",
      details: [
        { label: "Thickness", value: "0.4 m/m" },
        { label: "Coil Width", value: "530 MM" },
        { label: "Product Thx", value: "38 T" },
      ],
      limits: [
        { label: "Width", value: "396.5 mm" },
        { label: "Length", value: "min 900 mm" },
        { label: "Corner", value: "Lock" },
      ],
    },
    {
      title: "Accessories",
      description: "Our Rooff Steel / Spandek, has three to six times better corrosion resistance compared to other zinc coated (galvanized) steel sheet of the same coating thickness. We issues a 25 year warranty for Roof Steel in case of residential applications.",
      image: accessoriessImage,
      category: "Cable Tray",
      details: [
        { label: "Thickness", value: "0.4 m/m" },
        { label: "Coil Width", value: "530 MM" },
        { label: "Product Thx", value: "38 T" },
      ],
      limits: [
        { label: "Width", value: "396.5 mm" },
        { label: "Length", value: "min 900 mm" },
        { label: "Corner", value: "Lock" },
      ],
    },

    // Interior Epoxy
    {
      title: "Spandek",
      description: "Our Rooff Steel / Spandek, has three to six times better corrosion resistance compared to other zinc coated (galvanized) steel sheet of the same coating thickness. We issues a 25 year warranty for Roof Steel in case of residential applications.",
      image: spandekImage,
      category: "Interior Epoxy",
      details: [
        { label: "Thickness", value: "0.4 m/m" },
        { label: "Coil Width", value: "530 MM" },
        { label: "Product Thx", value: "38 T" },
      ],
      limits: [
        { label: "Width", value: "396.5 mm" },
        { label: "Length", value: "min 900 mm" },
        { label: "Corner", value: "Lock" },
      ],
    },

    // Resin Epoxy
    {
      title: "Spandek",
      description: "Our Rooff Steel / Spandek, has three to six times better corrosion resistance compared to other zinc coated (galvanized) steel sheet of the same coating thickness. We issues a 25 year warranty for Roof Steel in case of residential applications.",
      image: spandekImage,
      category: "Resin Epoxy",
      details: [
        { label: "Thickness", value: "0.4 m/m" },
        { label: "Coil Width", value: "530 MM" },
        { label: "Product Thx", value: "38 T" },
      ],
      limits: [
        { label: "Width", value: "396.5 mm" },
        { label: "Length", value: "min 900 mm" },
        { label: "Corner", value: "Lock" },
      ],
    },
  ];

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
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group mb-8">
            <span className="text-sm font-medium">Our Product</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>

          <h2 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-900 to-indigo-600 bg-clip-text text-transparent lg:text-6xl">
            DSI Metal Technology
          </h2>
          <h2 className="text-3xl font-bold text-slate-900 lg:text-4xl mt-3">
            100 % KOREAN PRODUCT
          </h2>
          
        </div>

        {/* Category filters */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 
                ${ 
                  activeFilter === category
                  ? "bg-violet-600 text-white shadow-lg shadow-violet-500/25"
                  : "bg-white text-slate-600 hover:bg-slate-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-3">
          {projects
            .filter(
              (project) =>
                activeFilter === "All" || project.category === activeFilter
            )
            .map((project) => (
              <div
                key={project.title}
                className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500"
              >
                {/* Project image using LazyImage */}
                <div className="relative aspect-[16/9] overflow-hidden rounded-t-2xl">
                  <LazyImage
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="flex items-center gap-4">
                        {project.details.map((detail, idx) => (
                          <div key={idx} className="text-white">
                            <div className="text-sm opacity-75">
                              {detail.label}
                            </div>
                            <div className="text-lg font-bold">
                              {detail.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div> */}
                </div>

                {/* Project info */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-1">
                    <span className="inline-flex items-center rounded-full bg-[#ececee] px-3 py-1 text-md font-medium text-[#0000ff]">
                      {/* {project.category}  */}
                      DSI PRODUCT
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-5">
                    {project.title}
                  </h3>

                  {/* Details */}
                  <div className="flex items-center gap-4 mb-5">
                      {project.details.map((detail, idx) => (
                        <div key={idx} className="text-gray-600">
                          <div className="text-sm opacity-75">
                            {detail.label}
                          </div>
                          <div className="text-base font-bold">
                            {detail.value}
                          </div>
                        </div>
                      ))}
                  </div>

                  {/* Limits */}
                  <div className="flex items-center gap-4 mb-5">
                      {project.limits.map((limit, idx) => (
                        <div key={idx} className="text-gray-600">
                          <div className="text-sm opacity-75">
                            {limit.label}
                          </div>
                          <div className="text-base font-bold">
                            {limit.value}
                          </div>
                        </div>
                      ))}
                  </div>

                  <button className="inline-flex items-center gap-2 text-[#0000ff] hover:text-[#3131f1] font-medium group">
                    View Details
                    <ArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
