import { useRef } from "react";
import rocket from "../assets/images/rocket.svg";
import star from "../assets/images/Star 85.svg";
import { useInView } from "framer-motion";
import Whirlwind from "../components/animated/Whirlwind";
import UnionRings from "../components/animated/UnionRings";

const Layouts5 = () => {
  const headerText = `font-black text-4xl sm:text-6xl`;
  const subheaderText = `text-2xl sm:text-4xl sm:leading-[3rem] leading-auto`;
  const containerRef = useRef(null);
  const isContainerInView = useInView(containerRef, {
    margin: "-50% 0px -50% 0px",
  });

  return (
    <div
      ref={containerRef}
      id="l5-wrapper"
      className="overflow-x-hidden py-48 max-sm:py-24 flex items-center relative flex-wrap gap-[4rem] max-xl:gap-[2rem]"
    >
      <div
        style={{
          transform: `translateX(${isContainerInView ? "0" : "-100%"})`,
          transition: "transform 800ms ease",
        }}
        id="l5-rocket-wrapper"
        className="w-[40vw] min-w-[40rem] max-sm:w-[80%] max-xl:min-w-0 max-xl:w-[60vw] flex justify-center items-center bg-secondary9 p-[8rem] max-xl:pl-[2rem] max-xl:p-[6rem] max-md:pl-[2rem] rounded-r-[8rem] max-sm:rounded-r-[4rem] border-4 border-l-0 border-black"
      >
        <div className="w-full relative">
          <img
            src={rocket}
            className="w-full drop-shadow-[10px_10px_0px_rgba(0,0,0,1)]"
            alt="Rocket"
          />
          <div className="w-[8vw] max-sm:w-[16vw] max-lg:w-[10vw] absolute left-0 top-0 translate-x-1/4">
            <img src={star} alt="star" />
          </div>
          <div className="w-[8vw] max-sm:w-[16vw] max-lg:w-[10vw] absolute right-0 bottom-0 translate-y-1/2">
            <Whirlwind />
          </div>
        </div>
      </div>
      <div className="flex-1 min-w-[64ch] max-sm:min-w-min px-8">
        <p
          style={{
            transform: `translateY(${isContainerInView ? "0" : "-35px"})`,
            opacity: isContainerInView ? 1 : 0,
            transition: "transform 800ms ease, opacity 800ms ease",
          }}
          className={`${headerText}`}
        >
          Mission to Earn
        </p>
        <p
          style={{
            transform: `translateY(${isContainerInView ? "0" : "-35px"})`,
            opacity: isContainerInView ? 1 : 0,
            transition: "transform 800ms ease, opacity 800ms ease",
          }}
          className={`${subheaderText}`}
        >
          Elevate your Web3 <br />
          Experience
        </p>
        <p
          style={{
            transform: `translateY(${isContainerInView ? "0" : "-35px"})`,
            opacity: isContainerInView ? 1 : 0,
            transition: "transform 800ms ease, opacity 800ms ease",
          }}
          className="max-w-[48ch] text-[22px] mt-24 max-sm:mt-8 max-xl:mt-16"
        >
          Orbler's 'Mission to Earn' isn't just about rewards. Dive in, tackle
          curated tasks, connect with peers, and elevate your Web3 journey every
          step of the way
        </p>
      </div>
      <div className=" bottom-0 right-0 absolute w-[24rem] max-lg:w-[40vw]">
        <UnionRings />
      </div>
    </div>
  );
};

export default Layouts5;
