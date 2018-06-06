import {
    SEARCH_MOVIES_BEGIN,
    SEARCH_MOVIES_SUCCESS,
    SEARCH_MOVIES_FAILURE,
    SEARCH_TEXT_CHANGE,
    SEARCH_BY_CHANGE,
    SEARCH_MOVIES_REDIRECT
} from '../actions/searchActionTypes';

const initialState = {
    movies: undefined,
    loading: false,
    error: null,
    searchBy: "title"
};

export default function searchReducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH_MOVIES_REDIRECT:
            return {
                ...state,
                searchBy: action.searchBy,
                searchText: action.searchText,
                redirect: true
            }
        case SEARCH_BY_CHANGE:
            return {
                ...state,
                searchBy: action.searchBy,
                redirect: false
            };
        case SEARCH_TEXT_CHANGE:
            return {
                ...state,
                searchText: action.searchText,
                redirect: false
            };
        case SEARCH_MOVIES_BEGIN:
            return {
                ...state,
                loading: true,
                error: null,
                redirect: false
            };

        case SEARCH_MOVIES_SUCCESS:
            return {
                ...state,
                loading: false,
                movies: [...action.payload.movies],
                redirect: false
            };

        case SEARCH_MOVIES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                movies: [],
                redirect: false
            };

        default:
            return state;
    }
}