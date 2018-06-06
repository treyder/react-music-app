import React from 'react';
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import Button from 'material-ui/Button';

import SearchOptions from './SearchOptions';
import SearchResult from './SearchResult';

import { redirectToSearchForMovies, searchTextChange, searchByChange } from './actions/searchActions';

export class SearchForm extends React.Component {

    constructor(props) {
        super(props);
        
        this.handleSubmit = this.handleSubmit.bind(this);
        
        if (this.props.location) {
            const params = new URLSearchParams(this.props.location.search);
            const searchBy = params.get('searchBy');
            if (searchBy) {
                this.props.dispatch(searchByChange(searchBy));
            }
            const searchText = params.get('searchText');
            if (searchText) {
                this.props.dispatch(searchTextChange(searchText));
            }
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.dispatch(redirectToSearchForMovies(this.props.searchBy, this.props.searchText));
    }

    render() {
        const { error, loading, movies, searchText, redirect } = this.props;

        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            return <div>Loading...</div>;
        }

        if (redirect) {
            const url = '/search/Search Query?searchBy=' + this.props.searchBy + '&searchText=' + this.props.searchText;
            return <Redirect to={url} />;
        }

        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" id="searchText" value={this.props.searchText} onChange={event => this.props.dispatch(searchTextChange(event.target.value))} className="Search-input"/>
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
        searchBy: state.searchReducer.searchBy,
        redirect: state.searchReducer.redirect
    }
};

export default connect(mapStateToProps)(SearchForm);