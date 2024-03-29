"use client";

export default function Services() {
  return (
    <div className="relative overflow-hidden bg-oj-500 py-72 text-slate-950">
      <div className="">
        <div>
          <h2 className="pb- text-center text-6xl font-extrabold">
            Our Services
          </h2>
          <div className="grid grid-flow-col grid-cols-2">
            <div className="relative">
              <img
                src="/img/coding-laptop.jpg"
                alt="Website Design"
                className="h-full"
                style={{
                  mask: "url(/img/honeycomb-1.svg) no-repeat center / contain",
                  WebkitMask:
                    "url(/img/honeycomb-1.svg) no-repeat center / contain",
                }}
              />
            </div>
            <div className="mx-auto flex w-full max-w-7xl flex-col justify-center gap-16 px-4">
              <div className="bg-opacity- rounded-3xl bg-white p-4 font-bold">
                <h3 className="p-4 text-xl">Website Design and Development</h3>
              </div>
              <div className="bg-opacity- rounded-3xl bg-white p-4 font-bold">
                <h3 className="p-4 text-xl">
                  Website Redesign and Optimisation
                </h3>
              </div>
              <div className="bg-opacity- rounded-3xl bg-white p-4 font-bold">
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
