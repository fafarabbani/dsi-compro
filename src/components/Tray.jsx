import React, { useState } from "react";
import { ExternalLink, ArrowUpRight, Code } from "lucide-react";
import { useNavigate } from "react-router-dom"; 
import LazyImage from "./LazyImage";
import { Link } from 'react-router-dom';

import cableTray1Image from '../assets/brands/tray/cabletray/cts1.jpg';
import cableTray2Image from '../assets/brands/tray/cabletray/cts2.jpg';
import cableTray3Image from '../assets/brands/tray/cabletray/cts3.jpg';
import cableTray4Image from '../assets/brands/tray/cabletray/cts4.jpg';
import cableTray5Image from '../assets/brands/tray/cabletray/cts5.jpg';
import cableTray6Image from '../assets/brands/tray/cabletray/cts6.jpg';
import cableTray7Image from '../assets/brands/tray/cabletray/cts7.jpg';
import cableTray8Image from '../assets/brands/tray/cabletray/cts8.jpg';
import cableTray9Image from '../assets/brands/tray/cabletray/cts9.jpg';
import cableTray10Image from '../assets/brands/tray/cabletray/cts10.jpg';
import cableTray11Image from '../assets/brands/tray/cabletray/cts11.jpg';
import cableTray12Image from '../assets/brands/tray/cabletray/cts12.jpg';
import posmacTray1Image from '../assets/brands/tray/posmactray/pro7_re_01.jpg';
import posmacTray2Image from '../assets/brands/tray/posmactray/pro7_re_02.jpg';
import posmacTray3Image from '../assets/brands/tray/posmactray/pro7_re_03.jpg';
import aluminiumTray1Image from '../assets/brands/tray/aluminiumtray/pro5_01.jpg';
import aluminiumTray2Image from '../assets/brands/tray/aluminiumtray/pro5_02.jpg';
import aluminiumTray3Image from '../assets/brands/tray/aluminiumtray/pro5_03.jpg';
import aluminiumTray4Image from '../assets/brands/tray/aluminiumtray/pro5_04.jpg';
import aluminiumTray5Image from '../assets/brands/tray/aluminiumtray/pro5_05.jpg';
import cableDuct1Image from '../assets/brands/tray/cableduct/pro2_01.jpg';
import cableDuct2Image from '../assets/brands/tray/cableduct/pro2_02.jpg';
import cableDuct3Image from '../assets/brands/tray/cableduct/pro2_03.jpg';
import cableDuct4Image from '../assets/brands/tray/cableduct/pro2_04.jpg';
import cableDuct5Image from '../assets/brands/tray/cableduct/pro2_05.jpg';
import cableDuct6Image from '../assets/brands/tray/cableduct/pro2_06.jpg';
import cableDuct7Image from '../assets/brands/tray/cableduct/pro2_07.jpg';
import punchedTrayImage from '../assets/brands/tray/punchedtray/pro3.jpg';
import meshTray1Image from '../assets/brands/tray/meshtray/pro8_01.jpg';
import meshTray2Image from '../assets/brands/tray/meshtray/pro8_02.jpg';
import raceWay1Image from '../assets/brands/tray/raceway/pro4_01.jpg';
import raceWay2Image from '../assets/brands/tray/raceway/pro4_02.jpg';
import raceWay3Image from '../assets/brands/tray/raceway/pro4_03.jpg';
import raceWay4Image from '../assets/brands/tray/raceway/pro4_04.jpg';
import raceWay5Image from '../assets/brands/tray/raceway/pro4_05.jpg';
import hitecTray1Image from '../assets/brands/tray/hitectray/pro9_01.jpg';
import hitecTray2Image from '../assets/brands/tray/hitectray/pro9_02.jpg';
import hitecTray3Image from '../assets/brands/tray/hitectray/pro9_03.jpg';
import hitecTray4Image from '../assets/brands/tray/hitectray/pro9_04.jpg';
import hitecTray5Image from '../assets/brands/tray/hitectray/pro9_05.jpg';
import hitecTray6Image from '../assets/brands/tray/hitectray/pro9_06.jpg';
import chanelSupport1Image from '../assets/brands/tray/chanelsupport/pro6_01.jpg';
import chanelSupport2Image from '../assets/brands/tray/chanelsupport/pro6_02.jpg';
import chanelSupport3Image from '../assets/brands/tray/chanelsupport/pro6_03.jpg';
import chanelSupport4Image from '../assets/brands/tray/chanelsupport/pro6_04.jpg';
import chanelSupport5Image from '../assets/brands/tray/chanelsupport/pro6_05.jpg';
import chanelSupport6Image from '../assets/brands/tray/chanelsupport/pro6_06.jpg';


