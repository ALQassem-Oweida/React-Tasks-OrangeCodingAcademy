
import { useState, useEffect } from "react";
import axios from "axios";


import React from 'react'

function Api() {
  const [CityName,setName]=useState('Amman');
  const [content, setContent] = useState([]);


  const getName=(e)=>{
    setName(e.target.value);
   
  }

  useEffect(() => {

    axios.get('https://api.openweathermap.org/data/2.5/weather?q='+CityName+'&units=metric&appid=895284fb2d2c50a520ea537456963d9c')
      .then((response) => {
        setContent(response.data);
        console.log(response);
        var iconWether = response.data['weather'][0]['icon'];
        document.getElementById('Icon').src = "http://openweathermap.org/img/wn/"+iconWether+"@2x.png";

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
document.getElementById('ToDate').innerHTML = date;
var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
document.getElementById("Day-Now").innerHTML = days[today.getDay()];
        
      })

      .catch((err) => console.log(err));
   
  },[CityName]);




  return (
<div className="all">
  <div className="container">


    <div className="weather-side">
      <div className="weather-gradient" />
      <div className="date-container">
        {/* Date *********  and  locationName ********** */}
        <h2 id="Day-Now" className="date-dayname">{}</h2><span className="date-day" id="ToDate">-- -- ----</span><i className="location-icon" data-feather="map-pin" /><span className="location" id="ContryName">{content.name}</span>
      </div>
      {/* Wether Describtion ********** */}
      <div className="weather-container">
        <img src id="Icon" className="weather-icon" alt=""/>
        {content.main ? <h1 id="WeatherTemp" className="weather-temp">{Math.round(content.main.temp)} °C</h1>:null}
        {content.main ? <h3 id="WetherDescription" className="weather-desc">{content.weather[0].description}</h3> :null}
      </div>
    </div>
    <div className="info-side">
      
      <div className="week-container">
        <ul className="week-list">


          <li className="active"><i className="day-icon" data-feather="sun" /><span className="day-name"/>
          <div className="humidity"> <span className="title">HUMIDITY</span>    <br/>
          <div className="value" id="humi" ><br/>
            {content.main ? <p className='bold'>{content.main.humidity}%</p> : null}
          </div>
          <br/>
          </div>
          </li>



          <li><i className="day-icon" data-feather="cloud" /><span className="day-name"/>
          <div className="wind"> <span className="title">WIND</span>    <br/>
          <div className="value" id="wSpeed" ><br/>
            {content.main ? <p className='bold'>{content.wind.speed/0.8689762.toFixed()} MPH</p> : null}
          </div>
          <br/>
          </div>
          </li>


          <li><i className="day-icon" data-feather="cloud-snow" /><span className="day-name"/>
          <div className="precipitation"> <span className="title">PRECIPITATION  </span>    <br/>
          <div className="value"><br/>
            {content.main ? <p className='bold'>{content.clouds.all}%</p> : null} 
          </div>
          <br/>
          </div>
          </li>
        
          <div className="clear" />
        </ul>
      </div>
      <div className="location-container">
        <button id="LocButton" className="location-button"> <i data-feather="map-pin" />
          <span id="Contrey">Select a Country : </span>
          {/* *********************************************** */}
          <select onChange={getName} name="SomeContry" id="ContrySelector">
       
            <option value="Amman" selected>Amman</option>
            <option value="Madrid" >Madrid</option>
            <option value="Salt">Salt</option>
            <option value="Manchester">Manchester</option>
            <option value="London">London</option>
            <option value="New York City">New York City</option>
            <option value="Hong Kong">Hong Kong</option>
            <option value="Dubai">Dubai</option>
            <option value="Istanbul">Istanbul</option>
          </select>
          {/* *********************************************** */}
        </button>
      </div>
    </div>




    </div>

    </div>
  );

}

export default Api