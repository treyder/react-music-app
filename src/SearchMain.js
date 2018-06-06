import React, { Component } from 'react';
import AppTitle from './AppTitle';
import SearchHeader from './SearchHeader';
import SearchForm from './SearchForm';

class SearchMain extends React.Component {

    render() {
        return (
            <div className="Search-container">
                {AppTitle}
                {SearchHeader}
                <SearchForm/>
            </div>
          
        );
    }
}

export default SearchMain;