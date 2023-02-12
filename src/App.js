import React, { useState } from "react";
import { useGetWeatherQuery } from "./redux/weatherApi";
import { Box, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import "./App.css";

function App() {
  const [cityInpt, setCityInpt] = useState("");
  const [city, setCity] = useState("lagos");


  const handleSubmit = () => {
    setCity(cityInpt)
    setCityInpt('')
  }

  const handleChange = (event) => {
    event.preventDefault();
    setCityInpt(event.target.value);
  };

  const {data} = useGetWeatherQuery(city)
  if(data)
  return (
    <Box
      sx={{
        width: 400,
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
            marginLeft: "10px",
            width: "250px",
            borderRadius: "6px",
          }}
          onChange={handleChange}
        />
        <SearchIcon
          color="primary"
          fontSize="medium"
          sx={{
            marginLeft: "10px",
            marginTop: "32px",
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
        {`weather in ${data.location.city}`}
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
        {`${data.current_observation.condition.temperature}.F`}
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
        {data.current_observation.condition.text}
      </Typography>
    </Box>
  );
}

export default App;
