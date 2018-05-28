import {
    SEARCH_MOVIES_BEGIN,
    SEARCH_MOVIES_SUCCESS,
    SEARCH_MOVIES_FAILURE,
    SEARCH_TEXT_CHANGE,
    SEARCH_BY_CHANGE
} from '../actions/searchActionTypes';

const initialState = {
    movies: undefined,
    loading: false,
    error: null,
    searchBy: "title"
};

export default function searchReducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH_BY_CHANGE:
            return {
                ...state,
                searchBy: action.searchBy
            };
        case SEARCH_TEXT_CHANGE:
            return {
                ...state,
                searchText: action.searchText
            };
        case SEARCH_MOVIES_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };

        case SEARCH_MOVIES_SUCCESS:
            return {
                ...state,
                loading: false,
                movies: [...action.payload.movies]
            };

        case SEARCH_MOVIES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                movies: []
            };

        default:
            return state;
    }
}