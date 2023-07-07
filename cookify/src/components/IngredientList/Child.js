// import React, { useState } from "react";
// import LiveSearch from "../LiveSearch";
// // import grains from "./IngredientList/Grains";
// // import meats from "./IngredientList/Meats";
// // import seasonings from "./IngredientList/Seasonings";
// import vegetables from "./Vegetables";
// import meats from "./Meats";
// import seasonings from "./Seasonings";
// import grains from "./Grains";

// class Child extends React.Component {
//     state = {
//         results: "",
//         selectedItem : "",
//         itemList : []
//     }
//     setResults = (newResult) => {
//         this.setState({
//             results:newResult
//         });
//     }
//     setSelectedItem = (newSelectedItem) => {
//         this.setState({
//             selectedItem:newSelectedItem
//         });
//     }    
//     setItemList = (newItemList) => {
//         this.setState({
//             itemList:newItemList
//         });
//     }
//     handleChange(e){
//         const { target } = e;
//         // var ingredientType = "";
    
//         if (!target.value.trim()) return this.setResults([]);
    
//         // if (props.type === "vegetables") {
//         //   ingredientType = vegetables;
//         // } else if (props.type === "meats") {
//         //   ingredientType = meats;
//         // } else if (props.type === "grains") {
//         //   ingredientType = grains;
//         // } else if (props.type === "seasonings") {
//         //   ingredientType = seasonings;
//         // };
    
//         const filteredValue = vegetables.filter((vegetablesvegetables) => 
//         vegetables.name.toLowerCase().startsWith(target.value)
//         );
      
//         this.setResults(filteredValue);

//     }

//     render(){
//         return (
//             <div>
//               <LiveSearch
//                 results={this.results}
//                 value={this.selectedItem?.name}
//                 renderItem={(item) => <p>{item.name}</p>}
//                 onChange={this.handleChange}
//                 onSelect={this.handleSelect}
//               />
//               <p>{this.selectedItem?.name}</p>
//               <p>Selected Items List:</p>

//               {/* Missing from Ingredients */}
//             </div>
        
//           );
//     }
// }

// export default Child