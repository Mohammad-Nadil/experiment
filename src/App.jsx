import React from "react";
import Slider from "./components/Slider";
import Clocks from "./components/Clocks";
import Slide3d from "./components/Slide3d";
import "./index.css";
import Mask from "./components/Mask";
import MouseTracker from "./components/MouseTracker";
import SvgAnimation from "./components/SvgAnimation";
import Robot from "./components/Robot";

const App = () => {
  return (
    <div className="bg-linear-to-b from-neutral-400 to-neutral-800 hideScrollbar overflow-x-clip">
      <div className="max-w-400 mx-auto pb-20 flex flex-col gap-20   ">
        <div className="spline-robot fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2    z-9999999 ">
          <Robot className={`w-full h-full`} />
        </div>
        <div className="svg py-20" id="svg">
          <SvgAnimation />
        </div>
        <div className="slider relative " id="slider">
          <Slider />
        </div>
        <div className="clock" id="clock">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-wider text-center  text-transparent bg-clip-text bg-linear-to-r from-lime-400 via-green-500 to-blue-500 animate-text">
            Clock in clock
          </h2>
          <Clocks />
        </div>
        <div className="slide3d" id="slide3d">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-wider text-center text-transparent bg-clip-text bg-linear-to-r from-lime-400 via-green-500 to-blue-500 animate-text">
            3D slider
          </h2>
          <Slide3d />
        </div>
        {/* <div className="mask" id="mask">
          <Mask />
        </div> */}
        <div className="mouse-tracker " id="mouse-tracker">
          <MouseTracker />
        </div>
      </div>
    </div>
  );
};

export default App;
