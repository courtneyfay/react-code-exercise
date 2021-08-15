import { Link } from 'react-router-dom';
import { Table, TableRow, TableHeader, TableData } from '../styled-components/Table';
import { ResultType } from '../views/Search';

interface Props {
    error?: string
    results?: ResultType[]
    loading?: boolean
    filteredResults?: ResultType[]
}

const SearchResults = ({
        results,
        error,
        loading,
        filteredResults,
    }: Props ) => {
    const displayResults = filteredResults ? filteredResults : results;

    const tableBody = () => {
        if (error) return <tr><td>{error}</td></tr>
        if (loading) return <tr><td>Loading ...</td></tr>

        return displayResults?.map(result => {
            const urlParam = `/${result.name.replace(/\s/g,'')}`;

            return (
                <TableRow key={result.html_url}>
                    <TableData>
                        <Link to={urlParam}>{result.name}</Link>
                    </TableData>
                    <TableData>{result.html_url}</TableData>
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
                    <TableHeader>GitHub URL</TableHeader>
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