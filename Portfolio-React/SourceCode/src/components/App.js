import Header from "./Header";
import Contant from "./Contant";
import BackTotop from "./BackTotop";
import Footer from "./Footer";
import "../App.css";
import ContactMe from './ContactMe'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Project from "./Project";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";




function App() {


  return (

    <BrowserRouter>
    <Header mode1="navAll_dark" mode2="navAll"/>
    <Routes>
      
    <Route path="/"        element={<Contant />} />
    <Route path="/contact" element={<ContactMe/>}/>
    <Route path="/project" element={<Project/>}/>

    </Routes>
    <BackTotop />
    <Footer mode='dark_modes' color='red'/>
  </BrowserRouter>

    
  





















  );
}

export default App;


