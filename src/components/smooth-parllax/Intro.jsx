import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import React, { useEffect, useRef } from "react";

const Intro = () => {
  useEffect(() => {
    const el = document.querySelector(".headline");
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      el.style.transform = `translateY(${scrollY * -0.3}px)`;
    });
  }, []);

  useGSAP(() => {
    gsap.from(".headline", {
      opacity: 0,
      duration: 1,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".main",
        start: "top top",
        end: "bottom 30%",
        scrub: true,
      },
    });
    tl.fromTo(
      ".background",
      {
        scale: 0.8,
        ease: "none",
      },
      {
        scale: 1,
        ease: "none",
      }
    );

    tl.to(
      ".inner-img",
      {
        height: () =>
          `${document.querySelector(".inner-img").offsetHeight / 2}px`,
        ease: "none",
        y: "-=100px",
      },
      "<"
    );
  }, []);

  return (
    <div className="main h-screen w-screen flex items-center justify-center overflow-x-clip">
      <div className="background absolute w-full h-full left-1/2  portrait:top-1/12 landscape:top-0 transform -translate-x-1/2 z-0  ">
        <img
          src="/smooth-parllax/smoothBg.webp"
          alt="smooth-bg"
          className="h-full w-full  brightness-70 "
        />
      </div>
      <div className="inner landscape:w-1/5 landscape:h-2/5 absolute  left-1/2 top-1/2 transform -translate-1/2 z-0 origin-bottom flex items-start">
        <img
          src="/smooth-parllax/smooth-inner.webp"
          alt="smooth-bg"
          className="h-full w-full  brightness-70 inner-img origin-bottom"
        />
      </div>
      <h2 className=" headline text-4xl sm:text-[7vw] font-bold text-gradient z-40">
        PARALLAX SCROLL
      </h2>
    </div>
  );
};

export default Intro;
