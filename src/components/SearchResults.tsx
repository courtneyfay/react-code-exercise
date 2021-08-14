import { Table, TableRow, TableHeader, TableData } from '../styled-components/Table';
import { ResultType } from '../views/Search';

interface Props {
    error?: string
    results?: ResultType[]
    loading?: boolean
}

const SearchResults = ({
        results,
        error,
        loading,
    }: Props ) => {

    const tableBody = () => {
        if (error) return <tr><td>{error}</td></tr>
        if (loading) return <tr><td>Loading ...</td></tr>

        return results?.map(result => {
            return (
                <TableRow key={result.html_url}>
                    <TableData>{result.name}</TableData>
                    <TableData>{result.html_url}</TableData>
                    <TableData>{result.stargazers_count}</TableData>
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
                </TableRow>
            </thead>
            <tbody>
                {tableBody()}
            </tbody>
        </Table>
    )
}

export default SearchResults;