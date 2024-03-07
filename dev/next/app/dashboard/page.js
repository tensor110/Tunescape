import React from "react";
import "./dashboard.css"
import Card_dashboard from "@/components/Card_dashboard";
const page = () => {
  return (
    <div id="dashboard">
      <div className="upper">
        <div id="uploads">
          <span className="uploads-no">120</span>
          <span className="uploads-content">Uploads</span>
        </div>
        <div id="plays">
          <span className="plays-no">69000</span>
          <span className="plays-content">Plays</span>
        </div>
      </div>
      <div className="mid">
        <button id="uploadbtn">Upload  →</button>
      </div>
      <div className="lower">
        <div className="content-bar">
          <span>Serial no.</span>
          <span>Thumbnail</span>
          <span>Title</span>
          <span>Artist Name</span>
          <span>Plays</span>
          <span>Duration</span>
          <span>Edit</span>
        </div>
        <Card_dashboard />
        <Card_dashboard />
        <Card_dashboard />
        <Card_dashboard />
        <Card_dashboard />
        <Card_dashboard />
      </div>
    </div>
  );
};

export default page;
