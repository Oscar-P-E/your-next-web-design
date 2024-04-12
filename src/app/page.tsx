import Hero from "./home/components/Hero";
import Header from "./components/Header";
import About from "./home/components/About";
import Services from "./home/components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import GlowingBlob from "./components/GlowingBlob";

export default function App() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Services />
      {/* <Testimonials /> */}
      {/* <FAQ /> */}
      <div id="contact" />
      <Contact />
      <Footer />
    </main>
  );
}
