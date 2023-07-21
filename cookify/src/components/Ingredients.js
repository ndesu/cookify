import React from "react";
import IngredientComp from "./IngredientComp";
import axios from "axios";

class RecipeInfo {
    constructor(id,pictureURL,link) {
        this.id = id;
        this.pictureURL = pictureURL;
        this.link = link;
    }
}

class Ingredients extends React.Component{
    constructor(props){
        super(props);
        this.Ingredients = React.createRef();

        this.state = {
            dataList: [],
            retrievedData: [],
            recipeCards: []
        };

        this.optionsIngredients = {
            method: 'GET',
            url: process.env.REACT_APP_RAPIDAPI_FINDBYING,
            params: {
                ingredients: '',
                number: '2',
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
    setRecipeCards = (recipeCards) => {
        this.setState({
            recipeCards:recipeCards
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
        this.optionsIngredients.params.ingredients = ingredients.concat(arr)
    }

    handleChildData = (id, data) => {
        this.setData([...this.state.dataList, data].flat())
        this.createApiList(this.state.dataList)
    };


    fetchData = async () => {
        try {
            const response = await axios.request(this.optionsIngredients);
            this.setResponseData(response.data)

            var arr = []
            for(let i = 0; i < response.data.length; i++) {
                const options = {
                    method: 'GET',
                    url: process.env.REACT_APP_RAPIDAPI_FINDBYID + response.data[i].id + '/information',
                    headers: {
                        'X-RapidAPI-Key' : process.env.REACT_APP_RAPIDAPIKEY,
                        'X-RapidAPI-Host' : process.env.REACT_APP_RAPIDAPIHOST
                    }
                };
                const response2 = await axios.request(options);
                var recCard = new RecipeInfo(response.data[i].id, response2.data.image, response2.data.sourceUrl);
                arr.push(recCard);
            }
            this.setRecipeCards(arr)
        } catch (error) {
        console.error(error);
        }

    };

    
    render() {
      return (
        <div >

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
                    <li key={item.id}>{item.title}</li>

                ))}
                </ul>
            ) : (
                <p>No data available.</p>
            )}

            <p>RECIPE CARDS:</p>

            {this.state.recipeCards.map((recipe) => (
                <div key={recipe.id}>
                <h2>Recipe ID: {recipe.id}</h2>
                <img src={recipe.pictureURL} alt={`Recipe ${recipe.id}`} />
                <a href={recipe.link}>Link: {recipe.link}</a>
                </div>
            ))}

        </div>
      );
    }
  }
  export default Ingredients