import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <main>
      <Header />
      <div className="mx-auto bg-white pb-24 pt-12">
        <div className="prose prose-xl prose-slate mx-auto">
          {/* <div className="mx-auto flex w-full flex-col justify-center"> */}
          <h4 className=" pb-4 text-center font-semibold uppercase opacity-30">
            Your Next Web Design
          </h4>
          <h1 className="mx-auto max-w-xl pb-12 text-center text-7xl font-semibold tracking-tight text-oj-500">
            What is good web design?
          </h1>
          {/* </div> */}
          <div className="mx-auto w-[95%]">
            <h3 className="font-bold tracking-tight">
              Good design vs Bad design
            </h3>
            <p>
              If web design is a creative endeavour, then are &ldquo;good&rdquo;
              and &ldquo;bad&rdquo; design just a matter of personal taste? How
              can we objectively measure what makes a good website design?
            </p>

            <h3 className="font-bold tracking-tight">
              Good web design is not a matter of opinion
            </h3>

            <p>
              When many people think of web design, they think about the visual
              appearance of a website. This is only a small part of what web
              design is.
            </p>
            <h3 className="font-bold tracking-tight">
              The user experience of your website and the quality of the content
              are what matter most
            </h3>
            <p>
              While an attractive user interface (UI) is somewhat important, the
              user experience (UX) and the content are far more important. A
              designer that approaches web design as if it is an artisitic
              endeavour is not what you want for your business.
            </p>
            <h3 className="font-bold tracking-tight">
              The best websites in the world look simple
            </h3>
            <p>
              YouTube, Amazon, Facebook, Wikipedia, Google, Xero, Blogger, Chase
              &ndash; these are some of the most average looking but also the
              most successful websites in the world. These companies can afford
              the most expensive web designers money can buy &ndash; and they do
              hire them &ndash; and yet the websites the designers create are
              not filled with fancy 3D animations and special effects.
            </p>

            <h3 className="font-bold tracking-tight">
              Why do you visit a website?
            </h3>

            <p>
              When you go to a website, it&apos;s for a purpose. To watch a
              video, read a review, search for a product &ndash; you want to get
              in and get out, you want simple and intuitive buttons, you want
              everything to be fast and for things to be easy to locate.
            </p>

            <h3 className="font-bold tracking-tight">
              Nobody wants a website to waste their time
            </h3>

            <p>
              Obviously a website that is both visually appealing and easy to
              use is ideal. To do this you will need a designer that can predict
              which elements might slow down the website or cause confusion.{" "}
            </p>
            <p>
              A good web designer will predict what the user wants to do and
              make it easy for them, will deliver an attractive website that
              reflects positively on your business, and implement it all in a
              way which is fast and responsive.
            </p>

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

            <p></p>

            <p></p>
          </div>
        </div>
      </div>
      <div id="contact"></div>
      <Contact />
      <Footer />
    </main>
  );
}
