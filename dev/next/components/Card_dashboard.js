import React from "react";
import "./card_dashboard.css";
import  edit from "../public/heart.png"
import Image from "next/image";
const Card_dashboard = () => {
  return (
    <div id="card-dashboard">
      <span className="serial">1</span>
      <span>
        <img src="./thumb.jpg" alt="Thumb" />
      </span>
      <span>SONG NAME</span>
      <span>ARTIST NAME</span>
      <span>650</span>
      <span>03:50</span>
      <span>
        {/* <img src="components/heart.png" alt="edit" /> */}
        <Image src={edit}/>
      </span>
    </div>
  );
};

export default Card_dashboard;
