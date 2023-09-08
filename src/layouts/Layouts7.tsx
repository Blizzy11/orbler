import { useRef } from "react";
import roadmap1 from "../assets/images/roadmap1.svg";
import roadmap2 from "../assets/images/roadmap2.svg";
import roadmap3 from "../assets/images/roadmap3.svg";
import roadmap4 from "../assets/images/roadmap4.svg";
import roadmap5 from "../assets/images/roadmap5.svg";
import star from "../assets/images/star_roadmap.svg";
import { useInView } from "framer-motion";

const Layouts7 = () => {
  const q1Ref = useRef(null);
  const q2Ref = useRef(null);
  const q3Ref = useRef(null);
  const q4Ref = useRef(null);
  const q5Ref = useRef(null);
  const isQ1InView = useInView(q1Ref, {
    margin: "-50% 0px -50% 0px",
  });
  const isQ2InView = useInView(q2Ref, {
    margin: "-50% 0px -50% 0px",
  });
  const isQ3InView = useInView(q3Ref, {
    margin: "-50% 0px -50% 0px",
  });
  const isQ4InView = useInView(q4Ref, {
    margin: "-50% 0px -50% 0px",
  });
  const isQ5InView = useInView(q5Ref, {
    margin: "-50% 0px -50% 0px",
  });

  return (
    <div className="py-24 flex gap-20 flex-col justify-center items-center bg-secondary8 relative">
      <p className="text-6xl text-white font-black">Roadmap</p>
      <div className="h-[1440px] w-[20px] rotate-[-5deg] shadow-[10px_10px_#FF6C1A] rounded-br-[183px] rounded-bl-[183px] bg-white" />
      <div className="absolute mt-24 flex flex-col gap-14 items-center w-full">
        <div ref={q1Ref} className="ml-[280px]">
          <img
            style={{
              transform: `skewY(${isQ1InView ? "3deg" : 0}) scale(${
                isQ1InView ? "1.25" : "1"
              })`,
            }}
            src={roadmap1}
            className={`w-[100%] md:transform-none duration-300`}
            alt="React logo"
          />
        </div>
        <div ref={q2Ref} className="ml-[-500px]">
          <img
            style={{
              transform: `translateX(${isQ2InView ? "-4rem" : "0"}) skewY(${
                isQ2InView ? "3deg" : 0
              }) scale(${isQ2InView ? "1.25" : "1"})`,
            }}
            src={roadmap2}
            className="w-[100%] md:transform-none duration-300"
            alt="React logo"
          />
        </div>
        <div ref={q3Ref} className="ml-[400px]">
          <img
            style={{
              transform: `translateX(${isQ3InView ? "4rem" : "-.5rem"}) skewY(${
                isQ3InView ? "3deg" : 0
              }) scale(${isQ3InView ? "1.25" : "1"})`,
            }}
            src={roadmap3}
            className="w-[100%] md:transform-none duration-300"
            alt="React logo"
          />
        </div>
        <div ref={q4Ref} className="ml-[-480px]">
          <img
            style={{
              transform: `translateX(${isQ4InView ? "-6rem" : "-1rem"}) skewY(${
                isQ4InView ? "3deg" : 0
              }) scale(${isQ4InView ? "1.25" : "1"})`,
            }}
            src={roadmap4}
            className="w-[100%] md:transform-none duration-300"
            alt="React logo"
          />
        </div>
        <div ref={q5Ref} className="ml-[510px]">
          <img
            style={{
              transform: `translateX(${isQ5InView ? "6rem" : "-1rem"}) skewY(${
                isQ5InView ? "3deg" : 0
              }) scale(${isQ5InView ? "1.25" : "1"})`,
            }}
            src={roadmap5}
            className="w-[100%] md:transform-none duration-300"
            alt="React logo"
          />
        </div>
      </div>
      <div className="absolute left-0 top-0 mt-[20%] ml-[10%]">
        <img src={star} className="w-[100%]" alt="React logo" />
      </div>
    </div>
  );
};

export default Layouts7;
