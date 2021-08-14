import { ChangeEvent, FormEvent, useState } from 'react';
import styled from 'styled-components';
import Label from '../styled-components/Label';
import Input from '../styled-components/Input';
import { PrimaryButton } from '../styled-components/Button';
import { ResultType } from '../views/Search';

const FormWrapper = styled.form`
    width: 45%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
`;

interface Props {
    setResults: (arg0: ResultType[]) => void
    setError: (arg0: string) => void
    setLoading: (arg0: boolean) => void
}

const SearchInput = ({
        setResults,
        setError,
        setLoading,
    }: Props) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        setLoading(true);

        const response = await fetch('https://api.github.com/search/repositories?' + new URLSearchParams({
            q: searchTerm,
        }));

        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            setError(message);
        }
        
        const responseJSON = await response.json();
        const items = responseJSON?.items;
        
        setResults(items);
        setLoading(false);
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
    }

    return (
        <FormWrapper
            onSubmit={handleSubmit}
        >
            <Label htmlFor="search-param">
                Choose a search term: 
            </Label>
            <Input
                type="text"
                id="search-param"
                name="search-param"
                autoComplete="off"
                value={searchTerm}
                onChange={handleChange}
            />
            <PrimaryButton
                type="submit"
                value="Submit"
            >
                Search
            </PrimaryButton>
        </FormWrapper>
    )
};

export default SearchInput;
