import styles from "../page.module.css"

export default function RecipeCard({ title, imageURL, neededIngredients }) {
    return (
        <div className={styles.recipeCard}>
            <h1 className={styles.recipeTitle}>{title}</h1>
            <img className={styles.image} src={imageURL}/>
            <h2 className={styles.recipeSubtitle}>more ingredients you'll need</h2>
            {neededIngredients.map((item, i) =>
                <li key={i} className={styles.neededIngredient}>{item.originalName}</li>
            )}
        </div>
    )
    
}