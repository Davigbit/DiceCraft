import { characterSheet } from "../../App.tsx";
import "./sidebar.css";

export default function Sidebar(props: {characterData: characterSheet[], currentId: number, addFunction: () => void, deleteFunction: (id: number) => void, updateId: (id: number) => void;}) {
    const characterList = props.characterData.map(character => {
        let classes: string;
        if (props.currentId === character.id) {
            classes = "sidebar--character selected";
        }
        else {
            classes = "sidebar--character";
        }

        return (<button className={classes} onClick={() => props.updateId(character.id)} key={character.id}>{character.name}</button>);
    });

    return (
        <nav className="sidebar">
        <div className="sidebar-buttons">
                <button className="sidebar--button add" onClick={() => props.addFunction()}>+</button>
                <button className="sidebar--button del" onClick={() => props.deleteFunction(props.currentId)}>-</button>
            </div>
            <div className="sidebar-characters">
                {characterList.length > 0 && characterList}
            </div>
        </nav>
    );
}
