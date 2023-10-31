import "./App.css";
import Profile from "./components/Profile";
import Work from "./components/Work";
import Skills from "./Skills";
import Icons from "./Icons";

function App() {
  return (
    <div className="container">
      <Profile />
      <Work />
      <Skills />
      <Icons />
    </div>
  );
}

export default App;
