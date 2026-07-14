import React, { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { NavbarContext } from "../../context/NavContext";

const Navbar = () => {
    const navGreenRef = useRef(null)
    const [navOpen,setNevOpen] = useContext(NavbarContext)
   
    
  return (
    <div className="flex fixed  top-0 z-4 w-full justify-between">
    <Link to="/">
      <div className="md:p-2 pl-2 " >
        <h1 className="text-3xl md:text-5xl text-white">K72</h1>
      </div>
      </Link>


      <div onClick={()=>{

        setNevOpen(true)
      }
        }
      onMouseEnter={()=>{
        navGreenRef.current.style.height="100%"
      }} 
      onMouseLeave={()=>{
        navGreenRef.current.style.height="0"
      }}
      className="md:h-10 h-8 w-[15vw] relative bg-black cursor-pointer">
            <div ref={navGreenRef} className="h-0  w-full bg-[#d3fd50] absolute top-0 transition-all nav-black">
        <div className="h-0.5 w-[10vw] bg-white md:mt-4 mt-3 ml-auto mr-2 nav-line"></div>
      <div className="h-0.5 w-[5vw] bg-white md:mt-2 mt-0.5 ml-auto mr-2 nav-line"></div>
          
            </div>
        <div className="relative "></div>
      </div>
    </div>
  );
};

export default Navbar;
