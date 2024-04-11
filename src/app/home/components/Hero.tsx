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
    <>
      <div className="relative h-[calc(85svh-var(--header-height))] w-full overflow-hidden tracking-tighter">
        <div
          className="absolute z-10 grid h-[calc(85svh-var(--header-height))] w-[80%] place-items-center overflow-hidden bg-slate-800 md:w-[69.2%]"
          ref={leftRef}
        >
          <h2 className="mx-[10vw] w-[80vw] overflow-hidden pb-20 text-[12vw] font-extrabold text-white md:mx-[27vw] md:w-[46vw] md:text-[7vw]">
            Your{" "}
            <span className="font-cursive text-[1.73em] font-normal leading-none text-oj-500">
              next
            </span>
            <br />
            Web Design
          </h2>
        </div>
        <div className="absolute right-0 grid h-[calc(85svh-var(--header-height))] place-items-center overflow-hidden bg-oj-500">
          {/* non-mobile devices will have a scrollbar, so we need to translate right a bit  */}
          <h2 className="mx-[10vw] w-[80vw] overflow-hidden pb-20 text-[12vw] font-extrabold text-slate-950 md:mx-[27vw] md:w-[46vw] md:text-[7vw] lg:translate-x-[14px]">
            Your{" "}
            <span className="font-cursive text-[1.73em] font-normal leading-none text-white">
              best
            </span>
            <br />
            Web Design
          </h2>
        </div>
        <a
          href="#"
          className="absolute bottom-20 left-1/2 z-10 mx-auto -translate-x-1/2 overflow-hidden rounded-full border-2 border-white bg-oj-500 px-5 py-2.5 text-xl font-medium capitalize tracking-normal text-white shadow-lg  transition-all duration-300 ease-in-out hover:bg-oj-400 hover:shadow-xl"
        >
          Get me a quote
        </a>
      </div>
      {/* drop shadow */}
      <div className="-mb-2 h-2 bg-gradient-to-b from-slate-800 to-transparent opacity-40"></div>
    </>
  );
}
