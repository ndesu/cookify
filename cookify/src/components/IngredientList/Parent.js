// import React from "react";
// import Child from "./Child";

// class Parent extends React.Component{
//     constructor(props){
//         super(props);
//         this.Ingredients = React.createRef();
//     }

//     handleClick = () => {
//         const childelement = this.ChildElement.current;
//           alert("current state of child is :  "+ childelement.state.name);
//         childelement.changeName("Aakash");

//     };
//     render() {
//       return (
//         <div >
//           <Child ref={this.ChildElement} />
//           <button onClick={this.handleClick}>Show real name</button>
//         </div>
//       );
//     }
//   }
//   export default Parent