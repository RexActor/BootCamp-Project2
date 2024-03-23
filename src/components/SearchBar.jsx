import React, { useEffect, useState, useRef } from "react";
import "../index.css";
import { useNavigate, useLocation } from "react-router-dom";
import API from "../utils/API.js";
import API_Keys from "../utils/APIKeys.js";

function Autocomplete() {
  let canReload = false;
  const [inputValue, setInputValue] = useState("");
  const [jobSearchInput, setJobSearchInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchData, setSearchData] = useState({
    search: "",
    results: [],
  });

  const onInputChange = async (event) => {
    setInputValue(event.target.value);

    if (event.target.value.length >= 3) {
      await fetchSuggestions(event.target.value);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const containerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setShowSuggestions(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const onJobSearchInputChange = (event) => {
    setJobSearchInput(event.target.value);
    const { name, value } = event.target;
    setSearchData({
      ...searchData,
      [name]: value,
    });
  };

  const HandleSearchClick = async () => {
    const locationValue = inputValue.split(" ")[0];

    API.search(jobSearchInput, locationValue)
      .then((res) => {
        setSearchData({ ...searchData, results: res.data.results });
      })

      .catch((error) => {
        console.error(error);
      });
  };
  const navigate = useNavigate();
  const appLocation = useLocation();

  //checks if current Navigation/location is in Jobs page/route.
  //If so then sets that page can be reloaded

  console.log(searchData.results.length);
  if (appLocation.pathname === "/Jobs") {
    canReload = true;
  }
  useEffect(() => {
    if (searchData.results.length > 0) {
      let path = "/Jobs";
      navigate(path, { state: { ...searchData } });
      //checks if page is to be reloaded when data updates
      //it reloads page and sets it back to false
      if (canReload) {
        window.location.reload();
        canReload = false;
      }
    }
  }, [searchData]);

  const apiKey = API_Keys.autoCompleteKey;

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
    setSearchData({
      ...searchData,
      ["location"]: suggestion.address.label,
    });
    setSuggestions([]);
    setShowSuggestions(false);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      HandleSearchClick();
    }
  };

  return (
    <section className="text-center bg-gray-100 px-8 sm:px-6">
      <div
        className="flex flex-col sm:flex-row justify-center items-center gap-2"
        ref={containerRef}
      >
        <div className="relative rounded-full bg-white shadow-lg flex sm:flex-grow-0">
          <label className="sr-only" htmlFor="job-search-input">
            Job Title Search
          </label>
          <input
            className="search-hover h-10 w-full sm:max-w-xs rounded-l-full shadow-lg border-none bg-white pe-10 ps-4 text-sm"
            id="job-search-input"
            type="search"
            name="search"
            placeholder="Job title"
            value={jobSearchInput}
            onChange={onJobSearchInputChange}
            onKeyDown={handleKeyPress}
          />
          <label className="sr-only" htmlFor="location-search-input">
            Location Search
          </label>
          <input
            className="search-hover h-10 w-full sm:max-w-xs rounded-r-full shadow-lg border-none bg-white pe-10 ps-4 text-sm"
            id="location-search-input"
            type="search"
            name="location"
            placeholder="Location"
            value={inputValue}
            onChange={onInputChange}
          />
          {showSuggestions && (
            <ul className="suggestions-list">
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion.id}
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion.address.label.split(", ").slice(0, 2).join(", ")}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="flex">
          <button
            type="button"
            id="search-button"
            className="h-10 rounded-full border-none bg-gray-800 px-5 py-3 shadow-lg font-medium text-white hover:bg-opacity-60 flex items-center mt-2 sm:mt-0 sm:ml-2"
            onClick={HandleSearchClick}
          >
            <span className="inline-block align-middle">Search</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Autocomplete;
