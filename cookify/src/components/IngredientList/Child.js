import React, { useState } from "react";
import LiveSearch from "../LiveSearch";
// import grains from "./IngredientList/Grains";
// import meats from "./IngredientList/Meats";
// import seasonings from "./IngredientList/Seasonings";
import vegetables from "./Vegetables";
import meats from "./Meats";
import seasonings from "./Seasonings";
import grains from "./Grains";

class Child extends React.Component {
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
            // <div>
            //   <LiveSearch
            //     results={this.results}
            //     value={this.selectedItem?.name}
            //     renderItem={(item) => <p>{item.name}</p>}
            //     onChange={this.handleChange}
            //     onSelect={this.handleSelect}
            //   />
            //   <p>{this.selectedItem?.name}</p>
            //   <p>Selected Items List:</p>
            //   {/* Missing from Ingredients */}
            //   <button onClick={this.sendDataToParent}>Send Data</button>
            // </div>
            <div>
            <h3>{this.props.type}</h3>
            <LiveSearch
              results={this.state.results}
              value={this.state.selectedItem?.name}
              renderItem={(item) => <p>{item.name}</p>}
              onChange={this.handleChange}
              onSelect={this.handleSelect}
            />
            <p>{this.state.selectedItem?.name}</p>
            {/* <p>Selected Items List:</p>
            <ul>
              {this.itemList.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul> */}

            {this.state.itemList && this.state.itemList.length > 0 ? (
          <ul>
            {this.state.itemList.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        ) : (
          <p>No items selected.</p>
        )}
            <button onClick={this.sendDataToParent}>Send Data</button>  

          </div>
          );
    }
}

export default Child