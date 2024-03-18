import React, { useState, useEffect } from "react";
import JobCard from "../components/JobCard";
import { useLocation } from "react-router-dom";

const Jobs = () => {
    const { state } = useLocation();

    const [jobCards, setJobCards] = useState(state.results);
    const [visibleCards, setVisibleCards] = useState(4);
    const cardsPerPage = 4;

    useEffect(() => {
        setJobCards(state.results);
    }, []);


    return (


        <div>
            {jobCards.map((job, index) => (
                <JobCard id={job.id} key={job.id} job={job} data={jobCards} />
            ))}
        </div>


    );
};

export default Jobs;
