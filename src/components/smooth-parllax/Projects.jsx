import React, { useState } from "react";
import img1 from "/smooth-parllax/salar_de_atacama.webp";
import img2 from "/smooth-parllax/valle_de_la_muerte.webp";
import img3 from "/smooth-parllax/miscani_lake.webp";
import img4 from "/smooth-parllax/miniques_lagoon.webp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Projects = () => {
  const [active, setActive] = useState(0);

  const items = [
    { name: "Salar de Atacama", image: img1 },
    { name: "Valle de la luna", image: img2 },
    { name: "Miscanti Lake", image: img3 },
    { name: "Miniques Lagoons", image: img4 },
  ];

  useGSAP(() => {
    gsap.to(".moving-image", {
      scrollTrigger: {
        trigger: ".project-main",
        start: "top top",
        end: "bottom 90%",
        scrub: true,
        pin: ".moving-image",
      },
    });

    gsap.from(".top-left-text", {
      y: 120,
      opacity: 0,
      filter: "blur(10px)",
      scrollTrigger: {
        trigger: ".top-left-text",
        start: "top 80%",
        end: "top 30%",
        scrub: true,
        markers: true,
      },
    });

    // 🔥 TOP RIGHT TEXT
    gsap.from(".top-right-text", {
      x: 150,
      opacity: 0,
      scrollTrigger: {
        trigger: ".top-right-text",
        start: "top 75%",
        end: "top 40%",
        scrub: true,
        markers: true,
      },
    });
  }, []);

  return (
    <div className="relative project-main z-40 py-10 px-3 flex flex-col gap-20 xl:gap-0 max-w-screen overflow-x-hidden">
      <div className="top  w-full flex flex-col  xl:flex-row ">
        <div className=" left aspect-square w-full xl:w-1/2 relative">
          <img
            className="w-4/5 h-full moving-image absolute top-1/10 left-0 z-0"
            src={items[active].image}
            alt="image"
          />
        </div>
        <div className="  right aspect-square w-full xl:w-1/2 flex flex-col justify-between gap-5 xl:p-10 z-20">
          <p className="top-left-text sm:w-6/12 text-left text-3xl sm:text-4xl md:text-5xl xl:text-3xl">
            The flora is characterized by the presence of high elevation
            wetland, as well as yellow straw, broom sedge, tola de agua and tola
            amaia.
          </p>
          <div className="w-full  flex  justify-end">
            <p className=" top-right-text w-4/5 sm:w-2/3 text-right text-xl sm:text-2xl md:text-4xl xl:text-2xl  ">
              Some, like the southern viscacha, vicuña and Darwins rhea, are
              classified as endangered species. Others, such as Andean goose,
              horned coot, Andean gull, puna tinamou and the three flamingo
              species inhabiting in Chile (Andean flamingo, Chilean flamingo,
              and Jamess flamingo) are considered vulnerable.
            </p>
          </div>
        </div>
      </div>
      <div className="bottom aspect-2/1 flex flex-col justify-end gap-12 w-full ">
        {items.map((item, index) => (
          <p
            onMouseOver={() => setActive(index)}
            className="project-title w-full border-b  text-right text-4xl sm:text-6xl lg:text-8xl z-20 cursor-default "
          >
            {item.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Projects;
