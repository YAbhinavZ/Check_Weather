import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "../SearchBox.css"
import { useState } from "react";

export default function SearchBox() {
    let [city,setCity] = useState("");
    let handleChange = (event)=>{
        setCity(event.target.value);
    }
    let handleSubmit = (event)=>{
        event.preventDefault();
        console.log(city);
        setCity("");
    }
  return (
    <>
      <div className="SearchBox">
        <h2> Search for weather</h2>
       <form onSubmit={handleSubmit}>
       <TextField required id="city" label="City Name" variant="outlined" value={city} onChange={handleChange}/>
        <br></br>  <br></br>
        <Button variant="contained" type="submit" size="large">
          Search
        </Button>
       </form>
      </div>
    </>
  );
}
