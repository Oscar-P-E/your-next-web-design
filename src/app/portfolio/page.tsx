import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Image from "next/image";

export default function PortfolioPage() {
  return (
    <main>
      <Header />
      <div className="w-full bg-white pb-24 pt-12 ">
        <div className="prose prose-xl prose-slate mx-auto w-[80%] max-w-full">
          {/* <div className="mx-auto flex w-full flex-col justify-center"> */}
          <h4 className="pb-2 text-center text-lg opacity-35">
            Your Next Web Design
          </h4>
          <h1 className="mx-auto max-w-xl pb-12 text-center text-7xl font-extrabold tracking-tight text-oj-500">
            See my work
          </h1>
          <div className="mx-auto w-[90%] lg:w-full">
            {/* New Life Baptist Church */}
            <div className="relative mb-10 flex flex-col items-start gap-x-10 lg:flex-row lg:pt-14">
              <div className="top-[calc(var(--header-height))] flex-1 lg:sticky lg:max-w-[33%] ">
                <h3 className="font-bold tracking-tight text-cyan-500">
                  New Life Baptist Church Website
                </h3>
                <p className="text-md pt-2 font-mono leading-normal tracking-tight opacity-50">
                  A modern and clean design with a local community feel.
                </p>
                <p className="text-md font-mono leading-normal tracking-tight opacity-50">
                  Latest YouTube videos are automatically displayed.
                </p>
                <a
                  href="https://nlbc-website.vercel.app"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-md font-mono leading-normal tracking-tight decoration-slate-400 opacity-50"
                >
                  nlbc-website.vercel.app
                </a>
              </div>
              <div className="min-w-[66%] flex-1">
                <Image
                  className="aspect-video rounded-3xl  object-cover object-left-top shadow-xl"
                  src="/img/portfolio/nlbc.jpg"
                  width={800}
                  height={400}
                  alt="New Life Baptist Church"
                />
                <Image
                  className="mt-28 aspect-video rounded-3xl object-cover object-top shadow-xl"
                  src="/img/portfolio/nlbc-phone.jpg"
                  width={800}
                  height={400}
                  alt="New Life Baptist Church Mobile"
                />
              </div>
            </div>

            {/* Glass Ninja */}
            <div className="relative mb-10 flex flex-col items-start gap-x-10 pt-14 lg:flex-row">
              <div className="top-[calc(var(--header-height))] flex-1 lg:sticky lg:max-w-[33%]">
                <h3 className="font-bold tracking-tight text-indigo-500">
                  Glass Ninja
                </h3>
                <p className="text-md pt-2 font-mono leading-normal tracking-tight opacity-50">
                  A clean design for a window cleaning business.
                </p>
                <p className="text-md font-mono leading-normal tracking-tight opacity-50">
                  Everything fits on a single page without scrolling, but
                  navigation is still intuitive.
                </p>
                <a
                  href="https://glassninja.com.au"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-md font-mono leading-normal tracking-tight decoration-slate-400 opacity-50"
                >
                  glassninja.com.au
                </a>
              </div>
              <div className="min-w-[66%] flex-1">
                <Image
                  className="aspect-video rounded-3xl  object-cover object-top shadow-xl"
                  src="/img/portfolio/gn2.jpg"
                  width={800}
                  height={400}
                  alt="Glass Ninja"
                />
                <Image
                  className="mt-28 aspect-video rounded-3xl object-cover object-center shadow-xl"
                  src="/img/portfolio/gn-phone.jpg"
                  width={800}
                  height={400}
                  alt="Glass Ninja Mobile"
                />
              </div>
            </div>

            {/* Optimize Electrical */}
            <div className="relative mb-10 flex flex-col items-start gap-x-10 pt-14 lg:flex-row">
              <div className="top-[calc(var(--header-height))] flex-1 lg:sticky lg:max-w-[33%]">
                <h3 className="font-bold tracking-tight text-oj-500">
                  Optimize Electrical
                </h3>
                <p className="text-md pt-2 font-mono leading-normal tracking-tight opacity-50">
                  A professional, modern,{" "}
                  <span className="whitespace-nowrap">user-friendly</span>{" "}
                  design.
                </p>
                <p className="text-md font-mono leading-normal tracking-tight opacity-50">
                  Easy to see who they are are, what they do, and how to contact
                  them.
                </p>
                <a
                  href="https://optimizeelectrical.com.au"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-md font-mono leading-normal tracking-tight decoration-slate-400 opacity-50"
                >
                  optimizeelectrical.com.au
                </a>
              </div>
              <div className="min-w-[66%] flex-1">
                <Image
                  className="aspect-video rounded-3xl  object-cover object-top shadow-xl"
                  src="/img/portfolio/oe2.jpg"
                  width={800}
                  height={400}
                  alt="Optimize Electrical"
                />
                <Image
                  className="mt-28 aspect-video rounded-3xl object-cover object-top shadow-xl"
                  src="/img/portfolio/oe-phone.jpg"
                  width={800}
                  height={400}
                  alt="Optimize Electrical Mobile"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="contact" />
      <Contact />
      <Footer />
    </main>
  );
}
