import React from "react";
import { Box, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import "./App.css";

function App() {
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
        />
        <SearchIcon
          color="primary"
          fontSize="large"
          sx={{
            margin: "10px",
            marginTop: "25px",
          }}
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
        weather in Nigeria
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
        52"c
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
        part cloudy and rainy
      </Typography>
    </Box>
  );
}

export default App;
