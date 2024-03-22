"use client";

import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (
            entry.isIntersecting &&
            !entry.target.classList.contains("image-lights-on")
          ) {
            entry.target.classList.add("image-lights-on");
            //   } else {
            // entry.target.classList.remove("image-lights-on");
          }
        });
      },
      {
        threshold: 0.2, // when this much of the element is visible, trigger the animation
      },
    );

    const elements = document.querySelectorAll(".animate-on-intersection");
    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56 28' width='56' height='28'%3E%3Cpath fill='%23111827' fill-opacity='0.17' d='M56 26v2h-7.75c2.3-1.27 4.94-2 7.75-2zm-26 2a2 2 0 1 0-4 0h-4.09A25.98 25.98 0 0 0 0 16v-2c.67 0 1.34.02 2 .07V14a2 2 0 0 0-2-2v-2a4 4 0 0 1 3.98 3.6 28.09 28.09 0 0 1 2.8-3.86A8 8 0 0 0 0 6V4a9.99 9.99 0 0 1 8.17 4.23c.94-.95 1.96-1.83 3.03-2.63A13.98 13.98 0 0 0 0 0h7.75c2 1.1 3.73 2.63 5.1 4.45 1.12-.72 2.3-1.37 3.53-1.93A20.1 20.1 0 0 0 14.28 0h2.7c.45.56.88 1.14 1.29 1.74 1.3-.48 2.63-.87 4-1.15-.11-.2-.23-.4-.36-.59H26v.07a28.4 28.4 0 0 1 4 0V0h4.09l-.37.59c1.38.28 2.72.67 4.01 1.15.4-.6.84-1.18 1.3-1.74h2.69a20.1 20.1 0 0 0-2.1 2.52c1.23.56 2.41 1.2 3.54 1.93A16.08 16.08 0 0 1 48.25 0H56c-4.58 0-8.65 2.2-11.2 5.6 1.07.8 2.09 1.68 3.03 2.63A9.99 9.99 0 0 1 56 4v2a8 8 0 0 0-6.77 3.74c1.03 1.2 1.97 2.5 2.79 3.86A4 4 0 0 1 56 10v2a2 2 0 0 0-2 2.07 28.4 28.4 0 0 1 2-.07v2c-9.2 0-17.3 4.78-21.91 12H30zM7.75 28H0v-2c2.81 0 5.46.73 7.75 2zM56 20v2c-5.6 0-10.65 2.3-14.28 6h-2.7c4.04-4.89 10.15-8 16.98-8zm-39.03 8h-2.69C10.65 24.3 5.6 22 0 22v-2c6.83 0 12.94 3.11 16.97 8zm15.01-.4a28.09 28.09 0 0 1 2.8-3.86 8 8 0 0 0-13.55 0c1.03 1.2 1.97 2.5 2.79 3.86a4 4 0 0 1 7.96 0zm14.29-11.86c1.3-.48 2.63-.87 4-1.15a25.99 25.99 0 0 0-44.55 0c1.38.28 2.72.67 4.01 1.15a21.98 21.98 0 0 1 36.54 0zm-5.43 2.71c1.13-.72 2.3-1.37 3.54-1.93a19.98 19.98 0 0 0-32.76 0c1.23.56 2.41 1.2 3.54 1.93a15.98 15.98 0 0 1 25.68 0zm-4.67 3.78c.94-.95 1.96-1.83 3.03-2.63a13.98 13.98 0 0 0-22.4 0c1.07.8 2.09 1.68 3.03 2.63a9.99 9.99 0 0 1 16.34 0z'%3E%3C/path%3E%3C/svg%3E")`,
      }}
      className="bg-white bg-fixed pb-24 pt-24"
    >
      {/* card 1 */}
      <div className="card-1 sticky top-[3rem] mx-auto mb-[6rem] grid aspect-[8/3] w-[95vw] max-w-7xl -rotate-0 grid-flow-row grid-cols-4 gap-0">
        <h1 className="col-span-2 flex flex-col justify-center rounded-l-3xl bg-white px-[6vw] py-24 text-4xl font-bold text-slate-900 shadow-xl lg:text-6xl">
          Get a professional website <br />
          <span className="text-oj-500 font-black lg:mt-0.5">
            with a purpose
          </span>
        </h1>
        <div className="relative col-span-2 rounded-r-3xl bg-white bg-cover bg-top text-4xl font-light text-white shadow-xl">
          <div
            className="absolute left-1/2 top-1/2 aspect-[4/3] h-full -translate-x-1/2 -translate-y-1/2 rotate-[0] justify-center rounded-3xl border-8 border-slate-950 bg-slate-950 bg-cover bg-left-top bg-no-repeat align-middle bg-blend-screen shadow-xl"
            style={{
              backgroundImage: "url(/img/hal-gatewood-2.jpg)",
            }}
          ></div>
        </div>
      </div>

      {/* card 2 */}
      <div className="card-2 sticky top-[6rem] mx-auto mb-[3rem] grid aspect-[8/3] w-[95vw] max-w-7xl -translate-x-4 -rotate-2 grid-flow-row grid-cols-4 gap-0">
        <div className="relative col-span-2 flex flex-col justify-center rounded-l-3xl bg-cyan-500 px-[6vw] py-24 text-4xl font-bold text-slate-900 shadow-xl lg:text-6xl">
          <div
            className="absolute left-1/2 top-1/2 aspect-[4/3] h-[85%] -translate-x-1/2 -translate-y-1/2 -rotate-2 justify-center rounded-3xl border-8 border-slate-950 bg-slate-950 bg-cover bg-center bg-no-repeat align-middle bg-blend-screen shadow-xl"
            style={{
              backgroundImage: "url(/img/loading-annoying-slow.gif)",
            }}
          ></div>
        </div>
        <div className="col-span-2 flex flex-col justify-center rounded-r-3xl bg-slate-800 px-[6vw] py-24 text-5xl font-light text-slate-100 shadow-xl">
          <p className="pb-8">
            We do not create
            <span className="font-bold text-red-600"> flashy </span>and
            <span className="font-bold text-red-600"> annoying </span>
            web <span className="italic">experiences</span> that take forever to
            load.
          </p>
        </div>
      </div>

      {/* card 3 */}
      <div className="card-3 sticky top-[9rem] mx-auto mb-[0rem] grid aspect-[8/3] w-[95vw] max-w-7xl translate-x-2 rotate-1 grid-flow-row grid-cols-4 gap-0">
        <div className="bg-oj-500 col-span-2 flex flex-col justify-center rounded-l-3xl px-[6vw] py-24 text-4xl font-bold text-slate-100 shadow-xl lg:text-6xl">
          <p className="">
            Our websites are{" "}
            <span className="">
              <span className="font-bold text-slate-900">beautiful </span>
              but also
              <span className="font-bold text-slate-900"> functional.</span>
            </span>
          </p>
        </div>
        <div className="relative col-span-2 flex flex-col justify-center rounded-r-3xl bg-slate-950 px-[6vw] py-24 text-4xl font-bold text-slate-900 shadow-xl lg:text-6xl">
          <div
            className="absolute left-1/2 top-1/2 aspect-[4/3] h-[100%] -translate-x-1/2 -translate-y-1/2 rotate-0 justify-center rounded-3xl border-white bg-cover bg-left bg-no-repeat align-middle shadow-xl"
            style={{
              backgroundImage: `url(/img/austin-chan-ukzHlkoz1IE-unsplash.jpg)`,
            }}
          ></div>
          <div className="animate-on-intersection absolute left-1/2 top-1/2 aspect-[4/3] h-[100%] -translate-x-1/2 -translate-y-1/2 rotate-0 justify-center rounded-3xl border-white bg-gradient-to-tr from-black from-20% to-slate-900 to-[120%] mix-blend-multiply"></div>
        </div>
      </div>
    </div>
  );
}
