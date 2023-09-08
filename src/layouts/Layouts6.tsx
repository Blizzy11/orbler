import image from "../assets/images/loft.svg";
import pipe from "../assets/images/3dpipe.svg";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Ornament from "../components/animated/Ornament";

export default function Layouts6() {
  const headerText = `w-max font-extrabold text-4xl sm:text-5xl text-white`;
  const containerRef = useRef(null);
  const isContainerInView = useInView(containerRef, {
    margin: "-30% 0px -30% 0px",
  });
  return (
    <div
      ref={containerRef}
      id="l6-wrapper"
      className="bg-secondary6 overflow-hidden flex items-center gap-24"
      style={{ flexFlow: "column" }}
    >
      <div
        id="l6-header"
        className="w-full flex justify-between px-16 max-sm:px-8 pt-48 max-sm:pt-24 flex-wrap gap-8"
      >
        <p
          style={{
            transform: `translateY(${isContainerInView ? "0" : "-30px"})`,
            opacity: isContainerInView ? 1 : 0,
            transition: "transform 800ms ease 300ms, opacity 800ms ease 300ms",
          }}
          className={`${headerText} max-w-[14ch]`}
        >
          Decoding the Web3 Landscape
        </p>
        <p
          style={{
            transform: `translateY(${isContainerInView ? "0" : "-30px"})`,
            opacity: isContainerInView ? 1 : 0,
            transition: "transform 800ms ease 300ms, opacity 800ms ease 300ms",
          }}
          className="max-w-[28ch] text-white text-[22px]"
        >
          Orbler aims to be your navigator, ensuring you not only understand but
          thrive in this space.
        </p>
      </div>
      <div
        id="l6-image-wrapper"
        style={{
          transform: `translateY(${isContainerInView ? "0" : "100%"})`,
          transition: "transform 800ms ease 300ms",
        }}
        className="px-16 max-sm:px-8 relative isolate"
      >
        <div
          style={{
            transform: `scale(${isContainerInView ? "1" : "0"})`,
            transition: "transform 800ms ease 300ms",
          }}
          className={`w-[18vw] max-sm:w-[36vw] max-lg:w-[20vw] absolute right-[-10%] max-xl:right-[0] top-[-2rem]`}
        >
          <Ornament />
        </div>
        <div
          style={{
            transform: `translateX(${isContainerInView ? "0" : "100%"})`,
            transition: "transform 800ms ease 300ms",
          }}
          className="w-[20vw] max-sm:w-[40vw] max-lg:w-[24vw] absolute left-0 top-[40%] -z-10 -translate-x-1/4 xl:-translate-x-[10%]"
        >
          <img src={pipe} alt="3d pipe" />
        </div>
        <div
          id="l6-image-inner"
          className="p-8 max-sm:p-4 max-sm:pb-0 pb-0 bg-secondary9 border-4 border-b-0 border-black"
          style={{
            borderTopLeftRadius: "clamp(2rem, 10vw, 6rem)",
            borderTopRightRadius: "clamp(2rem, 10vw, 6rem)",
          }}
        >
          <img src={image} alt="loft" />
        </div>
      </div>
    </div>
  );
}
