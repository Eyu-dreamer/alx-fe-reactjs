import React, { useState } from "react";

function AddRecipeForm({ closeModal }) {
  const [title, setTitle] = useState(""); // Change recipeName to title
  const [image, setImage] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [summary, setSummary] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate if fields are filled
    if (!title || !image || !ingredients || !instructions || !summary) {
      alert("Please fill in all the fields!");
      return;
    }

    const newRecipe = { title, image, ingredients, instructions, summary }; // Use title instead of recipeName

    // Retrieve existing recipes from localStorage
    const savedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];

    // Add new recipe to the array of recipes
    savedRecipes.push(newRecipe);

    // Save all recipes to localStorage
    localStorage.setItem("recipes", JSON.stringify(savedRecipes));

    // Clear the form after submitting
    setTitle(""); // Clear the title field
    setImage("");
    setIngredients("");
    setInstructions("");
    setSummary("");

    alert("Recipe added successfully!");
    closeModal(); // Close the modal after submitting
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
      <div>
        <label htmlFor="title" className="block text-lg">
          {" "}
          {/* Change recipeName to title */}
          Title
        </label>
        <input
          type="text"
          id="title" // Update the id to title
          name="title" // Update the name to title
          value={title} // Use the title state
          onChange={(e) => setTitle(e.target.value)} // Update the setter to setTitle
          className="w-full p-2 border rounded-md"
        />
      </div>

      <div>
        <label htmlFor="image" className="block text-lg">
          Image URL
        </label>
        <input
          type="text"
          id="image"
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full p-2 border rounded-md"
        />
      </div>

      <div>
        <label htmlFor="summary" className="block text-lg">
          Summary
        </label>
        <textarea
          id="summary"
          name="summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          className="w-full p-2 border rounded-md"
        />
      </div>

      <div>
        <label htmlFor="ingredients" className="block text-lg">
          Ingredients
        </label>
        <textarea
          id="ingredients"
          name="ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full p-2 border rounded-md"
        />
      </div>

      <div>
        <label htmlFor="instructions" className="block text-lg">
          Instructions
        </label>
        <textarea
          id="instructions"
          name="instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          className="w-full p-2 border rounded-md"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
      >
        Add Recipe
      </button>
    </form>
  );
}

export default AddRecipeForm;
