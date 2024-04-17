import { ArrowUpRightIcon } from "@heroicons/react/20/solid";

export default function Services() {
  return (
    <div className="mx-auto rounded-[3rem] bg-white bg-opacity-50 py-8 font-medium text-slate-950 md:py-48">
      <div className="mx-auto w-[95vw] max-w-7xl px-[2vw]">
        <h2 className="pb-12 text-center text-7xl font-semibold  tracking-tight text-slate-800 md:pb-24 md:text-8xl">
          Our Services
        </h2>
        <div className="flex flex-col justify-center gap-x-[2vw] gap-y-4 lg:flex-row">
          {/* blue card */}
          <div className="flex flex-col rounded-3xl transition-all duration-500 hover:scale-[1.03] hover:shadow-xl lg:w-1/3">
            <div className="rounded-t-3xl bg-cyan-400 px-12 py-8 text-5xl font-semibold tracking-tight text-slate-950 md:text-6xl lg:px-[3vw] xl:px-12">
              Website <span className="font- text-white">Upgrade</span>
            </div>
            <div className="flex grow flex-col rounded-b-3xl bg-cyan-500 px-12 py-8 text-lg lg:px-[3vw] xl:px-12">
              <p className="pb-4 text-white">
                Perhaps a basic website with your phone number on it did the job
                when you first started, but now you need something that can do
                more for you.
              </p>
              <p className="pb-4">
                Your website design accounts for about 75% of the evaluation of
                your credibility.
                <span className="inline-flex align-top">
                  <a
                    href="https://credibility.stanford.edu/guidelines/index.html"
                    className="p-0.5 text-xs font-bold opacity-50"
                  >
                    (source)
                  </a>
                </span>
              </p>
              <p className="pb-8">
                Most of that evaluation is based on things such as the user
                experience (UX) and perception of value.
              </p>
              {/* <p className="pb-8">
                Invest in a website that looks up-to-date, works properly on all
                devices, and prioritises converting your visitors.
              </p> */}
              <a
                href="/contact"
                className="mb-2 mt-auto flex items-center gap-2 rounded-3xl bg-black bg-opacity-10 px-4 py-2.5 text-lg font-semibold text-white opacity-90 transition-all hover:bg-white hover:text-black"
              >
                <ArrowUpRightIcon className="h-7 w-7" />
                Get Upgraded
              </a>
            </div>
          </div>

          {/* orange card */}
          <div className="flex flex-col rounded-3xl transition-all duration-500 hover:scale-[1.03] hover:shadow-xl lg:w-1/3">
            <div className="rounded-t-3xl bg-oj-400 px-12 py-8 text-5xl font-semibold tracking-tight text-slate-950 md:text-6xl lg:px-[3vw] xl:px-12">
              Website <span className="text-white">Creation</span>
            </div>
            <div className="flex grow flex-col rounded-b-3xl bg-oj-500 px-12 py-8 text-lg lg:px-[3vw] xl:px-12">
              <p className="pb-4 text-white">
                I will create a beautifully designed website from scratch that
                prioritises user experience (UX) and converting visitors into
                customers.
              </p>
              <p className="pb-4"></p>
              <p className="pb-4">
                Because over 50% of your visitors are on mobile,
                <span className="inline-flex align-top">
                  <a
                    href="https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet/worldwide"
                    className="p-0.5 text-xs font-bold opacity-50"
                  >
                    (source)
                  </a>
                </span>{" "}
                a lot of attention will be given to the mobile experience.
              </p>
              <p className="pb-8">
                Your website will be search engine optimised (SEO) and
                conversion optimised using data-supported practices.
              </p>
              <a
                href="/contact"
                className="mb-2 mt-auto flex items-center gap-2 rounded-3xl bg-black bg-opacity-10 px-4 py-2.5 text-lg font-semibold text-white opacity-90 transition-all hover:bg-white hover:text-black"
              >
                <ArrowUpRightIcon className="h-7 w-7" />
                Get Started
              </a>
            </div>
          </div>

          {/* green card */}
          <div className="flex flex-col rounded-3xl transition-all duration-500 hover:scale-[1.03] hover:shadow-xl lg:w-1/3">
            <div className="rounded-t-3xl bg-emerald-400 px-12 py-8 text-5xl font-semibold tracking-tight text-slate-950 md:text-6xl lg:px-[3vw] xl:px-12">
              <span className="whitespace-nowrap">Authentic</span>{" "}
              <span className="text-white">Content</span>
            </div>
            <div className="flex grow flex-col rounded-b-3xl bg-emerald-500 px-12 py-8 text-lg lg:px-[3vw] xl:px-12">
              <p className="pb-4 text-white">
                I will work with you to create quality articles, blog posts,
                photography, and videos that will set you miles apart from your
                competition.
              </p>
              <p className="pb-4">
                Everybody else is using stock photos and generic blog posts, and
                then they pay for SEO experts to try to trick the search engines
                into ranking them 1% higher.
              </p>

              <p className="pb-8">
                Content is king. Quality content blows all other SEO, marketing,
                and branding strategies out of the water, but few are willing to
                think outside the box.
              </p>
              <a
                href="/contact"
                className="mb-2 mt-auto flex items-center gap-2 rounded-3xl bg-black bg-opacity-10 px-4 py-2.5 text-lg font-semibold text-white opacity-90 transition-all hover:bg-white hover:text-black"
              >
                <ArrowUpRightIcon className="h-7 w-7" />
                Get Creative
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
