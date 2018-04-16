import React, { Component } from 'react';
import logo from './logo.svg';
import AppTitle from './AppTitle';
import SearchHeader from './SearchHeader';
import SearchOptions from './SearchOptions';
import SearchButton from './SearchButton';

import './App.css';
import SearchInput from './SearchInput';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Search-container">
          <img src={logo} className="App-logo" alt="logo" />
          {AppTitle}
          
          {SearchHeader}
          <form>
            {SearchInput}
            <div className="Search-options-table">
              <div className="Search-options-row">
                <div className="Search-options-cell">
                  <SearchOptions/>
                </div>
                <div className="Search-options-cell">
                  {SearchButton}
                </div>
              </div>
            </div>
          </form>
        </div>

        
        
      </div>
    );
  }
}

export default App;
