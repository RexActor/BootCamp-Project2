import React, { useState } from "react";
import jobData from "../utils/data.json";
import JobDetails from "../pages/JobDetails";


const JobCard = (props) => {
  const [jobAds, setJobs] = useState(jobData);
  const [showModal, setShowModal] = useState(undefined);
  const handleShow = (id) => {
    setShowModal(id);
    console.log(showModal);
  };
  const handleClose = (id) => {
    if (id === showModal) {
      setShowModal(undefined);
    }
  };
 

  let calcDuration = (date) => {
    const currentDate = new Date();
    const createdDate = new Date(date);
    const duration = Math.floor(
      (currentDate - createdDate) / (1000 * 60 * 60 * 24)
    );
    
    return duration;
  };


  return (
    <>
      <div>
        <h2 className=" bg-slate-100 text-left text-lg text-slate-900 min-w-min">
          {jobData.length} jobs{" "}
        </h2>
      </div>

      <div className="max-w-screen-lg w-full flex flex-wrap justify-center pl-40">
        {props.data.map((job) => (
          <div
            onClick={() => handleShow(job.id)}
            className="col col-span-6 justify-center max-w-sm rounded overflow-hidden shadow-lg gap-10 m-2 "
          >
            <div className="flex  justify-center py-11  ">
              <div className="card  px-4 rounded-3xl w-[25rem] m-2">
                <h3 className=" text-left text-xl font-medium text-slate-950 ">
                  {" "}
                  {job.title}
                </h3>
                <div>
                  <p className="  text-sm text-gray-700">
                    {job.company.display_name}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">
                    {job.location.display_name}
                  </p>
                </div>
                <div>
                  <p className="  rounded-xl bg-gray-200 text-xs font-medium text-slate-950 w-32 py-1 px-1">
                    £{job.salary_min}-£{job.salary_max}
                  </p>
                </div>
                <div className="col col-span-5">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs text-gray-500">
                      {calcDuration(job.created)} days ago
                    </h4>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">{job.contract_time}</p>
                  </div>
                </div>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                  />
                </svg>
              </div>

            </div>
            {showModal === job.id ? (
              <div className="absolute top-0 xl:inset-x-0 2xl:inset-x-0   lg:inset-x-0 z-50 md:inset-x-0 sm:inset-x-0">
                <JobDetails info={job} close={() => handleClose(job.id)} />
              </div>
            ) : null}
            {showModal === undefined ? null : null}
          </div>
        ))}
      </div>
    </>
  );
};

export default JobCard;
