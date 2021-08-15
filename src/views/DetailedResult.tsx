import StyledLink from '../styled-components/StyledLink';
import { ResultType } from '../types/ResultType';

interface Props {
    detail?: ResultType
}

const DetailedResult = ({ detail }: Props) => {
    return (
        <>
            <StyledLink to="/">&#8592; Back to Search</StyledLink>
            { detail && (
                <>
                    <div>&#129498; repo owner name: {detail?.owner.login}</div>
                    <div>&#128996; repo name: {detail.name}</div>
                    <div>&#10133; description: {detail.description}</div>
                    <div>&#128279; github link: {detail.html_url}</div>
                    <div>&#128338; last updated: {detail.updated_at}</div>
                    <div>&#9733; stars: {detail.stargazers_count}</div>
                    <div>&#9000; language: {detail.language}</div>
                </>
            )}
        </>
    )
};

export default DetailedResult;