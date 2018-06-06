import React from 'react';
import { connect } from "react-redux";
import MovieItemList from './MovieItemList';
import { fetchMovies } from './actions/searchActions';
import AppTitle from './AppTitle';
import SearchHeader from './SearchHeader';
import SearchForm from './SearchForm';

class SearchResult extends React.Component {

    constructor(props) {
        super(props);
        this.baseServiceUrl = "http://react-cdp-api.herokuapp.com";
        if (this.props.location) {
            const params = new URLSearchParams(this.props.location.search);
            this.searchBy = params.get('searchBy');
            this.searchText = params.get('searchText');
        }
    }

    componentDidMount() {
        if (this.searchBy && this.searchText) {
            this.props.dispatch(fetchMovies(this.baseServiceUrl, this.searchBy, this.searchText));
        }
    }

    render() {
        console.log(this.props);
        if (this.props.moviesList == undefined) {
            return (
                <div className="Search-container Search-result">
                    {AppTitle}
                    {SearchHeader}
                    <SearchForm location={this.props.location}/>
                    Start searching ...
                </div>
            );
        } else if (this.props.moviesList.length == 0) { 
            return (
                <div className="Search-container Search-result">
                    {AppTitle}
                    {SearchHeader}
                    <SearchForm location={this.props.location}/>
                    No films found
                </div>
            );
        }
        else {
            return (
                <div className="Search-container">
                    {AppTitle}
                    {SearchHeader}
                    <SearchForm location={this.props.location}/>
                    <div id="searchResultList" className="Search-result SearchResult-column">
                        {this.props.moviesList.map((item) => <MovieItemList key={item.id} id={item.id} title={item.title} img={item.poster_path} genre={item.genres} rating={item.vote_count} moviesList={this.props.moviesList} />)}
                    </div>
                </div>
            );
        }
    }   
}

function mapStateToProps(state) {
    return {
        moviesList: state.searchReducer.movies,
        loading: state.searchReducer.loading,
        error: state.searchReducer.error
    }
};

export default connect(mapStateToProps)(SearchResult);
