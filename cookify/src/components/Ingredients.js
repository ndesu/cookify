import React from "react";
import IngredientComp from "./IngredientComp";
import axios from "axios";

class Ingredients extends React.Component{
    constructor(props){
        super(props);
        this.Ingredients = React.createRef();

        this.state = {
            dataList: [],
            retrievedData: [],
        };
        this.options = {
            method: 'GET',
            url: process.env.REACT_APP_RAPIDAPIURL,
            params: {
                ingredients: '',
                number: '5',
                ignorePantry: 'true',
                ranking: '1'
            },
            headers: {
            'X-RapidAPI-Key' : process.env.REACT_APP_RAPIDAPIKEY,
            'X-RapidAPI-Host' : process.env.REACT_APP_RAPIDAPIHOST
            }
        };
    }

    setData = (newData) => {
        this.setState({
            dataList:newData
        })

    }

    setResponseData = (apiData) => {
        this.setState({
            retrievedData:apiData
        })
    }

    createApiList = (dataList) => {
        var arr = []
        var ingredients = ''
        for (let i = 0; i < dataList.length; i++) {
            arr.push(dataList[i].name.toString())
        }
        this.options.params.ingredients = ingredients.concat(arr)
    }

    handleChildData = (id, data) => {
        // this.setState(prevState=> ({
        //     dataList:[...prevState.dataList, {id, data}],
        // }))
        this.setData([...this.state.dataList, data].flat())
        this.createApiList(this.state.dataList)
    };


    fetchData = async () => {
        try {
            const response = await axios.request(this.options);
            this.setResponseData(response.data)
            console.log(response.data);
        } catch (error) {
        console.error(error);
        }
    };

    
    render() {
      return (
        <div >
          {/* <Child ref={this.ChildElement} /> */}
            <IngredientComp
                onChildData={this.handleChildData}
                type="vegetables"        
            />
            <IngredientComp 
                onChildData={this.handleChildData}
                type="seasonings"
            />
            <IngredientComp 
                onChildData={this.handleChildData}
                type="meats"
            />
            <IngredientComp 
                onChildData={this.handleChildData}
                type="grains"
            />
            <ul>
                {this.state.dataList.map(item => (
                    <li key={item}>{item.name}</li>
                ))}
            </ul>
            <button onClick={this.fetchData}>Fetch Data</button>
            {this.state.retrievedData ? (
                <ul>
                {this.state.retrievedData.map((item) => (
                    <li key={item.id}>{item.title} {item.id}</li>

                ))}
                </ul>
            ) : (
                <p>No data available.</p>
            )}

          {/* <button onClick={this.handleClick}>Show real name</button> */}
        </div>
      );
    }
  }
  export default Ingredients