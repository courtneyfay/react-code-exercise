import { ResultType } from '../views/Search';
import { SecondaryButton } from '../styled-components/Button';
import Span from '../styled-components/Span';
import { DropdownSelect, DropdownOption } from '../styled-components/Dropdown';
import styled from 'styled-components';
import repositorySearch from '../services/repositorySearch';
import { ChangeEvent } from 'react';

const Wrapper = styled.div`
    width: 50%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: center;
`;

interface Props {
    setResults: (arg0: ResultType[]) => void
    setError: (arg0: string) => void
    setLoading: (arg0: boolean) => void
    setFilteredResults: (arg0: ResultType[]) => void
    searchTerm: string
    results?: ResultType[]
}

const SortAndFilter = ({ searchTerm, results, setLoading, setError, setResults, setFilteredResults }: Props) => {
    const languageOptions = results?.map(result => result.language);

    const handleFilter = (e: ChangeEvent<HTMLSelectElement>) => {
        const language = e.target.value;
        const filteredResults = results?.filter(result => {
            return result.language === language;
        });
        if (filteredResults) {
            setFilteredResults(filteredResults)
        }
    }

    const handleSort = async (sort?: string) => {
        setLoading(true);

        const response = await repositorySearch({searchTerm, sort});

        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            setError(message);
        }
        
        const responseJSON = await response.json();
        const items = responseJSON?.items;
        
        setResults(items);
        setLoading(false);
    }

    if (!results) return null;

    return (
        <Wrapper>
            <Span>Sort by:</Span>
            <SecondaryButton onClick={() => handleSort()}>Best Match (default)</SecondaryButton>
            <SecondaryButton onClick={() => handleSort('stars')}>Stars</SecondaryButton>
            <Span>Filter by:</Span>
            <DropdownSelect
                name="language"
                id="language-select"
                onChange={(e) => handleFilter(e)}
            >
                <DropdownOption value="">--Language--</DropdownOption>
                {languageOptions?.map(option => {
                    return (
                        <DropdownOption
                            value={option}
                            key={option}
                        >
                            {option}
                        </DropdownOption>
                    )
                })}
            </DropdownSelect>
        </Wrapper>
        )
}

export default SortAndFilter;