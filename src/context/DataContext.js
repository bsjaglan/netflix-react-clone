import React, {createContext, useContext, useEffect, useState} from "react";
import axios from "axios";

import {movieEndpointsByGenre} from "../data/tmdbEndpoints";

export const DataContext = createContext({});

export const DataContextProvider = ({children}) => {
  const [loading, setLoading] = useState(true);
  const [randomMovie, setRandomMovie] = useState();
  const [moviesByGenre, setMoviesByGenre] = useState([]);

  const getRandomMovie = (movieList) =>
    movieList[Math.floor(Math.random() * movieList.length) + 1];

  const handleAllResponses = (responses) => {
    console.log(responses);
  };

  const getData = (list) => {
    Promise.all(list.map((item) => axios.get(item.endpoint))).then(
      axios.spread((...allResponse) => {
        // console.log(allResponse);
        let data = [];
        list.map((item, index) => {
          data.push({
            id: index + 1,
            title: item.title,
            items: allResponse[index].data.results,
          });
        });
        setLoading(false);
        setRandomMovie(getRandomMovie(data[0].items));
        return setMoviesByGenre(data);
      })
    );
  };

  useEffect(() => {
    getData(movieEndpointsByGenre);
  }, []);

  return (
    <DataContext.Provider value={{moviesByGenre, randomMovie, loading}}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
