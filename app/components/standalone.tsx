"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export const StandAlone = () => {
  useGSAP(() => {
    ScrollTrigger.create({
      markers: true,
      start: "top 80%",
      end: "top 30%",
      trigger: ".box",
      toggleClass: "myStyle",
      onEnter: () => console.log("enter"),
      onLeave: () => console.log("leave"),
      onEnterBack: () => console.log("enterBack"),
      onLeaveBack: () => console.log("leaveBack"),
      onToggle: () => console.log("toggle"),
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
