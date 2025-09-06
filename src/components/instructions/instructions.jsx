import styles from './instructions.module.css'

export default function Instructions({ instructions }) {
    return (
        <>
            <h2>Instructions</h2>
            <ol>
                {instructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                ))}
            </ol>
        </>
    )
}