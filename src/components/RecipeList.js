// RecipeList.js
import React, { useState } from "react";

function RecipeList({ setSelectedRecipe }) {
  const [ingredient, setIngredient] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);

  const fetchRecipes = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await response.json();
      if (data.meals) {
        setRecipes(data.meals);
        setError(null);
      } else {
        setError("No recipes found for this ingredient.");
        setRecipes([]);
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
      setRecipes([]);
    }
  };

  const handleSearch = () => {
    if (ingredient.trim() !== "") fetchRecipes();
  };

  return (
    <div className="recipe-list">
      <input
        type="text"
        placeholder="Enter an ingredient..."
        value={ingredient}
        onChange={(e) => setIngredient(e.target.value)}
      />
      <button onClick={handleSearch}>Search Recipes</button>
      {error && <p className="error">{error}</p>}
      <div className="recipes">
        {recipes.map((recipe) => (
          <div
            key={recipe.idMeal}
            className="recipe"
            onClick={() => setSelectedRecipe(recipe)}
          >
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <h3>{recipe.strMeal}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeList;
