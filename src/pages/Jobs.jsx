import React, { useState, useEffect } from 'react';
import JobCard from '../components/JobCard';
import jobData from "../utils/data.json";




const Jobs = () => {

    const [jobCards, setJobCards] = useState(jobData);
    const [visibleCards, setVisibleCards] = useState(4);
    const cardsPerPage = 4;
    const loadMoreCards = () => {
        setVisibleCards(prevVisibleCards => prevVisibleCards + cardsPerPage);
    }
    useEffect(() => {
        setJobCards(jobData);
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [visibleCards]);



    const handleScroll = () => {

        if (window.innerHeight + document.documentElement.scrollTop >= (document.documentElement.offsetHeight - 20) && (visibleCards < jobCards.length)) {
            loadMoreCards();
        };
    }

    return (
        <div>
            <div>
                {jobCards.slice(0, visibleCards).map((job, index) => (
                    <JobCard key={job.id} job={job} />
                ))}
            </div>

            <button onClick={loadMoreCards}>Load More Jobs</button>

        </div>
    );
}

export default Jobs
