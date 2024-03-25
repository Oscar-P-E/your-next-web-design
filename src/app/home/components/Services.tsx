"use client";

export default function Services() {
  return (
    <div className="relative overflow-hidden bg-slate-950 py-72 text-white">
      <div className="">
        <div>
          <h2 className="pb-24 text-center text-6xl font-bold">Our Services</h2>
          <div className="grid grid-flow-col grid-cols-2">
            <div className="relative">
              <svg
                width="0"
                height="0"
                viewBox="0 0 700 700"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <mask id="complexMask" maskUnits="userSpaceOnUse">
                    <path
                      d="M537.827 9.245A11.5 11.5 0 0 1 549.104 0h63.366c7.257 0 12.7 6.64 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 586.87 151h-28.275a15.999 15.999 0 0 0-15.689 12.862l-59.4 297c-1.98 9.901 5.592 19.138 15.689 19.138h17.275l .127.001c.85.009 1.701.074 2.549.009 11.329-.874 21.411-7.529 24.88-25.981.002-.012.016-.016.023-.007.008.009.022.005.024-.006l24.754-123.771A11.5 11.5 0 0 1 580.104 321h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 617.87 472H559c-22.866 0-28.984 7.98-31.989 25.931-.004.026-.037.035-.052.014-.015-.02-.048-.013-.053.012l-24.759 123.798A11.5 11.5 0 0 1 490.87 631h-29.132a14.953 14.953 0 0 0-14.664 12.021c-4.3 21.502-23.18 36.979-45.107 36.979H83.502c-29.028 0-50.8-26.557-45.107-55.021l102.4-512C145.096 91.477 163.975 76 185.902 76h318.465c10.136 0 21.179-5.35 23.167-15.288l10.293-51.467Zm-512 160A11.5 11.5 0 0 1 37.104 160h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 74.87 311H11.504c-7.257 0-12.7-6.639-11.277-13.755l25.6-128Z"
                      fill="#FFFFFF"
                    />
                  </mask>
                </defs>
                {/* This rectangle applies the mask to the entire SVG area */}
                <rect
                  width="100%"
                  height="100%"
                  mask="url(#complexMask)"
                  fill="black"
                />
              </svg>

              <img
                src="/img/coding-laptop.jpg"
                alt="Website Design"
                className=""
                style={{
                  mask: "url(#complexMask)",
                  WebkitMask: "url(#complexMask)",
                }}
              />
            </div>
            <div className="mx-auto flex w-[95vw] max-w-7xl flex-col justify-center gap-4 px-4">
              <div className="grow rounded-3xl bg-slate-800 bg-opacity-80 p-4">
                <h3 className="p-4 text-xl">Website Design and Development</h3>
              </div>
              <div className="grow rounded-3xl bg-slate-800 bg-opacity-40 p-4">
                <h3 className="p-4 text-xl">
                  Website Redesign and Optimisation
                </h3>
              </div>
              <div className="grow rounded-3xl bg-slate-800 bg-opacity-60 p-4">
                <h3 className="p-4 text-xl">Logos and Branding</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="endBlob"></div>
    </div>
  );
}
