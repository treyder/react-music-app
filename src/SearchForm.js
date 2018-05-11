import React from 'react';
import Button from 'material-ui/Button';

import SearchOptions from './SearchOptions';
import SearchResult from './SearchResult';

class SearchForm extends React.Component {

    constructor(props) {
        super(props);
        this.baseServiceUrl = "http://react-cdp-api.herokuapp.com";
        this.state = {
            searchText: props.searchText ? props.searchText : "",
            searchBy: props.searchBy ? props.searchBy : "title"
        };
        this.fetchData = props.fetchData ? props.fetchData : function (...args) {
            return fetch(args[0], args[1]);
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
        this.handleSearchOptionChange = this.handleSearchOptionChange.bind(this);
    }

    handleSearchTextChange(event) {
        const newState = Object.assign({}, this.state);
        newState.searchText = event.target.value;
        this.setState(newState);
    }

    handleSearchOptionChange(event) {
        console.log('Search option changed to: ' + event.searchBy);
        const newState = Object.assign({}, this.state);
        newState.searchBy = event.searchBy;
        this.setState(newState);
    }

    handleSubmit(event) {
        event.preventDefault();
        return this.fetchData(this.baseServiceUrl + "/movies?searchBy=" + this.state.searchBy + "&search=" + this.state.searchText).
            then(result => {
                return result.json();
            }).
            then((response) => {
                const newState = Object.assign({}, this.state);
                newState.moviesList = Object.assign([], response.data);
                this.setState(newState);
            });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" id="searchText" value={this.state.searchText} onChange={this.handleSearchTextChange} className="Search-input" />
                <div className="Search-options-table">
                    <div className="Search-options-row">
                        <div className="Search-options-cell">
                            <SearchOptions actionOnChange={this.handleSearchOptionChange}/>
                        </div>
                        <div className="Search-options-cell">
                        <Button id="submitButton" variant="raised" color="primary" type="submit">SEARCH</Button>
                        </div>
                    </div>
                </div>
                <SearchResult moviesList={this.state.moviesList}/>
            </form>
        );
    }
}

export default SearchForm;