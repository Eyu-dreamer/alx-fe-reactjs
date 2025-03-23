import React, { useState, useEffect } from "react";
import data from "../data.json";

function Home() {
  const [recipes, setRecipe] = useState([]);

  useEffect(() => {
    setRecipe(data); // Set the recipes data
  }, []);

  let recipeCards = recipes.map((recipe) => {
    return (
      <div
        key={recipe.id}
        className="flex flex-col justify-around items-center bg-white p-4 m-4 gap-4 border-2 border-black hover:shadow-2xl rounded"
      >
        <img
          src={recipe.image}
          alt="recipe"
          className="w-full h-64 object-cover border-2 border-black"
        />
        <h1 className="text-start text-[1.5rem] font-bold">{recipe.title}</h1>
        <p className="indent-[5px]">{recipe.summary}</p>
      </div>
    );
  });

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4 m-4 gap-4">
      {recipeCards}
    </div>
  );
}

export default Home;
