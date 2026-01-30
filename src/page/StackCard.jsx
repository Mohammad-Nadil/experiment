import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import img1 from "/cars/GTR-R34.jfif";
import img2 from "/cars/tokyoTotota.jfif";
import img3 from "/cars/Lamborghini Urus.jfif";
import img4 from "/cars/mcQueen.jfif";
import img5 from "/cars/mustang.jfif";
import img6 from "/cars/Porsche 911.jfif";
import img7 from "/cars/Porsche GT3 RS.jfif";
import img8 from "/cars/Rolls Royce.jfif";
import { SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

const StackCard = () => {
  const headlineRef = useRef(null);

  const verticalData = [
    {
      id: 1,
      title: "GTR R34 – Legendary Speed",
      desc: "Feel the thrill of Japan's iconic sports car with unmatched performance and style.",
      img: img1, // local import
    },
    {
      id: 2,
      title: "Tokyo Totota – Urban Beast",
      desc: "Experience the perfect blend of city aesthetics and raw power in this urban legend.",
      img: img2,
    },
    {
      id: 3,
      title: "Lamborghini Urus – Lux SUV",
      desc: "Unleash luxury and speed in one with Lamborghini's high-performance SUV.",
      img: img3,
    },
    {
      id: 4,
      title: "McQueen – Racing Icon",
      desc: "Step into the world of animated speed and style with this legendary racer.",
      img: img4,
    },
  ];

  const horizontalData = [
    {
      id: 1,
      title: "Mustang GT – Muscle Power",
      desc: "Feel the raw American muscle power with style, roar, and legacy.",
      img: img5,
    },
    {
      id: 2,
      title: "Porsche 911 – Timeless Classic",
      desc: "Drive a masterpiece of engineering that balances elegance and speed.",
      img: img6,
    },
    {
      id: 3,
      title: "Porsche GT3 RS – Track King",
      desc: "Experience the adrenaline of race-ready precision on the streets.",
      img: img7,
    },
    {
      id: 4,
      title: "Rolls Royce – Ultra Luxury",
      desc: "Indulge in the ultimate luxury, craftsmanship, and comfort on wheels.",
      img: img8,
    },
  ];

  useGSAP(() => {
    const section = document.querySelector(".scroll-section.vertical");
    const cards = section.querySelectorAll(".stack-card");

    cards.forEach((card, index) => {
      if (index !== 0) gsap.set(card, { yPercent: 100 });
    });

    // Timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 20%",
        end: `+=${cards.length * 100}%`,
        pin: true,
        scrub: 1,
      },
    });

    cards.forEach((card, index) => {
      tl.to(card, { scale: 0.9, borderRadius: "20px" });
      if (cards[index + 1]) tl.to(cards[index + 1], { yPercent: 0 }, "<");
    });
  });

  useGSAP(() => {
    const section = document.querySelector(".scroll-section.horizontal");
    const cards = section.querySelectorAll(".stack-card");

    cards.forEach((card, index) => {
      if (index !== 0) gsap.set(card, { xPercent: 100 });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 20%",
        end: `+=${cards.length * 100}%`,
        pin: true,
        scrub: 1,
      },
    });

    cards.forEach((card, index) => {
      tl.to(card, { scale: 0.9, borderRadius: "20px" });
      if (cards[index + 1]) tl.to(cards[index + 1], { xPercent: 0 }, "<");
    });
  });

  return (
    <div className="bg-linear-to-b from-[#303030] to-neutral-700 font-sans">
      {/* TITLE */}
      <section className=" h-40 xl:h-[35vh] flex items-center justify-center">
        <h1
          ref={headlineRef}
          className="headline text-3xl xl:text-5xl text-gradient font-bold"
        >
          Vertical Stack Scroll
        </h1>
      </section>

      {/* VERTICAL */}
      <section className="scroll-section vertical ">
        <div className="relative w-full aspect-square sm:aspect-video xl:max-w-6xl mx-auto overflow-hidden">
          {verticalData.map((item, index) => (
            <div
              key={item.id}
              className="stack-card absolute inset-0 rounded-3xl overflow-hidden shadow-xl flex items-end"
              style={{
                backgroundImage: `url(${item.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay for text */}
              <div className="bg-black/40 w-full p-6 rounded-b-3xl">
                <span className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center mb-4">
                  {item.id}
                </span>
                <h2 className="text-xl md:text-2xl font-bold mb-2 text-white">
                  {item.title}
                </h2>
                <p className="text-white/80 text-sm md:text-base">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TITLE */}
      <section className="h-[35vh] flex items-center justify-center">
        <h1 className="text-3xl xl:text-5xl text-gradient font-bold">
          Horizontal Stack Scroll
        </h1>
      </section>

      {/* HORIZONTAL */}
      <section className="scroll-section horizontal">
        <div className="relative w-full aspect-square sm:aspect-video xl:max-w-6xl mx-auto overflow-hidden">
          {horizontalData.map((item, index) => (
            <div
              key={item.id}
              className="stack-card absolute inset-0 rounded-3xl overflow-hidden shadow-xl flex items-end"
              style={{
                backgroundImage: `url(${item.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay for text */}
              <div className="bg-black/40 w-full p-6 rounded-b-3xl">
                <span className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center mb-4">
                  {item.id}
                </span>
                <h2 className="text-xl md:text-2xl font-bold mb-2 text-white">
                  {item.title}
                </h2>
                <p className="text-white/80 text-sm md:text-base">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* END */}
      <section className="h-[35vh] flex items-center justify-center">
        <h1 className="text-3xl font-semibold">Soo Cool!!</h1>
      </section>
    </div>
  );
};

export default StackCard;
