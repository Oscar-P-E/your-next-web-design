import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/20/solid";

export default function Footer() {
  return (
    <footer className="bg-white py-24">
      <div className="items- mx-auto flex w-[95%] max-w-7xl justify-around px-4">
        <div className="flex w-1/4 flex-col gap-2">
          <div className="flex ">
            <a
              href="#"
              className="text-gradient-animation-dark text-xl font-black text-slate-900"
            >
              <span className="sr-only">Your Next Web Design</span>Y
              <span className="-ml-0.5 text-clip italic text-oj-500">N</span>WD
            </a>
          </div>
          <h2 className="text-xl font-bold tracking-tight">
            Your Next Web Design
          </h2>
          <p className="font-mono opacity-50">
            A one-man web design shop near the Sunshine Coast that makes
            websites that do more than just look good.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-l font-bold">Browse</h3>
          <ul className="flex flex-col gap-2">
            <li className="">
              <a href="#">Home</a>
            </li>
            <li className="">
              <a href="#">About</a>
            </li>
            <li className="">
              <a href="#">Services</a>
            </li>
            <li className="">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-l font-bold">Services</h3>
          <ul className="flex flex-col gap-2">
            <li className="">
              <a href="#">Web Design</a>
            </li>
            <li className="">
              <a href="#">Web Redesign</a>
            </li>
            <li className="">
              <a href="#">SEO</a>
            </li>
            <li className="">
              <a href="#">Content Creation</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-l font-bold">Contact</h3>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center">
              <MapPinIcon className="mr-2 h-5 w-5" />
              <a href="#">Sunshine Coast, Australia</a>
            </li>
            <li className="flex items-center">
              <EnvelopeIcon className="mr-2 h-5 w-5" />
              <a href="#">admin@ynwd.com.au</a>
            </li>
            <li className="flex items-center">
              <PhoneIcon className="mr-2 h-5 w-5" />
              <a href="#">(+61) 0421 400 082</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
