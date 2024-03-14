import React from "react";
//import "./style.css";

function TeamCard(props) {
  return (
<div className="">
    <div className="flex">
        <div className="img-container">
        <img
        alt= {props.name}
        src= {props.image}
        />
        </div>
      <div className="content">
      <ul>
        <li>
          <strong>Title:</strong> {props.name}
        </li>
        <li>
          <strong>Description:</strong> {props.role}
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
