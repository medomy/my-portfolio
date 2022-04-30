import React, { useState } from "react";
import { Button } from 'react-bootstrap';
import './Profile.css';

const ProfileComponent = () => {
    const [name, setName] = useState('Mohamed Salah AbdAllah');
    const [position, setPosition] = useState('Front-end developer');
    const openInNewTab = (url) => {
        console.log(url)
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }
    //https://drive.google.com/file/d/1Bj9FLo4Y2oJbeS7l3jJDdLPA1c0uwcqn/view?usp=sharing
    return (
        <>
            <div className="row justify-content-center" id="profile">
                <section className="col-md-10 col-sm-12 mt-4 mb-4">
                    <div className="row profile-sec justify-content-between">
                        <div className="col-md-5 col-sm-10">
                            <h2>{name}</h2>
                            <h4>{position}</h4>
                            <p>A young developer who aims to make a successful career in the software engineering industry, eager to
                                learn and never loses faith, A proud graduate from the intensive training program (3 months program) in
                                the ITI, and can not wait to learn more in the backend and mobile fields in the near future.</p>
                        </div>
                        <div className="col-md-5 col-sm-10">

                            <figure className="row justify-content-center">
                                <img src="https://drive.google.com/uc?export=view&id=1Bj9FLo4Y2oJbeS7l3jJDdLPA1c0uwcqn" alt="profile-pic" />
                            </figure>

                            <div className="row justify-content-center">
                                <Button variant="success" onClick={() => openInNewTab('https://drive.google.com/uc?export=view&id=1AnVmQA2KZcgEPGuvvCExsQ99kHE87f80')}>Open CV <i className="bi bi-file-earmark-person"></i></Button>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

        </>
    )
}
export default ProfileComponent