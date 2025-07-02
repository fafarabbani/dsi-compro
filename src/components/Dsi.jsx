import React from 'react'
import bookImage  from "../assets/Book.PNG";

const Dsi = () => {
  return (
  <section className="relative px-20 pt-32 bg-slate-50">

    {/* Gradient background */}
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0">
        <div className="absolute w-full h-full">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] aspect-[1/0.7] bg-gradient-to-b from-white via-slate-50/20 to-transparent rounded-[50%] blur-3xl" />
        </div>
      </div>
    </div>

    <div className="flex justify-between gap-10">
      {/* DSI 1 - Gambar */}
      <div className="w-2/5">
            <img
              src={bookImage}
              alt=""
              className="rounded-lg"
            />
      </div>

      {/* DSI 2 - Teks */}
      <div className="w-3/5 gap-5">
        <h1 className="font-black lg:text-5xl bg-gradient-to-r from-blue-900 to-indigo-600 bg-clip-text text-transparent">
          PT DSI METAL TECHNOLOGY
        </h1>
        <div className="mt-4 text-justify">
          <p>
            At PT DSI Metal Technology, we specialize in importing and supplying 100% Korean materials for high-quality construction and industrial applications. With a commitment to excellence, durability, and innovation, we collaborate with leading Korean manufacturers to bring specialty building materials to the global market.
          </p>
          <br/>
          <p>
            As an ISO 9001, 45001, and 14001 certified company, we ensure the highest standards in quality, safety, and environmental responsibility. Our product range includes steel roofing systems, perforated steel plates, cable trays, systems, epoxy resins, designed for superior performance and long-term reliability.
          </p>
          <br/>
          <p>
            Driven by a customer-first approach, PT DSI Metal Technology provides customized solutions for industrial, commercial, and residential projects. Whether for large-scale infrastructure or specialty applications, our materials are trusted by architects, builders, and developers worldwide.
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Dsi