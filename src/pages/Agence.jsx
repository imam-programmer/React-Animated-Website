import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

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
     "./image/seven.jpg",
     "./image/eight.jpg",

   


  ];
  useGSAP(function () {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: "top 28%",
        end: "top -100%",
        pin: true,
        scrub: 2,
        onUpdate:function(elem){
       
          let imageIndex;
          if(elem.progress < 1){
            imageIndex=Math.round(elem.progress * imageArray.length)

          }else{
            imageIndex=imageArray.length-1
          }
        imageRef.current.src=imageArray[imageIndex]
        }
      },
    });
  });

  return (
    <div >
      <div className="section1">
        <div
          ref={imageDivRef}
          className="h-[20vw] w-[15vw] rounded-3xl absolute top-50 left-[30vw] overflow-auto"
        >
          <img
            ref={imageRef}
            className="h-full w-full object-cover"
            src="https://images.pexels.com/photos/5083207/pexels-photo-5083207.jpeg"
            alt=""
          />
        </div>
        <div className="mt-[50vh] relative">
          <h1 className="text-[20vw] uppercase leading-[17vw] text-center">
            Soixan7e <br /> douze
          </h1>
        </div>
        <div className="pl-[40%] mt-20">
          <p className="text-5xl ">
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
      <div className="section2 h-screen"></div>
    </div>
  );
};

export default Agence;
