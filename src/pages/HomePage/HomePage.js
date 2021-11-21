import React from 'react'
import "./HomePage.scss"

import Logo from "../../assets/images/logo/logo.svg"
import Design1 from "../../assets/images/backgrounds/design_1.svg"
const HomePage = () => {
    return (
        <article className="homePage">
            {/* header: fixed on top */}
            <header className="header">
                <div className="header-content">
                    <div className="header__logoContainer">
                        <img src={Logo} alt="Tedx logo" />
                    </div>
                    <div className="header__nav">
                        <ul>
                            <li>Home</li>
                            <li>Blogs</li>
                            <li>About Us</li>
                            <li>Team</li>
                            <li>Sponsors</li>
                        </ul>
                    </div>
                </div>
            </header>
            {/* first thing you see on entering the site */}
            <section className="heroSection">
                <div className="heroSection__banner">
                    <h1>Ideas worth spreading. </h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br /> Expedita, voluptate.</p>
                    <div className="heroSection__banner__button">Upcoming Events</div>
                </div>
                <div className="heroSection__bannerImage">
                    <img src={Design1} alt="design1" />
                </div>
            </section>
        </article>
    )
}

export default HomePage
