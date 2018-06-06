import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppTitle from './AppTitle';

class Film extends React.Component {

    constructor(props) {
        super(props);
        this.state = {loaded: false, selectedMovie: {}};
    }

    componentDidMount() {
        fetch("http://react-cdp-api.herokuapp.com/movies/" + this.props.match.params.id).
            then(result => {
                return result.json();
            }).
            then((response) => {
                this.setState({...this.state, loaded: true, selectedMovie: response});
            });
    }

    render() {
        if (this.state.loaded) {
            return (
                <div className="Film">
                    {AppTitle}
                    <p align="right"><Link to="/">Search</Link></p>
                    <p><img src={this.state.selectedMovie.poster_path} /></p>
                    <p>{this.state.selectedMovie.title}</p>
                    <p>{this.state.selectedMovie.tagline}</p>
                    <p>{this.state.selectedMovie.release_date} {this.state.selectedMovie.runtime} min</p>
                    <p></p>
                    <p>{this.state.selectedMovie.overview}</p>
                </div>
            );
        } else {
            return (
                <div className="Film">
                    Loading ...
                </div>
            );
        }
        
    }
}

export default Film;