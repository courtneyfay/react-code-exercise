import { ChangeEvent, FormEvent, useState } from 'react';
import styled from 'styled-components';
import Label from '../styled-components/Label';
import Input from '../styled-components/Input';
import { PrimaryButton } from '../styled-components/Button';

const FormWrapper = styled.form`
    width: 45%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
`;

const SearchInput = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        console.log('hitting handleSubmit', searchTerm)
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
