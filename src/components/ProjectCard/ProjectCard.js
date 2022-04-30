import React from "react";
import'./ProjectCard.css';

const ProjectCard = ({project})=>{
    return(
        <>
        <a href={project.link}>
            <div className="project-card">
                <h3>{project.title}</h3>
                <h5>{project.subTitle}</h5>
                <p>{project.description}</p>
            </div>
        </a>
        </>
    )
}
export default ProjectCard;