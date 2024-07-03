import React, { useEffect } from "react";
import { gsap } from "gsap";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import RetroGrid from "@/components/magicui/retro-grid";
import ShimmerButton from "@/components/magicui/shimmer-button";
import CursorFollower from "./CursorFollower";
import Square from "./Square";
import ThemeToggler from "./ThemeToggler";
import IntroScreen from "./IntroScreen";
import UsersRegisterCount from "./UsersRegisterCount";
import InstallationInstructions from "./InstallationInstructions";

const Container = () => {
  let duration = 2,
    delay = 5;

  useEffect(() => {
    gsap.from(".Container", {
      duration: duration,
      opacity: 0,
      y: 100,
      ease: "power3.out",
      delay: delay,
    });
    gsap.to(".Container", {
      duration: duration,
      opacity: 1,
      y: 0,
      ease: "power3.out",
      stagger: 0.5,
      delay: delay,
    });
    gsap.from(".card", {
      duration: duration,
      opacity: 0,
      y: 100,
      ease: "power3.out",
      delay: delay,
    });
    gsap.to(".card", {
      duration: duration,
      opacity: 1,
      y: 0,
      ease: "power3.out",
      stagger: 0.5,
      delay: delay,
    });
    gsap.from(".text--card", {
      duration: duration,
      opacity: 0,
      y: 100,
      ease: "power3.out",
      delay: delay,
    });
    gsap.to(".text--card", {
      duration: duration,
      opacity: 1,
      y: 0,
      ease: "power3.out",
      stagger: 0.5,
      delay: delay,
    });
  }, []);

  const downloadApplication = () => {
    const link = document.createElement("a");
    link.href = "/AUTBank.exe";
    link.download = "AUTBank.exe";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const downloadNodeJS = () => {
    const link = document.createElement("a");
    link.href = "https://nodejs.org/dist/v20.15.0/node-v20.15.0-x64.msi";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <IntroScreen />
      <div className="Container relative h-screen overflow-hidden flex items-center justify-center">
        <ThemeToggler />
        <CursorFollower />
        <div className="absolute inset-0 z-0">
          <AnimatedGridPattern
            width="105"
            height="105"
            numSquares={30}
            maxOpacity={0.5}
            duration={2}
            repeatDelay={1}
            className="absolute inset-0"
          />
        </div>
        <div className="card relative z-1 w-full max-w-3xl p-8 rounded-xl bg-[var(--Dark--Theme--Color)] backdrop-filter backdrop-blur-md backdrop-saturate-180 h-[370px]">
          <Square hw={100} t={{ x: "-100%", y: "-80%" }} name={"1"} />
          <div className="absolute inset-0 z-0">
            <RetroGrid className="absolute inset-0" />
          </div>
          <div className="text--card flex flex-col justify-center items-center h-full w-full">
            <h1 className="text-5xl font-[900] tracking-tighter text-black dark:text-white relative">
              <span className="GradientText">Bank Management </span>
              <i
                className="Hollow--Text text-transparent"
                style={{
                  WebkitTextStrokeWidth: "1.5px",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                System
              </i>
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
              Hello everyone 👋! This is my university project, made with C++
              and JavaScript for the backend. Leveraging the power of Appwrite,
              a cutting-edge Backend-as-a-Service (BaaS)🚀. I hope you find it
              as exciting and innovative as I do 🤗. Enjoy exploring!
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <ShimmerButton
                onClick={downloadApplication}
                className="shadow-2xl"
              >
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  Download Application
                </span>
              </ShimmerButton>
              <ShimmerButton onClick={downloadNodeJS} className="shadow-2xl">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  Download Node JS
                </span>
              </ShimmerButton>
            </div>
            <InstallationInstructions />
          </div>
          <Square hw={100} t={{ x: "700px", y: "-20%" }} name={"2"} />
        </div>
        <UsersRegisterCount />
      </div>
    </>
  );
};

export default Container;
