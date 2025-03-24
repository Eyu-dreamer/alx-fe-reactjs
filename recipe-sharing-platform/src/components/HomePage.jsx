import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import data from "../data.json";

function Home() {
  const [recipes, setRecipes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  // Retrieve recipes from localStorage on component mount
  useEffect(() => {
    const savedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
    setRecipes([...savedRecipes, ...data]);
  }, []);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Rendering the recipe cards
  const recipeCards = recipes.map((recipe, index) => {
    return (
      <div
        key={index}
        className="flex flex-col justify-between items-center bg-white p-6 m-4 gap-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
      >
        {/* Recipe Image */}
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-xl border-2 border-gray-200"
        />

        {/* Recipe Title */}
        <h1 className="text-2xl font-semibold text-gray-900 mt-4 text-center hover:text-indigo-600 transition-colors duration-300">
          {recipe.recipeName}
        </h1>

        {/* Recipe Summary */}
        <p className="text-center text-gray-600 text-sm mt-2">
          {recipe.summary}
        </p>

        {/* Detailed Information Link */}
        <Link
          to={`/recipedetail/${index}`}
          className="text-indigo-600 hover:underline"
        >
          Detailed Info
        </Link>
      </div>
    );
  });

  return (
    <div className="bg-gradient-to-r from-blue-50 via-indigo-100 to-purple-200 min-h-screen p-6">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {recipeCards}
      </div>

      {/* Add Recipe Form Button */}
      <div className="text-center mt-6">
        <button
          onClick={openModal} // Open the modal
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Add New Recipe
        </button>
      </div>

      {/* Modal for Add Recipe Form (Outlet as Modal) */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-lg relative">
            {/* Close button */}
            <button
              onClick={closeModal} // Close the modal
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-900"
            >
              &times; {/* Close icon */}
            </button>

            {/* Render Outlet as Modal Content */}
            <div className="w-full">
              <Outlet />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
