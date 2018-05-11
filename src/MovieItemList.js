import React from 'react';

class MovieItemList extends React.Component {
    render() {
        return (
            <div className="movieItemList">
                <img src={this.props.img} />
                {this.props.title} {this.props.rating}
                {this.props.genre}
            </div>
        );
    }
}

export default MovieItemList;