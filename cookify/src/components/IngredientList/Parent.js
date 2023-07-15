import React from "react";
import Child from "./Child";

class Parent extends React.Component{
    constructor(props){
        super(props);
        this.Ingredients = React.createRef();
        this.state = {
            dataList: [],
        };
    }

    handleChildData = (id, data) => {
        this.setState(prevState=> ({
            dataList:[...prevState.dataList, {id, data}],
        }))

    };

    render() {
      return (
        <div >
          {/* <Child ref={this.ChildElement} /> */}
            <Child id={1} 
                onChildData={this.handleChildData}
                type="vegetables"        
            />
            <Child id={2} onChildData={this.handleChildData}
                type="seasonings"
            />
            <Child id={3} onChildData={this.handleChildData}
                type="meats"
            />
            <Child id={4} onChildData={this.handleChildData}
                type="grains"
            />
            <ul>
                {this.state.dataList.map(item => (
                    <li key={item.id}>{item.data}</li>
                ))}
            </ul>

          {/* <button onClick={this.handleClick}>Show real name</button> */}
        </div>
      );
    }
  }
  export default Parent