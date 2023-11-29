"use client";
// https://github.com/splinetool/react-spline#trigger-spline-events-from-outside
import { useRef } from "react";
import Spline from "@splinetool/react-spline";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

// important - otherwise no markers visible
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const spline = useRef();

  function onLoad(splineApp) {
    // save the app in a ref for later use
    spline.current = splineApp;
  }

  const app = useRef<HTMLDivElement | null>(null);
  //   const circle = useRef<HTMLDivElement | null>(null);

  // TODO: robust to use this instead of useLayoutEffect?
  // useGSAP will take care of removal, provided by @gsap/react (replacement for useLayoutEffect/useEffect)
  // https://gsap.com/resources/React/#gsapcontext-is-your-best-friend
  useGSAP(
    () => {
      // we can use scoped selectors here instead of multiple refs
      // https://gsap.com/docs/v3/Plugins/ScrollTrigger/

      // You don't need to put ScrollTriggers directly into animations (though that's probably the most common use case). Use the callbacks for anything...
      ScrollTrigger.create({
        markers: true,
        trigger: ".hero-box",
        start: "center center",

        // https://gsap.com/docs/v3/Plugins/ScrollTrigger/#config-object

        onEnter: (self) => {
          console.log("on enter");

          // trigger spline animation from outside
          // https://github.com/splinetool/react-spline#trigger-spline-events-from-outside
          spline.current.emitEvent("mouseHover", "Sphere");
        },

        onToggle: (self) => {
          // console.log("toggled, isActive:", self.isActive);
        },
        onUpdate: (self) => {
          /*console.log(
            "progress:",
            self.progress.toFixed(3),
            "direction:",
            self.direction,
            "velocity",
            self.getVelocity(),
          );*/
        },
      });

      // refs are still usable as well
      // gsap.to(circle.current, { rotation: 360 });
    },
    [],
    app,
  ); // <-- scope for selector text (optional)

  return (
    <div>
      <Spline
        scene="https://prod.spline.design/5erdviJULMjzZIys/scene.splinecode"
        onLoad={onLoad}
        // TODO: does not work?!
        style={{ position: "fixed", "z-index": "-1", left: "0", top: "0" }}
      />

      <div ref={app} className="app mt-[800px] mb-[800px]">
        <div className="hero-box">
          <h1 className="text-2xl">Hello, World</h1>
          <p>(triggers "mouseHover" event)</p>
        </div>
      </div>
    </div>
  );
}
