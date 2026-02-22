import React, { useEffect, useRef } from "react";
import img1 from "/mask/mask1.avif";
import img2 from "/mask/mask2.avif";
import img3 from "/mask/mask3.avif";
import img4 from "/mask/mask4.avif";
import img5 from "/mask/mask5.avif";
import img6 from "/mask/mask6.avif";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const Mask = () => {
  let items = [
    {
      image: img1,
      text: "this is mask 1",
    },
    {
      image: img2,
      text: "this is mask 2",
    },
    {
      image: img3,
      text: "this is mask 3",
    },
    {
      image: img4,
      text: "this is mask 4",
    },
    {
      image: img5,
      text: "this is mask 5",
    },
    {
      image: img6,
      text: "this is mask 6",
    },
  ];


  useGSAP(() => {
    gsap.set("#img1 , #img2", {
      clipPath: "polygon(50% 0%, 50% 0%,50% 100%, 50% 100%)",
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#main",
          start: "center center",
          end: "+=300%",
          scrub: true,
          pin: true,
        },
      })
      .to("#img2", { clipPath: "polygon(40% 0%, 100% 0%, 60% 100%, 0% 100%)" })
      .to("#img2", { clipPath: "polygon(0% 0%, 100% 0%,100% 100%, 0% 100%)" })
      .to("#img1", { clipPath: "polygon(40% 0%, 100% 0%, 60% 100%, 0% 100%)" })
      .to("#img1", { clipPath: "polygon(0% 0%, 100% 0%,100% 100%, 0% 100%)" });
  }, []);

  return (
    <>
      <div className="h-screen relative">
        <h1 className="text-6xl text-white font-bold absolute inset-0 flex items-center justify-center ">
          this is mask
        </h1>
      </div>
      <div
        id="main"
        className="flex items-center justify-center relative h-screen"
      >
        <div id="img1" className="absolute z-30 w-[60%] aspect-video ">
          <img className="w-full h-full " src={img1} alt="test" />
        </div>
        <div id="img2" className="absolute z-20 w-[60%] aspect-video ">
          <img className="w-full h-full " src={img2} alt="test" />
        </div>
        <div id="img3" className="absolute z-10 w-[60%] aspect-video">
          <img className="w-full h-full " src={img3} alt="test" />
        </div>
      </div>
      <div className="h-screen relative">
        <h1 className="text-6xl text-white font-bold absolute inset-0 flex items-center justify-center ">
          this is mask
        </h1>
      </div>
    </>
  );
};

export default Mask;
