import React from 'react';
import { Link } from 'react-router-dom';

class MovieItemList extends React.Component {
    render() {
        const linkUrl = "/film/" + this.props.id;
        return (
            <div className="movieItemList">
                <img src={this.props.img} />
                {this.props.title} {this.props.rating}
                {this.props.genre}
                <Link to={linkUrl}>Details</Link>
            </div>
        );
    }
}

export default MovieItemList;