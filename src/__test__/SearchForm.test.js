import "isomorphic-fetch";
import React from "react";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { SearchForm } from "../SearchForm";
import rootReducer from "../reducers";

const middlewares = [thunk];
const store = configureMockStore(middlewares);

describe("SearchForm", () => {

    it("renders initial form state", () => {
        const tree = renderer.create(
            <SearchForm store={store}/>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("display error on failure", () => {
        const errorMessage = {message: '404'};
        let searchForm = shallow(<SearchForm error={errorMessage} />);
        expect(searchForm.html()).toEqual("<div>Error! 404</div>");
    });

    it("display loading", () => {
        let searchForm = shallow(<SearchForm loading={true} />);
        expect(searchForm.html()).toEqual("<div>Loading...</div>");
    });

    it("executes search", async () => {
        const dispatchMock = jest.fn();
        let searchForm = shallow(<SearchForm dispatch={dispatchMock} store={store} searchText="lord" searchBy="title" />);
        await searchForm.instance().handleSubmit({ preventDefault: jest.fn() });
        expect(dispatchMock).toBeCalled();
    });

    it("changes search text", () => {
        const dispatchMock = jest.fn();
        let searchForm = shallow(<SearchForm dispatch={dispatchMock} store={store} searchText="" searchBy="title" />);
        searchForm.find('#searchText'). simulate('change', {target: {name: "searchText", value: "lord"}});
        expect(dispatchMock).toBeCalled();
    });

    it("changes search option for form", () => {
        const dispatchMock = jest.fn();
        let searchForm = mount(<SearchForm dispatch={dispatchMock} store={store} searchText="" searchBy="title" />);
        searchForm.find('Button#titleButton').simulate('click');
        expect(dispatchMock).toBeCalled();
    });

});