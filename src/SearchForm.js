import React from 'react';
import { connect } from "react-redux";
import Button from 'material-ui/Button';

import SearchOptions from './SearchOptions';
import SearchResult from './SearchResult';

import { fetchMovies, searchTextChange, searchByChange } from './actions/searchActions';

export class SearchForm extends React.Component {

    constructor(props) {
        super(props);
        
        this.baseServiceUrl = "http://react-cdp-api.herokuapp.com";
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.dispatch(fetchMovies(this.baseServiceUrl, this.props.searchBy, this.props.searchText));
    }

    render() {
        const { error, loading, movies, searchText } = this.props;

        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            return <div>Loading...</div>;
        }

        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" id="searchText" onChange={event => this.props.dispatch(searchTextChange(event.target.value))} className="Search-input"/>
                <div className="Search-options-table">
                    <div className="Search-options-row">
                        <div className="Search-options-cell">
                            <SearchOptions actionOnChange={event => this.props.dispatch(searchByChange(event.searchBy))} />
                        </div>
                        <div className="Search-options-cell">
                            <Button id="submitButton" variant="raised" color="primary" type="submit">SEARCH</Button>
                        </div>
                    </div>
                </div>
                <SearchResult moviesList={this.props.movies} />
            </form>
        );
    }
};

function mapStateToProps(state) {
    return {
        movies: state.searchReducer.movies,
        loading: state.searchReducer.loading,
        error: state.searchReducer.error,
        searchText: state.searchReducer.searchText,
        searchBy: state.searchReducer.searchBy
    }
};

export default connect(mapStateToProps)(SearchForm);