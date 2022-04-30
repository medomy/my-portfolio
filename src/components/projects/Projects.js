import React, { useEffect, useState } from "react";
import { getProjects } from "../../services/projects";
import ProjectCard from "../ProjectCard/ProjectCard";
import './Projects.css';

const Projects = ()=>{
    const [projects,setProjects] = useState([]);
    const retriveData = async()=>{
        try{
            const _projects =await getProjects();
            setProjects(_projects)
        }catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
        retriveData();
    },[])
    return(
        <>
        <div className="row justify-content-center" id="projects">
                <section className="col-md-10 col-sm-12 mt-4 mb-4">
                    <div className="row justify-content-center">
                        <h2>Projects</h2>
                    </div>
                    <div className="row skills-sec justify-content-between">
                        {projects.map((project)=>{
                            return(
                                
                                <div className="col-md-4 col-sm-6" key={project.id}>
                                    <ProjectCard project={project}/>
                                </div>       
                            )
                        })}
                    </div>
                </section>

            </div>
        </>
    )
}
export default Projects