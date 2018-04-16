import React from "react";
import TitleOption from "./TitleOption";
import GenreOption from "./GenreOption";

class SearchOptions extends React.PureComponent {
    render() {
        return (
            <div className="Search-options-table">
                <div className="Search-options-row">
                    <div className="Search-options-cell">SEARCH BY</div>
                    {TitleOption}
                    {GenreOption}
                </div>
            </div>
        );
    }
}

export default SearchOptions;