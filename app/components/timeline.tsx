"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export const Timelime = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      markers: true,
      scroller: "body",
      trigger: ".box",
      start: "top 70%",
      end: "top 30%",
      scrub: true,
      toggleClass: "myStyle",
    },
  });

  useGSAP(() => {
    tl.to(".box", {
      x: 200,
      y: 0,
      duration: 1,
    })
      .to(".box", {
        x: 200,
        y: 200,
        duration: 1,
      })
      .to(".box", {
        x: 0,
        y: 200,
        duration: 1,
      })
      .to(".box", {
        x: 0,
        y: 0,
        duration: 1,
      });
  });

  return (
    <main>
      <section className="min-h-screen bg-purple-300"></section>
      <div className="box h-20 w-20 bg-red-500"></div>
      <section id="sec" className="min-h-screen bg-blue-300 "></section>
    </main>
  );
};
