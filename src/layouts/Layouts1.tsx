import twitter from "../assets/images/twitterwhite.svg";
import telegram from "../assets/images/telegram.svg";
import medium from "../assets/images/medium.svg";
import discord from "../assets/images/discord.svg";
import getio from "../assets/images/Partner_gateio.png";
import cetrik from "../assets/images/Partner_certik.png";
import huobi from "../assets/images/Partner_huobi.png";
import wlowmist from "../assets/images/Partner_slowmist.png";
import oblerHero from "../assets/images/oblerHero.svg";
import icon1 from "../assets/images/icon1.svg";
import icon2 from "../assets/images/2.svg";
import icon3 from "../assets/images/3.svg";
import icon4 from "../assets/images/4.svg";
import icon5 from "../assets/images/5.svg";
import icon6 from "../assets/images/6.svg";
import iconX from "../assets/images/iconX.svg";
import sphere from "../assets/images/Sphere.svg";
import cahaya from "../assets/images/cahaya.svg";

const Layouts1 = () => {
  return (
    <div id="l1-wrapper" className="relative overflow-hidden">
      <div className="h-[1000px] w-[100%] bg-secondary8 place-items-center flex justify-between">
        <div className="  w-[30%] h-[1000px]  inset-5 rounded-xl">
          <div className="flex flex-col ">
            <div className="text-white  w-[30%px] h-[500px]">
              <div className="h-[20%] flex flex-row justify-start items-center ml-20 ">
                <img
                  src={oblerHero}
                  className="item-center w-[150px] h-[63px]"
                  alt="React logo"
                />
              </div>
            </div>
            <div className="text-white w-[30%px] h-[400px]">
              <div className="absolute mt-[40px] ml-[450px]">
                <button>
                  <div className="flex justify-center item text-[20px]">
                    <img
                      src={iconX}
                      className="item-center w-[60px] h-[60px]"
                      alt="React logo"
                    />
                  </div>
                </button>
              </div>
              <div className="border-white bg-secondary4 border-[4px] w-[100%] h-[500px] inset-5 rounded-tr-[100px] rounded-l-none  border-b-[0] border-l-[0] flex flex-row items-end">
                <div className="ml-[-50px] mb-[40px] flex flex-row absolute rotate-[-40deg] w-[400px] h-[200px] border-2 border-white">
                  <div className="hover:translate-y-[-90px]  absolute bg-black w-[270px] h-[270px] transition-transform transform hover:scale-105 z-50  rounded-full flex items-center justify-center">
                    <img
                      src={icon1}
                      className="rotate-[40deg] w-[200px] h-[200px]"
                      alt="React logo"
                    />
                  </div>
                  <div className="hover:translate-y-[-90px] absolute left-[70px] bg-white w-[270px] h-[270px] transition-transform transform hover:scale-105 z-40  rounded-full flex items-center justify-center">
                    <img
                      src={icon2}
                      className="rotate-[40deg] w-[200px] h-[200px]"
                      alt="React logo"
                    />
                  </div>
                  <div className="hover:translate-y-[-90px] absolute left-[140px] bg-[#8E3AE2] w-[270px] h-[270px] transition-transform transform hover:scale-105 z-30  rounded-full flex items-center justify-center">
                    <img
                      src={icon3}
                      className="rotate-[40deg] w-[200px] h-[200px]"
                      alt="React logo"
                    />
                  </div>
                  <div className="hover:translate-y-[-90px] absolute left-[210px] bg-white w-[270px] h-[270px] transition-transform transform hover:scale-105 z-20  rounded-full flex items-center justify-center">
                    <img
                      src={icon4}
                      className="rotate-[40deg] w-[200px] h-[200px]"
                      alt="React logo"
                    />
                  </div>
                  <div className="hover:translate-y-[-90px] absolute left-[280px] bg-white w-[270px] h-[270px] transition-transform transform hover:scale-105 z-10  rounded-full flex items-center justify-center">
                    <img
                      src={icon5}
                      className="w-[200px] h-[200px]"
                      alt="React logo"
                    />
                  </div>
                  <div className="rotate-[40deg] hover:translate-y-[-90px] absolute left-[320px] bg-[#F16805] w-[270px] h-[270px] transition-transform transform hover:scale-105 z-0  rounded-full flex items-center justify-center">
                    <img
                      src={icon6}
                      className="w-[200px] h-[200px]"
                      alt="React logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="  w-[65%] h-[1000px] inset-5 rounded-xl">
          <div className="border-white bg-primary border-[4px] w-[100%] h-[680px] inset-5 rounded-bl-[100px] border-r-[0] border-t-[0] mr-[20px]">
            <div className=" h-[20%] flex flex-row justify-end items-center mr-20">
              <button className="bg-secondary8 hover:bg-primary hover:scale-90 text-white hover:text-black font-bold h-[60px] w-[180px] rounded-[10px] border border-black mr-5 duration-500 shadow-[5px_5px_#E9DA56]">
                <div className="flex justify-center text-[18px]">
                  Create Mission {">>"}
                </div>
              </button>

              <button className="bg-secondary8 hover:bg-primary hover:scale-90 text-white hover:text-black font-bold h-[60px] w-[120px] rounded-[10px] border border-black mr-5 duration-500 shadow-[5px_5px_#E9DA56]">
                <div className="flex justify-center text-[18px]">
                  More {">>"}
                </div>
              </button>
            </div>

            <div className="absolute animate-[pulse_2000ms_infinite]">
              <img
                src={sphere}
                className="item-center ml-[700%] mt-[50%] w-[146px] h-[146px] transition-transform transform hover:scale-105 animate-[bounce_2000ms_infinite]"
              />
            </div>
            <div className="absolute ">
              <img
                src={cahaya}
                className="item-center ml-[485%] mt-[-40%] w-[146px] h-[146px] transition-transform transform hover:scale-105 "
              />
            </div>

            <div className="ml-[30px]  w-[70%] h-[60%] flex justify-start ">
              <p className="text-[140px] font-bold leading-[130px] font-display">
                Unleashing <br />
                Web3's{""} <br />
                Chapter
              </p>
            </div>
            <div className="ml-[30px] mt-[50px]  w-[97%] h-[10%] flex justify-center items-center ">
              <p className="text-[28px] font-bold leading-[130px]">
                BY COMMUNITY
              </p>
            </div>
          </div>
          <div className=" ml-[30px]  w-[90%] h-[100px] inset-5 mr-[20px] flex justify-start items-center">
            <div>
              <button className="bg-primary hover:bg-black hover:text-white hover:scale-90 text-black font-bold h-[60px] w-[180px] rounded-[10px] border border-black mr-5 duration-500 shadow-[5px_5px_#E9DA56]">
                <div className="flex justify-center text-[18px]">
                  Get Into Orbler{">>"}
                </div>
              </button>
              <button className="bg-secondary6 hover:bg-primary hover:scale-90 text-white hover:text-black font-bold h-[60px] w-[180px] rounded-[10px] border border-black mr-5 duration-500 shadow-[5px_5px_#E9DA56]">
                <div className="flex justify-center text-[18px]">
                  Create Mission{">>"}
                </div>
              </button>
              <button className="bg-[#1DA1F2] hover:bg-seconda hover:scale-90 font-bold h-[50px] w-[50px] rounded-full border border-white mr-3 duration-500 shadow-[3px_3px_#E9DA56]">
                <div className="flex justify-center text-[18px]">
                  <img
                    src={twitter}
                    className="item-center h-[20px] w-[20px]"
                    alt="React logo"
                  />
                </div>
              </button>
              <button className="bg-[#0088CC] hover:bg-seconda hover:scale-90 text-white font-bold h-[50px] w-[50px] rounded-full border border-white mr-3 duration-500 shadow-[3px_3px_#E9DA56]">
                <div className="flex justify-center item mr-1 text-[18px]">
                  <img
                    src={telegram}
                    className="item-center h-[20px] w-[20px]"
                    alt="React logo"
                  />
                </div>
              </button>
              <button className="bg-white hover:bg-seconda hover:scale-90 text-white font-bold h-[50px] w-[50px] rounded-full border border-white mr-3 duration-500 shadow-[3px_3px_#E9DA56]">
                <div className="flex justify-center item mr-1 text-[18px]">
                  <img
                    src={medium}
                    className="item-center h-[20px] w-[20px]"
                    alt="React logo"
                  />
                </div>
              </button>
              <button className="bg-[#7289DA] hover:bg-seconda hover:scale-90 text-white font-bold h-[50px] w-[50px] rounded-full border border-white mr-3 duration-500 shadow-[3px_3px_#E9DA56]">
                <div className="flex justify-center item mr-1 text-[18px]">
                  <img
                    src={discord}
                    className="item-center ml-1 mt-1"
                    alt="React logo"
                  />
                </div>
              </button>
            </div>
          </div>
          <div className=" ml-[400px] mt-[30px]  w-[60%] h-[150px] inset-5 mr-[20px] flex justify-end items-center">
            <div className="flex flex-col">
              <div className="flex justify-center items-center bg-[#DD8157] text-white font-bold h-[90px] w-[600px] rounded-[10px] border border-white mr-3  shadow-[5px_5px_#67C790] ">
                <div className="flex">
                  <a target="_blank" href="https://www.gate.io/trade/ORBR_USDT">
                    <img
                      src={getio}
                      className=" w-[92px] h-[28px] aspect-square  item-center ml-1 mt-1 mr-3  hover:scale-90 duration-500"
                      alt="React logo"
                    />
                  </a>
                  <a
                    target="_blank"
                    href="https://skynet.certik.com/projects/orbler"
                  >
                    <img
                      src={cetrik}
                      className="w-[127px] h-[28px] aspect-square item-center ml-1 mt-1 mr-3 hover:scale-90 duration-500"
                      alt="React logo"
                    />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.huobi.com/en-us/trade/orbr_usdt?type=spot"
                  >
                    <img
                      src={huobi}
                      className=" w-[154px] h-[28px] aspect-square  item-center ml-1 mt-1 mr-3 hover:scale-90 duration-500"
                      alt="React logo"
                    />
                  </a>
                  <a target="_blank" href="https://www.slowmist.com/">
                    <img
                      src={wlowmist}
                      className="w-[134px] h-[28px] aspect-square item-center ml-1 mt-1 mr-3 hover:scale-90 duration-500"
                      alt="React logo"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Layouts1;
