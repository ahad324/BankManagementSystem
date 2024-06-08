import React, { useEffect } from "react";
import { gsap } from "gsap";

const IntroScreen = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".intro-screen",
      { y: "100%" },
      { y: "0%", duration: 1, ease: "expo.in" }
    )
      .add(() => typeWelcome(), "+=0.5")
      .to(
        ".intro-screen",
        { y: "-100%", duration: 1, ease: "expo.in" },
        "+=2.5"
      );

    function typeWelcome() {
      const text = "Welcome to Bank Management System";
      let index = 0;
      const typingSpeed = 50;
      const target = document.querySelector(".welcome-text");

      if (target) {
        const interval = setInterval(() => {
          if (index < text.length) {
            target.textContent += text[index];
            index++;
          } else {
            clearInterval(interval);
          }
        }, typingSpeed);
      }
    }
  }, []);

  return (
    <div className="intro-screen fixed inset-0 z-50 flex items-center justify-center">
      <h1 className="text-4xl font-bold text-white welcome-text"></h1>
    </div>
  );
};

export default IntroScreen;
