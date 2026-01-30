import React from "react";
import SmoothScroll from "../components/SmoothScroll";
import Intro from "../components/smooth-parllax/Intro";
import Description from "../components/smooth-parllax/Description";
import Projects from "../components/smooth-parllax/Projects";

const SmoothParallax = () => {
  return (
    // <SmoothScroll>
    <main className={`bg-[#292929] min-h-screen max-w-screen overflow-x-hidden`}>
      <Intro />
      <div className="max-w-360 mx-auto">
        <Description />
        <Projects />
      </div>
    </main>
    // </SmoothScroll>
  );
};

export default SmoothParallax;
