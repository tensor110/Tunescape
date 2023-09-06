import React from "react";
import "./card_dashboard.css";
import  edit from "../public/heart.png"
import thumb from "../public/thumb.jpg"
import Image from "next/image";
const Card_dashboard = () => {
  return (
    <div id="card-dashboard">
      <span className="serial">1</span>
      <span>
        <Image src={thumb} id="thumbnail"/>
      </span>
      <span>SONG NAME</span>
      <span>ARTIST NAME</span>
      <span>650</span>
      <span>03:50</span>
      <span>
        <Image src={edit} id="editbtn"/>
      </span>
    </div>
  );
};

export default Card_dashboard;
