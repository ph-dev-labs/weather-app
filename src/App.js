import React, { useState } from "react";
import { useGetWeatherQuery } from "./redux/weatherApi";
import { Box, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import "./App.css";

function App() {
  const [cityInpt, setCityInpt] = useState("");
  const [city, setCity] = useState("");


  const handleSubmit = () => {
    setCity(cityInpt)
    setCityInpt("")
  }

  const handleChange = (event) => {
    event.preventDefault();
    setCityInpt(event.target.value);
  };

  const {data} = useGetWeatherQuery(city)
  console.log(data)
  if(data)
  return (
    <Box
      sx={{
        width: 600,
        height: 600,
        backgroundColor: "black",
        margin: "auto",
      }}
    >
      <div className="search-field">
        <TextField
          id="outlined-basic"
          size="small"
          variant="outlined"
          color="primary"
          type="text"
          placeholder="Search city"
          sx={{
            backgroundColor: "white",
            marginTop: "25px",
            marginLeft: "55px",
            width: "350px",
            borderRadius: "6px",
          }}
          onChange={handleChange}
        />
        <SearchIcon
          color="primary"
          fontSize="large"
          sx={{
            margin: "10px",
            marginTop: "25px",
          }}
          onClick={handleSubmit}
        />
      </div>
      <Typography
        variant="h4"
        component="h1"
        color="primary"
        sx={{
          padding: "10px",
          marginLeft: "70px",
        }}
      >
        {`weather in ${data.name}`}
      </Typography>
      <Typography
        variant="h4"
        component="h2"
        color="primary"
        sx={{
          padding: "10px",
          marginLeft: "70px",
        }}
      >
        {`${data.main.temp}'C`}
      </Typography>
      <Typography
        variant="h7"
        component="p"
        color="primary"
        sx={{
          padding: "10px",
          marginLeft: "70px",
        }}
      >
        {data.weather[0].description}
      </Typography>
    </Box>
  );
}

export default App;
