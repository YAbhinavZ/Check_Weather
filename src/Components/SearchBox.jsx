import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "../SearchBox.css";
import { useState } from "react";

export default function SearchBox() {
  let [city, setCity] = useState("");
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "09bb391897e1a9301313f0c487c4c645";
  let getWeatherInfo = async () => {
    let response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric `
    );
    let jsonRes = await response.json();
    console.log(jsonRes);
    let result = {
      temp: jsonRes.main.temp,
      tempMin: jsonRes.main.temp_min,
      tempMax: jsonRes.main.temp_max,
      humidity: jsonRes.main.humidity,
      feelsLike: jsonRes.main.feels_like,
      weather: jsonRes.weather[0].description,
    };
    console.log(result);
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };
  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(city);
    setCity("");
    getWeatherInfo();
  };
  return (
    <>
      <div className="SearchBox">
        <h2> Search for weather</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            required
            id="city"
            label="City Name"
            variant="outlined"
            value={city}
            onChange={handleChange}
          />
          <br></br> <br></br>
          <Button variant="contained" type="submit" size="large">
            Search
          </Button>
        </form>
      </div>
    </>
  );
}
