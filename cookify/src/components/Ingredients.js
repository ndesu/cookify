import React, { useState } from "react";
import LiveSearch from "./LiveSearch";
import vegetables from "./IngredientList/Vegetables";
import meats from "./IngredientList/Meats";
import seasonings from "./IngredientList/Seasonings";
import grains from "./IngredientList/Grains";

const Ingredients = (props) => {
  const [results, setResults] = useState();
  const [selectedItem, setselectedItem] = useState();
  const [itemList, setitemList] = useState([]);

  const handleChange = (e) => {
    const { target } = e;
    var ingredientType = "";

    if (!target.value.trim()) return setResults([]);

    if (props.type === "vegetables") {
      ingredientType = vegetables;
    } else if (props.type === "meats") {
      ingredientType = meats;
    } else if (props.type === "grains") {
      ingredientType = grains;
    } else if (props.type === "seasonings") {
      ingredientType = seasonings;
    };

    const filteredValue = ingredientType.filter((ingredientType) => 
    ingredientType.name.toLowerCase().startsWith(target.value)
    );
  
    setResults(filteredValue);
  };

  const handleSelect = (item) => {
    setselectedItem(item);
    setitemList((prevList) => [...prevList, item]);
  };

  return (
    <div>
      <h3>{props.type}</h3>
      <LiveSearch
        results={results}
        value={selectedItem?.name}
        renderItem={(item) => <p>{item.name}</p>}
        onChange={handleChange}
        onSelect={handleSelect}
      />
      <p>{selectedItem?.name}</p>
      <p>Selected Items List:</p>
      <ul>
        {itemList.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>

  );
};

export default Ingredients;