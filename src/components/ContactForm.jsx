import React, { useState } from 'react';

function ContactForm({ closeModal }) {
    const [formData, setFormData] = useState({
        email: '',
        subject: '',
        message: ''
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
        }, 1200);
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg mx-auto">
                {/* Contact Form Heading */}
                <section id="contact-form" >
                    <div className="mx-auto space-y-8 sm:p-8 bg-white rounded-lg">
                        <div className="flex items-start justify-between rounded-t">
                            <h3 className="text-xl font-bold text-gray-800 lg:text-3xl"> Contact Form </h3>
                            {/* Close Button */}
                            <button
                                id="registration-dismiss"
                                type="button"
                                className="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900"
                                onClick={closeModal}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" />
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
                                <label htmlFor="contact-email" className="block mb-2 text-sm font-medium text-gray-900">Your
                                    Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="contact-email"
                                    placeholder="name@company.com"
                                    onChange={handleInputChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                    required />
                            </div>
                            <div>
                                <label htmlFor="contact-subject" className="block mb-2 text-sm font-medium text-gray-900">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    id="contact-subject"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                    placeholder="subject"
                                    onChange={handleInputChange}
                                    required />
                            </div>
                            <div>
                                <label htmlFor="contact-message" className="block mb-2 text-sm font-medium text-gray-900">Your
                                    Message</label>
                                <textarea
                                    id="contact-message"
                                    rows="4"
                                    className="block p-2.5 w-52 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 w-full w-72 sm:w-96"
                                    placeholder="leave a message..."
                                    name="message"
                                    onChange={handleInputChange}
                                    required ></textarea>
                            </div>
                            <div className="flex items-center">
                                <button
                                    type="submit"
                                    id="contact-submit"
                                    className="px-5 py-3 text-base font-medium text-center text-white rounded-full bg-gray-800 hover:bg-opacity-60 focus:ring-4 flex items-center"
                                >
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                        </svg>
                                    </span>
                                    <span className="ml-2">Send</span>
                                </button>
                                {/* Display notification message */}
                                {notification && <span className="p-2 rounded-lg bg-yellow-400 ml-4 font-medium text-sm text-gray-900">Opening email...</span>}
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default ContactForm;