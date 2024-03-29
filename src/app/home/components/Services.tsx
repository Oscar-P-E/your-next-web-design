import { ArrowUpRightIcon } from "@heroicons/react/20/solid";

export default function Services() {
  return (
    <div className="bg-opacity- mx-auto rounded-[3rem] bg-white bg-opacity-50 py-48 font-medium text-black">
      <div className="mx-auto w-[95vw] max-w-7xl px-[2vw]">
        <h2 className="pb-24 text-center text-8xl font-semibold tracking-tight text-slate-800">
          Our Services
        </h2>
        <div className="flex flex-col justify-center gap-x-[2vw] gap-y-4 lg:flex-row">
          {/* blue card */}
          <div className="h-fit rounded-3xl transition-all duration-500 hover:scale-[1.03] hover:shadow-xl lg:w-1/3">
            <div className="rounded-t-3xl bg-cyan-400 px-12 py-8 text-6xl font-semibold tracking-tight text-slate-950 lg:px-[3vw] xl:px-12">
              Website <span className="font- text-white">Redesign</span>
            </div>
            <div className="flex flex-col rounded-b-3xl bg-cyan-500 px-12 py-8 text-xl lg:px-[3vw] xl:px-12">
              <p className="pb-4">
                Your website design accounts for about 75% of the evaluation of
                your company&apos;s credibility.
                <div className="inline-flex align-top">
                  <a href="#" className="p-0.5 text-xs font-bold opacity-50">
                    (source)
                  </a>
                </div>
              </p>
              <p className="pb-8">
                Level up your business with a website that keeps you looking
                up-to-date, on all screen sizes, with the latest search engine
                optimisation and conversion optimisation techniques.
              </p>
              <a
                href="#"
                className="flex items-center gap-2 rounded-3xl bg-black bg-opacity-10 px-4 py-2.5 text-lg font-semibold text-white opacity-90 transition-all hover:bg-white hover:text-black"
              >
                <ArrowUpRightIcon className="h-7 w-7" />
                Get Better
              </a>
            </div>
          </div>

          {/* orange card */}
          <div className="h-fit rounded-3xl transition-all duration-500 hover:scale-[1.03] hover:shadow-xl lg:w-1/3">
            <div className="rounded-t-3xl bg-oj-400 px-12 py-8 text-6xl font-semibold tracking-tight text-slate-950 lg:px-[3vw] xl:px-12">
              Website <span className="text-white">Creation</span>
            </div>
            <div className="flex flex-col rounded-b-3xl bg-oj-500 px-12 py-8 text-xl lg:px-[3vw] xl:px-12">
              <p className="pb-4 text-white">
                I will create for you a beautifully designed website from
                scratch that prioritises user exerience (UX) and conversion.
              </p>
              <p className="pb-4"></p>
              <p className="pb-4">
                Because over 50% of your visitors are on mobile,
                <div className="inline-flex align-top">
                  <a
                    href="https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet/worldwide"
                    className="p-0.5 text-xs font-bold opacity-50"
                  >
                    (source)
                  </a>
                </div>{" "}
                a lot of attention will be given to the mobile experience.
              </p>
              <p className="pb-8">
                Your website will be search engine optimised (SEO) and
                conversion optimised using the latest data-supported practices.
              </p>
              <a
                href="#"
                className="flex items-center gap-2 rounded-3xl bg-black bg-opacity-10 px-4 py-2.5 text-lg font-semibold text-white opacity-90 transition-all hover:bg-white hover:text-black"
              >
                <ArrowUpRightIcon className="h-7 w-7" />
                Get Started
              </a>
            </div>
          </div>

          {/* green card */}
          <div className="h-fit rounded-3xl transition-all duration-500 hover:scale-[1.03] hover:shadow-xl lg:w-1/3">
            <div className="rounded-t-3xl bg-emerald-400 px-12 py-8 text-6xl font-semibold tracking-tight text-slate-950 lg:px-[3vw] xl:px-12">
              <span className="whitespace-nowrap">
                Logos <span className="font-bold text-emerald-600">&</span>
              </span>{" "}
              <span className="font- text-white">Branding</span>
            </div>
            <div className="flex flex-col rounded-b-3xl bg-emerald-500 px-12 py-8 text-xl lg:px-[3vw] xl:px-12">
              <p className="pb-4">
                I will work with you to create logos, colour schemes,
                typography, and other branding elements that set the tone for
                your business.
              </p>
              <p className="pb-8">
                Your branding will be designed to be consistent across all
                platforms, from your website to your social media profiles.
              </p>
              <a
                href="#"
                className="flex items-center gap-2 rounded-3xl bg-black bg-opacity-10 px-4 py-2.5 text-lg font-semibold text-white opacity-90 transition-all hover:bg-white hover:text-black"
              >
                <ArrowUpRightIcon className="h-7 w-7" />
                Get Recognised
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
