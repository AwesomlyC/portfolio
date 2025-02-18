import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface Props {
    title: string,
    description: string,
    skills: Array<string>,
    githublink: string,
    websitelink?: string
}


const ProjectItem = ({title, description, skills, githublink, websitelink} : Props) => {
  return (
    <div className='project-item'>
      <div
        className="group w-full transform duration-300 rounded-2xl border border-slate-500/20 
      dark:border-slate-600/30 bg-slate-100/20 dark:bg-slate-600/20 hover:bg-slate-100/30 
      dark:hover:bg-slate-600/30 cursor-pointer p-4 sm:p-6 flex flex-col justify-between"
      >
        <header>
          <text className="pb-4 font-semibold text-lg text-white">{title}</text>
          <p className="text-white opacity-80">
              {description}
          </p>
        </header>
        <footer>
          <div className="mb-6 flex flex-wrap">
            {skills.map( (skill) => (
            <div className='project-skill' key = {skill}>{skill} </div>))
            }
          </div>
          <ul className="flex space-x-3 text-[18px]">
  {          githublink ? <li className="z-10">
              <a href={githublink} title={githublink}>
                <FaGithub className="project-icon" />
              </a>
            </li> : null}
  {          websitelink ? <li className="z-10">
              <a href={websitelink} title={websitelink}>
                <FaExternalLinkAlt className="project-icon" />
              </a>
            </li> : null}
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default ProjectItem;
