import React, { useState } from "react";
import { ExternalLink, ArrowUpRight, Code } from "lucide-react";
import { useNavigate } from "react-router-dom"; 
import LazyImage from "./LazyImage";
import { Link } from 'react-router-dom';

import straightLadderImage from '../assets/brands/tray/ladder/straight.png';
import straightDuctImage from '../assets/brands/tray/duct/straight.png';
import straightMeshImage from '../assets/brands/tray/mesh/straight.jpg';
import straightPunchedImage from '../assets/brands/tray/punched/straight.jpg';
import accessoriesImage from '../assets/brands/tray/accessories/accessories.png';
import racewayImage from '../assets/brands/tray/raceway/raceway.png';
import BestProduct from "./BestProduct";


const Tray = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const navigate = useNavigate();

  const categories = 
  [
    "All", 
    "Ladder Tray", 
    "Cable Duct", 
    "Mesh Tray", 
    "Punched Tray", 
    // "Chanel Support", 
    "Accessories", 
    "Race Way System", 
  ];

  const projects = [

    {
      title: "Ladder Type",
      image: straightLadderImage,
      category: "Ladder Tray",
      info: "H100 x L3000 x 20F",
      materials: ["Posmac", "Stainless Steel", "Aluminium"],
      finishes: ["Hot-Dip Galvanized", "Powder Coating"],
      details: [ ],
      limits: [ ],
      prices: [ ],
      informations: [],
    },
    {
      title: "Cable Duct Type",
      image: straightDuctImage,
      category: "Cable Duct",
      info: "H100 x L3000 x 20F",
      materials: ["Posmac", "Stainless Steel", "Aluminium"],
      finishes: ["Hot-Dip Galvanized", "Powder Coating"],
      details: [ ],
      limits: [ ],
      prices: [ ],
      informations: [],
    },
    {
      title: "Mesh Type",
      image: straightMeshImage,
      category: "Mesh Tray",
      info: "H100 x L3000 x 20F",
      materials: ["Posmac", "Stainless Steel", "Aluminium"],
      finishes: ["Hot-Dip Galvanized", "Powder Coating"],
      details: [ ],
      limits: [ ],
      prices: [ ],
      informations: [],
    },
    {
      title: "Punched Type",
      image: straightPunchedImage,
      category: "Punched Tray",
      info: "H100 x L3000 x 20F",
      materials: ["Posmac", "Stainless Steel", "Aluminium"],
      finishes: ["Hot-Dip Galvanized", "Powder Coating"],
      details: [ ],
      limits: [ ],
      prices: [ ],
      informations: [],
    },
    // {
    //   title: "Chanel Support",
    //   image: straightLadderImage,
    //   category: "Chanel Support",
    //   info: "H100 x L3000 x 20F",
    //   materials: ["Posmac", "Stainless Steel", "Aluminium"],
    //   finishes: ["Hot-Dip Galvanized", "Powder Coating"],
    //   details: [ ],
    //   limits: [ ],
    //   prices: [ ],
    //   informations: [],
    // },
    {
      title: "Accessories",
      image: accessoriesImage,
      category: "Accessories",
      info: "H100 x L3000 x 20F",
      materials: ["Posmac", "Stainless Steel", "Aluminium"],
      finishes: ["Hot-Dip Galvanized", "Powder Coating"],
      details: [ ],
      limits: [ ],
      prices: [ ],
      informations: [],
    },
    {
      title: "Race Way System",
      image: racewayImage,
      category: "Race Way System",
      info: "H100 x L3000 x 20F",
      materials: ["Posmac", "Stainless Steel", "Aluminium"],
      finishes: ["Hot-Dip Galvanized", "Powder Coating"],
      details: [ ],
      limits: [ ],
      prices: [ ],
      informations: [],
    },

  ];

  const handleViewDetails = (project) => {
    navigate("/brands/tray/materials", { state: { category: project.category } });  // Passing project data to /detail route
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
            <span className="text-sm font-medium">DSI Tray</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>

          <div className="flex items-center justify-center gap-1">
            <div className="flex justify-between gap-1 -mt-5">
              <span className="text-lg lg:text-xl font-black tracking-tight bg-black bg-clip-text text-transparent">PT.</span>
              <h2 className="text-3xl font-black tracking-tight bg-blue-900 bg-clip-text text-transparent lg:text-4xl">
                DSI
              </h2>
            </div>
            <h2 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-900 to-indigo-600 bg-clip-text text-transparent lg:text-6xl">
              Cable Tray
            </h2>
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900 lg:text-2xl mt-3">
              PRODUCT MADE IN INDONESIA
            </h2>
            <span className="text-lg lg:text-xl font-bold text-orange-500">RAW MATERIALS FROM KOREA</span>
          </div>
        </div>

        {/* Best Product Tray */}

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
                className="group relative bg-white  rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500"
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
                      {/* {project.category} */}
                      DSI Product
                    </span>
                  </div>
                  
                  <button
                    className="inline-flex text-base font-bold text-blue-900 py-3 cursor-pointer"
                    onClick={() => handleViewDetails(project)}
                  >
                    {project.title}
                  </button>

                  <div className="inline-flex text-sm font-bold text-black pb-10 cursor-pointer"></div>

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

export default Tray;
