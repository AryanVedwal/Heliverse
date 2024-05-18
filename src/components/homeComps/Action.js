import React from "react";
import { MoveRight } from "lucide-react";

export default function Action() {
  return (
    <div className="flex flex-col lg:flex-row justify-between my-[80px]">
      <div className="min-h-[300px] w-full p-4 lg:max-w-[768px] text-center lg:text-left">
        <p className="text-4xl">
          Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors
        </p>
        <p className="text-2xl font-thin my-4">
          Motion Art for Elementor is a groundbreaking plugin that empowers you
          to effortlessly infuse your website with visually stunning motion art
          elements.
        </p>
        <p
          className="text-lg min-w-[250px] w-fit p-4 flex items-end justify-center gap-2 cursor-pointer rounded-xl mt-8 mx-auto lg:mx-0"
          style={{
            background: "var(--grad)",
          }}
        >
          <span className="flex">Purchase From Envato</span>

          <MoveRight />
        </p>
      </div>
      <div className="grid place-content-center">
        <img
          src="/Images/motionarteffect-img5.png"
          style={{
            objectFit: "contain",
          }}
          alt=""
        />
      </div>
    </div>
  );
}
