import React from "react";
//import "./style.css";

function TeamCard(props) {
  return (
<div className="col col-span-4 justify-center">
    <div className="row">
        <div className="img-container">
        <img
        alt= {props.name}
        src= {props.image}
        />
        </div>
      <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>Portfolio:</strong> {props.portfolio}
        </li>
        <li>
          <strong>Github repo:</strong> {props.github}
        </li>
      </ul>
      </div>
    </div>
</div>
    
  );
}

export default TeamCard;
