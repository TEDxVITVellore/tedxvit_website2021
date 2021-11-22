import './App.scss';
import HomePage from './pages/HomePage/HomePage';
import { IconContext } from "react-icons";

function App() {
  return (
    <>
      <IconContext.Provider value={{ color: "#4b4b4b", className: "icons" }}>
        <HomePage />
      </IconContext.Provider>
    </>
  );
}

export default App;
