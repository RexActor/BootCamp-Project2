import React from "react";

const job = {
    title: "Software Engineer",
    description: "We are looking for a talented software engineer to join our team.",
    company: {
        display_name: "Tech Solutions Ltd"
    },
    location: {
        display_name: "San Francisco, CA"
    },
    salary_min: 80000,
    salary_max: 120000
};

const JobCard = ({ job }) => {
    return (
        <div className="flex flex-col justify-between">
            <div>
                <h3 className="text-xl mb-2">Job title: {job.title}</h3>
                <p className="bg-indigo-900">Company name: {job.company.display_name}</p>
                <p className="bg-indigo-900">Location: {job.location.display_name}</p>
                <p className="bg-indigo-900">Job Salary: £{job.salary_min}-£{job.salary_max}</p>
            </div>
            <div className="flex justify-end items-center mt-4">

            </div>
        </div>
    );

}


export default JobCard;