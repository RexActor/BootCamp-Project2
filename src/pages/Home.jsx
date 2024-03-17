import React from 'react';
import HomeBackgroundImage from '../utils/home_bg.png';
import SearchBar from "../components/SearchBar.jsx";

function Home() {
    return (
        <>
          <SearchBar />
        <article id="home-content" className="bg-gray-100 flex flex-col gap-6 px-8 py-16 sm:px-6">
            <section className="my-10 mx-auto max-w-screen-lg flex flex-col md:my-12 md:flex-row lg:pt-10">
                <div className="mx-auto w-full max-w-6xl md:w-2/5 md:pl-24">
                    <div className="flex flex-col items-start">
                        <p className="mb-5 font-medium text-indigo-500 md:mb-6 lg:mb-4">A TRUSTED SEARCH APP</p>
                        <h1 className="mb-4 text-4xl font-bold text-gray-700 lg:text-6xl"><span className="mb-4 text-3xl text-gray-500 font-medium lg:text-5xl">UK</span> Jobs</h1>
                        <p className="text-gray-600 lg:text-xl">Explore thousands of job listings from top companies, tailored to your preferences and skills.</p>
                    </div>
                </div>
                <div className="mx-auto max-w-screen-lg md:w-3/5 md:pr-20">
                    <img src={HomeBackgroundImage} alt="Background Image" className="block mx-auto md:mx-0 md:mt-0" />
                </div>
            </section>
            <section className="mx-auto w-full max-w-7xl px-5 py-6 md:px-10 md:pt-16 lg:py-24">
                <h2 className="text-center text-3xl text-gray-700 font-bold lg:text-5xl">Backed up by real data</h2>
                <p className="mx-auto mb-8 mt-4 max-w-lg items-center text-center text-sm sm:text-base md:mb-12 lg:mb-16">
                    Our intuitive tools allow you to easily apply for jobs, track your applications, and manage your job
                    search effortlessly.</p>
                <div className="mx-auto flex w-full max-w-3xl flex-col flex-wrap justify-between gap-5 px-16 py-8 sm:flex-row md:gap-6">
                    <div className="flex flex-col items-center justify-center">
                        <p className="text-sm ">REGISTER</p>
                        <h4 className="text-xl text-gray-700 font-bold sm:text-2xl lg:text-3xl">200+</h4>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <p className="text-sm ">SOURCE</p>
                        <h4 className="text-xl text-gray-700 font-bold sm:text-2xl lg:text-3xl">Adzuna</h4>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <p className="text-sm ">CUSTOMERS</p>
                        <h4 className="text-xl text-gray-700 font-bold sm:text-2xl lg:text-3xl">1500+</h4>
                    </div>
                </div>
            </section>
            </article>
            </>
    );
}

export default Home;
