import React from 'react';

function About() {
    return (
        <div >
            {/* hero  */}
            <section className="bg-gray-100">
                <div className="px-4 mx-auto max-w-screen-xl text-center py-12 lg:py-24">
                    <h1 className="mb-5 text-4xl font-bold text-gray-700 md:text-5xl lg:text-6xl">
                        About NetC</h1>
                    <p className="mb-8 text-lg font-normal text-gray-700 lg:text-xl sm:px-16 lg:px-48">Introducing NetC, your
                        ultimate companion in the quest for your dream career. With a user-friendly interface and powerful
                        search capabilities, NetC makes finding your next job a breeze. Explore thousands of job listings
                        from top companies, tailored to your preferences and skills. Our intuitive tools allow you to easily
                        apply for jobs, track your applications, and manage your job search
                        effortlessly. </p>
                    <p className="mb-8 text-lg font-normal text-gray-600 lg:text-xl sm:px-16 lg:px-48"> Everything you need to take
                        the next step in your professional journey!</p>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                        <a href="#"
                            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-gray-800 hover:bg-opacity-60 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                            Starts here
                        </a>
                        <a href="#"
                            className="inline-flex justify-center items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-gray-700 rounded-lg border border-gray-700 hover:bg-gray-400 focus:ring-4 focus:ring-gray-400">
                            Learn more
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;