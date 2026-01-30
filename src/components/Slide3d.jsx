import React, { useEffect } from "react";
import img1 from "/slide3d/dragon_1.jpg";
import img2 from "/slide3d/dragon_2.jpg";
import img3 from "/slide3d/dragon_3.jpg";
import img4 from "/slide3d/dragon_4.jpg";
import img5 from "/slide3d/dragon_5.jpg";
import img6 from "/slide3d/dragon_6.jpg";
import img7 from "/slide3d/dragon_7.jpg";
import img8 from "/slide3d/dragon_8.jpg";
import img9 from "/slide3d/dragon_9.jpg";
import img10 from "/slide3d/dragon_10.jpg";
import bgImg from "/slide3d/bg.png";
import model from "/slide3d/model.png";
import "../index.css";

const Slide3d = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

  const getDepth = () => {
    if (window.innerWidth < 375) return window.innerWidth / 2.2; //
    if (window.innerWidth < 640) return window.innerWidth / 2.2; // xs
    if (window.innerWidth < 768) return 250; // sm
    if (window.innerWidth < 1024) return 300; // md
    return 400; // desktop
  };

  useEffect(() => {
    const handleResize = () => {
      const depth = getDepth();
      const slide3d = document.querySelector(".slide3d");
      slide3d.style.transform = `rotateY(0deg) translateZ(${depth}px)`;
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const depth = getDepth();

  return (
    <div className="relative w-full aspect-video scroll-none ">
      <img
        src={bgImg}
        alt=""
        className="absolute w-full h-full top-0 left-0  "
      />
      <div
        className={`slide3d transform-3d absolute w-full h-full top-0 left-0 autoRotate  `}
      >
        {images.map((img, index) => (
          <div
            key={index}
            style={{
              transform: ` rotateY(${
                index * (360 / images.length)
              }deg) translateZ(${depth}px)`,
            }}
            className={`slide3d-image absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 sm:w-30 md:w-36 lg:w-40 aspect-3/4  `}
          >
            <img
              src={img}
              alt={`Slide 3D ${index + 1}`}
              className="h-full w-full object-cover object-center"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slide3d;
