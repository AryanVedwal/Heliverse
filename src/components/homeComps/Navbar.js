import React, { useRef, useEffect } from "react";
import gsap from "gsap";

export default function Navbar() {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      boxRef.current,
      { y: "-200%" },
      { y: "0%", duration: 1.5, delay: 0.5, ease: "elastic.out" }
    );
  }, []);

  return (
    <div ref={boxRef} className="flex relative items-center justify-between mt-12 overflow-hidden">

      <div className="">
        <img src="/Images/MotionArtEffect-logo.png" alt="" />
      </div>

      <div className="border-2 hidden lg:flex text-2xl p-4 cursor-pointer rounded-md bg-[#fafafa] text-[#202020] hover:bg-transparent hover:text-[#fafafa] duration-500">
        Purchase Now
      </div>
    </div>
  );
}
