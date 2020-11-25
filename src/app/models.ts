export enum Genre {
    Anime,
    Manga
}

export interface SearchOption {
    id?: number,
    q: string,
    genre: Genre
}

export interface SearchString {
    id?: number,
    q: string,
    genre: string
}

export interface JikanResult {
    airing: boolean,
    end_date: string,
    episodes: number,
    image_url: string,
    mal_id: number,
    members: number,
    rated: string,
    score: number,
    start_date: string,
    synopsis: string,
    title: string,
    type: string,
    url: string
}