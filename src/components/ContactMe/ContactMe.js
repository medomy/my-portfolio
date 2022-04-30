import React from "react";
import './ContactMe.css';

const ConatctMe = ()=>{
    return(
        <>
        <section className="footer col-12" id="contactme">
            <h3>Contact me</h3>
            <div className="row justify-content-between align-items-center">
                <div className="col-md-3 col-xs-8">
                    <span>Mobile Number : +201156407890</span>
                </div>
                <div className="col-md-3 col-xs-8">
                    <a href="https://www.linkedin.com/in/mohamed-abdallah-72a951225/"><i className="bi bi-linkedin" ></i></a>
                </div>
                <div className="col-md-3 col-xs-8">
                    <a href="https://github.com/medomy"><i className="bi bi-github"></i></a>
                </div>
                <div className="col-md-3 col-xs-8">
                    <a href="mailto:medomy1997@gmail.com"><i className="bi bi-envelope-fill"></i></a>
                </div>
            </div>
        </section>
        </>
    )
}
export default ConatctMe