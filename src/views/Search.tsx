import React from 'react';
import SearchInput from '../components/SearchInput';
import { HeaderOne } from '../styled-components/Header';
import Page from '../styled-components/Page';

const Search = () => {
    return (
        <Page>
            <HeaderOne>Search Github Repositories</HeaderOne>
            <SearchInput />
        </Page>
    )
};

export default Search;
