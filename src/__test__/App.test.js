import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from '../App';
import rootReducer from "../reducers";
import SearchOptions from '../SearchOptions';

import "isomorphic-fetch";

it('renders without crashing', () => {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><App/></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('search options renders correctly', () => {
  const tree = renderer.create(
    <SearchOptions />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

