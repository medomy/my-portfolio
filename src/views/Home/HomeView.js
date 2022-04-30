import React from "react";
import ConatctMe from "../../components/ContactMe/ContactMe";
import ProfileComponent from "../../components/profile/Profile";
import Projects from "../../components/projects/Projects";
import Skills from "../../components/skills/Skills";
import './HomeView.css'

const HomeView = () => {
    return (
        <>
            <div className="view">
                <ProfileComponent />
                <Skills />
                <Projects />
                <ConatctMe />
            </div>

        </>
    )
}
export default HomeView