import logo from "../assets/images/logo-black.png";
import union from "../assets/images/Union.svg";
import twitter from "../assets/images/twitter.svg";
import telegram from "../assets/images/icons8-telegram.svg";
import discord from "../assets/images/icons8-discord.svg";
import { screenWidth } from "../utils/helper";
import { useEffect, useMemo, useState } from "react";

const Layouts8 = () => {
  const [width, setWidth] = useState(screenWidth());

  const viewports = useMemo(() => {
    const viewports = {
      isSmallest: width < 640,
      isSmall: width < 800,
    };
    return viewports;
  }, [width]);

  console.log(width);

  useEffect(() => {
    function handleResize() {
      setWidth(screenWidth());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="isolate bg-primary py-16 px-16 max-md:px-8 flex gap-24 relative"
      style={{ flexFlow: "column" }}
    >
      <div className="flex justify-between gap-16 flex-wrap">
        <div>
          <div className="h-[5rem]">
            <img src={logo} className="h-full" alt="Orbler logo" />
          </div>
          <h1 className="text-[26px] max-w-[24ch] mt-12 font-sans">
            Unleashing Web3's Next Chapter By Community
          </h1>
        </div>
        <div className="md:w-[25%]">
          <p className="text-black font-sans font-bold text-[35px]">
            Get Started
          </p>
          <div className="flex gap-3 mt-16" style={{ flexFlow: "column" }}>
            <a
              target="_blank"
              href="/docs"
              className="text-[26px] font-sans border-2 border-transparent w-max hover:border-black p-3 hover:font-bold duration-200 ease-in-out"
            >
              Docs
            </a>
            <a
              target="_blank"
              href="/app"
              className="text-[26px] font-sans border-2 border-transparent w-max hover:border-black p-3 hover:font-bold duration-200 ease-in-out"
            >
              Get Into Orbler
            </a>
            <a
              target="_blank"
              href="/mission/create"
              className="text-[26px] font-sans border-2 border-transparent w-max hover:border-black p-3 hover:font-bold duration-200 ease-in-out"
            >
              Create Mission
            </a>
          </div>
        </div>
        <div className="md:w-[25%]">
          <p className="text-black font-sans font-bold text-[35px]">
            Resources
          </p>
          <div className="flex gap-3 mt-16" style={{ flexFlow: "column" }}>
            <a
              target="_blank"
              href="mailto:hello@orbler.io"
              className="text-[26px] font-sans border-2 border-transparent w-max hover:border-black p-3 hover:font-bold duration-200 ease-in-out"
            >
              hello@orbler.io
            </a>
            <a
              target="_blank"
              href="/legal/term-of-service"
              className="text-[26px] font-sans border-2 border-transparent w-max hover:border-black p-3 hover:font-bold duration-200 ease-in-out"
            >
              Terms of Service
            </a>
            <a
              target="_blank"
              href="/legal/privacy-policy"
              className="text-[26px] font-sans border-2 border-transparent w-max hover:border-black p-3 hover:font-bold duration-200 ease-in-out"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
      <div
        className="flex gap-4"
        style={{
          flexFlow: "column",
          alignItems: viewports.isSmallest ? "flex-start" : "center",
        }}
      >
        <div className="grid grid-flow-col auto-cols-fr gap-4">
          <button className="w-full flex items-center gap-4 px-4 py-3 bg-primary hover:bg-secondary4 hover:scale-[0.9] text-black font-bold rounded border border-black duration-500 ">
            <img src={twitter} className="h-[1.125rem]" alt="Twitter logo" />
            <h1 className="text-black hidden sm:block">|</h1>
            <h1 className="text-[16px] hidden sm:block"> Twitter</h1>
          </button>
          <button className="w-full flex items-center gap-4 px-4 py-3 bg-primary hover:bg-secondary4 hover:scale-[0.9] text-black font-bold rounded border border-black duration-500 ">
            <img src={telegram} className="h-[1.125rem]" alt="Telegram logo" />
            <h1 className="text-black hidden sm:block">|</h1>
            <h1 className="text-[16px] hidden sm:block"> Telegram</h1>
          </button>
          <button className="w-full flex items-center gap-4 px-4 py-3 bg-primary hover:bg-secondary4 hover:scale-[0.9] text-black font-bold rounded border border-black duration-500 ">
            <img src={discord} className="h-[1.125rem]" alt="Discord logo" />
            <h1 className="text-black hidden sm:block">|</h1>
            <h1 className="text-[16px] hidden sm:block"> Discord</h1>
          </button>
        </div>
        <div
          className="w-[60vw] h-[2px] bg-black"
          style={{
            width: viewports.isSmallest ? "100%" : "60vw",
          }}
        />
        <h1>Copyright © Orbler All Rights Reserved.</h1>
      </div>
      <div className="absolute left-0 bottom-0 opacity-30 -z-10">
        <img src={union} alt="Union" className="animate-pulse" />
      </div>
    </div>
  );
};

export default Layouts8;
