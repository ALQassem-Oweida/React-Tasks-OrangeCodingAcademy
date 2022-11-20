
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useState, useEffect } from "react";
// import ReactDOM from 'react-dom';





function App() {
  
const [content, setContent] = useState([]);

  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(res => {setContent(res);  console.log(res); })
      .catch(err => console.log(err));
      },[]);
    
  return (
    <div className="container text-center mt-5">
  <div className="row justify-content-start">
   




{content.map((user)=>{
return(
  <div className="col-2">
<div className="card" >
  <img src="./1667684621.png" className="card-img-top" alt="..."/>
  <div className="card-body">
  <h5 className="card-title">( {user.id} )</h5>
    <h5 className="card-title">{user.name}</h5>
    <p className="card-text">{user.email}</p>

  </div>
</div>
</div>)
})}


</div>
    </div>


)}


export default App;