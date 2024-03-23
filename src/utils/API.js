import axios from "axios";
import API_Keys from "./APIKeys";
// console.log("Hello");

const appID = API_Keys.appID;
const apiKey = API_Keys.apiKey;

const resultsPerPage = 50;

const corsURL = "https://cors-anywhere-jung-48d4feb9d097.herokuapp.com/";
const baseURL = "http://api.adzuna.com/v1/api/jobs/gb/search/1?what=";
const API_KEY = `&app_key=${apiKey}`;
const APP_ID = `&app_id=${appID}`;
const results_amount = `&results_per_page=${resultsPerPage}`;
const content_type = "&content-type=application/json";

// http://api.adzuna.com/v1/api/jobs/gb/search/1?app_id={YOUR API ID}&app_key={YOUR API KEY}&results_per_page=20&what=javascript%20developer&content-type=application/json

export default {
  async search(query, location) {
    const encodedLocation = encodeURIComponent(location);
    console.log(
      corsURL +
        baseURL +
        query +
        API_KEY +
        APP_ID +
        results_amount +
        "&where=" +
        encodedLocation +
        content_type
    );
    return await axios.get(
      corsURL +
        baseURL +
        query +
        API_KEY +
        APP_ID +
        results_amount +
        "&where=" +
        encodedLocation +
        content_type
    );
  },
};

// export default search;
