import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Usage() {
  const boxRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: boxRef,
    offset: ["start end", "start start"],
  });

  const block1 = useTransform(scrollYProgress, [0, 0.75], [-500, 0]);
  const block2 = useTransform(scrollYProgress, [0.2, 0.75], [500, 0]);
  return (
    <div className="p-2" ref={boxRef}>
      <motion.div
        style={{
          y: block2,
        }}
        className="p-2 mb-12 text-center max-w-[768px] w-full mx-auto text-3xl lg:text-5xl"
      >
        Apply On Any Section Or Enable For Whole Page
      </motion.div>

      <div className="flex items-center justify-center gap-6 py-12 flex-wrap">
        <motion.div
          style={{
            x: block1,
            backdropFilter: "blur(20px)",
          }}
          className="p-4 bg-[#35203f50] rounded-xl w-fit flex flex-col justify-center text-center lg:text-left relative lg:-translate-y-[50px]"
        >
          <h1 className="px-4 py-2 text-3xl">Apply On Section</h1>
          <p className="max-w-[480px] py-2 px-4 text-md font-thin">
            Apply on section is a game-changer, offering an
            className="font-thin" unparalleled way to manage applications
            directly from your website.
          </p>
          <img src="/Images/motionarteffect-img10.png" alt="" />
        </motion.div>

        <motion.div
          style={{
            x: block2,
            backdropFilter: "blur(20px)"
          }}
          className="p-4 bg-[#35203f50] rounded-xl w-fit flex flex-col justify-center text-center lg:text-left"
        >
          <h1 className="px-4 py-2 text-3xl">Apply On Page</h1>
          <p className="max-w-[480px] py-2 px-4 text-md font-thin">
            Take your website to new heights with Motion Art for Elementor.
            Embrace the power of motion and animation.
          </p>
          <img src="/Images/motionarteffect-img11.png" alt="" />
        </motion.div>
      </div>

      <div
        className="bg-[#35203f50] py-6 rounded-xl mt-[100px] text-center p-2"
        style={{
          backdropFilter: "blur(20px)",
        }}
      >
        <p className="max-w-[500px] w-full text-3xl mx-auto">
          Supported by All Popular Browsers
        </p>
        <p className="font-thin max-w-[500px] text-xl my-6 w-full mx-auto">
          Rest assured, Motion Art is designed to be compatible with all major
          web browsers.
        </p>

        <img
          src="/Images/motionarteffect-img8.png"
          className="w-fit mx-auto scale-75 lg:scale-100"
          alt=""
        />
      </div>
    </div>
  );
}
