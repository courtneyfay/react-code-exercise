interface Props {
    searchTerm: string
    sort?: string
}

const respositorySearch = async ({ searchTerm, sort }: Props) => {
    let urlSearchParams = new URLSearchParams({
        q: searchTerm,
        // default sort is best match
    });
    if (sort) {
        urlSearchParams = new URLSearchParams({
            q: searchTerm,
            sort,
        });
    }

    return await fetch('https://api.github.com/search/repositories?' + urlSearchParams);
}

export default respositorySearch;