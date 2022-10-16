import { Pokemon } from "./pokemon";

export interface Resources {
    count: number;
    next?: string;
    previous?: string;
    results: [{ 
        name: string,
        url: string,
    }];
}