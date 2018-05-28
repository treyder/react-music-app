import React from "react";
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import * as actions from '../actions/searchActions';
import * as types from '../actions/searchActionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {

    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
    })
    
    it('should handle search action', () => {

        const baseUrl = "localhost:8080";
        const searchBy = "title";
        const searchText = "lord";
        const url = baseUrl + "/movies?searchBy=" + searchBy + "&search=" + searchText;
        fetchMock.getOnce(url, { data: [{title: 'title1'}], headers: { 'content-type': 'application/json' } });

        const expectedActions = [
            { type: types.SEARCH_MOVIES_BEGIN },
            { type: types.SEARCH_MOVIES_SUCCESS, payload: { movies: [{title: 'title1'}] } }
        ]

        const store = mockStore({ movies: [] });

        return store.dispatch(actions.fetchMovies(baseUrl, searchBy, searchText)).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })

    });

    it('should handle search action error', () => {

        const baseUrl = "localhost:8080";
        const searchBy = "title";
        const searchText = "lord";
        const url = baseUrl + "/movies?searchBy=" + searchBy + "&search=" + searchText;
        const error = new Error('404');
        fetchMock.mock(url, () => {
            throw error;
        });

        const expectedActions = [
            { type: types.SEARCH_MOVIES_BEGIN },
            { type: types.SEARCH_MOVIES_FAILURE, payload: { error } }
        ]

        const store = mockStore({ movies: [] });

        return store.dispatch(actions.fetchMovies(baseUrl, searchBy, searchText)).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })

    });

    it('should create an action to change search by criteria', () => {
        const searchBy = 'title';
        const expectedAction = {
            type: types.SEARCH_BY_CHANGE,
            searchBy
        };
        expect(actions.searchByChange(searchBy)).toEqual(expectedAction);
    });

    it('should create an action to change search text', () => {
        const searchText = 'lord';
        const expectedAction = {
            type: types.SEARCH_TEXT_CHANGE,
            searchText
        };
        expect(actions.searchTextChange(searchText)).toEqual(expectedAction);
    });

    it('should create an action to indicate start of search', () => {
        const expectedAction = {
            type: types.SEARCH_MOVIES_BEGIN
        };
        expect(actions.searchMoviesBegin()).toEqual(expectedAction);
    });

    it('should create an action to handle search finish', () => {
        const movies = [{ title: 'some title1' }];
        const expectedAction = {
            type: types.SEARCH_MOVIES_SUCCESS,
            payload: { movies: [...movies] }
        };
        expect(actions.searchMoviesSuccess(movies)).toEqual(expectedAction);
    });

    it('should create an action to handle error in search', () => {
        const error = "404 occurred";
        const expectedAction = {
            type: types.SEARCH_MOVIES_FAILURE,
            payload: { error }
        };
        expect(actions.searchMoviesError(error)).toEqual(expectedAction);
    });

})

