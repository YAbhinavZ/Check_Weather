import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "../infoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({ weatherInfo }) {
  const HOT_URL =
    "https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const COLD_URL =
    "https://images.unsplash.com/photo-1668531387310-9c3c2f272d52?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAINY_URL =
    "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              weatherInfo.humidity > 85
                ? RAINY_URL
                : weatherInfo.temp > 15
                ? HOT_URL
                : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {weatherInfo.city  } {
              weatherInfo.humidity > 85
                ? <ThunderstormIcon/>
                : weatherInfo.temp > 15
                ? <SunnyIcon/>
                :<AcUnitIcon/>
            }
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <p>Temperature : {weatherInfo.temp}&deg;C</p>
              <p>Humidity : {weatherInfo.humidity}</p>
              <p>Minimum Temp: {weatherInfo.tempMin}</p>
              <p>Maximum Temp: {weatherInfo.tempMax}</p>
              <p>
                The weather can be described as <i>{weatherInfo.weather}</i> and
                feels like {weatherInfo.feelsLike}
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
