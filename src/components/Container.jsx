import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import RetroGrid from "@/components/magicui/retro-grid";
import ShimmerButton from "@/components/magicui/shimmer-button";
import CursorFollower from "./CursorFollower";
import Square from "./Square";
import ThemeToggler from "./ThemeToggler";
import IntroScreen from "./IntroScreen";
import UsersRegisterCount from "./UsersRegisterCount";
import { IoLogoWindows } from "react-icons/io5";

const Container = () => {
  const [versionData, setVersionData] = useState(null);
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

  useEffect(() => {
    const fetchVersionData = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/ahad324/BankManagementSystemCpp/releases/latest"
        );
        const data = await response.json();
        setVersionData(data.assets[0].browser_download_url);
      } catch (error) {
        console.error("Error fetching version data:", error);
      }
    };

    fetchVersionData();
  }, []);
  const downloadApplication = () => {
    window.open(versionData, "_blank");
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
              <span className="GradientText">AUT </span>
              <i
                className="Hollow--Text text-transparent"
                style={{
                  WebkitTextStrokeWidth: "1.5px",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                Finance Bank
              </i>
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
              Hello everyone 👋! This is my university project, made with C++
              and JavaScript for the backend. Leveraging the power of Appwrite,
              a cutting-edge Backend-as-a-Service (BaaS)🚀. I hope you find it
              as exciting and innovative as I do 🤗. Enjoy exploring!
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              {versionData ? (
                <ShimmerButton
                  onClick={downloadApplication}
                  className="shadow-2xl"
                >
                  <span className="flex justify-between items-center whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                    <IoLogoWindows className="mr-2" />
                    Download for Windows
                  </span>
                </ShimmerButton>
              ) : (
                <span>Loading...</span>
              )}
            </div>
          </div>
          <Square hw={100} t={{ x: "700px", y: "-20%" }} name={"2"} />
        </div>
        <UsersRegisterCount />
      </div>
    </>
  );
};

export default Container;
