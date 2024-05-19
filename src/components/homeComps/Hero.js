import React from "react";

export default function Hero() {
  return (
    <div className="mt-20 flex flex-col lg:flex-row lg:min-h-[60vh] *:flex *:flex-col *:p-4 *:text-center *:lg:text-left">
      <div className="lg:w-[20%] w-full gap-2 *:text-2xl">
        <p className="back-clip"> Transform Your Website</p>
        <p>With Motion Art Effect</p>
      </div>
      <div className="lg-w-[80%] w-full gap-4 *:lg:max-w-[768px]">
        <p className="text-5xl lg:text-8xl max-w-[480px] mx-auto lg:mx-0">
          Attract Your Visitors Attention With Colorful
          <br />
          <span className="back-clip">Motion Art Effect</span>
        </p>

        <p className="text-lg text-gray-300 font-thin">
          Unleash the power of creativity with Motion Art for Elementor - your
          ultimate solution for seamlessly integrating captivating animations
          into your website.
        </p>
      </div>
    </div>
  );
}
