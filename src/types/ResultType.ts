type OwnerType = {
    login: string
}

type ResultType = {
    description: string
    html_url: string
    id: number
    language: string
    name: string
    owner: OwnerType
    stargazers_count: number
    updated_at: string
}

export type {
    ResultType
};