import axios from "axios";
// console.log("Hello");
const appID = "b9900fa2";
const apiKey = "546651ec2d56735011331769606df50a";
const resultsPerPage = 50;

const corsURL = "https://cors-anywhere-jung-48d4feb9d097.herokuapp.com/";
const baseURL = "http://api.adzuna.com/v1/api/jobs/gb/search/1?what=";
const API_KEY = `&app_key=${apiKey}`;
const APP_ID = `&app_id=${appID}`;
const results_amount = `&results_per_page=${resultsPerPage}`;
const content_type = "&content-type=application/json";

// http://api.adzuna.com/v1/api/jobs/gb/search/1?app_id={YOUR API ID}&app_key={YOUR API KEY}&results_per_page=20&what=javascript%20developer&content-type=application/json

export default {
  search(query) {
    console.log(
      corsURL +
        baseURL +
        query +
        API_KEY +
        APP_ID +
        results_amount +
        content_type
    );
    return axios.get(
      corsURL +
        baseURL +
        query +
        API_KEY +
        APP_ID +
        results_amount +
        content_type
    );
  },
};

// export default search;
