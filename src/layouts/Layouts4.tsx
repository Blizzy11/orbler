import vector from "../assets/images/Vector.svg";
import video from "../assets/videos/video.mp4";
import mediaPlay from "../assets/images/Frame91.svg";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const Layouts4 = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef(null);
  const isContainerInView = useInView(containerRef, {
    margin: "-50% 0px -50% 0px",
  });

  useEffect(() => {
    if (videoRef.current) {
      const vidRef = videoRef.current;
      if (isContainerInView) {
        vidRef.play();
      } else {
        vidRef.pause();
        vidRef.currentTime = 0;
      }
    }
  }, [isContainerInView]);

  return (
    <div
      ref={containerRef}
      id="l4-wrapper"
      className="overflow-x-hidden py-48  max-sm:py-24 px-[2rem] w-[100%] flex justify-center items-center overflow-hidden bg-secondary1 relative isolate"
    >
      <div
        id="l4-inner"
        className="flex justify-center items-center gap-16"
        style={{ flexFlow: "column" }}
      >
        <div
          id="l4-header"
          className="flex justify-center gap-4"
          style={{ flexFlow: "column" }}
        >
          <p
            style={{
              transform: `translateY(${isContainerInView ? "0" : "-35px"})`,
              opacity: isContainerInView ? 1 : 0,
              transition: "transform 800ms ease, opacity 800ms ease",
            }}
            className={`font-black text-4xl sm:text-5xl text-white text-center`}
          >
            Orbler Mission To Earn
          </p>
          <p
            style={{
              transform: `translateY(${isContainerInView ? "0" : "-35px"})`,
              opacity: isContainerInView ? 1 : 0,
              transition: "transform 800ms ease, opacity 800ms ease",
            }}
            className="text-center font-normal text-[24px] max-w-[64ch] text-white"
          >
            We are a bridge from Web2 to Web3, welcoming countless Web2 users to
            the next generation of the internet
          </p>
        </div>
        <div
          style={{
            transform: `translateY(${isContainerInView ? "0" : "-35px"})`,
            opacity: isContainerInView ? 1 : 0,
            transition: "transform 800ms ease, opacity 800ms ease",
          }}
          id="l4-video-wrapper"
          className="w-full px-4"
        >
          <div
            id="l4-video-inner"
            className="isolate rounded-3xl relative p-4 w-full max-w-3xl border-2 border-secondary8"
          >
            <div
              className="absolute left-0 top-[1rem] -z-20 cursor-pointer"
              style={{ transform: "translateX(calc((100% + 1px) * -1))" }}
            >
              <img src={mediaPlay} alt="media play" />
            </div>
            <div id="l4-video" className="w-full h-full rounded-2xl">
              <video
                ref={videoRef}
                style={{ objectFit: "cover" }}
                controls
                loop
                autoPlay
              >
                <source src={video} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
      <div
        id="l4-background-lines"
        className="w-[100vw] h-screen left-0 top-0 absolute -z-10"
      >
        <img src={vector} className="w-[100%] h-screen" alt="lines" />
      </div>
    </div>
  );
};
export default Layouts4;
