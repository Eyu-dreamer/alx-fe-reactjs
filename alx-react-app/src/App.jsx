import React from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import Header from "./Header";
import MainContent from "./MainContent";
function App() {
  return (
    <div>
      <WelcomeMessage />
      <Header></Header>
      <MainContent></MainContent>
    </div>
  );
}

export default App;
