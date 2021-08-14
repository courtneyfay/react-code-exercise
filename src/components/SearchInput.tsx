import React from 'react';
import styled from 'styled-components';
import Label from '../styled-components/Label';
import Input from '../styled-components/Input';
import { PrimaryButton } from '../styled-components/Button';

const Wrapper = styled.div`
    width: 45%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
`;

const SearchInput = () => {
    return (
        <Wrapper>
            <Label htmlFor="search-param">Choose a search term:</Label>
            <Input type="text" id="search-param" name="search-param" />
            <PrimaryButton type="submit">Search</PrimaryButton>
        </Wrapper>
    )
};

export default SearchInput;
