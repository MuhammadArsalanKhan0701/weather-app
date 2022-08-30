import { useState } from "react";
import Image from 'next/image';
import Weather from "../components/Weather.js";

import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import { InputAdornment } from '@mui/material';
import Box from '@mui/material/Box';


export default function Home() {

  const [city, setCity] = useState("");
  const [data, setData] = useState([]);

  function getCurrentWeather(cityName) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.NEXT_PUBLIC_API_KEY}&units=metric`;

    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          alert("Location Not Found.");
        }
      })    
      .then(data => {
        if (data) {
          setData(data);
        }
      })
  
  }


  return (
    <div>
      
      <Box      
        sx={{
          margin: "auto",
          width: 300,
          height: 500,
          backgroundColor: "rgba(255,255,255, 0.3)",
          textAlign:"center"
        }}
      >
      
        <h1>Weather App</h1>
        
        <TextField
          id="search-bar" 
          label="Search For City" 
          variant="filled"
          value={city}
          onChange={(event) => {
            setCity(event.target.value)
          }}
          onKeyPress={(e) => {
            if ((e.key === 'Enter') && (city.length)) {
              getCurrentWeather(city);
            }
          }}
          InputProps={{
            endAdornment: 
              <InputAdornment position="end"> 
              <IconButton type="submit" aria-label="search"
                          onClick={ () => getCurrentWeather(city) }
                          disabled={!city.length}
                          >
                <Image src="/searchIcon.png" alt="Search"
                  width={40}
                  height={40}/>
              </IconButton>
              </InputAdornment>
              }}
        />
        
        { data.length!=0 ? <Weather data={data} /> : null}
        
      </Box>
      
    </div>
  )
}
