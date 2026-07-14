import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="mt-12 md:mt-0">
      <div className="md:text-[10vw] text-[14vw] justify-center uppercase md:leading-[9vw] leading-[11vw] text-white text-center flex items-center"> qui<div className="h-[8vw] rounded-full overflow-auto"><Video/></div>genere </div>
      <div className="md:text-[10vw] text-[14vw] uppercase md:leading-[9vw] leading-[11vw] text-white text-center">L'etincelle</div>
      <div className="md:text-[10vw] text-[14vw] uppercase md:leading-[9vw] leading-[11vw] text-white text-center">la creativite</div>
    </div>
  );
}

export default HomeHeroText;
