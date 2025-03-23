import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import data from "../data.json";

function Home() {
  const [recipes, setRecipe] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    setRecipe(data); // Set the recipes data
  }, []);

  // Mapping through the recipe cards
  let recipeCards = recipes.map((recipe) => {
    return (
      <div
        key={recipe.id}
        className="flex flex-col justify-between items-center bg-white p-6 m-4 gap-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
        onClick={() => {
          navigate(`recipedetail/${recipe.id}`);
        }}
      >
        {/* Recipe Image */}
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-xl border-2 border-gray-200"
        />

        {/* Recipe Title */}
        <h1 className="text-2xl font-semibold text-gray-900 mt-4 text-center hover:text-indigo-600 transition-colors duration-300">
          {recipe.title}
        </h1>

        {/* Recipe Summary */}
        <p className="text-center text-gray-600 text-sm mt-2">
          {recipe.summary}
        </p>
      </div>
    );
  });

  return (
    <div className="bg-gradient-to-r from-blue-50 via-indigo-100 to-purple-200 min-h-screen p-6">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {recipeCards}
      </div>
    </div>
  );
}

export default Home;
