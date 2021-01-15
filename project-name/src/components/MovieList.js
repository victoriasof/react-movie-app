import React from "react";

const MovieList = ({ movies, getId }) => {
    console.log(movies);
    return (
        <>
            {movies &&
                movies.map((movie, index) => (
                    <div
                        key={index}
                        className="image-contaoiner d-flex justify-content-start m-3"
                    >
                        <img
                        src={movie.Poster}
                        onClick={() => {
                            getId(movie.imdbID)
                        }}
                        alt="movie"
                        ></img>
                    </div>

            ))}

        </>
    )        

}

export default MovieList;