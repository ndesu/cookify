import styles from "../page.module.css";
import RecipeCard from "./RecipeCard";

export default function Recipes({recipes}) {
    console.log(recipes)
    return (
        <div className={styles.mainWrapper}>
            <div className={styles.title}>
                <h1 className={styles.h1}>try these recipes!</h1>
            </div>
            <div className={styles.recipeContainer}>
                {recipes.map((recipe, i) => 
                    <RecipeCard key={i} title={recipe.title} imageURL={recipe.image} neededIngredients={recipe.missedIngredients}/>
                )}
            </div>
        </div>
    )
}