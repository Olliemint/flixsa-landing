import axios from "axios";

const tmdbApi = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "866455812057a0f922e8264246a7939d",
    language: "en-US",
  },
});

export default tmdbApi;
