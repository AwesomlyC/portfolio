import React from "react";
import SkillsItem from "./SkillsItem";
import SkillsLanguage from "./SkillsLanguage";

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
          <SkillsLanguage
            skill1="react"
            skill2="tailwind"
            skill3="java"
            level1="w-[91%]"
            level2="w-[40%]"
            level3="w-[80%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
