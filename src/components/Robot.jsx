import Spline from "@splinetool/react-spline";

const Robot = () => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <Spline
        scene="https://prod.spline.design/0-8uFNvym7E0H7c8/scene.splinecode"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default Robot;
