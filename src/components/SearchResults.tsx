import { Table, TableRow, TableHeader, TableData } from '../styled-components/Table';
import { ResultType } from '../types/ResultType';
import StyledLink from '../styled-components/StyledLink';

interface Props {
    error?: string
    results?: ResultType[]
    loading?: boolean
    filteredResults?: ResultType[]
    setDetail: (arg0?: ResultType) => void
}

const SearchResults = ({
        setDetail,
        results,
        error,
        loading,
        filteredResults,
    }: Props ) => {
    const displayResults = filteredResults ? filteredResults : results;
    const handleClick = (repoId: number) => {
        const detail = results?.filter(result => {
            return result.id === repoId;
        })[0];
        setDetail(detail);
    }

    const tableBody = () => {
        if (error) return <tr><td>{error}</td></tr>
        if (loading) return <tr><td>Loading ...</td></tr>

        return displayResults?.map(result => {
            return (
                <TableRow key={result.html_url}>
                    <TableData>
                        <StyledLink to={`${result.id}`} onClick={() => handleClick(result.id)}>
                            {result.name}
                        </StyledLink>
                    </TableData>
                    <TableData>{result.stargazers_count}</TableData>
                    <TableData>{result.language}</TableData>
                </TableRow>
            )
        })
    }

    return (
        <Table>
            <thead>
                <TableRow>
                    <TableHeader>Repo Name</TableHeader>
                    <TableHeader>Star Count</TableHeader>
                    <TableHeader>Language</TableHeader>
                </TableRow>
            </thead>
            <tbody>
                {tableBody()}
            </tbody>
        </Table>
    )
}

export default SearchResults;