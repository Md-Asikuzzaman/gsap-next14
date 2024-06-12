"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export const ToggleActions = () => {
  useGSAP(() => {
    gsap.to(".box", {
      x: 500,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".box",
        scroller: "body",
        markers: true,

        toggleActions: "restart pause resume reverse",
        // onEnter, onLeave, onEnterBack, onLeaveBack
        // play, pause, resume, restart, reverse, reset, complete, none

        start: "top 50%",
        end: "top 30%",
      },
    });
  });
    

  return (
    <main>
      <section className="min-h-screen bg-blue-300"></section>
      <div className="box h-20 w-20 bg-red-500"></div>
      <section id="sec" className="min-h-screen bg-blue-300 "></section>
    </main>
  );
};
