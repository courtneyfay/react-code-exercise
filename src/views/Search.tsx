import { useState } from 'react';
import SearchInput from '../components/SearchInput';
import SearchResults from '../components/SearchResults';
import { HeaderOne } from '../styled-components/Header';
import Page from '../styled-components/Page';

type ResultType = {
    name: string
    git_url: string
}

const Search = () => {
    const [results, setResults] = useState<ResultType[]>();

    return (
        <Page>
            <HeaderOne>Search Github Repositories</HeaderOne>
            <SearchInput setResults={setResults} />
            <SearchResults results={results} />
        </Page>
    )
};

export default Search;

export type {
    ResultType,
}
