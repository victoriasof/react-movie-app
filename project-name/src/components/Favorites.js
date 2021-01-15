import React from "react";

const Favorites = (props) => {
    return (
        <>
        {props.favorites && props.favorites.map((movie, index) => (

            <div key={index}>
                <div className="image-container d-flex justify-content-start m-3">
                    <img
                      src={movie.Poster}
                      onClick={() => {
                          props.id(movie.imdbID);
                      }}
                      alt="movie"
                      ></img>
                    
                </div>

                <button
                  className="btn btn-primary btn-sm m-2"
                  onClick={() => {
                      props.removeFromFav(movie.imdbID);
                  }}

                  Remove from Favorites
                  ></button>
            </div>

        ))}
        </>

    );
};

export default Favorites 