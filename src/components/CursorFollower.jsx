import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";

const CursorFollower = () => {
  const followerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      gsap.to(followerRef.current, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.3,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={followerRef}
      className="cursor"
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: "30px",
        height: "30px",
        background: "transparent",
        borderRadius: "50%",
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        zIndex: 1000,
      }}
    />
  );
};

export default CursorFollower;
