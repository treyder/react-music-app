import React from "react";
import Button from 'material-ui/Button';

class SearchOptions extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            titleOptionColor: 'primary',
            genreOptionColor: 'secondary'
        };
        this.handleTitleOptionChange = this.handleTitleOptionChange.bind(this);
        this.handleGenreOptionChange = this.handleGenreOptionChange.bind(this);
    }

    handleTitleOptionChange() {
        this.setState({
            titleOptionColor: 'primary',
            genreOptionColor: 'secondary'
        });
    }

    handleGenreOptionChange() {
        this.setState({
            titleOptionColor: 'secondary',
            genreOptionColor: 'primary'
        });
    }

    render() {
        return (
            <div className="Search-options-table">
                <div className="Search-options-row">
                    <div className="Search-options-cell">SEARCH BY</div>
                    <Button size="small" id="titleButton" variant="raised" color={this.state.titleOptionColor} onClick={this.handleTitleOptionChange}>
                        TITLE
                    </Button>
                    <Button size="small" id="genreButton" variant="raised" color={this.state.genreOptionColor} onClick={this.handleGenreOptionChange}>
                        GENRE
                    </Button>
                </div>
            </div>
        );
    }
}

export default SearchOptions;