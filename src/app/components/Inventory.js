"use client";
import { useRef, useState } from "react";
import ingredients from "../ingredients.json";
import Recipes from "./Recipes";
import styles from "../page.module.css";

export function Inventory({ queryURL }) {
  const [ingredientList, setIngredientList] = useState([]);
  const [selectedIngredient, setSelectedIngredient] = useState(null);
  const [recipes, setRecipes] = useState();
  const recipesRef = useRef(null);

  const handleSelectChange = (e) => {
    const selectedValue = e.currentTarget.value;
    const ingredient = ingredients.find((item) => item.value === selectedValue);
    setSelectedIngredient(ingredient);
  };

  const addIngredient = () => {
    if (selectedIngredient && !ingredientList.includes(selectedIngredient)) {
      setIngredientList([...ingredientList, selectedIngredient]);
      setSelectedIngredient(null);
    }
  };

  const removeIngredient = (ingredientToRemove) => {
    setIngredientList(
      ingredientList.filter((item) => item !== ingredientToRemove),
    );
  };

  const findRecipes = async () => {
    let apiIngredientList = "";

    for (let i = 0; i < ingredientList.length; i++) {
      if (i < ingredientList.length - 1) {
        apiIngredientList += ingredientList[i].value + ",";
      } else {
        apiIngredientList += ingredientList[i].value;
      }
    }

    const completeQueryUrl = `${queryURL}&ingredients=${apiIngredientList}&number=3`;
    const request = await fetch(completeQueryUrl);
    const recipeData = await request.json();

    console.log(completeQueryUrl);

    setRecipes(recipeData);

    if (recipesRef.current) {
      recipesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.inventoryContainer}>
      {recipes && (
        <div ref={recipesRef}>
          <Recipes recipes={recipes} />
        </div>
      )}
      <div className={styles.title}>
        <h1 className={styles.h1}>
          ingredients in your <em>kitchen</em>
        </h1>
      </div>
      <div className={styles.top}>
        <p className={styles.addIngredients}>add ingredients:</p>
        <select
          value={selectedIngredient ? selectedIngredient.value : ""}
          placeholder="enter ingredients"
          className={styles.textInput}
          onChange={handleSelectChange}
        >
          <option value="" disabled>
            Select an ingredient
          </option>
          {ingredients.map((item, i) => (
            <option key={i} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
        <button className={styles.aButton} onClick={addIngredient}>
          <em>submit</em>
        </button>
      </div>
      <div className={styles.gridContainer}>
        <ul className={styles.ingredientGrid}>
          {ingredientList.map((item, i) => (
            <li key={i} onClick={() => removeIngredient(item)}>
              {item.label}
            </li>
          ))}
        </ul>
        <button className={styles.aButton} onClick={findRecipes}>
          find recipes!
        </button>
      </div>
    </div>
  );
}
