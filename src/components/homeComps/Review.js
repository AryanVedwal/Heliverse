import React, { useRef, useEffect } from "react";
import gsap from "gsap";

export default function Review() {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      boxRef.current,
      { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" },
      {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        duration: 0.5,
        delay: 2.25,
        ease: "power1.inOut",
      }
    );
  }, []);
  return (
    <div ref={boxRef}>
      <div className="mb-12 text-center text-xl">
        Trusted by thousands of users around the world
      </div>
      <div className="flex mb-12 items-center content-center justify-around flex-wrap gap-4">
        {[...Array(3)].map((e, i) => (
          <div className="grid grid-cols-6 grid-rows-2" key={i}>
            <p className="col-span-2 row-span-2">
              <img src={`/Images/motionarteffect-img${i + 1}.png`} alt="" />
            </p>

            <p className="col-span-4 flex items-center justify-center">
              <img src="/Images/motionarteffect-img4.png" alt="" />{" "}
            </p>
            <p className="col-span-4 flex items-center justify-center">
              4.5 Score, 9 Reviews
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
