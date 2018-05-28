



const SET_SEARCH_BY = "SET_SEARCH_BY";

function searchMovie(searchText) {
    return {
        type: SEARCH_MOVIE,
        searchText
    };
};

function setSearchBy(searchBy) {
    return {
        type: SET_SEARCH_BY,
        searchBy
    };
};
