import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <main>
      <Header />
      <div className="w-full bg-white pb-12 pt-12">
        <div className="prose prose-xl prose-slate mx-auto">
          {/* <div className="mx-auto flex w-full flex-col justify-center"> */}
          <h4 className="pb-2 text-center text-lg opacity-35">
            Your Next Web Design
          </h4>
          <h1 className="mx-auto mb-0 max-w-xl text-center text-7xl font-extrabold tracking-tight text-oj-500">
            Get in contact
          </h1>
          <h4 className="pb- mx-auto mt-20 w-5/6 text-center  opacity-80">
            Got questions? Feel free to contact me.
          </h4>

          {/* </div> */}
          <div className="mx-auto w-[95%] lg:w-full">
            <p className="mx-auto px-4 text-center font-medium opacity-70">
              I work with people from all over the world. If you are in
              Queensland between Brisbane and the Sunshine Coast, we can also
              meet <span className="whitespace-nowrap">in person.</span>
            </p>
          </div>
        </div>
      </div>
      <div id="contact" />
      <Contact customStep={2} />
      <Footer />
    </main>
  );
}
