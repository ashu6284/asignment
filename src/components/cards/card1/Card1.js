import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import SkipPreviousRoundedIcon from "@mui/icons-material/SkipPreviousRounded";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import "./style1.css";

export default function ImgMediaCard() {
  return (
    <Card
      sx={{
        // maxWidth: 545,
        // display: "flex",
        backgroundColor: "#7eedde",
        // height: 240,
      }}
      className="main-card"
    >
      <CardContent>
        <div>
          <h2 className="card-heading">Simulations</h2>
          <p className="card-paragraph">Simulations are Powerful educational</p>
          <button className="btn-card">View All</button>
        </div>
      </CardContent>
      {/* <SkipPreviousRoundedIcon
        style={{ marginTop: "90px", marginRight: "17px" }}
      /> */}
      <CardMedia
        component="img"
        alt="card1"
        height="140"
        image={require("../../images/card1.png")}
        className="card"
      />
      {/* <SkipNextIcon
        style={{ marginTop: "90px", marginRight: "20px" }}
        className="card1--icon2"
      /> */}
    </Card>
  );
}
