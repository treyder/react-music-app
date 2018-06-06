import {
    SEARCH_MOVIES_BEGIN,
    SEARCH_MOVIES_SUCCESS,
    SEARCH_MOVIES_FAILURE,
    SEARCH_TEXT_CHANGE,
    SEARCH_BY_CHANGE,
    SEARCH_MOVIES_REDIRECT
} from '../actions/searchActionTypes';

export function fetchMovies(baseServiceUrl, searchBy, searchText) {
    
    return dispatch => {
        dispatch(searchMoviesBegin());
        return fetch(baseServiceUrl + "/movies?searchBy=" + searchBy + "&search=" + searchText).
            then(result => {
                return result.json();
            }).
            then((response) => {
                dispatch(searchMoviesSuccess(response.data));
            }).
            catch(error => dispatch(searchMoviesError(error)));
    };
};

export const redirectToSearchForMovies = (searchBy, searchText) => ({
    type: SEARCH_MOVIES_REDIRECT,
    searchBy,
    searchText
});

export const searchByChange = searchBy => ({
    type: SEARCH_BY_CHANGE,
    searchBy
})

export const searchTextChange = searchText => ({
    type: SEARCH_TEXT_CHANGE,
    searchText
});

export const searchMoviesBegin = () => ({
    type: SEARCH_MOVIES_BEGIN
});
  
export const searchMoviesSuccess = movies => ({
    type: SEARCH_MOVIES_SUCCESS,
    payload: { movies }
});
  
export const searchMoviesError = error => ({
    type: SEARCH_MOVIES_FAILURE,
    payload: { error }
});
