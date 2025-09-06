import { useState } from 'react'
import './App.css'
import recipesData from './recipes.json'
import Recipe from './components/recipe/recipe';

function App() {


  console.log(recipesData);

  //random number generator between 0 and length of recipes array -1
  const randomIndex = Math.floor(Math.random() * recipesData.recipes.length);
  console.log("random index: ", randomIndex);

  return (
    <>
      <Recipe recipe={recipesData.recipes[randomIndex]} />
    </>
  )
}

export default App
