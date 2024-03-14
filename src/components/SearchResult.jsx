import { useState } from "react";
import API from "../utils/API";
import SearchForm from "./SearchForm";


function SearchContainer() {
  const [searchData, setSearchData] = useState({
    search: "",
    results: [],
  });

  const searchAPI = (query) => {
    API.search(query)
      .then((res) =>
        setSearchData({ ...searchData, results: res.data.results })
      )
      .catch((err) => console.log(err));
  };
  // console.log(res.data.results)

  const handleFormSubmit = (event) => {
    event.preventDefault();
    searchAPI(searchData.search);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSearchData({
      ...searchData,
      [name]: value,
    });
  };


  console.log(searchData.results);
  return (
    <div>
      <SearchForm
        search={searchData.search}
        handleFormSubmit={handleFormSubmit}
        handleInputChange={handleInputChange}
      />
    </div>
  );
}

export default SearchContainer;
