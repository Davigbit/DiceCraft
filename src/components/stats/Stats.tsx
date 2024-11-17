import { characterSheet } from "../../App.tsx";
import {useState} from "react";
import "./stats.css";

type values = number | string

export default function Stats(props: {characterStats: characterSheet, updateFunction: (updatedCharacter: characterSheet) => void }) {
    const [inputValues, setInputValues] = useState<number[]>([0, 0, 0]);
    function updateCharacter(updatedKey: string, updatedValue: values) {
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
                            <h2 className="stats--text" style={{textAlign: "center"}}>{key.toUpperCase()}: </h2>
                            <input className="stats--input" type="text" value={props.characterStats["name"]} onChange={event => updateCharacter("name", event.target.value)} />
                        </div>);
                }
                else if (key === "hp" || key === "xp") {
                    list.push(
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                            <h2 className="stats--text">{key.toUpperCase()}: </h2>
                            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", width: "200px"}}>
                                <h2 className="stats--text" style={{textAlign: "center"}}>{props.characterStats[key]}</h2>
                                <input className="stats--number" type="number" onChange={event => {
                                    if (key === "hp") {
                                        setInputValues([Number(event.target.value) ,inputValues[1], inputValues[2]]);
                                    }
                                    else if (key === "xp") {
                                        setInputValues([inputValues[0], Number(event.target.value), inputValues[2]]);
                                    }
                                }}/>
                                <button className="stats--button" onClick={() => {
                                    if (key === "hp") {
                                        updateCharacter(key, props.characterStats[key] + inputValues[0]);
                                    }
                                    else if (key === "xp") {
                                        updateCharacter(key, props.characterStats[key] + inputValues[1]);
                                    }
                                }}>Add</button>
                            </div>
                            <progress className={"stats--bar " + `${key}`} value={props.characterStats[key]} max="100"></progress>
                        </div>);
                }
                else if (key === "lvl") {
                    list.push(
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                            <h2 className="stats--text">{key.toUpperCase()}: </h2>
                            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", width: "200px"}}>
                                <h2 className="stats--text" style={{textAlign: "center"}}>{props.characterStats[key]}</h2>
                                <input className="stats--number" type="number" onChange={event => setInputValues([inputValues[0], inputValues[1], Number(event.target.value)])}/>
                                <button className="stats--button" onClick={() => updateCharacter(key, props.characterStats[key] + inputValues[2])}>Add</button>
                            </div>
                        </div>);
                }
                else if (typeof props.characterStats[key] === "number") {
                    list.push(
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                            <h2 className="stats--text">{key.toUpperCase()}: </h2>
                            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", width: "200px"}}>
                                <button className="stats--button" onClick={() => updateCharacter(key, props.characterStats[key] - 1)}>-</button>
                                <h2 className="stats--text" style={{textAlign: "center"}}>{props.characterStats[key]}</h2>
                                <button className="stats--button" onClick={() => updateCharacter(key, props.characterStats[key] + 1)}>+</button>
                            </div>
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
