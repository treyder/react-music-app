import React from 'react';

import SearchInput from './SearchInput';
import SearchOptions from './SearchOptions';
import SearchButton from './SearchButton';

const SearchForm = (
    <form>
        {SearchInput}
        <div className="Search-options-table">
            <div className="Search-options-row">
                <div className="Search-options-cell">
                    <SearchOptions />
                </div>
                <div className="Search-options-cell">
                    {SearchButton}
                </div>
            </div>
        </div>
    </form>
);

export default SearchForm;