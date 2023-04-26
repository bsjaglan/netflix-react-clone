import {API_KEY} from "../config/tmdb";

export const baseUrl = "https://api.themoviedb.org/3";

export const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

// export const byGenre = {
//   netflixOriginals: {title: "Netflix Originals", endpoint: requests.fetchNetflixOriginals},
//   romance: {title: "Romance", endpoint: baseUrl + requests.fetchRomanceMovies},
//   topRated: {title: "Top Rated", endpoint: baseUrl + requests.fetchTopRated},
//   trending: {title: "Trending", endpoint: baseUrl + requests.fetchTrending},
//   action: {title: "Action", endpoint: baseUrl + requests.fetchActionMovies},
//   comedy: {title: "Comedy", endpoint: baseUrl + requests.fetchComedyMovies},
//   horror: {title: "Horror", endpoint: baseUrl + requests.fetchHorrorMovies},
//   documentaries: {title: "Documentaries", endpoint: baseUrl + requests.fetchDocumentaries},
// };

export const movieEndpointsByGenre = [
  {title: "Netflix Originals", endpoint: baseUrl + requests.fetchNetflixOriginals},
  {title: "Romance", endpoint: baseUrl + requests.fetchRomanceMovies},
  {title: "Top Rated", endpoint: baseUrl + requests.fetchTopRated},
  {title: "Trending", endpoint: baseUrl + requests.fetchTrending},
  {title: "Action", endpoint: baseUrl + requests.fetchActionMovies},
  {title: "Comedy", endpoint: baseUrl + requests.fetchComedyMovies},
  {title: "Horror", endpoint: baseUrl + requests.fetchHorrorMovies},
  {title: "Documentaries", endpoint: baseUrl + requests.fetchDocumentaries},
];
