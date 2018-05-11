import React from 'react';
import MovieItemList from './MovieItemList';

class SearchResult extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sortBy: "date"
        }
    }

    render() {
        if (this.props.moviesList == undefined) {
            return (
                <div className="Search-result">
                    Start searching ...
                </div>
            );
        } else if (this.props.moviesList.length == 0) { 
            return (
                <div className="Search-result">
                    No films found
                </div>
            );
        }
        else {
            return (
                <div id="searchResultList" className="Search-result SearchResult-column">
                    {this.props.moviesList.map((item) => <MovieItemList key={item.id} title={item.title} img={item.poster_path} genre={item.genres} rating={item.vote_count} />)}
                </div>
            );
        }
    }
}

export default SearchResult;