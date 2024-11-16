import Header from "./components/header/Header.tsx";
import Sidebar from "./components/sidebar/Sidebar.tsx";
import Stats from "./components/stats/Stats.tsx";
import {useEffect, useState} from "react";

export interface characterSheet {
    id: number;
    name: string;
    lvl: number;
    hp: number;
    xp: number;
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
}

export default function App() {
    const [characterList, setCharacterList] = useState<characterSheet[]>(() => JSON.parse(localStorage.getItem("characterData") as string) || []);
    const [currentId, setCurrentId] = useState<number>(-1);

    useEffect(() => {
        localStorage.setItem("characterData", JSON.stringify(characterList));
    }, [characterList]);

    function addCharacter() {
        setCharacterList([...characterList, {
            id: Math.floor(Math.random() * 9999),
            name: "Character Name",
            lvl: 1,
            hp: 100,
            xp: 0,
            strength: 0,
            dexterity: 0,
            constitution: 0,
            intelligence: 0,
            wisdom: 0,
            charisma: 0
        }]);
    }

    function deleteCharacter(id: number) {
        if (currentId === id) {
            setCurrentId(-1);
        }
        setCharacterList(characterList.filter(character => character.id !== id));
    }

    function getCurrentCharacter(id: number) {
        return characterList.find(character => character.id === id) || {
            id: Math.floor(Math.random() * 9999),
            name: "Character Name",
            lvl: 1,
            hp: 100,
            xp: 0,
            strength: 0,
            dexterity: 0,
            constitution: 0,
            intelligence: 0,
            wisdom: 0,
            charisma: 0
        };
    }

    function updateCharacterStats(updatedCharacter: characterSheet) {
        setCharacterList(characterList.map(character => character.id === updatedCharacter.id ? updatedCharacter : character));
    }

    return (
        <div>
            <Header />
            <div style={{display: "flex", flexDirection: "row"}}>
                <Sidebar characterData={characterList} currentId={currentId} addFunction={addCharacter} deleteFunction={deleteCharacter} updateId={setCurrentId} />
                {characterList.length > 0 && currentId !== -1 && <Stats characterStats={getCurrentCharacter(currentId)} updateFunction={updateCharacterStats}/>}
            </div>
        </div>
    );
}
