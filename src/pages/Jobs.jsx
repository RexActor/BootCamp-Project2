import React, { useState, useEffect } from "react";
import JobCard from "../components/JobCard";
import { useLocation } from "react-router-dom";
import SearchBar from "../components/SearchBar.jsx";

const Jobs = () => {
    const { state } = useLocation();
    // Pulling Api results and pushing the data information into individual job cards
    const [jobCards, setJobCards] = useState(state.results);

    useEffect(() => {
        setJobCards(state.results);
    }, []);

    // Function to reduce the result display for users and enable Load More feature to view more results
    const [noOfCards, setNoOfCards] = useState(10);
    const slice = jobCards.slice(0, noOfCards);
    const loadMore = () => {
        setNoOfCards(noOfCards + noOfCards);
    }

    return (
        <>
            <SearchBar />
            <main id="card-list" className="px-8 py-8 bg-gray-100 text-gray-800">
                <div className="mx-auto max-w-screen-lg flex justify-between items-center">
                    <p className="font-bold text-gray-800 md:text-lg ">Job Results</p>
                </div>
                <section className="mx-auto max-w-screen-lg flex justify-center mt-4 mb-8">
                    {/* cards container */}
                    <div className="grid gap-4 sm:grid-cols-2 md:gap-8">

                        {slice.map((job, index) => (
                            <JobCard id={job.id} key={job.id} job={job} data={jobCards} />
                        ))}

                    </div>

                </section>

            </main >
            <div className="flex justify-center py-2 px-2">
                <button type="button" className="inline-flex justify-center items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-gray-700 rounded-lg border border-gray-700 hover:bg-gray-400 focus:ring-4 focus:ring-gray-400" onClick={() => loadMore()}  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mr-1 h-4 w-4">
                        <path fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clipRule="evenodd" />
                    </svg>
                    Load more Jobs
                </button>
            </div>
            <div className="py-2"></div>
        </>

    );
};

export default Jobs;
