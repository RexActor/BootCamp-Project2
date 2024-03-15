import React, { useState } from "react";
import "../index.css";

function Autocomplete() {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const onInputChange = async (event) => {
    setInputValue(event.target.value);

    if (event.target.value.length >= 3) {
      await fetchSuggestions(event.target.value);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

const apiKey = "IOv1oSaJlK-5RRas0SYsM-7vBMmy28kUR0cbu5QIE4k";

const fetchSuggestions = async (query) => {
    try {
        const url = `https://autocomplete.search.hereapi.com/v1/autocomplete?q=${query}&limit=5&in=countryCode:GBR&apiKey=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();
        setSuggestions(data.items);
        setShowSuggestions(true);
    } catch (error) {
        console.error("Error fetching suggestions:", error);
    }
};

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion.address.label);
    setSuggestions([]);
    setShowSuggestions(false);
  };

return (
    <section className="text-center bg-gray-100 px-8 sm:px-6">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2">
            <div className="relative rounded-full bg-white bg-opacity-50 shadow-lg flex sm:flex-grow-0" style={{ paddingTop: '6px' }}> 
                <label className="sr-only" htmlFor="job-search-input">Job Title Search</label>
                <input className="h-10 w-full sm:max-w-xs rounded-l-full shadow-lg border-none bg-white pe-10 ps-4 text-sm"
                        id="job-search-input" type="search" placeholder="Job title" />
                <label className="sr-only" htmlFor="location-search-input">Location Search</label>
                <input className="h-10 w-full sm:max-w-xs rounded-r-full shadow-lg border-none bg-white pe-10 ps-4 text-sm"
                        id="location-search-input" type="search" placeholder="Location" value={inputValue} onChange={onInputChange} />
                {showSuggestions && (
                    <ul className="suggestions-list">
                        {suggestions.map((suggestion) => (
                            <li key={suggestion.id} onClick={() => handleSuggestionClick(suggestion)}>
                                {suggestion.address.label}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <div className="flex">
                    <button type="button" id="search-button"
                            className="h-10 rounded-full border-none bg-gray-800 px-5 py-3 shadow-lg font-medium text-white hover:bg-opacity-60 flex items-center mt-2 sm:mt-0 sm:ml-2">
                            <span className="inline-block align-middle">Search</span>
                    </button>
            </div>
        </div>
    </section>
);
}

export default Autocomplete;

