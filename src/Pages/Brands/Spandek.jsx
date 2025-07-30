import React, { useEffect, useState } from "react";
import { ExternalLink, ArrowUpRight, Code } from "lucide-react";
import { useNavigate, useLocation  } from "react-router-dom"; 
import LazyImage from "../../components/LazyImage"; 

import sevenImage from '../../assets/brands/spandek/louver/seven/one.png';
import FourImage from '../../assets/brands/spandek/louver/four/one.png';
import ThreeImage from '../../assets/brands/spandek/louver/three/one.png';
import zincImage from '../../assets/brands/spandek/zinc/zinc.png';
import zinc360Image from '../../assets/brands/spandek/zinc/360/360.png';
import zinc450Image from '../../assets/brands/spandek/zinc/450/450.png';
import spandekBlueImage from '../../assets/brands/spandek/spandek/blue.png';
import spandekWhiteImage from '../../assets/brands/spandek/spandek/white.png';
import spandekCharcoalImage from '../../assets/brands/spandek/spandek/charcoal.png';
import spandekGreyImage from '../../assets/brands/spandek/spandek/grey.png';
import spandekSilverImage from '../../assets/brands/spandek/spandek/silver.png';

import spandekColorImage from '../../assets/brands/spandek/color/all.png';

const Spandek = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
  if (location.pathname === "/brands/spandek-steel") {
    setActiveFilter("Spandek Steel");
  } else if (location.pathname === "/brands/louver-steel-panel") {
    setActiveFilter("Louver Steel Panel");
  } else if (location.pathname === "/brands/zinc-steel-panel") {
    setActiveFilter("Zinc Steel Panel");
  } else {
    setActiveFilter("All");
  }
}, [location.pathname]);

  const categories = 
  [
    "All", 
    "Spandek Steel", 
    "Louver Steel Panel", 
    "Zinc Steel Panel", 
  ];

  const projects = [

    {
      title: "Spandek Steel",
      image: [
        spandekBlueImage,
        spandekWhiteImage,
        spandekCharcoalImage,
        spandekGreyImage,
        spandekSilverImage
      ],
      category: "Spandek Steel",
      details: [
        { label: "Thickness", value: "0.4 mm & 0.5 ⅟ mm" },
        { label: "Coil Width", value: "530 mm" },
        { label: "Product Thx", value: "38 T" },
      ],
      limits: [
        { label: "Width", value: "396.5 mm" },
        { label: "Length", value: "min 900 mm" },
        { label: "Corner", value: "Lock" },
        { label: "Garansi", value: "25 Years" },
      ],
      prices: [
        { label: "Size 0,4 mm x 1 m", value: "175.000"},
        { label: "Size 0,51 mm x 1 m", value: "195.000"},
      ],
      informations: [
        { label: "Standard Sizes", value: "2.1m, 2.4m, 2.7m, 3m, 3.3m" },
        { label: "Customer Order", value: "2-3 weeks" },
      ],
      color: [
        "White", "Blue", "Grey", "Charcoal", "Silver"
      ]
    },

    {
      title: "Louver Steel Panel 7 Ribs",
      image: [
        sevenImage,
        spandekColorImage
      ],
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
        { label: "Garansi", value: "36 Years" },
      ],
      prices: [
        { label: "B2B Price", value: "275.000", unit: " per m²"  },
        { label: "Agent Price", value: "305.000", unit: " per m²"  },
        { label: "Market Price", value: "410.000", unit: " per m²"  },
      ],
      informations: [
        { label: "Standard Sizes", value: "2.1m, 2.4m, 2.7m, 3m, 3.3m" },
        { label: "Customer Order", value: "2 weeks" },
      ],
      color: [
        
      ]
    },
    {
      title: "Louver Steel Panel 4 Ribs",
      image: [
        FourImage, 
        spandekColorImage
      ],
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
        { label: "Garansi", value: "36 Years" },
      ],
      prices: [
        { label: "B2B Price", value: "275.000", unit: " per m²"  },
        { label: "Agent Price", value: "305.000", unit: " per m²"  },
        { label: "Market Price", value: "410.000", unit: " per m²"  },
      ],
      informations: [
        { label: "Standard Sizes", value: "2.1m, 2.4m, 2.7m, 3m, 3.3m" },
        { label: "Customer Order", value: "2 weeks" },
      ],
      color: [
        
      ]
    },
    {
      title: "Louver Steel Panel 3 Ribs",
      image: [
        ThreeImage, 
        spandekColorImage
      ],
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
        { label: "Garansi", value: "36 Years" },
      ],
      prices: [
        { label: "B2B Price", value: "275.000", unit: " per m²"  },
        { label: "Agent Price", value: "305.000", unit: " per m²"  },
        { label: "Market Price", value: "410.000", unit: " per m²"  },
      ],
      informations: [
        { label: "Standard Sizes", value: "2.1m, 2.4m, 2.7m, 3m, 3.3m" },
        { label: "Customer Order", value: "2 weeks" },
      ],
      color: [
        
      ]
    },

    {
      title: "Zinc Steel",
      image: [
        zincImage, 
        zinc360Image, 
        zinc450Image, 
        spandekColorImage
      ],
      category: "Zinc Steel Panel",
      details: [
        { label: "Thickness", value: "0.5 ⅟ mm" },
        { label: "Product Thx", value: "30 T" },
      ],
      limits: [
        { label: "Length", value: "min 1000 mm" },
        { label: "Corner", value: "Lock" },
      ],
      prices: [
        { label: "B2B Price", value: "245.000", unit: " per m²"  },
        { label: "Agent Price", value: "275.000", unit: " per m²"  },
        { label: "Market Price", value: "380.000", unit: " per m²"  },
      ],
      informations: [
        { label: "Standard Sizes", value: "2.1m, 2.4m, 2.7m, 3m, 3.3m" },
        { label: "Customer Order", value: "3 weeks" },
        { label: "Garansi", value: "36 Years" },
      ],
      color: [
        
      ]
    },

  ];

  const handleViewDetails = (project) => {
    navigate("/brands/spandek/detail", { state: { project } });
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
            <span className="text-sm font-medium">DSI Metal</span>
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
              Metal Technology
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

                  <div className="inline-flex text-sm font-bold text-black pb-10 cursor-pointer"></div>

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
  );
};

export default Spandek;
