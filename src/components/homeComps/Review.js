import React from "react";

export default function Review() {
  return (
    <div>
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
