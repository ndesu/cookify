import React, { useState } from "react";
import LiveSearch from "./LiveSearch";
import vegetables from "./IngredientList/Vegetables";
import meats from "./IngredientList/Meats";
import seasonings from "./IngredientList/Seasonings";
import grains from "./IngredientList/Grains";

class IngredComp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        results: [],
        selectedItem: null,
        itemList: [],
      };
    }
  
    handleChange = (e) => {
      const { target } = e;
      var ingredientType = "";
  
      if (!target.value.trim()) {
        this.setState({ results: [] });
        return;
      }
  
      if (this.props.type === "vegetables") {
        ingredientType = vegetables;
      } else if (this.props.type === "meats") {
        ingredientType = meats;
      } else if (this.props.type === "grains") {
        ingredientType = grains;
      } else if (this.props.type === "seasonings") {
        ingredientType = seasonings;
      }
  
      const filteredValue = ingredientType.filter((ingredient) =>
        ingredient.name.toLowerCase().startsWith(target.value)
      );
  
      this.setState({ results: filteredValue });
    };
  
    handleSelect = (item) => {
      this.setState((prevState) => ({
        selectedItem: item,
        itemList: [...prevState.itemList, item],
      }));
    };
  
    render() {
        const { results, selectedItem, itemList } = this.state;
        const { type } = this.props;

        return (
            <div>
              <h3>{type}</h3>
              <LiveSearch
                results={results}
                value={selectedItem?.name}
                renderItem={(item) => <p>{item.name}</p>}
                onChange={this.handleChange}
                onSelect={this.handleSelect}
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
    }
  }
  
  export default IngredComp;