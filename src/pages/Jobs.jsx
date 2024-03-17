import React, { useState, useEffect } from 'react';
import JobCard from '../components/JobCard';

import axios from 'axios';


const Jobs = () => {

    const [jobCards, setJobCards] = useState([]);
    const [loading, setLoading] = useState(false);
    const [visibleCards, setVisibleCards] = useState(1);
    const [cardsPerPage] = useState(4);

    useEffect(() => {
        setLoading(true);
        axios.get("../utils/data.json").then(res => {
            setJobCards(res.data);
            setLoading(false);

        })
            .catch(error => {
                console.error("Error", error);
                setLoading(false);
            })

    }, []);

    const indexOfLastCards = visibleCards * cardsPerPage;
    const indexOfFirstCards = indexOfLastCards - cardsPerPage;

    const currentCards = jobCards.slice(indexOfFirstCards, indexOfLastCards);

    const loadMore = () => {
        setVisibleCards(prevVisibleCards => prevVisibleCards + 1);
    };

    return (
        <div>

            <div>

                <JobCard jobCards={currentCards} loading={loading} />

            </div>
            {/* {jobCards.length > indexOfLastCards && (
                <button onClick={loadMore()}>Loading more jobs</button>
            )} */}

        </div>
    );
}

export default Jobs
