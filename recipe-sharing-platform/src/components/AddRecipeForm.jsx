import React, { useState } from "react";

function AddRecipeForm({ closeModal }) {
  const [title, setTitle] = useState(""); // Recipe title
  const [image, setImage] = useState(""); // Recipe image URL
  const [ingredients, setIngredients] = useState(""); // Ingredients
  const [instructions, setInstructions] = useState(""); // Instructions
  const [summary, setSummary] = useState(""); // Recipe summary
  const [steps, setSteps] = useState(""); // Preparation steps
  const [errors, setErrors] = useState({}); // Validation errors

  const validateForm = () => {
    let formErrors = {};

    // Check if fields are empty and add errors
    if (!title) formErrors.title = "Title is required.";
    if (!image) formErrors.image = "Image URL is required.";
    if (!ingredients) formErrors.ingredients = "Ingredients are required.";
    if (!instructions) formErrors.instructions = "Instructions are required.";
    if (!summary) formErrors.summary = "Summary is required.";
    if (!steps) formErrors.steps = "Preparation steps are required.";

    setErrors(formErrors); // Set the errors state
    return Object.keys(formErrors).length === 0; // If no errors, return true
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form fields
    if (!validateForm()) {
      return; // If form has errors, do not submit
    }

    const newRecipe = {
      title,
      image,
      ingredients,
      instructions,
      summary,
      steps,
    };

    // Retrieve existing recipes from localStorage
    const savedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];

    // Add new recipe to the array of recipes
    savedRecipes.push(newRecipe);

    // Save all recipes to localStorage
    localStorage.setItem("recipes", JSON.stringify(savedRecipes));

    // Clear the form after submitting
    setTitle("");
    setImage("");
    setIngredients("");
    setInstructions("");
    setSummary("");
    setSteps(""); // Clear steps
    setErrors({}); // Clear errors

    alert("Recipe added successfully!");
    closeModal(); // Close the modal after submitting
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
      {/* Title */}
      <div>
        <label htmlFor="title" className="block text-lg">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded-md"
        />
        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
      </div>

      {/* Image URL */}
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
        {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
      </div>

      {/* Summary */}
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
        {errors.summary && (
          <p className="text-red-500 text-sm">{errors.summary}</p>
        )}
      </div>

      {/* Ingredients */}
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
        {errors.ingredients && (
          <p className="text-red-500 text-sm">{errors.ingredients}</p>
        )}
      </div>

      {/* Instructions */}
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
        {errors.instructions && (
          <p className="text-red-500 text-sm">{errors.instructions}</p>
        )}
      </div>

      {/* Steps */}
      <div>
        <label htmlFor="steps" className="block text-lg">
          Preparation Steps
        </label>
        <textarea
          id="steps"
          name="steps"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          className="w-full p-2 border rounded-md"
        />
        {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
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
