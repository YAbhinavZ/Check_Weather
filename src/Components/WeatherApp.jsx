import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp(){
    let [weatherInfo , setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 37.81,
        humidity: 62,
        temp: 32.05,
        tempMax: 32.05,
        tempMin: 32.05,
        weather: "clear sky", 
    })
    let updateInfo = (result)=>{
        setWeatherInfo(result);
    }
    return (
         <div style={{textAlign: "center"}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox weatherInfo= {weatherInfo}/>

         </div>
    )
}