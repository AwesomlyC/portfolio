import React from "react";
import SkillsItem from "./SkillsItem";
import SkillsLanguage from "./SkillsLanguage";
import SkillsList from "./SkillsList";

const Skills = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]">
      <h1 className="heading">
        Education & <span className="text-yellow-400">Skill</span>
      </h1>
      <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
        <div>
          <SkillsItem
            title="University of California - Irvine"
            year="2020 - 2024"
          />
        </div>
        <div>
          <SkillsList
            skillTitleFirst="Lanaguages &"
            skillTitleSecond="Databases"
            skills={["Java", "Python", "JavaScript", "TypeScript", "MySQL", "PostgreSQL", 
              "MongoDB", "NoSQL", "SQLite3", "Cassandra", "Couchbase"]}
          />
          <SkillsList
            skillTitleFirst="Web"
            skillTitleSecond="Development"
            skills={["React", "Express.js", "Node.js", "Next.js", "JDBC", "jQuery", 
              "Axios", "Django", "Tailwind CSS"]}
          />
          <SkillsList
            skillTitleFirst="DevOps &"
            skillTitleSecond="Tools"
            skills={["Git", "GitHub", "Maven", "AWS", "Tomcat", "JMeter", "JUnit"]}
          />
          <SkillsList
            skillTitleFirst="APIs &"
            skillTitleSecond="Architecture"
            skills={["RESTFul APIs", "Microservices", "Clerk", "Vercel", "Netlify"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
