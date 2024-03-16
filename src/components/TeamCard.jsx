import React from "react";
//import "./style.css";

function TeamCard(props) {
  return (
<div className="card max-w-sm rounded overflow-hidden shadow-lg">
    <div className="w-full">
        <div className="img-container">
        <img className="mx-auto md:text-center"
        alt= {props.name}
        src= {props.image}
        />
        </div>
      <div className="content px-6 py-4 pb-2">
      <ul className="list-disc list-outside marker:text-amber-600">
        <li className="text-gray-600 font-bold text-xl mb-2">
          {props.name}
        </li>
        <li>
          <a className="text-indigo-500 font-bold" href={props.portfolio}>Portfolio site</a>
        </li>
        <li>
          <a className="text-indigo-500 font-bold" href={props.github}>Github repo</a>
        </li>
      </ul>
      </div>
    </div>
</div>
    
  );
}

export default TeamCard;
