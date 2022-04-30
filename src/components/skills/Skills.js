import React, { useEffect, useState } from "react";
import SkillCard from "../skillCard/SkillCard";
import './Skills.css';
const Skills = ()=>{
    const [skills,setSkills] = useState([]);

    useEffect(()=>{
        setSkills([{
            title : "UI technologies",
            skillSet : ["HTML5" , "CSS3 - Bootstrap" , "MUI"]
        },
    {
        title : "Frontend technologies",
        skillSet : ["Reactjs(typescript or javascript)" , "Angular2" , 'Vue(2 & 3)']
    },
{
    title : 'Backend Technologies',
    skillSet : ['Firebase' , 'Nodejs - Express' , 'PostgresSql-MongoDB']
},
{
    title : 'Programming Languages',
    skillSet : ['Javascript' , 'Typescript']
},
{
    title : 'Mobile development',
    skillSet : ['Flutter' , 'ReactNative']
},
{
    title : 'Soft skills',
    skillSet : ['Communication skills' , 'presentation skills']
}])

    },[])
    return(
        <>
        <div className="row justify-content-center" id="skills">
                <section className="col-md-10 col-sm-12 mt-4 mb-4">
                    <div className="row justify-content-center">
                        <h2>Skills</h2>
                    </div>
                    <div className="row skills-sec justify-content-between">
                        {skills.map((skill)=>{
                            return(
                                
                                <div className="col-md-4 col-sm-6" key={skill.title}>
                                    <SkillCard  skillTitle={skill.title} skillsArr={skill.skillSet}/>
                                </div>
                                
                            )
                        })}
                    </div>
                </section>

            </div>
        </>
    )
}

export default Skills;