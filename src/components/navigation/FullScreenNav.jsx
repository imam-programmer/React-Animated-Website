import React, { useContext, useRef } from "react";
import Stairs from "../common/Stairs";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import NavContext, { NavbarContext } from "../../context/NavContext";

const FullScreenNav = () => {
  const fullNavLinksRef = useRef(null);
  const fullScreenRef = useRef(null);
  const [navOpen, setNavOpen] = useContext(NavbarContext);
  console.log(navOpen);
  useGSAP(
    function () {
      const tl = gsap.timeline();

      tl.from(".stairing", {
  
        height: 0,
        stagger: {
          amount: -0.3,
        },
      });
      tl.from(fullNavLinksRef.current, {
     
        opacity: 0,
      });
      tl.from(".link", {
       
        opacity: 0,
        rotateX: 90,
        stagger: {
          amount: 0.3,
        },
      });
      tl.pause();
      if (navOpen) {
        fullScreenRef.current.style.display = "block";
        tl.play();
      } else {
        fullScreenRef.current.style.display = "none";
        tl.reverse();
      }
    },
    [navOpen],
  );
  return (
    <div
      ref={fullScreenRef}
      id="fullscreennav"
      className=" w-full absolute  overflow-x-hidden"
    >
      <div className="h-screen w-full fixed">
        <div className="h-full w-full flex ">
          <div className="stairing h-full w-1/5 bg-red-600"></div>
          <div className="stairing h-full w-1/5 bg-red-600"></div>
          <div className="stairing h-full w-1/5 bg-red-600"></div>
          <div className="stairing h-full w-1/5 bg-red-600"></div>
          <div className="stairing h-full w-1/5 bg-red-600"></div>
          <div className="stairing h-full w-1/5 bg-red-600"></div>
        </div>
      </div>

      <div ref={fullNavLinksRef} className="relative">
        <div className="flex w-full justify-between p-2 items-start">
          <div className="p-2">
            <h1 className="text-5xl text-white">K72</h1>
          </div>
          <div id="cros-parent" className="h-30 w-30 relative cursor-pointer ">
            <div className="h-40 absolute -rotate-45 origin-top w-1 bg-white cros"></div>
            <div className="h-40 absolute right-0 rotate-45 origin-top w-1 bg-white cros"></div>
          </div>
        </div>
        <div className=" py-10">
          <div className="cursor-pointer link origin-top relative  border-t-2 border-white">
            <h1 className="text-[7vw] uppercase text-white font-medium text-center">
              Projects
            </h1>
            <div className=" moveLink absolute bg-[#d3fd50] text-black flex top-0">
              <div className="flex items-center moveX">
                <h2 className="whitespace-nowrap text-[7vw] uppercase  font-medium text-center">
                  Pour Tout voir
                </h2>
                <img
                  className="object-cover shrink-0 w-62 h-20 rounded-full"
                  src="./image/navimage2.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap text-[7vw] uppercase font-medium text-center">
                  Pour Tout voir
                </h2>
                <img
                  className="object-cover shrink-0 w-62 h-20 rounded-full"
                  src="./image/navImage1.jpg"
                  alt=""
                />
              </div>
              <div className="flex items-center moveX  ">
                <h2 className="whitespace-nowrap text-[7vw] uppercase  font-medium text-center">
                  Pour Tout voir
                </h2>
                <img
                  className="object-cover shrink-0 w-62 h-25 rounded-full"
                  src="./image/navimage2.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap text-[7vw] uppercase font-medium text-center">
                  Pour Tout voir
                </h2>
                <img
                  className="object-cover shrink-0 w-62 h-25 rounded-full"
                  src="./image/navImage1.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="cursor-pointer link origin-top relative border-t-2 border-white">
            <h1 className="text-[7vw] uppercase text-white font-medium text-center">
              agency
            </h1>
            <div className=" moveLink absolute bg-[#d3fd50] text-black flex top-0">
              <div className="flex items-center moveX">
                <h2 className="whitespace-nowrap text-[7vw] uppercase  font-medium text-center">
                  Pour Tout voir
                </h2>
                <img
                  className="object-cover shrink-0 w-62 h-20 rounded-full"
                  src="./image/navimage2.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap text-[7vw] uppercase font-medium text-center">
                  Pour Tout voir
                </h2>
                <img
                  className="object-cover shrink-0 w-62 h-20 rounded-full"
                  src="./image/navImage1.jpg"
                  alt=""
                />
              </div>
              <div className="flex items-center moveX  ">
                <h2 className="whitespace-nowrap text-[7vw] uppercase  font-medium text-center">
                  Pour Tout voir
                </h2>
                <img
                  className="object-cover shrink-0 w-62 h-25 rounded-full"
                  src="./image/navimage2.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap text-[7vw] uppercase font-medium text-center">
                  Pour Tout voir
                </h2>
                <img
                  className="object-cover shrink-0 w-62 h-25 rounded-full"
                  src="./image/navImage1.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="cursor-pointer link origin-top relative border-t-2 border-white">
            <h1 className="text-[7vw] uppercase text-white font-medium text-center">
              contact
            </h1>
            <div className=" moveLink absolute bg-[#d3fd50] text-black flex top-0">
              <div className="flex items-center moveX">
                <h2 className="whitespace-nowrap text-[7vw] uppercase  font-medium text-center">
                  Pour Tout voir
                </h2>
                <img
                  className="object-cover shrink-0 w-62 h-20 rounded-full"
                  src="./image/navimage2.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap text-[7vw] uppercase font-medium text-center">
                  Pour Tout voir
                </h2>
                <img
                  className="object-cover shrink-0 w-62 h-20 rounded-full"
                  src="./image/navImage1.jpg"
                  alt=""
                />
              </div>
              <div className="flex items-center moveX  ">
                <h2 className="whitespace-nowrap text-[7vw] uppercase  font-medium text-center">
                  Pour Tout voir
                </h2>
                <img
                  className="object-cover shrink-0 w-62 h-25 rounded-full"
                  src="./image/navimage2.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap text-[7vw] uppercase font-medium text-center">
                  Pour Tout voir
                </h2>
                <img
                  className="object-cover shrink-0 w-62 h-25 rounded-full"
                  src="./image/navImage1.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className=" cursor-pointer link origin-top relative border-t-2 border-b-2 border-white">
            <h1 className="text-[7vw] uppercase text-white font-medium text-center">
              blog
            </h1>
            <div className=" moveLink absolute bg-[#d3fd50] text-black flex top-0">
              <div className="flex items-center moveX">
                <h2 className="whitespace-nowrap text-[7vw] uppercase  font-medium text-center">
                  Pour Tout voir
                </h2>
                <img
                  className="object-cover shrink-0 w-62 h-20 rounded-full"
                  src="./image/navimage2.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap text-[7vw] uppercase font-medium text-center">
                  Pour Tout voir
                </h2>
                <img
                  className="object-cover shrink-0 w-62 h-20 rounded-full"
                  src="./image/navImage1.jpg"
                  alt=""
                />
              </div>
              <div className="flex items-center moveX  ">
                <h2 className="whitespace-nowrap text-[7vw] uppercase  font-medium text-center">
                  Pour Tout voir
                </h2>
                <img
                  className="object-cover shrink-0 w-62 h-25 rounded-full"
                  src="./image/navimage2.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap text-[7vw] uppercase font-medium text-center">
                  Pour Tout voir
                </h2>
                <img
                  className="object-cover shrink-0 w-62 h-25 rounded-full"
                  src="./image/navImage1.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;
