import React from "react";

export default function Footer() {
  return (
    <div className="p-2 mt-[50px]">
      <div className="p-1 max-w-[640px] text-center mx-auto">
        <p className="text-5xl">An All-Round Plugin With Powerful Features</p>
        <p className="text-md mt-4 font-thin">
          Whether you're a seasoned web designer or just starting out, Motion
          Art for Elementor seamlessly integrates with the Elementor platform,
          providing you with a seamless and intuitive experience.
        </p>
      </div>

      <div className="my-12 flex flex-wrap items-center justify-center gap-6 px-2 py-4">
        {[...Array(3)].map((e, i) => (
          <div
            key={i}
            className="h-[350px] w-[400px] flex flex-col justify-center gap-2 border-2 border-zinc-700 bg-[#35203f50] rounded-xl"
            style={{
              backdropFilter: "blur(20px)"
            }}
          >
            <div className="">
              <img src={`/Images/footer${i + 1}.png`} alt="" />
            </div>
            <p className=" py-2 px-6 text-3xl">Light Weight</p>
            <p className=" py-2 px-6 font-thin">
              Motion Art for Elementor is designed to be lightweight.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
