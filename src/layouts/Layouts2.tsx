import vector9 from "../assets/images/vector9.svg";
import vector10 from "../assets/images/vector10.svg";
import { CommunityCard } from "../components/CommunityCard";
import { FEATURED_COMMUNITY, NEW_COMMUNITY } from "../utils/constants";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { screenWidth } from "../utils/helper";
import Autoplay from "embla-carousel-autoplay";
import { useInView } from "framer-motion";
import { Lines } from "../components/animated/Lines";

const Layouts2 = () => {
  const [width, setWidth] = useState(screenWidth());
  // CAROUSELS
  const [featuredRef] = useEmblaCarousel(
    {
      active: false,
      align: "start",
      breakpoints: {
        "(max-width: 1280px)": { active: true },
        "(max-width: 640px)": { align: "center" },
      },
    },
    [Autoplay()]
  );

  const [newRef] = useEmblaCarousel(
    {
      active: false,
      align: "start",
      breakpoints: {
        "(max-width: 1280px)": { active: true },
        "(max-width: 640px)": { align: "center" },
      },
    },
    [Autoplay()]
  );

  const slideSize = useMemo(() => {
    if (width > 1280) return "25%";
    if (width > 1024) return "33%";
    if (width > 640) return "50%";
    return "100%";
  }, [width]);

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

  return (
    <div
      id="l2-wrapper"
      ref={containerRef}
      className="isolate flex py-48 max-sm:py-24 relative overflow-hidden"
      style={{ flexFlow: "column" }}
    >
      <div className="w-[100%] flex gap-24" style={{ flexFlow: "column" }}>
        <div className="w-[100%] flex gap-8" style={{ flexFlow: "column" }}>
          <p
            className="text-center font-black text-5xl text-black px-8"
            style={{
              transform: `translateY(${isContainerInView ? "0" : "-24px"})`,
              opacity: isContainerInView ? 1 : 0,
              transition: `opacity 300ms ease, transform 300ms ease`,
            }}
          >
            Featured Community
          </p>
          <div ref={featuredRef} className="embla overflow-hidden px-8 py-24">
            <div className="embla__container flex">
              {FEATURED_COMMUNITY.map((c, index) => (
                <div
                  style={{
                    flex: `0 0 ${slideSize}`,
                    zIndex: 10,
                  }}
                  className={`embla__slide min-w-0 pl-4`}
                >
                  <div
                    id="c-card-wrapper"
                    className="w-full h-full"
                    style={{
                      transform: `translateY(${
                        isContainerInView ? "0" : "-24px"
                      })`,
                      opacity: isContainerInView ? 1 : 0,
                      transition: `opacity 300ms ease ${
                        100 * index
                      }ms, transform 300ms ease ${100 * index}ms`,
                    }}
                  >
                    <CommunityCard data={c} index={index} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-[100%] flex gap-8" style={{ flexFlow: "column" }}>
          <p
            style={{
              transform: `translateY(${isContainerInView ? "0" : "-24px"})`,
              opacity: isContainerInView ? 1 : 0,
              transition: `opacity 300ms ease 200ms, transform 300ms ease 200ms`,
            }}
            className="text-center font-black text-5xl text-black px-8"
          >
            New Community
          </p>
          <div ref={newRef} className="embla overflow-hidden px-8 py-24">
            <div className="embla__container flex">
              {NEW_COMMUNITY.map((c, index) => (
                <div
                  style={{
                    flex: `0 0 ${slideSize}`,
                    zIndex: 10,
                  }}
                  className={`embla__slide min-w-0 pl-4`}
                >
                  <div
                    id="c-card-wrapper"
                    className="w-full h-full"
                    style={{
                      transform: `translateY(${
                        isContainerInView ? "0" : "-24px"
                      })`,
                      opacity: isContainerInView ? 1 : 0,
                      transition: `opacity 300ms ease ${
                        100 * index + 200
                      }ms, transform 300ms ease ${100 * index + 200}ms`,
                    }}
                  >
                    <CommunityCard data={c} index={index} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div id="l2-background-ornaments" className="-z-50">
        <div
          style={{
            opacity: isContainerInView ? 1 : 0,
            transition: `opacity 300ms ease`,
          }}
          className=" min-w-[1280px] w-[100vw] h-[1000px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute -z-10"
        >
          <Lines isInView={isContainerInView} />
        </div>
        <img
          style={{
            transform: `translate(${
              isContainerInView ? "0,0" : "-24px, -24px"
            })`,
            opacity: isContainerInView ? 1 : 0,
            transition: `opacity 300ms ease, transform 300ms ease`,
          }}
          src={vector9}
          className="w-[64px] h-[64px] absolute left-[15%] top-[15%] -z-10"
          alt="React logo"
        />
        <img
          style={{
            transform: `translate(${
              isContainerInView ? "0,0" : "-24px, -24px"
            })`,
            opacity: isContainerInView ? 1 : 0,
            transition: `opacity 300ms ease, transform 300ms ease`,
          }}
          src={vector10}
          className="w-[64px] h-[64px]  absolute right-[15%] bottom-[15%] -z-10"
          alt="React logo"
        />
      </div>
    </div>
  );
};
export default Layouts2;
