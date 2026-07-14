import React, { useEffect, useRef } from "react";

const Navbar = () => {
    const navGreenRef = useRef(null)
   
    
  return (
    <div className="flex fixed  top-0 z-4 w-full justify-between">
      <div className="p-2">
        <h1 className="text-5xl text-white">K72</h1>
      </div>


      <div 
      onMouseEnter={()=>{
        navGreenRef.current.style.height="100%"
      }} 
      onMouseLeave={()=>{
        navGreenRef.current.style.height="0"
      }}
      className="h-10 w-[17vw] relative bg-black cursor-pointer">
            <div ref={navGreenRef} className="h-0  w-full bg-[#d3fd50] absolute top-0 transition-all nav-black">
        <div className="h-0.5 w-35 bg-white mt-4 ml-auto mr-2 nav-line"></div>
      <div className="h-0.5 w-25 bg-white mt-2 ml-auto mr-2 nav-line"></div>
          
            </div>
        <div className="relative "></div>
      </div>
    </div>
  );
};

export default Navbar;
