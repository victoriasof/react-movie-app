const getMovieRequest = async (url) => {
    const res = await fetch(url);
    const response = await res.json();

    return response;
};

export default getMovieRequest;