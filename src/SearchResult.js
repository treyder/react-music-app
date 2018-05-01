import React from 'react';
import MovieItemList from './MovieItemList';

class SearchResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            moviesList: undefined,
            sortBy: "date"
        }

        fetch("http://react-cdp-api.herokuapp.com/movies?searchBy=title").
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
        if (this.state.moviesList == undefined) {
            return (
                <div className="Search-result">
                    Start searching ...
                </div>
            );
        } else if (this.state.moviesList.length == 0) { 
            return (
                <div className="Search-result">
                    No films found
                </div>
            );
        }
        else {
            return (
                <div className="Search-result SearchResult-column">
                    {this.state.moviesList.map((item) => <MovieItemList key={item.id} title={item.title} img={item.poster_path} genre={item.genres} rating={item.vote_count} />)}
                </div>
            );
        }
    }
}

export default SearchResult;