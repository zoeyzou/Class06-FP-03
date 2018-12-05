const axios = require("axios");
// axios.defaults.baseURL = "http://localhost:5000/";

export function fetchMentor() {
  return axios.get("/api/mentors");
}
