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
                <TableRow key={result.git_url}>
                    <TableData>{result.name}</TableData>
                    <TableData>{result.git_url}</TableData>
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
                </TableRow>
            </thead>
            <tbody>
                {tableBody()}
            </tbody>
        </Table>
    )
}

export default SearchResults;