// App.jsx
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";
function App() {
  return (
    <>
      <UserProfile
        name="Alice"
        age="25"
        bio="loves hiking and photography"
      ></UserProfile>
    </>
  );
}

export default App;
