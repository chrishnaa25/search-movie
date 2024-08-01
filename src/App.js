import React, { useEffect, useState } from "react";
import axios from "axios";
import Result from "./Components/Result";
const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const getAllMovies = () => {
    axios
      .get(APIURL)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getSearchedMovies = () => {
    axios(SEARCHAPI + search)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    setMovies([]);
    if (search === "") {
      getAllMovies();
    } else {
      getSearchedMovies();
    }
  }, [search]);

  return (
    <div className="shadow-lg m-auto p-3 min-h-[400px] w-[1240px]">
      <input
        type="text"
        value={search}
        onChange={handleChange}
        className="w-full border border-black rounded p-3 text-xl"
        placeholder="Search..."
      />
      {movies.length === 0 ? (
        <div className="text-4xl mt-3 text-center">Loading...</div>
      ) : (
        <Result movies={movies} />
      )}
    </div>
  );
}

export default App;
