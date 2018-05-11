import "isomorphic-fetch";
import React from "react";
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import SearchForm from "../SearchForm";
import fetchMoviesByTitleMock from './__mocks__/fetchMoviesByTitleMock';

describe("SearchForm", () => {
    
    it("renders initial form state", () => {
        const tree = renderer.create(
            <SearchForm />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("searches by title and renders result", async () => {
        let searchForm = shallow(<SearchForm searchText="lord" searchBy="title" fetchData={fetchMoviesByTitleMock} />);
        await searchForm.instance().handleSubmit({ preventDefault: jest.fn() });
        searchForm.update();
        expect(searchForm.find('SearchResult').props().moviesList).toEqual(
            [{"genres": ["test genre"], "id": 0, "poster_path": "img_src", "title": "some title", "vote_count": 1055}]
        );
    });

    it("searches with default fetch", async () => {
        let searchForm = shallow(<SearchForm searchText="lord" searchBy="title" />);
        await searchForm.instance().handleSubmit({ preventDefault: jest.fn() });
        expect(searchForm.instance().fetchData).toBeDefined();
    });

    it("set search text state on input entry", () => {
        let searchForm = shallow(<SearchForm searchBy="title"/>);
        searchForm.instance().handleSearchTextChange({target: {value: "lord"}});
        expect(searchForm.state().searchText).toEqual("lord");
    });

    it("set search option", () => {
        let searchForm = shallow(<SearchForm searchBy="title"/>);
        searchForm.instance().handleSearchOptionChange({searchBy: "genres"});
        expect(searchForm.state().searchBy).toEqual("genres");
    });

});