import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from "enzyme";
import ErrorBoundary from '../ErrorBoundary';

describe("ErrorBoundary", () => {
    let mountedErrorBoundary;
    let initialText = "<p>some text</p>";
    const errorBoundary = () => {
        if (!mountedErrorBoundary) {
            mountedErrorBoundary = shallow(
                <ErrorBoundary children={initialText}/>
            );
        }
        return mountedErrorBoundary;
    }

    beforeEach(() => {
        mountedErrorBoundary = undefined;
    });

    it('renders no error by default', () => {
        const tree = renderer.create(
          <ErrorBoundary children="<p>some text</p>"/>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders error on exception", () => {
        errorBoundary().instance().componentDidCatch("some error", "");
        errorBoundary().update();
        expect(errorBoundary().html()).toEqual("<h1>Something went wrong officer ...</h1>");
    });
});
