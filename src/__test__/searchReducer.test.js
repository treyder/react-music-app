import reducer from '../reducers/searchReducer';
import * as types from '../actions/searchActionTypes';

describe('search reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            {
                movies: undefined,
                loading: false,
                error: null,
                searchBy: "title"
            }
        );
    })

    it('should handle search reducer action handling', () => {
        expect(
            reducer([], {
                type: types.SEARCH_BY_CHANGE,
                searchBy: 'genres'
            })
        ).toEqual(
            {
                searchBy: 'genres'
            }
        );

        expect(
            reducer([], {
                type: types.SEARCH_TEXT_CHANGE,
                searchText: 'lord'
            })
        ).toEqual(
            {
                searchText: 'lord'
            }
        );

        expect(
            reducer([], {
                type: types.SEARCH_MOVIES_BEGIN
            })
        ).toEqual(
            {
                loading: true,
                error: null
            }
        );

        expect(
            reducer([], {
                type: types.SEARCH_MOVIES_SUCCESS,
                payload: {
                    movies: [{title: "title1"}]
                }
            })
        ).toEqual(
            {
                loading: false,
                movies: [{title: "title1"}]
            }
        );

        expect(
            reducer([], {
                type: types.SEARCH_MOVIES_FAILURE,
                payload: {
                    error: {message: "404"}
                }
            })
        ).toEqual(
            {
                loading: false,
                error: {message: "404"},
                movies: []
            }
        );

        /*expect(
            reducer(
                [
                    {
                        text: 'Use Redux',
                        completed: false,
                        id: 0
                    }
                ],
                {
                    type: types.ADD_TODO,
                    text: 'Run the tests'
                }
            )
        ).toEqual([
            {
                text: 'Run the tests',
                completed: false,
                id: 1
            },
            {
                text: 'Use Redux',
                completed: false,
                id: 0
            }
        ])*/
    });
});