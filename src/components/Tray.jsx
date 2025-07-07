import React, { useState } from "react";
import { ExternalLink, ArrowUpRight, Code } from "lucide-react";
import { useNavigate } from "react-router-dom"; 
import LazyImage from "./LazyImage";
import { Link } from 'react-router-dom';

import straightLadderImage from '../assets/brands/tray/ladder/straight.png';
import coverLadderImage from '../assets/brands/tray/ladder/cover.png';
import straightDuctImage from '../assets/brands/tray/duct/straight.png';
import coverDuctImage from '../assets/brands/tray/duct/cover.png';
import straightMeshImage from '../assets/brands/tray/mesh/straight.png';
import coverMeshImage from '../assets/brands/tray/mesh/cover.png';
import straightPunchedImage from '../assets/brands/tray/punched/straight.png';
import coverPunchedImage from '../assets/brands/tray/punched/cover.png';
import connectionHitecImage from '../assets/brands/tray/hi-tec/connection.png';
import racewayImage from '../assets/brands/tray/raceway/raceway.png';

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
    "Hi-Tec Tray System", 
    "Race Way System", 
    "Chanel Support System (Accessories)", 
  ];

  const projects = [

    {
      title: "STRAIGHT BODY",
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
      title: "STRAIGHT COVER",
      image: coverLadderImage,
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
      title: "STRAIGHT BODY",
      image: straightDuctImage,
      category: "Cable Duct",
      info: "H100 x L3000 x 20F",
      materials: ["Posmac", "Stainless Steel", "Aluminium", "Galvanized Iron"],
      finishes: ["Hot-Dip Galvanized", "Painting"],
      details: [ ],
      limits: [ ],
      prices: [ ],
      informations: [],
    },
    {
      title: "STRAIGHT COVER",
      image: coverDuctImage,
      category: "Cable Duct",
      info: "H100 x L3000 x 20F",
      materials: ["Posmac", "Stainless Steel", "Aluminium", "Galvanized Iron"],
      finishes: ["Hot-Dip Galvanized", "Painting"],
      details: [ ],
      limits: [ ],
      prices: [ ],
      informations: [],
    },

    {
      title: "STRAIGHT BODY",
      image: straightMeshImage,
      category: "Mesh Tray",
      info: "H100 x L3000 x 20F",
      materials: ["Galvanized Steel", "Stainless Steel"],
      finishes: ["Natural", "Custom"],
      details: [ ],
      limits: [ ],
      prices: [ ],
      informations: [],
    },
    {
      title: "STRAIGHT COVER",
      image: coverMeshImage,
      category: "Mesh Tray",
      info: "H100 x L3000 x 20F",
      materials: ["Galvanized Steel", "Stainless Steel"],
      finishes: ["Natural", "Custom"],
      details: [ ],
      limits: [ ],
      prices: [ ],
      informations: [],
    },

    {
      title: "STRAIGHT BODY",
      image: straightPunchedImage,
      category: "Punched Tray",
      info: "H100 x L3000 x 20F",
      materials: ["Posmac", "Stainless Steel", "Aluminium"],
      finishes: ["Hot-Dip Galvanized", "Painting"],
      details: [ ],
      limits: [ ],
      prices: [ ],
      informations: [],
    },
    {
      title: "STRAIGHT COVER",
      image: coverPunchedImage,
      category: "Punched Tray",
      info: "H100 x L3000 x 20F",
      materials: ["Posmac", "Stainless Steel", "Aluminium"],
      finishes: ["Hot-Dip Galvanized", "Painting"],
      details: [ ],
      limits: [ ],
      prices: [ ],
      informations: [],
    },

    {
      title: "CONNECTION",
      image: connectionHitecImage,
      category: "Hi-Tec Tray System",
      info: "H100 x L3000 x 20F",
      materials: ["React", "Node.js", "AWS"],
      finishes: ["React", "Node.js", "AWS"],
      details: [ ],
      limits: [ ],
      prices: [ ],
      informations: [],
    },

    {
      title: "RACE WAY",
      image: racewayImage,
      category: "Race Way System",
      info: "H100 x L3000 x 20F",
      materials: ["React", "Node.js", "AWS"],
      finishes: ["React", "Node.js", "AWS"],
      details: [ ],
      limits: [ ],
      prices: [ ],
      informations: [],
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
            DSI Cable Tray
          </h2>
          <h2 className="text-3xl font-bold text-slate-900 lg:text-4xl mt-3">
            100% MADE IN INDONESIA
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
                      {project.category}
                      {/* DSI Product */}
                    </span>
                  </div>
                  
                  <button
                    className="inline-flex text-base font-bold text-blue-900 py-3 cursor-pointer"
                    onClick={() => handleViewDetails(project)}
                  >
                    {project.title}
                  </button>

                  {/* <div className="inline-flex text-sm font-bold text-black pb-6 cursor-pointer">{project.info}</div> */}

                  {/* Standard Materials */}
                  <div className="text-sm font-bold text-slate-800 cursor-pointer">Standard Materials</div>
                  <div className="flex flex-wrap gap-2 mb-4 -ml-3">
                    {project.materials.map((material, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gray-50 text-sm text-gray-600"
                      >
                        {material}
                      </span>
                    ))}
                  </div>

                  {/* Standard Finishes */}
                  <div className="text-sm font-bold text-slate-800 cursor-pointer">Standard Finishes</div>
                  <div className="flex flex-wrap gap-2 mb-10 -ml-3">
                    {project.finishes.map((finish, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gray-50 text-sm text-gray-600"
                      >
                        {finish}
                      </span>
                    ))}
                  </div>

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
