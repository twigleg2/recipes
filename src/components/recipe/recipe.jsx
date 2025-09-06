import styles from './recipe.module.css';
import Ingredients from "../ingredients/ingredients";
import Instructions from "../instructions/instructions";

export default function Recipe({ recipe: { name, ingredients, instructions } }) {
    return (
        <>
            <h1>{name}</h1>
            <Ingredients ingredients={ingredients} />
            <Instructions instructions={instructions} />
        </>
    )


}