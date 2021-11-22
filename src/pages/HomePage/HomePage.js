import React from 'react'
import "./HomePage.scss"

import Logo from "../../assets/images/logo/logo.png"
import Design1 from "../../assets/images/backgrounds/design_1.svg"
import MerakiLogo from '../../assets/images/events/meraki.svg'
import { BsFillCalendarEventFill } from "react-icons/bs"
import { HiDesktopComputer } from "react-icons/hi"

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
                    <h1>Ideas worth spreading.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br /> Expedita, voluptate.</p>
                    <div className="heroSection__banner__button">Upcoming Events</div>
                </div>
                <div className="heroSection__bannerImage">
                    <img src={Design1} alt="design1" />
                </div>
            </section>
            <section className="upcoming">
                <h1>Upcoming Events</h1>
                <div className="upcoming-flexContainer">
                    <div className="upcoming__imageContainer">
                        <img src={MerakiLogo} alt="Meraki Logo" />
                    </div>
                    <div className="upcoming__info">
                        <h3>Meraki</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos corrupti ipsam voluptatibus possimus nostrum dolore pariatur voluptatem ab, similique aspernatur? Voluptate numquam cumque ut voluptas nostrum aliquam voluptatum nam reiciendis.</p>
                        <footer>
                            <div className="footer-info">
                                <BsFillCalendarEventFill />
                                <p>30-31st Jan 2021</p>
                                <HiDesktopComputer />
                                <p>Remote</p>
                            </div>
                            <div className="upcoming__info__registerBtn">
                                <p>Register</p>
                            </div>
                        </footer>
                    </div>
                </div>
            </section>
        </article>
    )
}

export default HomePage