const Tray = () => {
  const [activeFilter, setActiveFilter] = useState("Cable Tray");
  const navigate = useNavigate();

  const categories = 
  [
    // "All", 
    "Cable Tray", 
    "Posmac Tray", 
    "Stainless Steel Tray", 
    "Aluminium Tray", 
    "Cable Duct", 
    "Punched Tray", 
    "Mesh Tray", 
    "Race Way", 
    "Hi-Tec Tray", 
    "Chanel Support", 
  ];

  const projects = [

    {
      title: "Cable Tray Type",
      images: [
          cableTray1Image,
          cableTray2Image,
          cableTray3Image,
          cableTray4Image,
          cableTray5Image,
          cableTray6Image,
          cableTray7Image,
          cableTray8Image,
          cableTray9Image,
          cableTray10Image,
          cableTray11Image,
          cableTray12Image,
        ],
      category: "Cable Tray",
      info: "H100 x L3000 x 20F",
    },
    {
      title: "Posmac Tray Type",
      images: [
          posmacTray1Image,
          posmacTray2Image,
          posmacTray3Image,
        ],
      category: "Posmac Tray",
      info: "H100 x L3000 x 2.0T",
    },
    {
      title: "Stainless Steel Tray Type",
      images: [
          aluminiumTray1Image,
          aluminiumTray2Image,
          aluminiumTray3Image,
          aluminiumTray4Image,
          aluminiumTray5Image,
        ],
      category: "Stainless Steel Tray",
      info: "H100 x L3000 x 2.0T",
    },
    {
      title: "Aluminium Tray Type",
      images: [
          aluminiumTray1Image,
          aluminiumTray2Image,
          aluminiumTray3Image,
          aluminiumTray4Image,
          aluminiumTray5Image,
        ],
      category: "Aluminium Tray",
      info: "H100 x L3000 x 2.0T",
    },
    {
      title: "Cable Duct Type",
      images: [
          cableDuct1Image,
          cableDuct2Image,
          cableDuct3Image,
          cableDuct4Image,
          cableDuct5Image,
          cableDuct6Image,
          cableDuct7Image,
        ],
      category: "Cable Duct",
      info: "H100 x L3000 x 2.0T",
    },
    {
      title: "Punched Tray Type",
      images: [
          punchedTrayImage,
        ],
      category: "Punched Tray",
      info: "H100 x L3000 x 2.0T",
    },
    {
      title: "Mesh Tray Type",
      images: [
          meshTray1Image,
          meshTray2Image,
        ],
      category: "Mesh Tray",
      info: "H100 x L3000 x 2.0T",
    },
    {
      title: "Race Way Type",
      images: [
          raceWay1Image,
          raceWay2Image,
          raceWay3Image,
          raceWay4Image,
          raceWay5Image,
        ],
      category: "Race Way",
      info: "H100 x L3000 x 2.0T",
    },
    {
      title: "Hi-Tec Tray Type",
      images: [
          hitecTray1Image,
          hitecTray2Image,
          hitecTray3Image,
          hitecTray4Image,
          hitecTray5Image,
          hitecTray6Image,
        ],
      category: "Hi-Tec Tray",
      info: "H100 x L3000 x 2.0T",
    },
    {
      title: "Chanel Support Type",
      images: [
          chanelSupport1Image,
          chanelSupport2Image,
          chanelSupport3Image,
          chanelSupport4Image,
          chanelSupport5Image,
          chanelSupport6Image,
        ],
      category: "Chanel Support",
      info: "H100 x L3000 x 2.0T",
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
        <div className="mt-16 grid grid-cols-1">
          {projects
            .filter(
              (project) =>
                project.category === activeFilter
            )
            .map((project) => (
              <div
                key={project.title}
                className="group relative bg-white  rounded-2xl shadow-xl  transition-all duration-500"
              >
                {/* Project image using LazyImage */}
                <div className="relative overflow-hidden rounded-t-2xl">
                  {project.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${project.title} ${index + 1}`}
                      className="w-full h-full object-cover transform transition-transform duration-500"
                    />
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Tray;
