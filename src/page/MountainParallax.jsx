import React, { useEffect, useState } from "react";
import PcScroll from "../assets/PcScroll";
import MobileScroll from "../assets/MobileScroll";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const MountainParallax = () => {
  const [vertical, setVertical] = useState(true);
  const pcList = [
    "farthest",
    "far1",
    "far2",
    "middle",
    "close",
    "closest",
    "trees",
  ];
  const mobileList = ["sun", "middle", "close", "close", "closest"];

  useEffect(() => {
    if (window.innerWidth < window.innerHeight) setVertical(false);
    if (window.innerWidth > window.innerHeight) setVertical(true);
  }, []);

  useGSAP(() => {
    const layers = vertical ? pcList : mobileList;

    layers.forEach((item, index) => {
      gsap.to(`#${item}`, {
        y: -index * 15,
        scrollTrigger: {
          trigger: ".scroller",
          start: "center top",
          end: "bottom top",
          markers: true,
        },
      });
    });
  }, [vertical]);

  return (
    <div className=" w-screen h-screen overflow-x-clip">
      <button
        onClick={() => {
          setVertical(!vertical);
        }}
        className="text-2xl p-5 rounded-2xl bg-neutral-600 m-10"
      >
        switch
      </button>

      <div className="scroller flex justify-center items-center  bg-red-300">
        {vertical ? <PcScroll /> : <MobileScroll />}
      </div>

      <div className="h-[200vh]"></div>
    </div>
  );
};

export default MountainParallax;
