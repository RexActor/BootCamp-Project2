import React, { useState } from "react";

function ContactForm({ closeModal }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [notification, setNotification] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Add user notification that email will be opened
    setNotification(true);

    // Open email window
    const mailtoLink = `mailto:ching@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.message)}`;
    window.location.href = mailtoLink;

    // Add a delay before closing the contact form
    setTimeout(() => {
      closeModal();
    }, 1500);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg mx-auto">
        {/* Contact Form Heading */}
        <section id="contact-form">
          <div className="mx-auto space-y-8 sm:p-8 bg-white rounded-lg">
            <div className="flex items-start justify-between rounded-t">
              <h3 className="text-xl font-bold text-gray-800 lg:text-3xl">
                {" "}
                Contact Form{" "}
              </h3>
              {/* Close Button */}
              <button
                id="registration-dismiss"
                type="button"
                className="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900"
                onClick={closeModal}
              >
                <svg
                  className="h-4 w-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close</span>
              </button>
            </div>
            {/* Contact Form */}
            <form
              className="mt-8 space-y-6"
              id="contact-form"
              onSubmit={handleFormSubmit}
            >
              <div>
                <label
                  htmlFor="contact-name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="contact-name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                  placeholder="name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="contact-email"
                  placeholder="name@company.com"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="contact-subject"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="contact-subject"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                  placeholder="subject"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your Message
                </label>
                <textarea
                  id="contact-message"
                  rows="4"
                  className="block p-2.5 w-52 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 w-full w-72 sm:w-96"
                  placeholder="leave a message..."
                  name="message"
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <div className="flex">
                <button
                  type="submit"
                  id="contact-submit"
                  className="px-5 py-3 text-base font-medium text-center text-white rounded-full bg-gray-800 hover:bg-opacity-60 focus:ring-4"
                >
                  Send Message
                </button>
                {/* Display notification message */}
                {notification && (
                  <span className="p-2 rounded-lg bg-yellow-400 ml-4 font-medium text-md text-gray-900">
                    Opening email...
                  </span>
                )}
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ContactForm;
