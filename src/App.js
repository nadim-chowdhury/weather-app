import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=e14a9efd8ec1299dea81e8720f584a74`;

  const searchLocation = (e) => {
    axios.get(url).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
    setLocation("");
  };

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          type="search"
          placeholder="Enter any city"
        />

        <button onClick={searchLocation}>Search</button>
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <h1>{data.name}</h1>
          </div>

          <div className="temp">
            <h3>60 C</h3>
            <p>Clouds</p>
          </div>
        </div>

        <div className="bottom">
          <div className="feels">
            <h3>60 F</h3>
            <p>Feels Like</p>
          </div>

          <div className="humidity">
            <h3>20%</h3>
            <p>Humidity</p>
          </div>

          <div className="wind">
            <h3>12 MPH</h3>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
