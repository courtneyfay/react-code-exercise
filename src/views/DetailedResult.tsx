import { Link, useParams } from 'react-router-dom';

interface RouteType {
    id: string
}

const DetailedResult = () => {
    const { id } = useParams<RouteType>();

    return (
        <>
            <Link to="/">&#8592; Back to Search</Link>
            <div>Detailed Result page here</div>
            <div>{id}</div>
        </>
    )
};

export default DetailedResult;