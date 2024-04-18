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
      <div className="relative -mb-48 pb-24 pt-24 tracking-tight md:pt-48">
        {/* card 1 */}
        <div className="top-[calc(1rem+var(--header-height))] mx-auto mb-12 grid min-h-[calc(95svh-var(--header-height))] w-[95%] grid-flow-row rounded-[5rem] bg-white md:sticky md:mb-[calc(12rem+2px)] md:grid-cols-2">
          <div className="flex flex-col justify-center rounded-tl-[5rem] rounded-tr-[5rem] bg-cyan-500 px-12 py-16 text-3xl font-semibold text-white md:rounded-bl-[5rem] md:rounded-tr-none md:px-[6vw] md:py-4 lg:text-5xl lg:leading-[3.3rem]">
            <p className="pb-6 md:pb-8">
              Nobody wants an{" "}
              <span className="font-bold text-cyan-950"> annoying </span>
              and
              <span className="font-bold text-cyan-950"> confusing </span>
              website,
            </p>
            <p className="">
              but this is often what you get when you hire a web designer.
            </p>
          </div>

          <div className="relative flex flex-col justify-center rounded-bl-[5rem] rounded-br-[5rem] bg-cyan-800 bg-opacity-10 px-[6vw] py-12 text-3xl font-bold text-slate-900 md:rounded-bl-none md:rounded-tr-[5rem] md:py-24 lg:text-5xl">
            <div
              className="left-1/2 top-1/2 mx-auto aspect-square w-11/12 -rotate-0 justify-center rounded-full bg-slate-700 bg-cover bg-center bg-no-repeat align-middle bg-blend-luminosity md:absolute md:aspect-[3/2] md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-[3rem]"
              style={{
                backgroundImage: "url(/img/loading-still.jpg)",
              }}
            ></div>
          </div>
        </div>

        {/* card 2 */}
        <div className="top-[calc(1rem+var(--header-height)-1px)] mx-auto mb-12 grid min-h-[calc(95svh-var(--header-height)+2px)] w-[95%] rotate-0 grid-flow-row gap-0 rounded-[5rem] bg-white md:sticky md:mb-[calc(12rem+1px)] md:grid-cols-2">
          <div
            className="relative flex flex-col justify-center rounded-tl-[5rem] rounded-tr-[5rem] bg-oj-500 bg-opacity-10 px-[6vw] py-12 text-3xl font-bold text-slate-900 md:rounded-bl-[5rem] md:rounded-tr-none
md:py-24 lg:text-5xl"
          >
            <div
              className="left-1/2 top-1/2 aspect-square w-11/12 rotate-0 justify-center rounded-full bg-cover bg-left bg-no-repeat align-middle md:absolute md:aspect-[3/2] md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-[3rem] "
              style={{
                backgroundImage: `url(/img/hal-gatewood-2.jpg)`,
              }}
            ></div>
          </div>
          <div
            className="lg:leading-[3.3rem flex flex-col justify-center rounded-bl-[5rem] rounded-br-[5rem] bg-oj-500 px-12 py-16 text-3xl font-semibold text-white md:rounded-bl-none md:rounded-tr-[5rem] md:px-[6vw] md:py-4
lg:text-5xl lg:leading-[3.3rem]"
          >
            <p className="pb-6 md:pb-8">
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
        <div className="top-[calc(1rem+var(--header-height)-3px)] mx-auto mb-[calc(12rem)] grid min-h-[calc(95svh-var(--header-height)+4px)] w-[95%] -rotate-0 grid-flow-row gap-0 rounded-[5rem] bg-white md:sticky md:grid-cols-2">
          <div
            className="flex flex-col justify-center rounded-tl-[5rem] rounded-tr-[5rem] bg-emerald-500 px-12 py-16 pb-10 text-3xl font-semibold text-white md:rounded-bl-[5rem] md:rounded-tr-none md:px-[6vw] md:pb-4 md:pt-8
lg:text-5xl lg:leading-[3.3rem]"
          >
            <p className="pb-4 md:pb-8">
              Take your business to the next level.
            </p>
            <p className="pb-8 md:pb-12">
              Get a professional website{" "}
              <span className="font-extrabold text-emerald-950">
                with a purpose.
              </span>
            </p>
            <a
              href="#"
              className="flex w-fit items-center gap-2 rounded-3xl bg-white px-5 py-2.5 text-lg font-semibold text-black transition-all"
            >
              Get Started <span aria-hidden="true">&rarr;</span>
            </a>
          </div>

          <div
            className="relative rounded-bl-[5rem] rounded-br-[5rem] bg-emerald-500 bg-opacity-10 bg-cover bg-top py-12 text-3xl font-light
text-white md:rounded-bl-none md:rounded-tr-[5rem]"
          >
            <div
              className="left-1/2 top-1/2 mx-auto aspect-square w-11/12 rotate-[0] justify-center rounded-full bg-cover bg-right bg-no-repeat align-middle md:absolute md:aspect-[3/2] md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-[3rem]"
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
