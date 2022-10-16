export interface Details {
    abilities: [
        {
            abilities: {
                name: string,
                url: string,
            },
            is_hidden: boolean,
            slot: number;
        }
    ];
    base_experience: number;
    forms: [
        {
            name: string,
            url: string,
        }
    ];
    height: number;
    id: number;
    is_default: boolean;
    name: string;
    order: number;
    species: {
        name: string,
        url: string,
    };
    sprites: {
        back_default?: string,
        back_female?: string,
        back_shiny?: string,
        back_shiny_female?: string,
        front_default?: string,
        front_female?: string,
        front_shiny?: string,
        front_shiny_female?: string,
    };
    stats: [
        {
            base_stat: number,
            effort: number,
            stat: {
                name: string,
                url: string,
            };
        }
    ];
    types: [
        {
            slot: number,
            type: {
                name: string,
                url: string,
            };
        }
    ];
    weight: number;
}