import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/recipedetail/:id" element={<RecipeDetail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
