import { ResultType } from '../views/Search';
import { SecondaryButton } from '../styled-components/Button';
import Span from '../styled-components/Span';
import styled from 'styled-components';
import repositorySearch from '../services/repositorySearch';

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
    searchTerm: string
    results?: ResultType[]
}

const SortAndFilter = ({ searchTerm, results, setLoading, setError, setResults }: Props) => {

    const handleClick = async (sort?: string) => {
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
            <SecondaryButton onClick={() => handleClick()}>Best Match (default)</SecondaryButton>
            <SecondaryButton onClick={() => handleClick('stars')}>Stars</SecondaryButton>
        </Wrapper>
        )
}

export default SortAndFilter;