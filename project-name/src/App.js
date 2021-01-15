import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import MovieList from "./components/MovieList";
import SearchBar from "./components/SearchBar";
import Movie from "./components/MovieList";
import Favorites from "./components/Favorites";

import getMovieRequest from "./helpers/getMovieRequest";
import saveToLocalStorage from "./helpers/saveToLocalStorage";

          
function App() {

  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [movieId, setMovieId] = useState();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=487e38bb`;
    getMovieRequest(url).then((response) => setMovies(response.Search));
  }, [searchValue]);

  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem("react-movie-app-favourites")
    );
    
    setFavorites(movieFavourites);
  }, []);

  const getId = (value) => {
    setMovieId(value);
  };

  const addToFav = (value) => {
    if (favorites.filter((e) => e.imdbID === value.imdbID).length > 0) {
    } else {;
      setFavorites([...favorites, value]);
      saveToLocalStorage([...favorites, value]); 
    }
  };

  const removeFromFav = (value) => {
    const newFavorties = favorites.filter(function (e) {
      return e.imdbID !== value;
    });
    setFavorites(newFavorties);
    saveToLocalStorage(newFavorties);
  };


  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>

      <div className="row">

        {!movieId ? (
          <>
            <MovieList movies={movies} getId={getId}/>
          </>
        ) : (
          <Movie id={movieId} setId={getId} addToFav={addToFav} />
        )}

      </div>
 
        <>

            <h1>Favorites:</h1>

            <div className="row">
              <Favorites
                favorites={favorites}
                id={getId}
                removeFromFav={removeFromFav}
              />
            </div>

        </>

    </div>

  );
}

export default App;
