import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ExternalLink, ArrowUpRight, Code } from "lucide-react";

import oneLouverImage from '../assets/product/louver/details/1.jpeg';
import twoLouverImage from '../assets/product/louver/details/2.jpg';
import threeLouverImage from '../assets/product/louver/details/3.jpg';
import fourLouverImage from '../assets/product/louver/details/4.jpg';
import fiveLouverImage from '../assets/product/louver/details/5.jpg';
import oneZincImage from '../assets/product/zinc/details/1.jpg';
import twoZincImage from '../assets/product/zinc/details/2.jpg';
import threeZincImage from '../assets/product/zinc/details/3.jpg';
import fourZincImage from '../assets/product/zinc/details/4.jpg';
import fiveZincImage from '../assets/product/zinc/details/5.jpg';
import oneSpandekImage from '../assets/product/spandek/details/1.jpg';
import twoSpandekImage from '../assets/product/spandek/details/2.jpg';
import threeSpandekImage from '../assets/product/spandek/details/3.jpg';
import fourSpandekImage from '../assets/product/spandek/details/4.jpg';
import fiveSpandekImage from '../assets/product/spandek/details/5.jpg';
import oneCableImage from '../assets/product/cable/details/1.jpg';
import twoCableImage from '../assets/product/cable/details/2.jpg';
import threeCableImage from '../assets/product/cable/details/3.jpg';
import fourCableImage from '../assets/product/cable/details/4.jpg';
import fiveCableImage from '../assets/product/cable/details/5.png';
import bookImage  from "../assets/Book.PNG";

const DetailsProduct = () => {
  const location = useLocation();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Ambil data project yang dikirimkan dari Products
  const project = location.state?.project;

  // Gambar yang ingin ditampilkan tergantung kategori produk
  let images = [];

  if (project) {
    // Gambar berdasarkan kategori produk
    if (project.category === "Louver Steel Panel") {
      images = [
        oneLouverImage,
        twoLouverImage,
        threeLouverImage,
        fourLouverImage,
        fiveLouverImage
      ];
    } else if (project.category === "Zinc Steel Panel") {
      images = [
        oneZincImage,
        twoZincImage,
        threeZincImage,
        fourZincImage,
        fiveZincImage
      ];
    } else if (project.category === "Spandek Steel Panel") {
      images = [
        oneSpandekImage,
        twoSpandekImage,
        threeSpandekImage,
        fourSpandekImage,
        fiveSpandekImage
      ];
    } else if (project.category === "Cable Tray") {
      images = [
        oneCableImage,
        twoCableImage,
        threeCableImage,
        fourCableImage,
        fiveCableImage
      ];
    }
    // Kamu bisa menambahkan kategori lainnya sesuai dengan data yang ada
  }

  // Fungsi untuk berpindah ke slide berikutnya
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // useEffect(() => {
  //   const interval = setInterval(goToNext, 3000); // Auto-slide setiap 3 detik
  //   return () => clearInterval(interval); // Membersihkan interval ketika komponen dibongkar
  // }, []);

  // Fungsi untuk berpindah ke slide sebelumnya
  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Fungsi untuk berpindah ke slide tertentu berdasarkan indikator
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Example of using location state to access passed product data (if passed)
  useEffect(() => {
    if (project) {
      console.log(project);  // Melihat data produk yang diteruskan
    }
  }, [project]);

  return (
    <section className="relative pt-20 md:py-1 bg-slate-50">
      <div id="default-carousel" className="relative w-full" data-carousel="slide">
        {/* Carousel wrapper */}
        <div className="relative h-56 overflow-hidden rounded-lg md:h-svh">
          {/* Item 1 */}
          {images.map((img, index) => (
            <div
              key={index}
              className={`${
                index === currentIndex ? "block" : "hidden"
              } duration-700 ease-in-out`}
              data-carousel-item
            >
              <img
                src={img}
                className="absolute w-full h-screen -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt={`carousel-item-${index}`}
              />
            </div>
          ))}
        </div>

        {/* Slider indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-blue-600' : 'bg-white/50'}`}
              aria-current={index === currentIndex ? 'true' : 'false'}
              aria-label={`Slide ${index + 1}`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>

        {/* Slider controls */}
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={goToPrevious}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={goToNext}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>

      <div className='max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8'>
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group mb-8">
            <span className="text-sm font-medium">Details Product</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>

        <div className="flex justify-between gap-10">
          {/* DSI 1 - Gambar */}
          <div className="w-2/5">
                <img
                  src={project?.image}
                  alt=""
                  className="rounded-lg"
                />
          </div>
    
          {/* DSI 2 - Teks */}
          <div className="w-3/5 gap-5">
            <h1 className="font-black lg:text-5xl bg-gradient-to-r from-blue-900 to-indigo-600 bg-clip-text text-transparent">
              {project?.category}
            </h1>
            <div className="mt-4 text-justify">
                  {/* Details */}
                  <div className="font-bold mb-2 text-slate-800">Details</div>
                  <div className="flex flex-wrap gap-8 mb-6">
                    {project?.details.map((detail, idx) => (
                          <div key={idx} className="text-gray-600">
                            <div className="text-sm opacity-75">
                              {detail.label}
                            </div>
                            <div className="text-md font-bold">
                              {detail.value}
                            </div>
                          </div>
                        ))}
                  </div>

                  {/* Product Limits */}
                  <div className="font-bold mb-2 text-slate-800">Product Limit</div>
                  <div className="flex flex-wrap gap-8 mb-6">
                    {project?.limits.map((limit, idx) => (
                          <div key={idx} className="text-gray-600">
                            <div className="text-sm opacity-75">
                              {limit.label}
                            </div>
                            <div className="text-md font-bold">
                              {limit.value}
                            </div>
                          </div>
                        ))}
                  </div>

                  {/* Prices */}
                  <div className="font-bold mb-2 text-slate-800">Price List</div>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project?.prices.map((price, idx) => (
                          <div key={idx} className="text-gray-600">
                            <div className="text-sm opacity-75">
                              {price.label}
                              <span className="text-red-700"> per m²</span>
                            </div>
                            <div className="text-md font-bold">
                              <span>Rp. </span>
                              {price.value}
                              <span>,00</span>
                            </div>
                          </div>
                        ))}
                  </div>

                  {/* Informations */}
                  <div className="font-bold mb-2 text-slate-800">Information</div>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project?.informations.map((information, idx) => (
                          <div key={idx} className="text-gray-600">
                            <div className="text-sm opacity-75">
                              {information.label}
                            </div>
                            <div className="text-md font-bold">
                              {information.value}
                            </div>
                          </div>
                        ))}
                  </div>

                  {/* Colors */}
                  <div className="font-bold mb-2 text-slate-800">Color</div>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project?.informations.map((information, idx) => (
                          <div key={idx} className="text-gray-600">
                            <div className="text-sm opacity-75">
                              {information.label}
                            </div>
                            <div className="text-md font-bold">
                              {information.value}
                            </div>
                          </div>
                        ))}
                  </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsProduct;
