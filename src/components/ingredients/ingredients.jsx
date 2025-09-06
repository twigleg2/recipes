import styles from './ingredients.module.css';

export default function Ingredients({ ingredients }) {

    return (
        <>
            <h2>Ingredients:</h2>
            <ul>
                {ingredients.map((ingredient, index) => (
                    <li className={styles.li} key={index}>{ingredient}</li>
                ))}
            </ul>
        </>
    )
}