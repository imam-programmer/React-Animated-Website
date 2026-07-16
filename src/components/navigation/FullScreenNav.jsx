import React, { useContext, useRef } from "react";
import Stairs from "../common/Stairs";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import NavContext, { NavbarContext } from "../../context/NavContext";
import { Link } from "react-router-dom";

const FullScreenNav = () => {

  const fullNavLinksRef = useRef(null);
  const fullScreenRef = useRef(null);
  const [navOpen, setNavOpen] = useContext(NavbarContext);

  function gsapAnimation() {
    const tl = gsap.timeline();
    tl.to(".fullscreennav", {
      display: "block",
    });
    tl.to(".stairing", {

      height: "100%",
      stagger: {
        amount: -0.5,
      },
    });

    tl.from(".link", {
      opacity: 0,
      rotateX: 90,
      stagger: {
        amount: 0.2,
      },
    });
    tl.to(".navlink", {
      opacity: 1,
    });
  }
  function gsapAnimationReverse() {
    const tl = gsap.timeline()
    tl.to(".stairing", {
      height: 0,
      stagger: {
        amount: 0.5,
      },
    });

    tl.to(".navlink", {
      opacity: 0,
    });
    tl.to(".fullscreennav", {
      display: "none",

    });
  }
  useGSAP(
    function () {
      if (navOpen) {

        gsapAnimation();
      } else {
        gsapAnimationReverse()
      }
    },
    [navOpen],
  );
  return (
    <div
      ref={fullScreenRef}
      id="fullscreennav"
      className="fullscreennav hidden w-full absolute z-50 overflow-x-hidden"
    >
      <div className="h-screen w-full fixed hidden md:block">
        <div className="h-full w-full flex ">
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
        </div>
        
      </div>

      <div className="h-screen w-full fixed md:hidden">
        <div className="h-full w-full flex ">
          <div className="stairing h-full w-1/2 bg-black"></div>
          <div className="stairing h-full w-1/2 bg-black"></div>
          <div className="stairing h-full w-1/2 bg-black"></div>
       
        </div>
        
      </div>

      <div ref={fullNavLinksRef} className="relative">
        <div className="navlink flex w-full justify-between p-2 items-start">
          <div className="p-2">
            <h1 className="text-5xl text-white">K72</h1>
          </div>
          <div
            onClick={() => {
              setNavOpen(false);
            }}
            id="cros-parent"
            className="h-30 w-30 relative cursor-pointer "
          >
            <div className="md:h-40 h-20 absolute -rotate-45 md:-rotate-45 right-15 md:left-0 origin-top w-1 bg-white cros"></div>
            <div className="md:h-40 h-20 absolute rotate-45 right-0 md:rotate-45 origin-top w-1 bg-white cros"></div>
          </div>
        </div>
        <div className=" py-10">
         <Link to="/projects" onClick={()=>{
          setNavOpen(false)
         }}>
          <div className="cursor-pointer link origin-top relative  border-t-2 border-white">
            <h1 className="text-[10vw] md:text-[7vw] uppercase text-white font-medium text-center">
              Projects
            </h1>
            <div className=" moveLink absolute bg-[#d3fd50] text-black flex top-0">
              <div className="flex items-center moveX">
                <h2 className="whitespace-nowrap text-[10vw] md:text-[7vw] uppercase  font-medium text-center">
                  Pour Tout voir
                </h2>
                <img
                  className="object-cover shrink-0 md:w-62 h-10 w-30 lg:h-20 md:h-15 sm:h-18 sm:w-50 rounded-full"
                  src="./image/navimage2.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap text-[10vw] md:text-[7vw] uppercase font-medium text-center">
                  Pour Tout voir
                </h2>
                <img
                  className="object-cover shrink-0 md:w-62 h-10 w-30 lg:h-20 md:h-15 sm:h-18 sm:w-50 rounded-full"
                  src="./image/navImage1.jpg"
                  alt=""
                />
              </div>
              <div className="flex items-center moveX  ">
                <h2 className="whitespace-nowrap text-[10vw] md:text-[7vw] uppercase  font-medium text-center">
                  Pour Tout voir
                </h2>
                <img
                  className="object-cover shrink-0 md:w-62 h-10 w-30 lg:h-25 md:h-15 sm:h-18 sm:w-50 rounded-full"
                  src="./image/navimage2.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap text-[10vw] md:text-[7vw] uppercase font-medium text-center">
                  Pour Tout voir
                </h2>
                <img
                  className="object-cover shrink-0 md:w-62 h-10 w-30 lg:h-25 md:h-15 sm:h-18 sm:w-50 rounded-full"
                  src="./image/navImage1.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
         </Link>
<Link to="/agence" onClick={()=>{
  setNavOpen(false)
}}>
          <div className="cursor-pointer link origin-top relative border-t-2 border-b-2  border-white">
            <h1 className= "text-[10vw] md:text-[7vw] uppercase text-white font-medium text-center">
              agency
            </h1>
            <div className=" moveLink absolute bg-[#d3fd50] text-black flex top-0">
              <div className="flex items-center moveX">
                <h2 className="whitespace-nowrap text-[10vw] md:text-[7vw] uppercase  font-medium text-center">
                  Pour Tout voir
                </h2>
                <img
                  className="object-cover shrink-0 md:w-62 w-30 sm:w-50 md:h-20 h-10 sm:h-18 rounded-full"
                  src="./image/navimage3.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap text-[10vw] md:text-[7vw] uppercase font-medium text-center">
                  Pour Tout voir
                </h2>
                <img
                  className="object-cover shrink-0 md:w-62 w-30 sm:w-50 md:h-20 h-10 sm:h-18 rounded-full"
                  src="./image/navimage4.jpg"
                  alt=""
                />
              </div>
              <div className="flex items-center moveX  ">
                <h2 className="whitespace-nowrap text-[10vw] md:text-[7vw] uppercase  font-medium text-center">
                  Pour Tout voir
                </h2>
                <img
                  className="object-cover shrink-0 md:w-62 w-30 sm:w-50 md:h-25 h-10 sm:h-18 rounded-full"
                  src="./image/navimage3.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap text-[10vw] md:text-[7vw] uppercase font-medium text-center">
                  Pour Tout voir
                </h2>
                <img
                  className="object-cover shrink-0 md:w-62 w-30 sm:w-50 md:h-25 h-10 sm:h-18 rounded-full"
                  src="./image/navImage1.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
</Link>





        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;
