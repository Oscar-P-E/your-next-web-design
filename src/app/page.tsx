import Hero from "./home/components/Hero";
import Header from "./components/Header";
import About from "./home/components/About";
import Services from "./home/components/Services";
import GlowingBlob from "./components/GlowingBlob";

export default function App() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Services />
      <GlowingBlob />
    </main>
  );
}
