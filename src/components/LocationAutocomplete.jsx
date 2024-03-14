import React, { useState, useEffect, useRef } from "react";

function Autocomplete() {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef(null);

  const onInputChange = (event) => {
    setInputValue(event.target.value);

    if (event.target.value.length >= 3) {
      fetchSuggestions(event.target.value);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const fetchSuggestions = async (query) => {
    try {
      const url = `https://autocomplete.search.hereapi.com/v1/autocomplete?q=${query}&limit=5&in=countryCode:GBR&apiKey=IOv1oSaJlK-5RRas0SYsM-7vBMmy28kUR0cbu5QIE4k`;
      const response = await fetch(url);
      const data = await response.json();
      setSuggestions(data.items);
      setShowSuggestions(true); // Show suggestions
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion.address.label);
    setSuggestions([]);
    setShowSuggestions(false);
  };

  useEffect(() => {
    if (showSuggestions && inputRef.current) {
      const inputRect = inputRef.current.getBoundingClientRect();
      const suggestionsList = document.getElementById("suggestions");
      suggestionsList.style.top = `${inputRect.bottom}px`;
      suggestionsList.style.left = `${inputRect.left}px`;
    }
  }, [showSuggestions]);

  return (
    <div className="autocomplete-container" style={{ position: 'relative', width: 'fit-content' }}>
      <input
        type="text"
        className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
        placeholder="City or postcode"
        id="location-input"
        value={inputValue}
        onChange={onInputChange}
        ref={inputRef}
      />
      <ul
        id="suggestions"
        style={{ 
          display: showSuggestions ? "block" : "none",
          position: 'absolute',
          zIndex: 1,
          backgroundColor: "white",
          width: '100%',
          borderRadius: '5px'
        }}
      >
        {suggestions.map((suggestion) => (
          <li
            key={suggestion.id}
            onClick={() => handleSuggestionClick(suggestion)}
            style={{ borderBottom: '1px solid gray' }}
          >
            {suggestion.address.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Autocomplete;