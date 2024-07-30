import React from 'react'
import "./Hero.css"
import { Link } from 'react-router-dom'
import profile from "../../assets/FA_PNG.png"

const Hero = () => {
    return (
        <div className='hero'>
            {/* ============================ */}
            <div className="intro-text">
                <img src={profile} alt="" className='dp' />
                <p>Hello, I'm Frasat Ali</p>
                <h2>I'm a software engineer</h2>
                <div className="intro-btns">
                    <Link style={{ textDecoration: 'none' }} className='b-s-white' to={'/project'}>Projects</Link>
                    <Link style={{ textDecoration: 'none' }} className='b-s-white' to={'/contact'}>Contact</Link>
                </div>
            </div>
            {/* ============================ */}
        </div>
    )
}

export default Hero
