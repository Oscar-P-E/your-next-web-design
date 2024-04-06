

// import { useEffect } from "react";

export default function About() {
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (
  //           entry.isIntersecting &&
  //           !entry.target.classList.contains("image-lights-on")
  //         ) {
  //           entry.target.classList.add("image-lights-on");
  //           //   } else {
  //           // entry.target.classList.remove("image-lights-on");
  //         }
  //       });
  //     },
  //     {
  //       threshold: 0.2, // when this much of the element is visible, trigger the animation
  //     },
  //   );

  //   const elements = document.querySelectorAll(".animate-on-intersection");
  //   elements.forEach((element) => {
  //     observer.observe(element);
  //   });

  //   return () => {
  //     elements.forEach((element) => {
  //       observer.unobserve(element);
  //     });
  //   };
  // }, []);

  return (
    <>
      <div className="relative -mb-48 pb-24 pt-24 tracking-tight">
        {/* card 1 */}
        <div className="sticky top-[calc(1rem+var(--header-height))] mx-auto mb-[calc(12rem+2px)] grid min-h-[calc(95svh-var(--header-height))] w-[95%] grid-flow-row grid-cols-2 rounded-[5rem] bg-white">
          <div className="flex flex-col justify-center rounded-l-[5rem] bg-cyan-500 px-[6vw] py-4 text-3xl font-semibold text-white lg:text-5xl lg:leading-[3.3rem]">
            <p className="pb-8">
              Nobody wants an{" "}
              <span className="font-bold text-cyan-950"> annoying </span>
              and
              <span className="font-bold text-cyan-950"> confusing </span>
              website,
            </p>
            <p className="font- ">
              but this is often what you get when you hire a web designer.
            </p>
          </div>

          <div className="relative flex flex-col justify-center rounded-r-[5rem] bg-cyan-800 bg-opacity-10 px-[6vw] py-24 text-4xl font-bold text-slate-900 lg:text-5xl">
            <div
              className="absolute left-1/2 top-1/2 aspect-[3/2] w-11/12 -translate-x-1/2 -translate-y-1/2 -rotate-0 justify-center rounded-[5rem] bg-slate-700 bg-cover bg-center bg-no-repeat align-middle bg-blend-luminosity"
              style={{
                backgroundImage: "url(/img/loading-still.jpg)",
              }}
            ></div>
          </div>
        </div>

        {/* card 2 */}
        <div className="sticky top-[calc(1rem+var(--header-height)-1px)] mx-auto mb-[calc(12rem+1px)] grid min-h-[calc(95svh-var(--header-height)+2px)] w-[95%] rotate-0 grid-flow-row grid-cols-2 gap-0 rounded-[5rem] bg-white">
          <div className="relative  flex flex-col justify-center rounded-l-[5rem] bg-oj-500 bg-opacity-10 px-[6vw] py-24 text-4xl font-bold text-slate-900  lg:text-5xl">
            <div
              className="absolute left-1/2 top-1/2 aspect-[3/2] w-11/12 -translate-x-1/2 -translate-y-1/2 rotate-0 justify-center rounded-[3rem] bg-cover bg-left bg-no-repeat align-middle "
              style={{
                backgroundImage: `url(/img/hal-gatewood-2.jpg)`,
              }}
            ></div>
          </div>
          <div className="lg:leading-[3.3rem flex flex-col justify-center rounded-r-[5rem] bg-oj-500 px-[6vw] py-4 text-3xl font-semibold text-white lg:text-5xl lg:leading-[3.3rem]">
            <p className="pb-8">
              Our websites are not only{" "}
              <span className="">
                <span className="magic-text font-extrabold text-transparent">
                  beautiful
                </span>{" "}
                but also
                <span className="font-extrabold text-slate-950">
                  {" "}
                  functional
                </span>
              </span>
            </p>
            <p className="font-extrabold text-slate-900">
              Your website should help you get clients and make sales.
            </p>
          </div>
        </div>

        {/* card 3 */}
        <div className="sticky top-[calc(1rem+var(--header-height)-3px)] mx-auto mb-[calc(12rem)] grid min-h-[calc(95svh-var(--header-height)+4px)] w-[95%] -rotate-0 grid-flow-row grid-cols-2 gap-0 rounded-[5rem] bg-white">
          <div className="bg-opacity-  flex flex-col justify-center rounded-l-[5rem] bg-emerald-500 px-[6vw] pb-4 pt-8 text-4xl font-semibold text-white lg:text-5xl lg:leading-[3.3rem]">
            <p className="pb-8">Take your business to the next level.</p>
            <p>
              Get a professional website{" "}
              <span className="font-extrabold text-emerald-950">
                with a purpose.
              </span>
            </p>
            <a
              href="#"
              className="mt-8 flex w-fit items-center gap-2 rounded-3xl bg-white px-5 py-2.5 text-lg font-semibold text-black opacity-90 transition-all hover:opacity-100"
            >
              Get Started <span aria-hidden="true">&rarr;</span>
            </a>
          </div>

          <div className="relative  rounded-r-[5rem] bg-emerald-500 bg-opacity-10 bg-cover bg-top text-4xl font-light text-white ">
            <div
              className="absolute left-1/2 top-1/2 aspect-[3/2] w-11/12 -translate-x-1/2 -translate-y-1/2 rotate-[0] justify-center rounded-[5rem] bg-cover bg-right bg-no-repeat align-middle"
              style={{
                backgroundImage: "url(/img/happy-customer.jpg)",
              }}
            ></div>
          </div>
        </div>

        {/* <div
        // id="startBlob"
        className="divider-1"
      >
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
      </div> */}
      </div>
      {/* <div className="-mt-12 h-12 bg-gradient-to-b from-transparent to-white opacity-50"></div> */}
    </>
  );
}
