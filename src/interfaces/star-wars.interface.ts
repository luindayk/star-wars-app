export interface Character {
    name: string;
    gender: string;
    birthYear: string;
    eyeColor: string;
    height: string;
    mass: string;
    photo: string;
}

export interface Film {
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    characters: Character[];
    planets: string[];
    starships: string[];
    vehicles: string[];
    species: string[];
    created: Date;
    edited: Date;
    url: string;
    id: number;
    photo: string;
}