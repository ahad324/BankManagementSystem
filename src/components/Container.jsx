import React, { useState } from "react";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import RetroGrid from "@/components/magicui/retro-grid";
import ShimmerButton from "@/components/magicui/shimmer-button";
import CursorFollower from "./CursorFollower";

const Container = () => {
  const [isHovering, setIsHovering] = useState(false);

  const downloadSource = () => {
    console.log("Download Source Code");
  };

  const downloadExecutable = () => {
    console.log("Download Executable File");
  };

  return (
    <div className="Container relative h-screen overflow-hidden items-center justify-center">
      <CursorFollower isHovering={isHovering} />
      <div className="absolute inset-0 z-0">
        <AnimatedGridPattern
          width="105"
          height="105"
          fill="#A07CFE"
          stroke="transparent"
          numSquares={30}
          maxOpacity={0.5}
          duration={3}
          repeatDelay={1}
          className="absolute inset-0 bg-boxes"
        />
      </div>
      <div className="relative z-1 w-full max-w-3xl p-8 border border-slate-400 rounded-xl shadow-lg bg-[var(--Theme--Color)] backdrop-filter backdrop-blur-md backdrop-saturate-180 h-[60dvh]">
        <div className="absolute inset-0 z-0">
          <RetroGrid className="absolute inset-0" />
        </div>
        <div className="flex flex-col justify-center items-center h-full w-full">
          <h1 className="text-5xl font-medium font-[800] tracking-tighter text-black dark:text-white">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent pointer-events-none">
              Bank Management{" "}
            </span>
            <i
              className="text-transparent"
              style={{
                WebkitTextStrokeWidth: "1px",
                WebkitTextStrokeColor: "white",
              }}
            >
              System
            </i>
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            impedit iure cum dolore ex magnam reprehenderit, placeat qui
            nesciunt dolores laborum sit quam rem repellat corporis vero.
            Obcaecati, temporibus vitae.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <ShimmerButton onClick={downloadSource} className="shadow-2xl">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                Download Source Code
              </span>
            </ShimmerButton>

            <ShimmerButton onClick={downloadExecutable} className="shadow-2xl">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                Download .exe File
              </span>
            </ShimmerButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
