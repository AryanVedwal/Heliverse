import React from "react";
import Navbar from "./homeComps/Navbar";
import Hero from "./homeComps/Hero";
import Review from "./homeComps/Review";
import Action from "./homeComps/Action";
import Usage from "./homeComps/Usage";
import Footer from "./homeComps/Footer";

export default function Home() {
  return (
    <div className="max-w-[1600px] w-full mx-auto p-2">
      <Navbar />
      <Hero />
      <Review />
      <Action />
      <Usage />
      <Footer />
    </div>
  );
}
