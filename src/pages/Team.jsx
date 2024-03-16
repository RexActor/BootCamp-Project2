import React, { useState } from 'react';
import TeamCard from "../components/TeamCard";
import TeamMembers from "../utils/TeamMembers.json";

function Team() {
  return (
    <div className='container pt-6'>
      <div className='flex flex-row flex-wrap w-400 space-x-4 justify-center'>
       {TeamMembers.map((TeamMembers) => (
        <TeamCard
          name={TeamMembers.name}
          image={TeamMembers.image}
          portfolio={TeamMembers.portfolio}
          github={TeamMembers.github}
        />
      ))}
      </div>
    </div>
  );
}

export default Team;
