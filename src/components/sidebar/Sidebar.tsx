import { useState } from "react"
import "./sidebar.css"

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

const baseCharacter: character = {
    id: 0,
    name: "Character Name",
    lvl: 1,
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0
}

export default function Sidebar(props: {characterData: character[]}) {

    const [characterList, setCharacterList] = useState<character[]>(props.characterData)
    const [currentId, setCurrentId] = useState<number>(1)
    const characterListElements = characterList.map(character => {

        let classes: string
        if (currentId === character.id) {
            classes = "sidebar--character selected"
        }
        else {
            classes = "sidebar--character"
        }

        return (<button className={classes} onClick={() => setCurrentId(character.id)}
                        key={character.id}>{character.name}</button>)
    })

    function addCharacter(character: character) {
        setCharacterList([...characterList, {...character, id: Math.random()}])
    }

    function deleteCharacter(id: number) {
        setCharacterList(characterList.filter(character => character.id !== id))
    }

    return (
        <nav className="sidebar">
        <div className="sidebar-buttons">
                <button className="sidebar--button add" onClick={() => addCharacter(baseCharacter)}>+</button>
                <button className="sidebar--button del" onClick={() => deleteCharacter(currentId)}>-</button>
            </div>
            <div className="sidebar-characters">
                {characterListElements}
            </div>
        </nav>
    )
}
