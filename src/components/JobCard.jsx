import React, { useState, useEffect } from "react";
import JobDetails from "../pages/JobDetails";
import { useLocalStorage } from "@uidotdev/usehooks";

const JobCard = (props) => {
  const job = props.job;
  //Function to display Modal with job details when Jobcards are clicked
  const [showModal, setShowModal] = useState(undefined);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [jobsBookmarked, setJobBookMarked] = useLocalStorage("myJobs", []);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleShow = (id) => {
    if (id !== "bookmarkIcon") {
      setShowModal(id);
    }
  };
  const handleClose = (id) => {
    if (id === showModal) {
      setShowModal(undefined);
    }
  };
  const handleScroll = () => {
    const scrollPosition = window.scrollY; // => scroll position
    console.log(scrollPosition);
    setScrollPosition(window.scrollY);
  };
  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showModal]);
  // Function to use created date from API to calculate number of days elapsed
  let calcDuration = (date) => {
    const currentDate = new Date();
    const createdDate = new Date(date);

    const duration = Math.floor(
      (currentDate - createdDate) / (1000 * 60 * 60 * 24)
    );

    return duration;
  };
  // Function to save jobs
  const handleBookmarkClick = (event) => {
    event.stopPropagation();
    const updatedIsBookmarked = !isBookmarked;

    console.log(updatedIsBookmarked);
    const isJobSave = jobsBookmarked.some((savedJobs) => savedJobs.id === job.id);
    let updatedSavedJobs = [...jobsBookmarked];
    if (!isJobSave && updatedIsBookmarked === true) {
      updatedSavedJobs.push(job);
      setJobBookMarked(updatedSavedJobs);
    }
    else if (isJobSave && updatedIsBookmarked === false) {
      const updatedJob = updatedSavedJobs.filter(savedJobs => savedJobs.id !== job.id);
      setJobBookMarked(updatedJob);
    }
    setIsBookmarked(updatedIsBookmarked);
  }
  // Ensuring salary values do not show pennies and special characters when passing to job details

  const maxSalary = (job.salary_max).toFixed(0).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  const minSalary = (job.salary_min).toFixed(0).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

  return (
    <>
      {/* Card construction*/}

      <div
        onClick={() => handleShow(job.id)}
        className="card rounded-xl  bg-gray-100 p-6 bg-white shadow-lg hover:bg-indigo-100 min-w-[20rem] lg:min-w-[25rem]"
      >
        <div className="mb-1 flex items-center justify-between">
          <h3 className="text-gray-800 font-bold text-md sm:text-lg md:text-xl">
            {" "}
            {job.title}
          </h3>
          <span
            className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-gray-500 hover:bg-gray-300 ">
            <svg id="bookmarkIcon" xmlns="http://www.w3.org/2000/svg" fill={isBookmarked ? "#2d3748" : "none"} viewBox="0 0 24 24" strokeWidth="1.5"
              stroke="currentColor" className="w-6 h-6" onClick={handleBookmarkClick}>
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
            </svg>

          </span>
        </div>
        {job.company && job.company.display_name && (
          <p className="text-gray-700 font-medium my-1 sm:text-base md:text-lg">
            {job.company.display_name}
          </p>
        )}
        {job.location && (
          <p className="text-gray-500 font-medium my-1">
            {job.location.display_name}
          </p>
        )}
        <p className="text-gray-600 rounded-lg font-bold bg-gray-100 inline-block py-1 px-2">
          £{minSalary}-£{maxSalary}
        </p>

        <div className="mt-2 sm:flex sm:items-center sm:gap-2">

          <div className="flex items-center gap-1 text-gray-500 my-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
              className="w-5 h-5">
              <path fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
                clipRule="evenodd" />
            </svg>

            <p className="text-sm">
              {calcDuration(job.created)} days ago
            </p>
          </div>
          <div className="flex items-center gap-1 text-gray-500 my-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
              className="w-5 h-5">
              <path fillRule="evenodd"
                d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                clipRule="evenodd" />
              <path
                d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
            </svg>

            <p className="text-sm">
              {job.contract_time}
            </p>
          </div>
        </div>

        {/* Card modal display */}
        {showModal === job.id ? (
          <div style={{ top: `${scrollPosition}px` }} className={`absolute  bottom-0 inset-x-0 xl:inset-x-0 2xl:inset-x-0 lg:inset-x-0 z-50 md:inset-x-0 sm:inset-x-0`}>
            <JobDetails info={job} close={() => handleClose(job.id)} />
          </div>
        ) : null}
        {showModal === undefined ? null : null}

      </div>
    </>


  );
};

export default JobCard;