import React from "react";
import logga from "./../assets/images/logga.png";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";

function Header({ onSearchChange }) {
  const handleSearchChange = (event) => {
    onSearchChange(event.target.value);
  };

  return (
    <header className="flex justify-between items-center p-2">
      <div className="flex items-center">
        <img
          src={logga}
          className="m-2 ml-4 w-[80px] md:w-[115px] object-cover"
        />
        <Link to="/" className="text-white font-bold ml-10">
          Home
        </Link>
        <Link to="/my-list" className="text-white font-bold ml-10">
          My List
        </Link>
      </div>
      <TextField
        className="font-bold rounded-lg p-2 w-1/5 bg-white mr-20"
        label="Movie title..."
        variant="filled"
        margin="normal"
        onChange={handleSearchChange}
        sx={{
          "& .MuiFilledInput-root": {
            background: "white",
            borderRadius: "8px",
          },
          "& .MuiInputLabel-root": {
            color: "black",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "black",
          },
        }}
      />
    </header>
  );
}

export default Header;
