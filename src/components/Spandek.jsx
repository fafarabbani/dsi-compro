import React, { useState } from "react";
import { ExternalLink, ArrowUpRight, Code } from "lucide-react";
import { useNavigate } from "react-router-dom"; 
import LazyImage from "./LazyImage";
import { Link } from 'react-router-dom';

import sevenImage from '../assets/product/louver/seven/one.png';
import FourImage from '../assets/product/louver/four/one.png';
import ThreeImage from '../assets/product/louver/three/one.png';
import zinc360Image from '../assets/product/zinc/360/one.png';
import zinc450Image from '../assets/product/zinc/450/one.png';
import spandekImage from '../assets/product/spandek/250/one.png';

const Spandek = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const navigate = useNavigate();

  const categories = 
  [
    "All", 
    "Spandek Steel Panel", 
    "Louver Steel Panel", 
    "Zinc Steel Panel", 
  ];

  const projects = [

    {
      title: "Spandek",
      image: spandekImage,
      category: "Spandek Steel Panel",
      details: [
        { label: "Thickness", value: "0.4 mm & 0.5 ⅟ mm" },
        { label: "Coil Width", value: "530 mm" },
        { label: "Product Thx", value: "38 T" },
      ],
      limits: [
        { label: "Width", value: "396.5 mm" },
        { label: "Length", value: "min 900 mm" },
        { label: "Corner", value: "Lock" },
      ],
      prices: [
        { label: "Size 0,4 mm x 1 m", value: "245.000"},
        { label: "Size 0,51 mm x 1 m", value: "280.000"},
      ],
      informations: [
        { label: "Standard Sizes", value: "2.1m, 2.4m, 2.7m, 3m, 3.3m" },
        { label: "Customer Order Size", value: "Start 1m until 30m" },
      ],
    },

    {
      title: "Louver Steel Panel 7 Ribs",
      image: sevenImage,
      category: "Louver Steel Panel",
      details: [
        { label: "Thickness", value: "0.5 ⅟ mm" },
        { label: "Coil Width", value: "610 mm" },
        { label: "Product Thx", value: "17.5 T" },
      ],
      limits: [
        { label: "Width", value: "345 mm" },
        { label: "Length", value: "900 mm" },
        { label: "Corner", value: "Var" },
      ],
      prices: [
        { label: "B2B Price", value: "300.000", unit: " per m²"  },
        { label: "Agent Price", value: "325.000", unit: " per m²"  },
        { label: "Market Price", value: "555.000", unit: " per m²"  },
      ],
      informations: [
        { label: "Standard Sizes", value: "2.1m, 2.4m, 2.7m, 3m, 3.3m" },
        { label: "Customer Order Size", value: "Start 1m until 30m" },
      ],
    },
    {
      title: "Louver Steel Panel 4 Ribs",
      image: FourImage,
      category: "Louver Steel Panel",
      details: [
        { label: "Thickness", value: "0.5 ⅟ mm" },
        { label: "Coil Width", value: "610 mm" },
        { label: "Product Thx", value: "17.5 T" },
      ],
      limits: [
        { label: "Width", value: "345 mm" },
        { label: "Length", value: "900 mm" },
        { label: "Corner", value: "Var" },
      ],
      prices: [
        { label: "B2B Price", value: "300.000", unit: " per m²"  },
        { label: "Agent Price", value: "325.000", unit: " per m²"  },
        { label: "Market Price", value: "555.000", unit: " per m²"  },
      ],
      informations: [
        { label: "Standard Sizes", value: "2.1m, 2.4m, 2.7m, 3m, 3.3m" },
        { label: "Customer Order Size", value: "Start 1m until 30m" },
      ],
    },
    {
      title: "Louver Steel Panel 3 Ribs",
      image: ThreeImage,
      category: "Louver Steel Panel",
      details: [
        { label: "Thickness", value: "0.5 ⅟ mm" },
        { label: "Coil Width", value: "610 mm" },
        { label: "Product Thx", value: "17.5 T" },
      ],
      limits: [
        { label: "Width", value: "345 mm" },
        { label: "Length", value: "900 mm" },
        { label: "Corner", value: "Var" },
      ],
      prices: [
        { label: "B2B Price", value: "300.000", unit: " per m²"  },
        { label: "Agent Price", value: "325.000", unit: " per m²"  },
        { label: "Market Price", value: "555.000", unit: " per m²"  },
      ],
      informations: [
        { label: "Standard Sizes", value: "2.1m, 2.4m, 2.7m, 3m, 3.3m" },
        { label: "Customer Order Size", value: "Start 1m until 30m" },
      ],
    },

    {
      title: "Zinc Steel Plate 360 Width",
      image: zinc360Image,
      category: "Zinc Steel Panel",
      details: [
        { label: "Thickness", value: "0.5 ⅟ mm" },
        { label: "Coil Width", value: "530 mm" },
        { label: "Product Thx", value: "38 T" },
      ],
      limits: [
        { label: "Width", value: "396.5 mm" },
        { label: "Length", value: "min 900 mm" },
        { label: "Corner", value: "Lock" },
      ],
      prices: [
        { label: "B2B Price", value: "270.000", unit: " per m²"  },
        { label: "Agent Price", value: "295.000", unit: " per m²"  },
        { label: "Market Price", value: "450.000", unit: " per m²"  },
      ],
      informations: [
        { label: "Standard Sizes", value: "2.1m, 2.4m, 2.7m, 3m, 3.3m" },
        { label: "Customer Order Size", value: "Start 1m until 30m" },
      ],
    },
    {
      title: "Zinc Steel Panel 450 Width",
      image: zinc450Image,
      category: "Zinc Steel Panel",
      details: [
        { label: "Thickness", value: "0.5 ⅟ mm" },
        { label: "Coil Width", value: "530 mm" },
        { label: "Product Thx", value: "38 T" },
      ],
      limits: [
        { label: "Width", value: "396.5 mm" },
        { label: "Length", value: "min 900 mm" },
        { label: "Corner", value: "Lock" },
      ],
      prices: [
        { label: "B2B Price", value: "270.000", unit: " per m²"  },
        { label: "Agent Price", value: "295.000", unit: " per m²"  },
        { label: "Market Price", value: "450.000", unit: " per m²"  },
      ],
      informations: [
        { label: "Standard Sizes", value: "2.1m, 2.4m, 2.7m, 3m, 3.3m" },
        { label: "Customer Order Size", value: "Start 1m until 30m" },
      ],
    },

  ];

  const handleViewDetails = (project) => {
    navigate("/detail", { state: { project } });  // Passing project data to /detail route
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
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group mb-8">
            <span className="text-sm font-medium">Our Products</span>
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
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category
                  ? "bg-blue-900 text-white shadow-lg shadow-blue-500/25"
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
                className="group relative bg-white  rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500"
              >
                {/* Project image using LazyImage */}
                <div className="relative aspect-[16/9] overflow-hidden rounded-t-2xl">
                  <LazyImage
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Project info */}
                <div className="p-8 flex flex-col justify-start">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-950">
                      {/* {project.title} */}
                      DSI Product
                    </span>
                  </div>
                  
                  <button
                    className="inline-flex text-base font-bold text-blue-900 py-3 cursor-pointer"
                    onClick={() => handleViewDetails(project)}
                  >
                    {project.title}
                  </button>

                  <div className="inline-flex text-sm font-bold text-black pb-10 cursor-pointer">{project.info}</div>

                  <button
                    className="inline-flex items-center gap-2 text-blue-900 hover:text-blue-700 font-medium group"
                    onClick={() => handleViewDetails(project)}  // Trigger the navigation on click
                  >
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

export default Spandek;
