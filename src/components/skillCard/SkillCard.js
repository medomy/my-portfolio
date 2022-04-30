import React from "react";
import './SkillCard.css'

const SkillCard = ({skillTitle , skillsArr})=>{
    return(
        <>
        <div className="skill-Card">
            <h6>{skillTitle}</h6>
            {/*<ul>
                {skillsArr.map((skill)=>{
                    return <li key={skill}>{skill}</li>
                })}
            </ul>*/ }
            {skillsArr.map((skill)=>{
                    return <p key={skill}>{skill}</p>
                })}
            

        </div>
        </>
    )
}
export default SkillCard