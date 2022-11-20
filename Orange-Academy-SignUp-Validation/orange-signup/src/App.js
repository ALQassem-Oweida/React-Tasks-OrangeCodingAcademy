import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Slider from "./components/Slider";
import Nav from "./components/Nav";
import FormSignup from "./components/FormSignup";

function App() {
  return (
    <div class="Main_Orange_Registry">
      <Slider />
      <Nav />
      <FormSignup />
    </div>
  );
}

export default App;
