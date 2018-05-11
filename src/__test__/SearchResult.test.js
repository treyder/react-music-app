import React from "react";
import renderer from 'react-test-renderer';
import SearchResult from "../SearchResult";

describe("SearchResult", () => {
    
    it("renders initial state to - Start searching", () => {
        const tree = renderer.create(
            <SearchResult />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders in case of no results - No films found", () => {
        const tree = renderer.create(
            <SearchResult moviesList={[]}/>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders list of movies - List", () => {
        const tree = renderer.create(
            <SearchResult moviesList={[{
                id:0,
                title: "some title",
                poster_path: "img_src",
                genres: ["test genre"],
                vote_count: 1055
            },
            {
                id:1,
                title: "some title2",
                poster_path: "img_src2",
                genres: ["test genre2"],
                vote_count: 1056
            }
        ]}/>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

});