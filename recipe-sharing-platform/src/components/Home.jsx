import React, { useEffect, useState } from "react";
import data from "../data.json"; // Ensure the path to your data.json is correct

function Home() {
  const [recipes, setRecipe] = useState([]);

  useEffect(() => {
    setRecipe(data); // Sets the data into the state
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 p-4">
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className="max-w-sm mx-auto rounded-lg border border-gray-300 shadow-lg overflow-hidden bg-white"
        >
          <img
            className="w-full h-48 object-cover"
            src={recipe.image}
            alt={recipe.title}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{recipe.title}</div>
            <p className="text-gray-600 text-base">{recipe.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
