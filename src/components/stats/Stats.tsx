import { characterSheet } from "../../App.tsx";
import "./stats.css";

export default function Stats(props: {characterStats: characterSheet, updateFunction: (updatedCharacter: characterSheet) => void }) {
    return (
        <main className="stats">
            <h2 className="stats--text">{props.characterStats.name}</h2>
            <h2 className="stats--text">XP: {props.characterStats.hp}/100</h2>
            <h2 className="stats--text">HP: {props.characterStats.xp}/100</h2>
            <h2 className="stats--title">Skills</h2>
            <h2 className="stats--text">Strength: {props.characterStats.strength}</h2>
            <h2 className="stats--text">Dexterity: {props.characterStats.dexterity}</h2>
            <h2 className="stats--text">Constitution: {props.characterStats.constitution}</h2>
            <h2 className="stats--text">Intelligence: {props.characterStats.intelligence}</h2>
            <h2 className="stats--text">Wisdom: {props.characterStats.wisdom}</h2>
            <h2 className="stats--text">Charisma: {props.characterStats.charisma}</h2>
        </main>
    );
}