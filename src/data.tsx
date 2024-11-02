interface character {
    id: number;
    name: string;
    lvl: number;
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
}

export const characters: character[] = [
    {
        id: 1,
        name: "Davi",
        lvl: 100,
        strength: 27,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 0
    },
    {
        id: 2,
        name: "Dragos",
        lvl: 100,
        strength: 0,
        dexterity: 27,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 0
    },
    {
        id: 3,
        name: "Obed",
        lvl: 100,
        strength: 0,
        dexterity: 0,
        constitution: 27,
        intelligence: 0,
        wisdom: 0,
        charisma: 0
    },
    {
        id: 4,
        name: "Bill",
        lvl: 100,
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 27,
        wisdom: 0,
        charisma: 0
    }]
