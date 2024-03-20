import React from 'react';
import { useEffect } from 'react';
import TeamCard from "../components/TeamCard";
import TeamMembers from "../utils/TeamMembers.json";

function Team() {
  useEffect(() => {
    document.title = "Pathway-Team";
  }, []);

  return (
    <main id="team-list" className="px-8 py-8 bg-gray-100 text-gray-800">
      <section className="mx-auto max-w-screen-lg flex justify-between items-center">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          {/* Heading */}
          <div className="mb-10 md:mb-16">
            <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Meet our Team
            </h1>
            <p className="mx-auto max-w-screen-md text-center text-gray-600 md:text-lg">
              Welcome to the Pathway team! Our dedicated and talented individuals work collaboratively to
              bring you the best product.
            </p>
          </div>
          {/* Team cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-8">
            {TeamMembers.map((TeamMember) => (
              <TeamCard
                key={TeamMember.id}
                id={TeamMember.id}
                image={TeamMember.image}
                portfolio={TeamMember.portfolio}
                name={TeamMember.name}
                title={TeamMember.title}
                duty={TeamMember.duty}
                linkedin={TeamMember.linkedin}
                github={TeamMember.github}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Team;
