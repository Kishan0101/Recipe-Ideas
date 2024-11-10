// App.js
import React, { useState } from "react";
import RecipeList from "./components/RecipeList.js";
import RecipeDetails from "./components/RecipeDetails.js";

import "./App.css";

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <div className="app">
      <h1>Recipe Ideas for Taylor</h1>
      {selectedRecipe ? (
        <RecipeDetails
          recipe={selectedRecipe}
          setSelectedRecipe={setSelectedRecipe}
        />
      ) : (
        <RecipeList setSelectedRecipe={setSelectedRecipe} />
      )}
    </div>
  );
}

export default App;
