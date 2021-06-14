import React from 'react';
import './Navbar.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faFileDownload} from '@fortawesome/free-solid-svg-icons';

import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-1 shadow sticky-top py-3">
            <div className="container">
                <Link className="navbar-brand brand-name color-4" to="/">Mehedi.</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    {/* <span className="navbar-toggler-icon"></span> */}
                    <FontAwesomeIcon icon={faBars} className='' />
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav mt-md-0 mt-3">
                        <a className="nav-link active color-5 px-2 mx-auto" aria-current="page" href="#about">About Me</a>
                        <a className="nav-link color-5 px-2 mx-auto" href="#featured">Featured</a>
                        <a className="nav-link color-5 px-2 mx-auto " href="#chat">Contact</a>
                        <button className="btn btn-dark btn-brand px-2 py-2 nav-link">
                            <FontAwesomeIcon icon={faFileDownload} className='download-icon me-2 color-5' />
                            <a href="https://drive.google.com/uc?export=download&id=1_79QYcxzFJwx5mXz3te0RTZsFAxd_j5X" className='text-decoration-none color-5'>Resume</a>
                        </button>
\                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;