import { ResultType } from '../types/ResultType';
import { LinkButton, SecondaryButton } from '../styled-components/Button';
import Span from '../styled-components/Span';
import { DropdownSelect, DropdownOption } from '../styled-components/Dropdown';
import styled from 'styled-components';
import repositorySearch from '../services/repositorySearch';
import { ChangeEvent, useState } from 'react';

const Wrapper = styled.div`
    width: 50%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 0.5%;
`;

interface Props {
    setResults: (arg0: ResultType[]) => void
    setError: (arg0: string) => void
    setLoading: (arg0: boolean) => void
    setFilteredResults: (arg0: ResultType[]) => void
    searchTerm: string
    results?: ResultType[]
}

const SortAndFilter = ({
    searchTerm,
    results,
    setLoading,
    setError,
    setResults,
    setFilteredResults,
}: Props) => {
    const [selected, setSelected] = useState<string>("");

    const languageOptions = results?.reduce<string[]>(
        (accumulator: any, result: any) => {
            const alreadyThere = accumulator.some((value: string) => (value === result.language)); 
            //check to see if language already exists in the list and if language has a value/is not null
            if (!alreadyThere && result.language) {
                return [
                    ...accumulator,
                    result.language,
                ];
            }
            return accumulator;
        },
        [] // initial value
    );
    const alphabetizedLanguageOptions = languageOptions?.sort();

    const handleFilter = (e: ChangeEvent<HTMLSelectElement>) => {
        const language = e.target.value;
        setSelected(language);
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

    const handleClearFilter = (results: ResultType[]) => {
        setFilteredResults(results)
        setSelected("none");
    }

    if (!results) return null;

    return (
        <>
            <Wrapper>
                <Span>Sort by:</Span>
                <SecondaryButton onClick={() => handleSort()}>Best Match (default)</SecondaryButton>
                <SecondaryButton onClick={() => handleSort('stars')}>Stars</SecondaryButton>
            </Wrapper>
            <Wrapper>
                <Span>Filter by:</Span>
                <DropdownSelect
                    name="language"
                    id="language-select"
                    value={selected}
                    onChange={(e) => handleFilter(e)}
                >
                    <DropdownOption value="none">--Language--</DropdownOption>
                    {alphabetizedLanguageOptions?.map(option => {
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
                <LinkButton onClick={() => handleClearFilter(results)}>Clear Filter</LinkButton>
            </Wrapper>
        </>
    )
}

export default SortAndFilter;