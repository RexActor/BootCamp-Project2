import React from 'react';
import { Link } from 'react-router-dom';

function About() {
    return (
        <main>
            {/* hero  */}
            <section className="bg-gray-100">
                <div className="px-4 mx-auto max-w-screen-xl text-center py-12 lg:py-24">
                    <h1 className="mb-5 text-4xl font-bold text-gray-700 md:text-5xl lg:text-6xl">
                        About Pathway</h1>
                    <p className="mb-8 text-lg font-normal text-gray-700 lg:text-xl sm:px-16 lg:px-48">Introducing Pathway, your
                        ultimate companion in the quest for your dream career. With a user-friendly interface and powerful
                        search capabilities, Pathway makes finding your next job a breeze. Explore thousands of job listings
                        from top companies, tailored to your preferences and skills. Our intuitive tools allow you to easily
                        apply for jobs, track your applications, and manage your job search
                        effortlessly. </p>
                    <p className="mb-8 text-lg font-normal text-gray-600 lg:text-xl sm:px-16 lg:px-48"> Everything you need to take
                        the next step in your professional journey!</p>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                        <Link
                            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-gray-800 hover:bg-opacity-60 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                            to="/"
                            target="_blank"
                        >
                            Starts here
                        </Link>

                        <a href="https://github.com/RexActor/BootCamp-Project2"
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
                        Get in touch</h1>
                    <p className="mb-8 text-lg font-normal text-gray-900 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">Thank you
                        for your interest in connecting with us. Whether you have questions, feedback, or just want to say
                        hello, we would love to hear from you.</p>
                    <a href="#" className="text-blue-700 hover:underline font-medium text-xl inline-flex items-center">
                        Message us
                        <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
            </section>
        </main>
    );
}

export default About;