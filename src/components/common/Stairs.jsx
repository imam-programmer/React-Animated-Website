import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { useLocation } from "react-router-dom";

const Stairs = () => {
    let stairParentRef = useRef(null);
      const hup=useLocation().pathname
  console.log(hup)
  useGSAP(function () {
    const tl = gsap.timeline();
       tl.to(stairParentRef.current,{
      display:"block",
      delay:-5
    })
    tl.from(".stair", {
      height: 0,
      stagger: {
        amount: -0.25,
      },
     
    });
    tl.to(".stair", {
      y: "100%",
      stagger: {
        amount: -0.25,
      },

    });
    tl.to(stairParentRef.current,{
      display:"none",
  
    })
        tl.to(".stair", {
      y: "0%",
      
    });
  },[hup]);
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
    </div>
  );
};

export default Stairs;
