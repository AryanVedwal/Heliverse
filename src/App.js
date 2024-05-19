import React from "react";
import SmokeEffect from "./components/SmokeEffect";
import Home from "./components/Home";

export default function App() {
  return (
    <>
      <SmokeEffect />

      <Home />

      <div
        className="py-5 mt-[20px] text-sm font-medium flex flex-wrap gap-2 items-center justify-around"
        style={{
          background: "var(--grad)",
        }}
      >
        <p className="">© 2023 Copywrite. All rights reserved by QodeMatrix</p>
        <p className="flex items-center justify-center gap-4 *:flex *:cursor-pointer">
          <span>Documentation</span>
          <span>Support</span>
        </p>
      </div>
    </>
  );
}
