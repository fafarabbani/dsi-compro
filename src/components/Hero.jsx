import React from "react";
import heroImage from "../assets/Hero.PNG";

const Hero = () => {
  // const stats = [
  //   { value: "99%", label: "Client Satisfaction" },
  //   { value: "1500+", label: "Projects Completed" },
  //   { value: "24/7", label: "Expert Support" },
  // ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#fafafa] overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient circles */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }} // Menambahkan gambar sebagai background
          />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000,transparent)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          {/* Main content */}
          <div className="space-y-6 uppercase mt-16">
            <h1 className="text-6xl sm:text-7xl font-bold tracking-tight text-white lg:text-8xl">
              Welcome To 
              <span className="bg-gradient-to-r from-[#0000ff] to-[#0000ff] bg-clip-text text-transparent"> DSI</span>
              <span className="block mt-2 text-white">
                Company
              </span>
            </h1>
            <p className="text-xl text-white leading-relaxed max-w-2xl mx-auto">
              Construction & Interior Material Manufacturing Factory
            </p>
          </div>

          {/* Hero */}
          <div className="">

          </div>
        </div>
      </div>
      <div className="min-h-screen bg-[#fafafa]">

      </div>
    </section>
  );
};

export default Hero;
