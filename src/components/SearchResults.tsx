import { Table, TableRow, TableHeader, TableData } from '../styled-components/Table';
import { ResultType } from '../views/Search';

interface Props {
    results?: ResultType[]
}

const SearchResults = ({ results }: Props ) => {
    return (
        <Table>
            <thead>
                <TableRow>
                    <TableHeader>Repo Name</TableHeader>
                    <TableHeader>GitHub URL</TableHeader>
                </TableRow>
            </thead>
            <tbody>
                {results?.map(result => {
                    return (
                        <TableRow key={result.git_url}>
                            <TableData>{result.name}</TableData>
                            <TableData>{result.git_url}</TableData>
                        </TableRow>
                    )
                })}
            </tbody>
        </Table>
    )
}

export default SearchResults;