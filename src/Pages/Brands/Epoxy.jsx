import React, { useEffect, useState } from "react";
import { ExternalLink, ArrowUpRight, Code } from "lucide-react";
import { useNavigate, useLocation  } from "react-router-dom"; 
import LazyImage from "../../components/LazyImage"; 

import polyuthane01Image from '../../assets/brands/epoxy/polyuthane/outdoor front.jpg';
import polyuthane02Image from '../../assets/brands/epoxy/polyuthane/outdoor back.jpg';
import polyuthane03Image from '../../assets/brands/epoxy/polyuthane/outdoor.jpg';

const Epoxy = () => {

  const [activeFilter, setActiveFilter] = useState("All");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
  if (location.pathname === "/brands/epoxy-dan-interior-epoxy") {
    setActiveFilter("Epoxy");
  } else if (location.pathname === "/brands/resins-epoxy") {
    setActiveFilter("Resins");
  } else {
    setActiveFilter("All");
  }
}, [location.pathname]);

  const categories = 
  [
    "All", 
    "Epoxy Flooring Paint",
    "Polyurethane Concrete Floor Paint",
    "Adhesive",
    "Field Paint",
    "Electronics",
  ];

  const projects = [

    {
      title: "Epoxy Outdoor",
      image: [
        polyuthane01Image,
        polyuthane02Image,
        polyuthane03Image,
      ],
      category: "Epoxy Flooring Paint",
      description: "Epoxy Flooring Paint",
      details: [
        { label: "Type", value: "Waterbased Acrylic" },
        { label: "Final Result", value: "Doff" },
        { label: "Theoretical Spread Power", value: "1.5 – 2.0 m²/kg (200 microns/3 coats including quartz sand)" },
        { label: "Dry Time", value: "Touch dry 10 minutes (30°C), Ready to use 48 hours" },
        { label: "Packaging", value: "5 kg, 22.5 kg (+ 10% quartz sand)" },
        { label: "Shelf Life", value: "1 year in sealed packaging" },
        { label: "Thinner", value: "Clean water" },
        { label: "Application Method", value: "Brush and roller" },
        { label: "Cleaning", value: "After use, clean all equipment with clean water." },
        { label: "Superiority", value: "Increases strength between topcoat and concrete" },
      ],
      color: [
        "White", "Blue", "Grey", "Charcoal", "Silver"
      ]
    },

  ];

  const handleViewDetails = (project) => {
    navigate("/brands/epoxy/detail", { state: { project } });
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
            <span className="text-sm font-medium">DSI Epoxy</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>

          <div className="flex items-center justify-center gap-1">
            <div className="flex justify-between -mt-5">
              <span className="text-lg lg:text-xl font-black tracking-tight bg-black bg-clip-text text-transparent">PT.</span>
              <h2 className="text-3xl font-black tracking-tight bg-blue-900 bg-clip-text text-transparent lg:text-4xl">
                DSI
              </h2>
            </div>
            <h2 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-900 to-indigo-600 bg-clip-text text-transparent lg:text-6xl">
              Wave Epoxy
            </h2>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 lg:text-3xl">
            100% KOREAN PRODUCT
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
                className="group relative bg-white  rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                {/* Project image using LazyImage */}
                <div className="relative aspect-[16/9] overflow-hidden rounded-t-2xl">
                  <LazyImage
                    src={project.image[0] || project.image}
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

                  <div className="inline-flex text-sm font-bold opacity-75 text-black pb-7 cursor-pointer">
                    {project.description}
                  </div>

                  <button
                    className="inline-flex items-center gap-2 text-blue-900 hover:text-blue-700 font-medium group"
                    onClick={() => handleViewDetails(project)}
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
  )
}

export default Epoxy