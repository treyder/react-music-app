import React from "react";
import { mount } from "enzyme";
import MovieItemList from "../MovieItemList";

describe("MovieItemList", () => {
    let props;
    let mountedMovieItemList;
    const movieItemList = () => {
        if (!mountedMovieItemList) {
            mountedMovieItemList = mount(
                <MovieItemList {...props} />
            );
        }
        return mountedMovieItemList;
    }

    beforeEach(() => {
        props = {
            img: "http:/some_url.jpg",
            title: "test-title",
            rating: 1055,
            genre: ["test-genre1", "test-genre2"],
        };
        mountedMovieItemList = undefined;
    });

    it("top div is rendered", () => {
        const div = movieItemList().find("div");
        expect(div.length).toBeGreaterThan(0);
    });
});