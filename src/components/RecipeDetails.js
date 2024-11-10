// RecipeDetails.js
import React, { useEffect, useState } from "react";

function RecipeDetails({ recipe, setSelectedRecipe }) {
  const [recipeDetails, setRecipeDetails] = useState(null);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipe.idMeal}`
      );
      const data = await response.json();
      setRecipeDetails(data.meals[0]);
    };
    fetchRecipeDetails();
  }, [recipe.idMeal]);

  if (!recipeDetails) return <p>Loading recipe details...</p>;

  return (
    <div className="recipe-details">
      <button onClick={() => setSelectedRecipe(null)}>Back</button>
      <h2>{recipeDetails.strMeal}</h2>
      <img src={recipeDetails.strMealThumb} alt={recipeDetails.strMeal} />
      <p>
        <strong>Category:</strong> {recipeDetails.strCategory}
      </p>
      <p>
        <strong>Area:</strong> {recipeDetails.strArea}
      </p>
      <h3>Instructions</h3>
      <p>{recipeDetails.strInstructions}</p>
      <h3>Ingredients</h3>
      <ul>
        {[...Array(20)].map((_, i) => {
          const ingredient = recipeDetails[`strIngredient${i + 1}`];
          const measure = recipeDetails[`strMeasure${i + 1}`];
          return ingredient ? (
            <li key={i}>
              {ingredient} - {measure}
            </li>
          ) : null;
        })}
      </ul>
    </div>
  );
}

export default RecipeDetails;
