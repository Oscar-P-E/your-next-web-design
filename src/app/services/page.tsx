import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function ServicesPage() {
  return (
    <main>
      <Header />
      <div className="w-full bg-white pb-24 pt-12">
        <div className="prose prose-xl prose-slate mx-auto">
          {/* <div className="mx-auto flex w-full flex-col justify-center"> */}
          <h4 className="pb-4 text-center font-semibold uppercase opacity-30">
            Your Next Web Design
          </h4>
          <h1 className="mx-auto max-w-xl pb-12 text-center text-7xl font-semibold tracking-tight text-oj-500">
            Some of the things I do
          </h1>
          {/* </div> */}
          <div className="prose-p:my-0 prose-h3:my-0 mx-auto grid w-[90%] grid-cols-2 items-center gap-x-[5%] gap-y-12 lg:w-full">
            {/* <div className="col-span-2 border-y"></div> */}

            <h3 className="bg-gradient-to-r from-black bg-clip-text font-bold tracking-tight text-indigo-500 text-transparen">
              Website Design & Development
            </h3>
            <p className="">
              I can design and build you a website that looks good and works
              well. I can also help you with your website&apos;s content and
              search engine optimisation (SEO).
            </p>

            <div className="col-span-2 border-y"></div>

            <h3
              className="bg-gradient-to-r from-black bg-clip-text
font-bold tracking-tight text-oj-500 text-transparen"
            >
              Website Redesign & Optimisation
            </h3>

            <p>
              If you already have a website, I can help you make it better. I
              can improve the design, make it faster, and help you get more
              visitors.
            </p>

            <div className="col-span-2 border-y"></div>

            <h3
              className="bg-gradient-to-r from-black bg-clip-text
font-bold tracking-tight text-transparen text-yellow-500"
            >
              Responsive Design
            </h3>
            <p>
              Over half of all web traffic is on mobile devices. I will make
              sure your website looks good on any device.
            </p>

            <div className="col-span-2 border-y"></div>

            <h3
              className="bg-gradient-to-r from-black bg-clip-text
font-bold tracking-tight text-emerald-500 text-transparen"
            >
              Content Creation
            </h3>
            <p>
              I can help you create content for your website. This includes
              writing, images, and video.
            </p>

            <div className="col-span-2 border-y"></div>

            <h3
              className="bg-gradient-to-r from-black bg-clip-text
font-bold tracking-tight text-cyan-500 text-transparen"
            >
              Conversion Rate & Search Engine Optimisation
            </h3>

            <p>
              I can help you get more visitors to your website and help you turn
              those visitors into customers.
            </p>

            <div className="col-span-2 border-y"></div>
          </div>
          <div className="">
            <h2 className="font-bold tracking-tight text-oj-500">
              How I Design Websites
            </h2>

            <p>
              I start by figuring out what your visitors really need. Then, I
              build your website around those needs. This way, we keep
              everything straightforward but still creative.
            </p>

            <p>
              I study what makes a website good, what design choices data and
              research has shown lead to better outcomes, and I use that
              knowledge to make you a website.
            </p>

            <p>
              My websites don&apos;t just look nice; they work nicely too.
              They&apos;re fast and friendly for everyone who visits.
            </p>

            <h3 className="font-bold tracking-tight">Want a Better Website?</h3>

            <p>
              Let&apos;s have a chat and see if I can help you. I&apos;ll give
              you a free quote and some advice on how to make your website
              better.
            </p>

            <div className="mx-auto mt-12 flex w-full justify-center">
              <a
                href="#contact"
                className="rounded bg-oj-500 px-8 py-4 text-xl font-semibold text-white no-underline hover:bg-oj-700 focus:outline-none focus:ring-4 focus:ring-oj-300"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="contact"></div>
      <Contact />
      <Footer />
    </main>
  );
}
