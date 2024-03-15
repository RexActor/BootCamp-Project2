import React, { useState } from "react";
import jobData from "../utils/data.json"


const JobCard = () => {
    const [jobAds, setJobs] = useState(jobData);

    return (
        <>  <h2 className=" bg-amber-400 text-center text-4xl text-neutral-200 min-w-min">Job search results</h2>
            {jobAds.map((job) => (
                <div className="col col-span-4 justify-center max-w-sm rounded overflow-hidden shadow-lg  gap-5">
                    <div className="row row-span-4 flex  justify-center py-11  ">
                        <div className="card  rounded-3xl w-[400px]">
                            <h3 className=" text-center  text-xl text-slate-950 bg-slate-300"> {job.title}</h3>
                            <div>
                                <p>{job.company.display_name}</p>
                            </div>
                            <div>
                                <p>{job.location.display_name}</p>
                            </div>
                            <div>
                                <p>£{job.salary_min}-£{job.salary_max}</p>
                            </div>
                        </div>

                    </div>
                </div>
            )


            )}



        </>
    )
}


export default JobCard;