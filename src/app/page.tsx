import Hero from "./components/Hero";
import Header from "./components/Header";
import About from "./components/About";

export default function App() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <div className="h-[200%]">
        <h1>Footer</h1>
        <p>
          Dolor sit amet, consectetur adipiscing elit. Nunc eget lorem
          consectetur, lacinia nunc nec, tincidunt mi. Donec ac justo
          consectetur, lacinia nunc nec, tincidunt mi. Donec ac justo.
        </p>

        <p>
          Dolor sit amet, consectetur adipiscing elit. Nunc eget lorem
          consectetur, lacinia nunc nec, tincidunt mi. Donec ac justo
          consectetur, lacinia nunc nec, tincidunt mi. Donec ac justo.
        </p>

        <p>
          Dolor sit amet, consectetur adipiscing elit. Nunc eget lorem
          consectetur, lacinia nunc nec, tincidunt mi. Donec ac justo
          consectetur, lacinia nunc nec, tincidunt mi. Donec ac justo. Dolor sit
          amet, consectetur adipiscing elit. Nunc eget lorem consectetur,
          lacinia nunc nec, tincidunt mi. Donec ac justo consectetur, lacinia
          nunc nec, tincidunt mi. Donec ac justo.
        </p>
      </div>
    </main>
  );
}
