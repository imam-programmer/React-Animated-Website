import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";
import Navbar from "../components/navigation/Navbar";

const Agence = () => {
  gsap.registerPlugin(ScrollTrigger);
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);
  const imageArray = [
    "./image/first-img.jpg",
    "./image/second.jpg",
    "./image/threed.jpg",
    "./image/four.jpg",
    "./image/five.jpg",
    "./image/six.jpg",
    "./image/seven.jpg",
    "./image/eight.jpg",
    "./image/first-img.jpg",
    "./image/second.jpg",
    "./image/threed.jpg",
    "./image/four.jpg",
    "./image/five.jpg",
    "./image/six.jpg",
    "./image/eight.jpg",
    "./image/seven.jpg",
 
  ];
  useGSAP(function () {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: "top 28%",
        end: "top -100%",
        pin: true,
        pinSpacing:true,
        pinReparent:true,
        pinType:"transform",
        scrub: 1,
        anticipatePin:1,
        invalidateOnRefresh:true,
        onUpdate: function (elem) {
          let imageIndex;
          if (elem.progress < 1) {
            imageIndex = Math.round(elem.progress * imageArray.length);
          } else {
            imageIndex = imageArray.length - 1;
          }
          imageRef.current.src = imageArray[imageIndex];
        },
      },
    });
  });

  return (
    <>
    <Navbar className="text-black"/>
    <div className="text-[#333]">
      <div className="section1">
        <div
          ref={imageDivRef}
          className="h-[60vw] smd:h-[40vw] lg:h-[20vw] lg:w-[15vw] rounded-3xl absolute md:top-50 bottom-55 md:bottom-0 left-[30vw] overflow-auto"
        >
          <img
            ref={imageRef}
            className="h-full w-full object-cover"
            src="https://images.pexels.com/photos/5083207/pexels-photo-5083207.jpeg"
            alt=""
          />
        </div>
        <div className="mt-[30vh] md:mt-[50vh] relative">
          <h1 className="text-[20vw]  uppercase leading-[17vw] text-center">
            Soixan7e <br /> douze
          </h1>
        </div>
        <div className="sm:pl-[40%] mt-10 sm:mt-20 relative">
          <p className="xl:text-5xl text-2xl lg:text-4xl md:text-3xl p">
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp;Notre curiosite nourrit notre creativite. On
            reste humbles et on dit non aux vivante. Elle a des valeurs, une
            personnalite, une histoire. Si on oublie ca, on peut faire de bons
            chiffres a court terme, mais on la tue a long terme. C'est pour ca
            qu'on s'engage a donner de la perspective, pour batir des marques
            influentes.
          </p>
        </div>
      </div>
      
      <div className="section2 h-[200px]"></div>
    </div>
    </>
  );
};

export default Agence;
