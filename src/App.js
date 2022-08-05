import React from "react";
import { Button, Box, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import "./App.css";

function App() {
  return (
    <Box
      sx={{
        width: 300,
        height: 300,
        backgroundColor: "black",
        "&:hover": {
          backgroundColor: "primary.main",
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <div className="search">
        <TextField id="outlined-basic" size="small" variant="outlined" />
        <Button variant="outlined">Search</Button>
      </div>
      <Typography variant="h4" component="h1">
        weather in Nigeria
      </Typography>
      <Typography variant="h2" component="h1">
        52"c
      </Typography>
      <Typography variant="h7" component="p">
        part cloudy and rainy
      </Typography>
    </Box>
  );
}

export default App;
