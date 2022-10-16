import { Details } from "./details";
import { Species } from "./species";

export interface Pokemon {
    id: number,
    details: Details,
    species: Species
}