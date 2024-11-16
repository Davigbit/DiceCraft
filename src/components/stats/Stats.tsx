import { characterSheet } from "../../App.tsx";
import "./stats.css";

export default function Stats(props: {characterStats: characterSheet, updateFunction: (updatedCharacter: characterSheet) => void }) {
    function updateCharacter(updatedKey: string, updatedValue: any) {
        const updatedCharacter: characterSheet = props.characterStats;
        for (const key in updatedCharacter) {
            if (key === updatedKey) {
                updatedCharacter[key] = updatedValue;
            }
        }
        props.updateFunction(updatedCharacter);
    }

    const statsList = () => {
        const list = []
        for (const key in props.characterStats) {
            if (key !== "id") {
                if (typeof props.characterStats[key] === "string") {
                    list.push(
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                            <h2 className="stats--text">{key.toUpperCase()}: </h2>
                            <input className="stats--input" type="text" value={props.characterStats["name"]} onChange={event => updateCharacter("name", event.target.value)} />
                        </div>);
                }
                else if (key === "hp" || key === "xp") {
                    list.push(
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                            <h2 className="stats--text">{key.toUpperCase()}: </h2>
                            <button className="stats--button" onClick={() => updateCharacter(key, props.characterStats[key] - 1)}>-</button>
                            <h2 className="stats--text">{props.characterStats[key]}</h2>
                            <button className="stats--button" onClick={() => updateCharacter(key, props.characterStats[key] + 1)}>+</button>
                            <progress className={"stats--bar " + `${key}`} value={props.characterStats[key]} max="100"></progress>
                        </div>);
                }
                else if (typeof props.characterStats[key] === "number") {
                    list.push(
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                            <h2 className="stats--text">{key.toUpperCase()}: </h2>
                            <button className="stats--button" onClick={() => updateCharacter(key, props.characterStats[key] - 1)}>-</button>
                            <h2 className="stats--text">{props.characterStats[key]}</h2>
                            <button className="stats--button" onClick={() => updateCharacter(key, props.characterStats[key] + 1)}>+</button>
                        </div>);
                }
            }
        }
        return list;
    };

    return (
        <main className="stats">
            {statsList()}
        </main>
    );
}
