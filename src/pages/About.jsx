import React, { useState } from "react";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";

function About() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const openContactForm = (event) => {
    event.preventDefault();
    setIsContactFormOpen(true);
  };

  const closeContactForm = () => {
    setIsContactFormOpen(false);
  };

  return (
    <main>
      {/* hero  */}
      <section className="bg-gray-100">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-12 lg:py-24">
          <h1 className="mb-5 text-4xl font-bold text-gray-700 md:text-5xl lg:text-6xl">
            About Pathway
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-700 lg:text-xl sm:px-16 lg:px-48">
            Introducing Pathway, your ultimate companion in the quest for your
            dream career. With a user-friendly interface and powerful search
            capabilities, Pathway makes finding your next job a breeze. Explore
            thousands of job listings from top companies, tailored to your
            preferences and skills. Our intuitive tools allow you to easily
            apply for jobs, track your applications, and manage your job search
            effortlessly.{" "}
          </p>
          <p className="mb-8 text-lg font-normal text-gray-600 lg:text-xl sm:px-16 lg:px-48">
            {" "}
            Everything you need to take the next step in your professional
            journey!
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <Link
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-gray-800 hover:bg-opacity-60 focus:ring-4"
              to="/"
              target="_blank"
            >
              Starts here
            </Link>

            <a
              href="https://github.com/RexActor/BootCamp-Project2"
              className="inline-flex justify-center items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-gray-700 rounded-lg border border-gray-700 hover:bg-gray-400 focus:ring-4 focus:ring-gray-400"
              target="_blank"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>
      {/* Get in touch  */}
      <section className="bg-amber-800 bg-opacity-50">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h1 className="mb-5 text-4xl font-bold text-gray-800 md:text-5xl lg:text-6xl">
            Get in touch
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-900 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            Thank you for your interest in connecting with us. Whether you have
            questions, feedback, or just want to say hello, we would love to
            hear from you.
          </p>
          <a
            href="#"
            className="text-blue-700 hover:underline font-medium text-xl inline-flex items-center"
            onClick={(event) => openContactForm(event)}
          >
            Message us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 ml-2 mt-1"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
              />
            </svg>
          </a>
        </div>
      </section>

      {/* Contact form  */}
      {isContactFormOpen && <ContactForm closeModal={closeContactForm} />}
    </main>
  );
}

export default About;
