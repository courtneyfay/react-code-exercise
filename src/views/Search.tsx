import { useState } from 'react';
import SearchInput from '../components/SearchInput';
import SearchResults from '../components/SearchResults';
import SortAndFilter from '../components/SortAndFilter';
import { HeaderOne } from '../styled-components/Header';
import Page from '../styled-components/Page';

type ResultType = {
    name: string
    html_url: string
    stargazers_count: number
}

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState<ResultType[]>();
    const [error, setError] = useState<string>();
    const [loading, setLoading] = useState<boolean>();

    return (
        <Page>
            <HeaderOne>
                Search Github Repositories
            </HeaderOne>
            <SearchInput
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                setResults={setResults}
                setError={setError}
                setLoading={setLoading}
            />
            <SortAndFilter
                setResults={setResults}
                setError={setError}
                setLoading={setLoading}
                searchTerm={searchTerm}
                results={results}
            />
            <SearchResults
                results={results}
                error={error}
                loading={loading}
            />
        </Page>
    )
};

export default Search;

export type {
    ResultType,
}
