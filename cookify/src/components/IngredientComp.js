import React, { useState } from "react";
import LiveSearch from "./LiveSearch";
import vegetables from "./IngredientList/Vegetables";
import meats from "./IngredientList/Meats";
import seasonings from "./IngredientList/Seasonings";
import grains from "./IngredientList/Grains";

class IngredientComp extends React.Component {
    constructor(props){
        super(props);
    this.state = {
        results: "",
        selectedItem : "",
        itemList : []
    };
    }

    setResults = (newResult) => {
        this.setState({
            results:newResult
        });
    };

    setselectedItem = (newSelectedItem) => {
        this.setState({
            selectedItem:newSelectedItem
        });
    }    
    setItemList = (newItemList) => {
        this.setState({
            itemList:newItemList
        });
    };
    handleSelect = (item) => {
        this.setselectedItem(item);
        this.setItemList([...this.state.itemList,item])
      };

    handleChange = (e) => {
        const { target } = e;
        var ingredientType = "";
    
        if (!target.value.trim()) return this.setResults([]);
    
        if (this.props.type === "vegetables") {
          ingredientType = vegetables;
        } else if (this.props.type === "meats") {
          ingredientType = meats;
        } else if (this.props.type === "grains") {
          ingredientType = grains;
        } else if (this.props.type === "seasonings") {
          ingredientType = seasonings;
        };
    
        const filteredValue = ingredientType.filter((ingredientType) => 
        ingredientType.name.toLowerCase().startsWith(target.value)
        );
      
        this.setResults(filteredValue);
    }

    sendDataToParent = () => {
        // console.log(this.state.itemList);
        const { id, onChildData } = this.props;
        const data = this.state.itemList;
    
        onChildData(id, data);
      };

    render(){
        return (
            <div>
            <h3>{this.props.type}</h3>
            <LiveSearch
              results={this.state.results}
              value={this.state.selectedItem?.name}
              renderItem={(item) => <p>{item.name}</p>}
              onChange={this.handleChange}
              onSelect={this.handleSelect}
            />

            {this.state.itemList && this.state.itemList.length > 0 ? (
          <ul>
            {this.state.itemList.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        ) : (
          <p>No items selected.</p>
        )}
            <button onClick={this.sendDataToParent}>Add Ingredient</button>  

          </div>
          );
    }
}

export default IngredientComp