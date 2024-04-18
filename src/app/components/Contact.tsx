"use client";

import { useState } from "react";
import { RocketLaunchIcon } from "@heroicons/react/24/outline";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import emailjs from "@emailjs/browser";
import "react-phone-number-input/style.css";

export default function Contact({ customStep = 1 }) {
  const [step, setStep] = useState(customStep);
  const [name, setName] = useState("");
  const [contactMethod, setContactMethod] = useState("");
  const [phoneNumber, setPhoneNumber] = useState<string | undefined>(undefined);
  const [nameValid, setNameValid] = useState(true);
  const [phoneNumberValid, setPhoneNumberValid] = useState(true);
  const [submitAttempted, setSubmitAttempted] = useState(false);

  const handlePhoneNumberChange = (value: string | undefined) => {
    setPhoneNumber(value ?? "");
    setSubmitAttempted(false);
    setPhoneNumberValid(value ? isValidPhoneNumber(value) : false);
  };

  const handleNameChange = (value: string) => {
    setName(value ?? "");
    setNameValid(value.trim().length > 0);
  };

  const handleContactMethodClick = (
    method: string,
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    e.preventDefault();
    setContactMethod(method);
    setStep(step + 1);
  };

  const handleNameContinueClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (name && nameValid) {
      setStep(step + 1);
    }
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Ensure this is the final step before sending the email
    if (step === 4 && phoneNumber && isValidPhoneNumber(phoneNumber)) {
      const formData = {
        name: name,
        method: contactMethod,
        phone: phoneNumber,
      };

      // Send email using EmailJS
      emailjs
        .send(
          "service_x457k2r",
          "template_rpyinbp",
          formData,
          "LGkUMEufUFextj5AI",
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            // Advance to a success message or perform other success logic
            setStep(step + 1);
          },
          (err) => {
            console.log("FAILED...", err);
            // Optionally handle the error state here
          },
        );
    } else {
      // Handle validation failure or incorrect step
      setPhoneNumberValid(false);
    }
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="relative mt-0 flex h-full min-h-[33vh] w-full flex-col md:mt-12 lg:mt-0">
            <div
              className="absolute left-0 top-0 h-full w-full rounded border-2 border-white"
              style={{
                backgroundImage: "url(/img/orange-phone.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="absolute left-0 top-0 h-full w-full rounded bg-white bg-opacity-5"></div>
            <button
              className="absolute left-1/2 top-[57%] mx-auto w-2/3 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border-4 border-white bg-indigo-500 px-6 py-2 text-2xl font-semibold capitalize text-white shadow-xl  ring-slate-200 transition-all hover:bg-indigo-600 md:px-12 md:py-4 md:text-3xl lg:my--20"
              onClick={() => setStep(step + 1)}
            >
              Let&apos;s talk!
            </button>
          </div>
        );
      case 2:
        return (
          <div className="mx-auto flex flex-col gap-y-4 text-xl md:text-2xl">
            <p className="text-center">
              How would you like to get{" "}
              <span className="md:whitespace-nowrap">in touch?</span>
            </p>
            <button
              onClick={(e) => handleContactMethodClick("Phone Call", e)}
              className="rounded-none border border-white px-6 py-1.5 ring-white transition-all hover:ring-1"
            >
              Phone Call
            </button>
            <button
              onClick={(e) => handleContactMethodClick("Text / SMS", e)}
              className="rounded-none border border-white px-6 py-1.5 ring-white transition-all hover:ring-1"
            >
              Text / SMS
            </button>
            <button
              onClick={(e) => handleContactMethodClick("Meet for Coffee", e)}
              className="rounded-none border border-white px-6 py-1.5 ring-white transition-all hover:ring-1"
            >
              Meet for Coffee
            </button>
          </div>
        );
      case 3:
        return (
          <div className="mx-auto mb-4 flex flex-col gap-y-4 text-xl md:mb-0 md:text-2xl">
            <p className="text-center">What&apos;s your name?</p>
            <input
              className="rounded-none bg-white px-6 py-1.5  font-normal text-slate-900"
              type="text"
              value={name}
              onChange={(e) => handleNameChange(e.target.value)}
              placeholder="Name"
              required
            />
            <button
              disabled={!nameValid}
              className="flex justify-between rounded-none border border-white px-6 py-1.5 ring-white transition-all hover:ring-1"
              onClick={(e) => handleNameContinueClick(e)}
            >
              Continue<span className="">&rarr;</span>
            </button>
          </div>
        );
      case 4:
        return (
          <div className="mx-auto flex flex-col gap-y-4 text-xl md:text-2xl">
            <p className="text-center">
              Thanks {name}! What&apos;s the best number to reach you on?
            </p>

            <PhoneInput
              international
              defaultCountry="AU"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              addInternationalOption={false}
              limitMaxLength={true}
              countryCallingCodeEditable={false}
              className="w-full rounded-none bg-white px-4 py-3 text-lg font-normal text-slate-900 md:px-8 "
            />
            {submitAttempted && !phoneNumberValid && (
              <p className="text-base text-red-100">* Invalid phone number.</p>
            )}
            <button
              type="submit"
              className="mt-4 flex items-center justify-center rounded-none border border-white bg-slate-900 px-4 py-3 text-lg font-semibold text-white ring-white transition-all hover:bg-emerald-500 hover:ring-2 md:px-8"
              // onClick={(e) => handleFormSubmit(e)}
              // disabled={!phoneNumberValid}
            >
              Let&apos;s Go!
              <RocketLaunchIcon className="ml-4 h-6 w-6 text-white" />
            </button>
          </div>
        );

      default:
        // return <p>We will be in touch soon!</p>;
        return (
          <div className="mx-auto flex flex-col gap-y-4 text-2xl">
            <p className="">Thanks {name}!</p>
            <p>I got your number and I&apos;ll get in touch with you ASAP!</p>

            {/* <p className="font-normal">
              In the meantime, feel free to check out the{" "}
              <a href="#" className="text-white underline">
                FAQs.
              </a>
            </p> */}
          </div>
        );
    }
  };

  return (
    <div className="bg-white bg-opacity-50 pb-24 pt-12 md:pb-48">
      <div className="mx-auto flex min-h-[calc(75svh-var(--header-height))] w-[95%] rounded-xl border-4 border-white bg-oj-500 bg-opacity-100 pt-14 pb-14 lg:pt-16 lg:pb-16 ring-4 ring-black md:border-8 md:ring-8">
        <div className="mx-auto grid w-[95%] grid-cols-1 px-2 md:w-[90%] lg:grid-cols-2">
          <div className="mx-auto flex flex-col justify-center pb-8 text-center font-semibold text-white md:px-8 md:py-1  lg:pb-12 lg:pt-12 lg:text-left">
            <p className="pb-6 lg:font-bold font-extrabold text-4xl md:text-5xl text-slate-950 lg:pb-8">
              Want to discuss{" "}
              <span className="md:whitespace-nowrap">your project?</span>
            </p>
            <p className="font-medium text-3xl md:text-5xl text-slate-100">
              Get a free quote in{" "}
              <span className="whitespace-nowrap">no time!</span>
            </p>
          </div>
          <form
            onSubmit={handleFormSubmit}
            className="md:px--16 md:py--16 mx-auto mb--12 flex w-11/12 flex-col justify-center border-white text-3xl font-semibold text-white md:mb--16 lg:my--16 lg:ml-auto lg:text-4xl"
          >
            {renderStepContent()}
          </form>
        </div>
      </div>
    </div>
  );
}
