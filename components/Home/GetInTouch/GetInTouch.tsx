import React, { useRef, useState } from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import emailjs from "@emailjs/browser";

export default function GetInTouch() {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);

  // State for form inputs
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation or API call
    console.log(formData); // Just logging data here for demonstration

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE1,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAIL_PUBLICKEEY,
        }
      )
      .then(
        () => {
          setSubmitted(true);
          resetForm(); // Clear form data on successful submission
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE2,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAIL_PUBLICKEEY,
        }
      )
      .then(
        () => {
          setSubmitted(true);
          resetForm(); // Clear form data on successful submission
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div
      id="GetInTouchSection"
      data-aos="fade-up"
      className="flex flex-col space-y-4 w-full py-20 h-150 items-center bg-AAprimary bg-[url('/Bg-Grid.png')]"
    >
      {/* // ? Title === > What's Next?  */}
      <div className="flex flex-row items-center ">
        <ArrowIcon className="flex-none h-5 md:h-6 w-5 md:w-5 text-AAsecondary" />
        <div className="flex flex-row space-x-2 items-center">
          <span className="text-AAsecondary font-sans text-sm  sm:text-base">
            {" "}
            04.
          </span>
          <span className=" font-sans text-AAsecondary text-base">
            What&apos;s Next?
          </span>
        </div>
      </div>
      {/* // ? Get In Touch */}
      <span className="text-gray-200 text-3xl sm:text-4xl font-bold tracking-wider opacity-85">
        Get In Touch
      </span>
      <p className="flex font-Header tracking-wider text-gray-400 text-center px-6 sm:px-16 md:px-0 md:w-[600px]">
        I&apos;m always open to new opportunities and my inbox is always
        welcoming. Whether you have a question or simply want to say hello, I’ll
        do my utmost to respond promptly!
      </p>
      <div className="">
        {/* <a href="mailto:ergovindnamdev@gmail.com" target={"_blank"} rel="noreferrer">
          <button
            className="font-mono text-sm text-AAsecondary border-AAsecondary 
                            px-8 py-4 border-[1.5px] rounded "
          >
            Say Hello
          </button>
        </a> */}

        <div className="isolate px-2 py-12 sm:py-2 lg:px-2">
          <div
            className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
            aria-hidden="true"
          ></div>
          {submitted ? (
            <div className="text-center">
              <h3 className="text-gray-400 text-2xl font-bold">
                Thank you for getting in touch!
              </h3>
              <p className="text-gray-400">I will get back to you soon.</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              ref={form}
              method="POST"
              className="mx-auto max-w-xl"
            >
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                {/* First Name */}
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    First name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="first-name"
                    autoComplete="given-name"
                    required
                    className="block w-full rounded-md border-AAsecondary-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-AAsecondary sm:text-sm"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                {/* Last Name */}
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Last name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="last-name"
                    autoComplete="family-name"
                    required
                    className="block w-full rounded-md border-AAsecondary-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-AAsecondary sm:text-sm"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
                {/* Email */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Email<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-AAsecondary-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-AAsecondary sm:text-sm"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                {/* Phone Number */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone-number"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Phone number<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    id="phone-number"
                    autoComplete="tel"
                    required
                    className="block w-full rounded-md border-AAsecondary-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-AAsecondary sm:text-sm"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                  />
                </div>
                {/* Message */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Message<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    required
                    className="block w-full rounded-md border-AAsecondary-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-AAsecondary sm:text-sm"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                {/* Submit Button */}
                <div className="mt-10">
                  <button
                    type="submit"
                    className="block w-full rounded-md bg-white px-3.5 py-2.5 text-center text-sm shadow-sm font-mono text-sm text-AAsecondary border-AAsecondary px-8 py-4 border-[1.5px] rounded"
                  >
                    Let&aposs talk
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
