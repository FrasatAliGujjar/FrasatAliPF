import React from 'react'
import "./Hero2.css"
import { Link } from 'react-router-dom'

const Hero2 = (prop) => {
    return (
        <div className='hero'>
            {/* ============================ */}
            <div className="intro-text">
                <h2>{prop.title}</h2>
                <p>{prop.desc}</p>
            </div>
            {/* ============================ */}
        </div>
    )
}

export default Hero2
