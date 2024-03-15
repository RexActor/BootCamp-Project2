import React, { useState } from 'react';
import TeamCard from "../components/TeamCard";
import TeamMembers from "../utils/TeamMembers.json";

function Team() {
  return (
    <div className='flex flex-wrap bg-white text-grey'>
       {TeamMembers.map((TeamMembers) => (
        <TeamCard 
          name={TeamMembers.name}
          image={TeamMembers.image}
          portfolio={TeamMembers.portfolio}
          github={TeamMembers.github}
        />
      ))}
    </div>
  );
}

export default Team;
