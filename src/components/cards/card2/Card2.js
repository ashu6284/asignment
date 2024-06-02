import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import SkipPreviousRoundedIcon from "@mui/icons-material/SkipPreviousRounded";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import "./style2.css";

export default function ImgMediaCard() {
  return (
    <Card
      sx={{
        backgroundColor: "#3699eb",
      }}
      className="main-card2"
    >
      <CardContent>
        <div>
          <h2 className="card-heading2">Your Videos</h2>
          <p className="card-paragraph2">Lorem ipsum dolor sit amet</p>
          <button className="btn-card2">View All</button>
        </div>
      </CardContent>
      {/* <SkipPreviousRoundedIcon
        style={{ marginTop: "90px", marginRight: "20px" }}
      /> */}
      <CardMedia
        component="img"
        alt="card2"
        height="140"
        image={require("../../images/card2.png")}
        className="card2"
      />
      {/* <SkipNextIcon style={{ marginTop: "90px", marginRight: "17px" }} /> */}
    </Card>
  );
}
