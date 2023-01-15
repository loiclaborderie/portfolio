import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Projets from "./components/Projets";
import "bootstrap/dist/css/bootstrap.min.css";
import Competences from "./components/Competences";
import Fonts from "./components/Fonts";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Competences />
      <Projets />
      <Contact />
      <Fonts />
      <Footer />
    </div>
  );
}

export default App;
