import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { useLocation } from "react-router-dom";

const Stairs = ({children}) => {
  const currentPath = useLocation().pathname;
  console.log(useLocation().pathname)
  let stairParentRef = useRef(null);
  const pageRef = useRef(null)

  useGSAP(
    function () {
      const tl = gsap.timeline();
      tl.to(stairParentRef.current, {
        display: "block",
      });
      tl.from(".stair", {
        height: 0,
        stagger: {
          amount: -0.3,
        },
      });
      tl.to(".stair", {
        y: "100%",
        stagger: {
          amount: -0.3,
        },
      });
      tl.to(stairParentRef.current, {
        display: "none",
      });
      tl.to(".stair", {
        y: "0%",
      });
      gsap.from(pageRef.current,{
        opacity:0,
        delay:1,
      })
    },
    [currentPath],
  );
  return (
    <div>

      <div ref={stairParentRef} className="h-screen w-full  fixed z-20 top-0">
        <div className="h-full w-full flex ">
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
        </div>
      </div>
      <div ref={pageRef}>

      {children}
      </div>
    </div>
  );
};

export default Stairs;
