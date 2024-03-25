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
      className="relative bg-white bg-fixed pb-[calc(12rem+500px)] pt-24"
    >
      {/* card 1 */}
      <div className="card-2 -translate-x- sticky top-[6rem] mx-auto mb-[6rem] grid aspect-[8/3] w-[95vw] max-w-7xl -rotate-0 grid-flow-row grid-cols-4 gap-0">
        <div className="relative col-span-2 flex flex-col justify-center rounded-l-3xl bg-cyan-500 px-[6vw] py-24 text-4xl font-bold text-slate-900 shadow-xl lg:text-6xl">
          <div
            className="absolute left-1/2 top-1/2 aspect-[4/3] h-[110%] -translate-x-1/2 -translate-y-1/2 -rotate-0 justify-center rounded-[3rem] border-8 border-white bg-slate-700 bg-cover bg-center bg-no-repeat align-middle bg-blend-luminosity shadow-xl"
            style={{
              backgroundImage: "url(/img/loading-annoying-slow.gif)",
            }}
          ></div>
        </div>
        <div className="font- col-span-2 flex flex-col justify-center rounded-r-3xl bg-slate-800 px-[6vw] py-4 text-3xl text-slate-100 shadow-xl lg:text-5xl lg:leading-[3.3rem]">
          <p className="pb-8">
            Are you tired of{" "}
            <span className="text-4xl font-bold text-red-500 lg:text-6xl">
              {" "}
              annoying{" "}
            </span>
            and
            <span className="text-4xl font-bold text-red-500 lg:text-6xl">
              {" "}
              confusing{" "}
            </span>
            web sites that take forever{" "}
            <span className="whitespace-nowrap">to load?</span>
          </p>
        </div>
      </div>

      {/* card 2 */}
      <div className="card-3 translate-x- sticky top-[9rem] mx-auto mb-[3rem] grid aspect-[8/3] w-[95vw] max-w-7xl rotate-0 grid-flow-row grid-cols-4 gap-0">
        <div className="col-span-2 flex flex-col justify-center rounded-l-3xl bg-oj-500 px-[6vw] py-4 text-4xl font-bold text-slate-100 shadow-xl lg:text-6xl">
          <p className="">
            Our websites are{" "}
            <span className="">
              <span className="font-bold text-slate-900">beautiful </span>
              but also
              <span className="font-bold text-slate-900"> functional.</span>
            </span>
          </p>
        </div>
        <div className="relative col-span-2 flex flex-col justify-center rounded-r-3xl bg-white px-[6vw] py-24 text-4xl font-bold text-slate-900 shadow-xl lg:text-6xl">
          <div
            className="absolute left-1/2 top-1/2 aspect-[4/3] h-[110%] -translate-x-1/2 -translate-y-1/2 rotate-0 justify-center rounded-[3rem] border-8 border-white bg-cover bg-left bg-no-repeat align-middle shadow-xl"
            style={{
              backgroundImage: `url(/img/hal-gatewood-2.jpg)`,
            }}
          ></div>
          {/* <div className="animate-on-intersection absolute left-1/2 top-1/2 aspect-[4/3] h-[100%] -translate-x-1/2 -translate-y-1/2 rotate-0 justify-center rounded-3xl border-white bg-gradient-to-tr from-black from-20% to-slate-900 to-[120%] mix-blend-multiply"></div> */}
        </div>
      </div>

      {/* card 3 */}
      <div className="card-1 sticky top-[12rem] mx-auto mb-[0rem] grid aspect-[8/3] w-[95vw] max-w-7xl -rotate-0 grid-flow-row grid-cols-4 gap-0">
        <h1 className="col-span-2 flex flex-col justify-center rounded-l-3xl bg-white px-[6vw] pb-4 pt-8 text-4xl font-bold text-slate-900 shadow-xl lg:text-6xl">
          Get a professional website <br />
          <span className="font-black text-oj-500 lg:mt-0.5">
            with a purpose
          </span>
          <a
            href="#"
            className="bg-gradient-animation-g50 mt-3 inline-flex w-fit rounded-full bg-green-500 px-4 py-1.5 text-base font-semibold text-white shadow-lg transition-all hover:scale-105 hover:bg-green-400 lg:mt-8 lg:py-2 lg:text-xl"
          >
            Get Started
          </a>
        </h1>

        <div className="relative col-span-2 rounded-r-3xl bg-white bg-cover bg-top text-4xl font-light text-white shadow-xl">
          <div
            className="absolute left-1/2 top-1/2 aspect-[4/3] h-[110%] -translate-x-1/2 -translate-y-1/2 rotate-[0] justify-center rounded-[5rem] border-8 border-white bg-neutral-950 bg-cover bg-right bg-no-repeat align-middle bg-blend-screen shadow-xl"
            style={{
              backgroundImage: "url(/img/happy-customer.jpg)",
            }}
          ></div>
          but
        </div>
      </div>

      <div id="startBlob" className="divider-1">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 0L0 0 598.97 114.72 1200 0z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
}
