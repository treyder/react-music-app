import React from "react";
import { mount, shallow } from "enzyme";
import Button from 'material-ui/Button';
import SearchOptions from "../SearchOptions";

describe("SearchOptions", () => {
    let props;
    let mountedSearchOptions;
    const searchOptions = () => {
        if (!mountedSearchOptions) {
            mountedSearchOptions = mount(
                <SearchOptions {...props} />
            );
        }
        return mountedSearchOptions;
    }

    beforeEach(() => {
        props = {
            actionOnChange: function() {
                
            }
        };
        mountedSearchOptions = undefined;
    });

    it("top div is rendered", () => {
        const div = searchOptions().find("div");
        expect(div.length).toBeGreaterThan(0);
    });

    it("genre button on click should have primary color and title secondary", () => {
        let searchOptionsShallow = shallow(<SearchOptions actionOnChange={()=>{}} />);
        searchOptionsShallow.find('[id="genreButton"]').simulate("click");
        expect(searchOptionsShallow.find('[id="genreButton"]').props().color).toEqual("primary");
        expect(searchOptionsShallow.find('[id="titleButton"]').props().color).toEqual("secondary");
    });

    it("title button on click should have primary color and genre secondary", () => {
        let searchOptionsShallow = shallow(<SearchOptions actionOnChange={()=>{}} />);
        searchOptionsShallow.find('[id="titleButton"]').simulate("click");
        expect(searchOptionsShallow.find('[id="titleButton"]').props().color).toEqual("primary");
        expect(searchOptionsShallow.find('[id="genreButton"]').props().color).toEqual("secondary");
    });

});