import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";

function RecipeDetail() {
  const [detailedData, setDetailedData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const recipe = data.find((item) => item.id === parseInt(id));
    setDetailedData(recipe);
  }, [id]);

  if (!detailedData) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <span className="text-3xl text-white font-semibold">Loading...</span>
      </div>
    );
  }

  const ingredients = detailedData.ingredients.map((ingredient, index) => (
    <li
      key={index}
      className="text-lg font-light text-gray-700 p-3 rounded-lg bg-gray-200 shadow-md hover:shadow-lg transition-all"
    >
      👩‍🍳. <span>{ingredient}</span>
    </li>
  ));

  const instructions = detailedData.instructions.map((instruction, index) => (
    <li key={index} className="text-xl text-gray-800 mb-4">
      <span className="font-semibold text-indigo-600"> </span>
      {instruction}
    </li>
  ));

  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-indigo-50 via-indigo-100 to-indigo-200 min-h-screen p-6">
      {/* Recipe Image with Overlay */}
      <div className="relative w-full h-80 mb-6">
        <img
          src={detailedData.image}
          alt={detailedData.title}
          className="w-full h-full object-cover rounded-2xl shadow-lg"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent opacity-40 rounded-2xl"></div>
      </div>

      {/* Recipe Title */}
      <h1 className="text-4xl font-extrabold text-center text-indigo-900 mb-4">
        {detailedData.title}
      </h1>
      <p className="text-xl text-center text-indigo-800 mb-8">
        {detailedData.summary}
      </p>

      {/* Ingredients List */}
      <div className="w-full bg-white shadow-lg rounded-xl p-6 mb-8">
        <h2 className="text-3xl font-semibold text-indigo-800 mb-4">
          Ingredients
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {ingredients}
        </ul>
      </div>

      {/* Instructions List */}
      <div className="w-full bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-3xl font-semibold text-indigo-800 mb-4">
          Instructions
        </h2>
        <ul className="space-y-4" type="none">
          {instructions}
        </ul>
      </div>
    </div>
  );
}

export default RecipeDetail;
