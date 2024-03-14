import React from 'react';
import TeamCard from "../components/TeamCard";
import TeamMembers from "../utils/TeamMembers.json";

function Team() {
  return (
    <div>
      <TeamCard
        title={TeamMembers[0].name}
        image={TeamMembers[0].image}
        description={TeamMembers[0].role}
        github={TeamMembers[0].github}
      />
      <TeamCard
        title={TeamMembers[1].name}
        image={TeamMembers[1].image}
        description={TeamMembers[1].role}
        github={TeamMembers[1].github}
      />
      <TeamCard
        title={TeamMembers[2].name}
        image={TeamMembers[2].image}
        description={TeamMembers[2].role}
        github={TeamMembers[2].github}
      />
      <TeamCard
        title={TeamMembers[3].name}
        image={TeamMembers[3].image}
        description={TeamMembers[3].role}
        github={TeamMembers[3].github}
      />
      <TeamCard
        title={TeamMembers[4].name}
        image={TeamMembers[4].image}
        description={TeamMembers[4].role}
        github={TeamMembers[4].github}
      />
      <TeamCard
        title={TeamMembers[5].name}
        image={TeamMembers[5].image}
        description={TeamMembers[5].role}
        github={TeamMembers[5].github}
      />
    </div>
  );
}

export default Team;
