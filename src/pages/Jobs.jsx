import React, { useState, useEffect } from "react";
import JobCard from "../components/JobCard";
import jobData from "../utils/data.json";
import { useLocation } from "react-router-dom";

const Jobs = () => {
  const { state } = useLocation();

  const [jobCards, setJobCards] = useState(state.results);
  const [visibleCards, setVisibleCards] = useState(4);
  const cardsPerPage = 4;
  const loadMoreCards = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + cardsPerPage);
  };
  useEffect(() => {
    setJobCards(state.results);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visibleCards]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 20 &&
      visibleCards < jobCards.length
    ) {
      loadMoreCards();
    }
  };

  return (
    <div>
      <div>
        {jobCards.slice(0, visibleCards).map((job, index) => (
          <JobCard id={job.id} key={job.id} job={job} data={jobCards} />
        ))}
      </div>

      <button onClick={loadMoreCards}>Load More Jobs</button>
    </div>
  );
};

export default Jobs;
