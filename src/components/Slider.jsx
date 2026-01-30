import React, { useEffect, useRef, useState } from "react";
import img1 from "/slide/img1.jpg";
import img2 from "/slide/img2.jpg";
import img3 from "/slide/img3.jpg";
import img4 from "/slide/img4.jpg";
import { FaArrowLeft } from "react-icons/fa6";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";


const slider = () => {
  const [items, setItems] = useState([
    { id: 1, title: "Design Slider 1", img: img1 },
    { id: 2, title: "Design Slider 2", img: img2 },
    { id: 3, title: "Design Slider 3", img: img3 },
    { id: 4, title: "Design Slider 4", img: img1 },
    { id: 5, title: "Design Slider 5", img: img4 },
  ]);
  const thumbnailItems = [...items.slice(1), items[0]];
  const thumbRef = useRef(null);
  const lastThumbRef = useRef(null);
  const activeImgRef = useRef(null);
  const mainDivRef = useRef(null);
  const [zIndex, setZIndex] = useState(100);

  const handleRight = () => {
    setItems((prevItems) => {
      const newItems = [...prevItems];
      const firstItem = newItems.shift();
      newItems.push(firstItem);
      return newItems;
    });
    setZIndex(zIndex + 5);

    requestAnimationFrame(() => {
      if (!activeImgRef.current || !thumbRef.current) return;
      const main = document.querySelector(".main");
      const mainRect = main.getBoundingClientRect();
      const thumb = thumbRef.current.getBoundingClientRect();

      gsap.from(".card.active .img img", {
        position: "absolute",
        top: thumb.top - mainRect.top,
        left: thumb.left - mainRect.left,
        width: thumb.width,
        height: thumb.height,
        duration: 0.75,
      });

      gsap.from(lastThumbRef.current, {
        width: "0",
        duration: 1,
        delay: 0.5,
      });

      gsap.fromTo(
        lastThumbRef.current.querySelector(".text"),
        { opacity: 0 },
        { opacity: 1, duration: 1, delay: 1.5 }
      );

      gsap.from(".thumbnail", {
        x: "30%",
        duration: 1,
        delay: 0.5,
      });
    });
  };

  const handleLeft = () => {
    const newItems = [...items];
    const lastItem = newItems.pop();
    newItems.unshift(lastItem);
    setItems(newItems);
    setZIndex(zIndex + 5);

    requestAnimationFrame(() => {
      if (!activeImgRef.current || !thumbRef.current) return;

      const main = document.querySelector(".main");
      const activeRect = activeImgRef.current.getBoundingClientRect();
      const thumb = thumbRef.current.getBoundingClientRect();
      const mainDiv = mainDivRef.current;
      const mainDivRect = mainDiv.getBoundingClientRect();

      const clone = thumbRef.current.cloneNode(true);
      clone.style.position = "absolute";
      clone.style.margin = 0;
      clone.style.zIndex = zIndex + 5;

      const mainRect = main.getBoundingClientRect();
      clone.style.top = `${thumb.top - mainRect.top}px`;
      clone.style.left = `${thumb.left - mainRect.left}px`;
      clone.style.width = `${thumb.width}px`;
      clone.style.height = `${thumb.height}px`;
      clone.querySelector(".text").style.opacity = 0;

      main.appendChild(clone);

      thumbRef.current.style.opacity = 0;

      gsap.fromTo(
        clone,
        {
          left: activeRect.left - mainRect.left,
          top: activeRect.top - mainRect.top,
          width: activeRect.width,
          height: activeRect.height,
        },
        {
          left: thumb.left - mainRect.left,
          top: thumb.top - mainRect.top,
          width: thumb.width,
          height: thumb.height,
          duration: 0.75,
          onComplete: () => {
            main.removeChild(clone);
            thumbRef.current.style.opacity = 1;
          },
        }
      );

      gsap.from(".thumbnail", {
        x: "-30%",
        duration: 1,
      });

      gsap.fromTo(
        thumbRef.current.querySelector(".text"),
        { opacity: 0 },
        { opacity: 1, duration: 1, delay: 1 }
      );
    });
  };

  const handleThumbnailClick = (clickedIndex) => {
    const newOrder = [
      ...items.slice(clickedIndex),
      ...items.slice(0, clickedIndex),
    ];
    setItems(newOrder);
    setZIndex(zIndex + 5);

    requestAnimationFrame(() => {
      const thumb = thumbRef.current.getBoundingClientRect();
      const main = document.querySelector(".main");
      const mainRect = main.getBoundingClientRect();

      gsap.from(".card.active .img img", {
        position: "absolute",
        top: thumb.top - mainRect.top,
        left: thumb.left - mainRect.left,
        width: thumb.width,
        height: thumb.height,
        duration: 1,
      });

      gsap.fromTo(".thumbnail", { x: "30%" }, { x: 0, duration: 1 });

      gsap.from(lastThumbRef.current, {
        width: "1px",
      });
    });
  };

  useGSAP(() => {
    gsap.fromTo(
      ".card.active .contend > *",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.75, stagger: 0.3, delay: 0.5 }
    );
  }, [items]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleRight();
    }, 5000);

    return () => clearInterval(interval);
  }, [items]);

  return (
    <>
      <div className=" main hideScrollbar relative w-full max-w-[1536px] mx-auto aspect-square sm:aspect-3/2 md:aspect-4/3 lg:aspect-video xl:aspect-16/7 2xl:aspect-21/8  2xl:rounded-xl ">
        {items.map((item, index) => (
          <div
            ref={index === 0 ? mainDivRef : null}
            style={{ zIndex: index === 0 ? zIndex : 0 }}
            className={`card w-full h-full absolute ${
              index === 0 ? `active  ` : ""
            } `}
            key={item.id}
          >
            <div
              style={{ zIndex: zIndex + 2 }}
              className={`contend absolute top-[5%] md:top-1/12 left-[5%] md:left-1/12 sm:w-1/2 text-white flex flex-col gap-2   `}
            >
              <p className="title text-3xl md:text-5xl font-bold  ">
                {item.title}
              </p>
              <p className="topic text-5xl md:text-7xl font-bold text-orange-300 ">
                Animal
              </p>
              <p className="description text-xs md:text-base 2xl:text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium repudiandae ex repellat facere, alias provident
                deleniti facilis officia fuga magni est voluptas deserunt
                reprehenderit quam numquam repellendus quia obcaecati
                consectetur!
              </p>
            </div>
            <div
              style={{ zIndex: zIndex + 1 }}
              className={`img  w-full h-full object-cover  `}
            >
              <img
                ref={index === 0 ? activeImgRef : null}
                className="w-full h-full object-cover object-center"
                src={item.img}
                alt="image"
              />
            </div>
          </div>
        ))}
        <div
          style={{ zIndex: zIndex + 3 }}
          className={`arrows  absolute bottom-1/4  md:bottom-1/3 md:translate-y-1/2 md:left-1/12 translate-x-1/4  flex gap-5 md:gap-10 cursor-pointer`}
        >
          <button
            onClick={handleLeft}
            className="left p-2 rounded-full bg-gray-50/50 hover:bg-gray-100 duration-300 hover:scale-110"
          >
            <FaArrowLeft className=" text-2xl md:text-3xl text-black" />
          </button>
          <button
            onClick={handleRight}
            className="right p-2 rounded-full bg-gray-50/50 hover:bg-gray-100 duration-300 hover:scale-110 rotate-180"
          >
            <FaArrowLeft className=" text-2xl md:text-3xl text-black" />
          </button>
        </div>
        <div
          style={{ zIndex: zIndex + 3 }}
          className={`thumbnail flex absolute bottom-1/12 md:bottom-1/5 left-[40%] md:left-1/3 gap-2 md:gap-5   `}
        >
          {thumbnailItems.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => {
                if (index === 0) {
                  thumbRef.current = el;
                }
                if (index === items.length - 1) {
                  lastThumbRef.current = el;
                }
              }}
              onClick={() => handleThumbnailClick(index + 1)}
              className="thumb w-23 md:w-25 aspect-3/4! rounded-xl overflow-hidden relative  cursor-pointer "
            >
              <div className="img w-full h-full object-cover">
                <img
                  className="w-full h-full object-cover object-center"
                  src={item.img}
                  alt="thumbnail"
                />
              </div>
              <div className="text absolute bottom-0 left-0 w-full bg-black/50 text-white px-1 md:px-2   ">
                <div className=" title text-xs">{item.title}</div>
                <div className=" topic">Animal</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default slider;
