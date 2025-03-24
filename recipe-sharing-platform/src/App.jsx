import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";
import AddRecipeForm from "./components/AddRecipeForm";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/recipedetail/:id" element={<RecipeDetail />}></Route>
        <Route path="/" element={<Home />}>
          <Route path="addRecipeform" element={<AddRecipeForm />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
