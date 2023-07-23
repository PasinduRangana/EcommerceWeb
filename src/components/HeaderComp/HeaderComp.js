import React from "react";
import "./HeaderComp.scss";
import mainImage from "../../assests/images/LogoMain.png";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CachedIcon from "@mui/icons-material/Cached";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonIcon from "@mui/icons-material/Person";
import LocalMallIcon from "@mui/icons-material/LocalMall";

const HeaderComp = () => {
  const top100Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
    {
      label: "The Lord of the Rings: The Return of the King",
      year: 2003,
    },
  ];

  return (
    <div className="mainHeader">
      <img className="mainImage" src={mainImage} alt="BaduDeal" />
      <Autocomplete
        className="searchField"
        disablePortal
        id="combo-box-demo"
        options={top100Films}
        sx={{
          width: 750,
          height: "40px", // Adjust the height value to your desired height
          borderRadius: "4px",
        }}
        autoHighlight={false}
        renderInput={(params) => (
          <TextField {...params} label="Search for Products" />
        )}
      />
      <CachedIcon />
      <FavoriteBorderIcon />
      <PersonIcon />
      <LocalMallIcon />

      <text>0.00 RS</text>
    </div>
  );
};

export default HeaderComp;
