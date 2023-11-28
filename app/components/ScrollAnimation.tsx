"use client";
import { useState, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

// important - otherwise no markers visible
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// https://gsap.com/resources/React/
// TODO: use this https://gsap.com/resources/React/#gsapcontext-is-your-best-friend with scroll trigger?

function ScrollAnimation() {
  const app = useRef<HTMLDivElement | null>(null);
  const circle = useRef<HTMLDivElement | null>(null);

  // TODO: robust to use this instead of useLayoutEffect?
  // useGSAP will take care of removal, provided by @gsap/react (replacement for useLayoutEffect/useEffect)
  // https://gsap.com/resources/React/#gsapcontext-is-your-best-friend
  useGSAP(
    () => {
      // we can use scoped selectors here instead of multiple refs
      // https://gsap.com/docs/v3/Plugins/ScrollTrigger/
      gsap.to(".box", {
        scrollTrigger: {
          trigger: ".box",
          // start: "top top", // when the top of the trigger hits the top of the viewport
          markers: true,
        },
        x: 500,
      });

      // refs are still usable as well
      // gsap.to(circle.current, { rotation: 360 });
    },
    [],
    app,
  ); // <-- scope for selector text (optional)

  return (
    <div ref={app} className="app mt-[200px]">
      <div className="box">Hello</div>
      <div className="circle" ref={circle}>
        Ref
      </div>
    </div>
  );
}

export default ScrollAnimation;
