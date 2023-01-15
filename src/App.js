import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Projets from "./components/Projets";
import "bootstrap/dist/css/bootstrap.min.css";
import Competences from "./components/Competences";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Competences />
      <Projets />
    </div>
  );
}

export default App;
