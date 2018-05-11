import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from '../App';
import SearchOptions from '../SearchOptions';

import "isomorphic-fetch";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('search options renders correctly', () => {
  const tree = renderer.create(
    <SearchOptions />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

