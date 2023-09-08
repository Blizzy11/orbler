import { useInView } from "framer-motion";
import image5 from "../assets/images/astronot.png";
import frame from "../assets/images/Group.png";
import rubic from "../assets/images/rubic.svg";
import SwirlLine from "../components/animated/SwirlLine";
import Swoop from "../components/animated/Swoop";
import { useEffect, useRef, useState } from "react";
import { screenWidth } from "../utils/helper";

const Layouts3 = () => {
  const [width, setWidth] = useState(screenWidth());
  const containerRef = useRef(null);
  const isContainerInView = useInView(containerRef, {
    margin: "-50% 0px -50% 0px",
  });

  useEffect(() => {
    function handleResize() {
      setWidth(screenWidth());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const minW = 1026;
  const headerText = `w-max font-extrabold text-4xl sm:text-5xl text-white`;

  return (
    <div
      ref={containerRef}
      id="l3-wrapper"
      className="bg-black py-48 max-sm:py-24 flex justify-center items-center"
    >
      <div
        id="l3-inner"
        className="w-full flex justify-center items-end gap-4 flex-wrap px-[2rem]"
      >
        <p
          id="l3-text"
          className={`${headerText} text-center block mb-4`}
          style={{
            display: width > minW ? "none" : "block",
            transform: `translate(${isContainerInView ? "0,0" : "-5px, -5px"})`,
            opacity: isContainerInView ? 1 : 0,
            transition: "transform 800ms ease, opacity 800ms ease",
          }}
        >
          From <br />
          Community For <br />
          Community
        </p>
        <div id="l3-left-section">
          <p
            id="l3-text"
            className={`${headerText} ml-auto mb-[-2rem]`}
            style={{
              display: width > minW ? "block" : "none",
              transform: `translate(${
                isContainerInView ? "4rem,0" : "-5px, -5px"
              })`,
              opacity: isContainerInView ? 1 : 0,
              transition: "transform 800ms ease, opacity 800ms ease",
            }}
          >
            From <br />
            Community For <br />
            Community
          </p>
          <div
            id="l3-folder"
            className="relative w-full"
            style={{
              opacity: isContainerInView ? 1 : 0,
              transform: `translateY(${isContainerInView ? "0" : "-12px"})`,
              transition: "transform 500ms ease, opacity 500ms ease",
            }}
          >
            <div
              id="l3-rubic"
              className="absolute w-[24vw] z-50"
              style={{
                opacity: isContainerInView ? 1 : 0,
                left: isContainerInView ? "-6%" : "-10%",
                top: "-5%",
                transition: "opacity 800ms ease, left 800ms ease",
              }}
            >
              <img src={rubic} alt="Rubic" />
            </div>
            <div id="l3-frame" className="absolute left-0 top-0 z-30">
              <img src={frame} alt="Frame" />
            </div>
            <div
              id="l3-line"
              className="absolute left-[-4%] bottom-[-4%] z-50 w-[8vw]"
            >
              <Swoop />
            </div>
            <div
              id="l3-swirl-line"
              className={`absolute z-50 top-[-4rem] lg:top-0 right-[2rem] lg:right-[-6rem]`}
              style={{ height: "clamp(4rem, 16vw, 8rem)" }}
            >
              <SwirlLine />
            </div>
            <div id="l3-astronaut" className="w-full">
              <img src={image5} alt="Astronout" />
            </div>
          </div>
        </div>
        <div
          style={{
            marginTop: width > minW ? "0" : "2rem",
            marginBottom: width > minW ? "7rem" : "0",
            transform: `translate(${isContainerInView ? "0,0" : "15px, 15px"})`,
            opacity: isContainerInView ? 1 : 0,
            transition: "transform 800ms ease, opacity 800ms ease",
          }}
          id="l3-right-section"
          className={`flex w-[40ch] max-lg:w-[64ch] mb-0`}
        >
          <p className={`text-white text-xl leading-[2rem] max-lg:text-center`}>
            Provide Community Enhancement: Orbler bridges projects and
            audiences, fostering interactions and amplifying voices in a
            thriving ecosystem
          </p>
        </div>
      </div>
    </div>
  );
};

export default Layouts3;
