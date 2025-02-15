import React from 'react'

interface Props {
    skillTitleFirst: string,
    skillTitleSecond?: string,
    skills: Array<string>
}
const SkillsList = ({skillTitleFirst, skillTitleSecond, skills} : Props) => {
  return (
    <div className='text-white'>
        <h3 className='text-[24px]'>
            {skillTitleFirst} {skillTitleSecond ? <span className='text-yellow-400'>{skillTitleSecond}</span> : null}
            
        </h3>
        <div className='mb-6 flex flex-wrap capitalize '>
            {skills.map((skill) => (
                <div className='project-skill bg-blue-800 hover:bg-yellow-600' key = {skill}>{skill} </div>
            ))}
        </div>
    </div>
  )
}

export default SkillsList