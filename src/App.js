import React, { Component } from 'react';
import logo from './logo.svg';
import AppTitle from './AppTitle';
import SearchHeader from './SearchHeader';
import SearchForm from './SearchForm';
import ErrorBoundary from './ErrorBoundary';
import Footer from './Footer';

import './css/App.css';

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <div className="App">

          <div className="Search-container">
            <img src={logo} className="App-logo" alt="logo" />
            {AppTitle}
            {SearchHeader}
            <SearchForm/>
          </div>

          {Footer}
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
