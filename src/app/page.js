import Header from "./components/Header";
import styles from "./page.module.css";
import { Inventory } from "./components/Inventory";

export default function Home() {
  const queryURLWithEnv = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.SPOONACULAR_API_KEY}&ranking=2`
  
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Inventory queryURL={queryURLWithEnv}/>
      </main>
    </div>
  );
}