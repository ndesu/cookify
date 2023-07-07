import Ingredients from './components/Ingredients';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar/Navbar';
import axios from "axios";

import React, { useEffect, useState } from "react";
import Parent from './components/IngredientList/Parent';

function App() {

  const [data, setData] = useState(null);
  const options = {
    method: 'GET',
    url: process.env.REACT_APP_RAPIDAPIURL,
    params: {
      ingredients: 'apples,flour,sugar',
      number: '5',
      ignorePantry: 'true',
      ranking: '1'
    },
    headers: {
      'X-RapidAPI-Key' : process.env.REACT_APP_RAPIDAPIKEY,
      'X-RapidAPI-Host' : process.env.REACT_APP_RAPIDAPIHOST
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.request(options);
      setData(response.data)
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <Navbar />
      <Ingredients
        type="vegetables" 
      />
      <Ingredients
        type="seasonings" 
      />
      <Ingredients
        type="meats" 
      />
      <Ingredients
        type="grains" 
      />
      <button onClick={fetchData}>Fetch Data</button>
      {data ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>

          ))}
        </ul>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
}

export default App;
