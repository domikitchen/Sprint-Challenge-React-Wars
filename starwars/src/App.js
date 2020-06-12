import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

import { BASE_URL, API_KEY } from './constants/index'

import Character from './components/Character';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [ charactersURL, setCharactersURL ] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get(`${BASE_URL}${API_KEY}`)
      .then(repsonse => {
        setCharactersURL(repsonse.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Pokemon</h1>
      <div className = 'Cards'>
        {
          charactersURL.map(function(character, index) {
            return (
              <Character key = {index} characters = {character} />
            );
          })
        }
      </div>
    </div>
  );
}

export default App;
