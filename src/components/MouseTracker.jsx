import React, { useState, useEffect, useRef } from "react";

const MouseTracker = ({ className, classNameCoordinate }) => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const circleRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    let requestId;

    const animate = () => {
      if (circleRef.current) {
        const currentX = parseFloat(circleRef.current.style.left) || 0;
        const currentY = parseFloat(circleRef.current.style.top) || 0;

        // lerp speed
        const speed = 0.1;
        const dx = mouseX - currentX;
        const dy = mouseY - currentY;

        circleRef.current.style.left = currentX + dx * speed + "px";
        circleRef.current.style.top = currentY + dy * speed + "px";
      }

      requestId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(requestId);
  }, [mouseX, mouseY]);

  return (
    <>
      <div
        className={`fixed top-5 right-5 z-50 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-3 rounded-xl shadow-lg text-sm ${classNameCoordinate}`}
      >
        <p>Mouse X: {mouseX}</p>
        <p>Mouse Y: {mouseY}</p>
      </div>
      <div
        ref={circleRef}
        className={` tracker fixed w-10 h-10 bg-black/10 border border-gray-600 rounded-full -translate-1/2  z-999 pointer-events-none shadow-lg ${className}`}
        style={{ left: "0px", top: "0px", transition: "transform 0.1s" }}
      ></div>
    </>
  );
};

export default MouseTracker;
