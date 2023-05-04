import {genreIds} from "../data/tmdbEndpoints";

export const getGenreFromIDs = (idList) => {
  const result = [];
  idList.map((id) =>
    genreIds.map((obj) =>
      id === obj.id ? result.push({id: id, name: obj.name}) : null
    )
  );
  return result;
};
