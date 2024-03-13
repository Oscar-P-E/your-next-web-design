"use client";

import { useRef, useEffect } from "react";

export default function Hero() {
  const leftRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent | TouchEvent) => {
      const left = leftRef.current;
      if (left) {
        // fallback value of 0 for clientX just in case
        const clientX = "touches" in e ? e.touches[0]?.clientX ?? 0 : e.clientX;
        left.style.width = `${(clientX / window.innerWidth) * 100}%`;
      }
    };

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("touchmove", handleMove);

    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("touchmove", handleMove);
    };
  }, []);

  return (
    <div className="h-screen w-full">
      <div
        className="absolute z-10 grid h-screen w-[80%] place-items-center overflow-hidden bg-dark md:w-[69.2%]"
        ref={leftRef}
      >
        <h2 className="mx-[10vw] w-[80vw] text-[12vw] font-bold text-white md:mx-[27vw] md:w-[46vw] md:text-[7vw]">
          Your{" "}
          <span className="font-cursive text-[1.8em] font-normal leading-none text-oj">
            next
          </span>
          <br />
          Web Design
        </h2>
      </div>
      <div className="absolute right-0 grid h-screen place-items-center overflow-hidden bg-oj">
        {/* non-mobile devices will have a scrollbar, so we need to translate right a bit  */}
        <h2 className="mx-[10vw] w-[80vw] text-[12vw] font-bold text-dark md:mx-[27vw] md:w-[46vw] md:text-[7vw] lg:translate-x-[14px]">
          Your{" "}
          <span className="font-cursive text-[1.8em] font-normal leading-none text-white">
            best
          </span>
          <br />
          Web Design
        </h2>
      </div>
    </div>
  );
}
