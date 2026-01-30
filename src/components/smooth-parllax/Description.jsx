import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import React, { useRef } from "react";

const Description = () => {
  const titleRef = useRef(null);
  useGSAP(() => {
    const para = SplitText.create(titleRef.current, {
      type: "lines, words, chars",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".description",
        start: "top 80%",
        end: "bottom 80%",
        scrub: true,
      },
    });

    tl.from(para.lines, {
      x: -50,
      opacity: 0.3,
      stagger: 0.3,
    });
  }, []);

  return (
    <div className="py-5 w-full description flex flex-col justify-center px-2">
      <p
        ref={titleRef}
        className=" subTitle sm:w-4/5 text-3xl sm:text-4xl lg:text-5xl uppercase  z-50 relative leading-normal "
      >
        Los Flamencos National Reserve is a nature reserve located in the
        commune of San Pedro de Atacama The reserve covers a total area of 740
        square kilometres (290 sq mi)
      </p>
    </div>
  );
};

export default Description;
