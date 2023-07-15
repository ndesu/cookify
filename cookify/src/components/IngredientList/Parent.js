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

    setData = (newData) => {
        this.setState({
            dataList:newData
        })

    }
    handleChildData = (id, data) => {
        // this.setState(prevState=> ({
        //     dataList:[...prevState.dataList, {id, data}],
        // }))
        this.setData([...this.state.dataList, data].flat())
        console.log("Yurrr gang gang this is the data list")
        console.log(this.state.dataList)
    };

    render() {
      return (
        <div >
          {/* <Child ref={this.ChildElement} /> */}
            <Child
                onChildData={this.handleChildData}
                type="vegetables"        
            />
            <Child onChildData={this.handleChildData}
                type="seasonings"
            />
            <Child onChildData={this.handleChildData}
                type="meats"
            />
            <Child id={4} onChildData={this.handleChildData}
                type="grains"
            />
            <ul>
                {this.state.dataList.map(item => (
                    <li key={item}>{item.name}</li>
                ))}
            </ul>

          {/* <button onClick={this.handleClick}>Show real name</button> */}
        </div>
      );
    }
  }
  export default Parent