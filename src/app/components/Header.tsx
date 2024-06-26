"use client";

import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  ChartPieIcon,
  XMarkIcon,
  DevicePhoneMobileIcon,
  CurrencyDollarIcon,
  RocketLaunchIcon,
  PhotoIcon,
  // QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon, PhoneIcon } from "@heroicons/react/20/solid";

const products = [
  {
    name: "Website Design & Development",
    description:
      "Get your business online with a professional and effective website",
    href: "/services",
    icon: RocketLaunchIcon as React.ElementType,
  },
  {
    name: "Website Redesign & Optimisation",
    description: "Take your website to the next level",
    href: "/services",
    icon: ChartPieIcon as React.ElementType,
  },
  {
    name: "Responsive Design",
    description: "More than half of your visitors are on mobile",
    href: "/services",
    icon: DevicePhoneMobileIcon as React.ElementType,
  },
  {
    name: "Content Creation",
    description: "The most underrated way to make your website great",
    href: "/services",
    icon: PhotoIcon as React.ElementType,
  },
  {
    name: "Conversion & SEO Optimisation",
    description: "Get visitors and turn them into customers",
    href: "/services",
    icon: CurrencyDollarIcon as React.ElementType,
  },
];
const callsToAction = [
  // {
  //   name: "FAQs",
  //   href: "#",
  //   icon: QuestionMarkCircleIcon as React.ElementType,
  // },
  {
    name: "Got Questions? Let's have a chat",
    href: "/contact",
    icon: PhoneIcon as React.ElementType,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 h-[var(--header-height)] bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a
            href="/"
            className="text-gradient-animation-dark -m-1.5 scale-125 p-1.5 font-black text-slate-900"
          >
            <span className="sr-only">Your Next Web Design</span>Y
            <span className="-ml-0.5 text-clip italic text-oj-500">N</span>WD
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="text-text-slate-700 -m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <Popover.Group className="z-20 hidden lg:flex lg:gap-x-12">
          <a
            href="/"
            className="text-sm font-semibold leading-6 text-slate-900"
          >
            Home
          </a>
          <a
            href="/about"
            className="text-sm font-semibold leading-6 text-slate-900"
          >
            About
          </a>

          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-slate-900">
              Services
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-slate-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-slate-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-slate-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-slate-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-slate-600 group-hover:text-oj-400"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-slate-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-slate-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 divide-x divide-slate-900/5 bg-slate-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-3 p-3 text-sm font-semibold leading-6 text-slate-900 hover:bg-slate-100"
                    >
                      <item.icon
                        className="h-5 w-5 flex-none text-slate-400"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <a
            href="/portfolio"
            className="text-sm font-semibold leading-6 text-slate-900"
          >
            Portfolio
          </a>

          <a
            href="/contact"
            className="text-sm font-semibold leading-6 text-slate-900"
          >
            Contact
          </a>
        </Popover.Group>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="/contact"
            className="text-base font-semibold leading-6 text-oj-500 transition-all duration-300 ease-in-out"
          >
            Get a Free Quote <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>

      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-slate-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5 font-black">
              <span className="sr-only">Your Next Web Design</span>Y
              <span className="-ml-0.5 italic text-oj-500">N</span>WD
            </a>
            <button
              type="button"
              className="text-text-slate-700 -m-2.5 rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-slate-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-900 hover:bg-slate-50"
                >
                  Home
                </a>
                <a
                  href="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-900 hover:bg-slate-50"
                >
                  About
                </a>

                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-slate-900 hover:bg-slate-50">
                        Services
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none",
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-slate-900 hover:bg-slate-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                <a
            href="/portfolio"
            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-900 hover:bg-slate-50"

          >
            Portfolio
          </a>

                <a
                  href="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-900 hover:bg-slate-50"
                >
                  Contact
                </a>
              </div>
              <div className="py-6">
                <a
                  href="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-slate-900 hover:bg-slate-50"
                >
                  Get a Free Quote <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
