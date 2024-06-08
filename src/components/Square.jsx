import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Square = ({ hw, t, name }) => {
  const squareRef = useRef(null);
  let duration = 1;
  useEffect(() => {
    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      delay: Math.random() * 3, // Adding a random delay to the start
    });

    // Scale animation on page load
    gsap.from(squareRef.current, {
      opacity: 0,
      duration: duration,
      ease: "bounce.in",
    });
    gsap.to(squareRef.current, {
      opacity: 1,
      duration: duration,
      ease: "bounce.in",
    });
    tl.to(squareRef.current, {
      scale: 1,
      duration: duration,
      ease: "power2.out",
    }).to(squareRef.current, {
      // x: `+=${5 + Math.random() * 5}`, // Translate by 10-20px on the x-axis
      y: `+=${10 + Math.random() * 5}`, // Translate by 20-40px on the y-axis
      duration: duration,
    });

    return () => {
      tl.kill(); // Kill the animation on unmount
    };
  }, []);

  return (
    <div
      ref={squareRef}
      className={`Square Square-${name}`}
      style={{
        width: `${hw}px`,
        height: `${hw}px`,
        transform: `translate(${t.x}, ${t.y})`,
      }}
    ></div>
  );
};

export default Square;
