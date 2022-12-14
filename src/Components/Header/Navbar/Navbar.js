import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import CustomLink from '../../CustomLink/CustomLink';
import './Navbar.css'


const Navbar = () => {
    const [user] = useAuthState(auth);
    const [signOut] = useSignOut(auth);

    // change navbar bg color on scroll to #edededf2
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        }
        else {
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor)

    return (
        // <div className={color ? 'header-bg' : ""}>
        <nav className={color ?
            "navbar navbar-expand-lg navbar-light fixed-top header-bg"
            :
            "navbar navbar-expand-lg navbar-light fixed-top"}>
            <div className="container">
                <Link className={color ?
                    "navbar-brand fs-3 fw-semibold header-color"
                    :
                    "navbar-brand fs-3 fw-semibold text-black"} to='/'>PhotographerMart</Link> <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler" data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse" type="button"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <CustomLink className="navbar-brand me-4" to='/home'>Home</CustomLink>
                        </li>
                        <li className="nav-item">
                            <CustomLink className="navbar-brand me-4" to='/images'>Images</CustomLink>
                        </li>
                        <li className="nav-item">
                            <CustomLink className="navbar-brand me-4" to='/services'>Services</CustomLink>
                        </li>
                        <li className="nav-item">
                            <CustomLink className="navbar-brand me-4" to='/blog'>Blog</CustomLink>
                        </li>
                        <li className="nav-item">
                            <CustomLink className="navbar-brand me-4" to='/about'>About</CustomLink>
                        </li>
                    </ul>
                    {
                        user ?
                            <Button onClick={() => signOut()} variant='outline-warning'>Sign Out</Button>
                            :
                            <Link to='/register'><Button variant="outline-warning">Register</Button></Link>
                    }
                </div>
            </div>
        </nav>

    );
};

export default Navbar;