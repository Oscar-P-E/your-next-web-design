import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/20/solid";

export default function Footer() {
  return (
    <footer className="bg-slate-800 pb-24 pt-24 text-white">
      <div className="mx-auto max-w-7xl justify-around gap-x-8 px-8 md:flex">
        <div className="flex flex-col pb-12 md:max-w-[25%] md:pb-0">
          <div className="flex pb-5">
            <a href="#" className=" text-2xl font-black text-white">
              <span className="sr-only">Your Next Web Design</span>Y
              <span className="-ml-0.5 text-clip italic text-oj-500">N</span>WD
            </a>
          </div>
          <h2 className="pb-5 text-xl font-bold">Your Next Web Design</h2>
          <p className="font-mono">
            A one-man web design business in Queensland that makes websites that
            do more than just look good.
          </p>
        </div>

        <div className="flex flex-col gap-5 pb-12 md:max-w-[] md:pb-0">
          <h3 className="text-lg font-bold">Browse</h3>
          <ul className="flex flex-col gap-4">
            <li className="">
              <a href="/">Home</a>
            </li>
            <li className="">
              <a href="/about">About</a>
            </li>
            <li className="">
              <a href="/services">Services</a>
            </li>
            <li className="">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-5 pb-12 md:max-w-[] md:pb-0">
          <h3 className="text-lg font-bold">
            <a href="/services">Services</a>
          </h3>
          <ul className="flex flex-col gap-4">
            <li className="">
              <a href="/services">Website Design</a>
            </li>
            <li className="">
              <a href="/services">Website Redesign</a>
            </li>
            <li className="">
              <a href="/services">SEO Services</a>
            </li>
            <li className="">
              <a href="/services">Content Creation</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-5 md:max-w-[]">
          <h3 className="text-lg font-bold">
            <a href="/contact">Contact</a>
          </h3>
          <ul className="flex flex-col gap-4">
            <li className="flex items-center">
              <MapPinIcon className="mr-2 h-5 w-5 shrink-0" />
              Sunshine Coast, Australia
            </li>
            <li className="flex items-center">
              <EnvelopeIcon className="mr-2 h-5 w-5 shrink-0" />
              <a className="" href="mailto:oscar@yournextwebdesign.com.au">
                oscar@yournextwebdesign.com.au
              </a>
            </li>
            <li className="flex items-center">
              <PhoneIcon className="mr-2 h-5 w-5 shrink-0" />
              <a href="tel:+61421400082">(+61) 0421 400 082</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
