import React, { useState, useEffect } from "react";

import getMovieRequest from "../helpers/getMovieRequest";

const Movie = (props) => {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const url = 'http://www.omdbapi.com/?i=${props.id}&apikey=487e38bb';
        getMovieRequest(url).then((response) => setMovie(response));
    });

    return (
        <>
          <div className="media">
              <img
                className="d-flex align-self-start mr-3"
                alt={movie.Title}
                src={movie.Poster}
              />

              <div className="media-body">
                  <h1 className="mt-0 title">
                      {movie.Title} {movie.Year}
                  </h1>
                  <ul>
                      <li> IMDb Rating: {movie.imdbRating}</li>
                      <li> Country: {movie.Country} </li>
                      <li> Genre: {movie.Genre} </li>
                      <li> Actors: {movie.Actors} </li>

                  </ul>

                  <h5>Plot:</h5>
                  <p> {movie.Plot} </p>

              </div>  

              <div></div>

              <div className="btn-toolbar mt-4 mb-4">
                <button 
                    className="btn btn-primary btn-sm ml-2"
                    onClick={() => {
                        props.setId("");
                    }}
                > 
                    Go Back 
                </button>
                
                <button
                  className="btn btn-primary btn-sm ml-2"
                  onClick={() => {
                      props.addToFav(movie);
                  }}
                >
                    Add to favorites
                </button>

              </div>

          </div>
        
        </>
    );
};

export default Movie;