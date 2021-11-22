import React from 'react'
import "./HomePage.scss"

import Logo from "../../assets/images/logo/logo.png"
import FooterLogo from "../../assets/images/logo/logo.svg"
import Design1 from "../../assets/images/backgrounds/design_1.svg"
import BlogBg from "../../assets/images/backgrounds/design_2.svg"
import BlogPhone from "../../assets/images/backgrounds/design_3.svg"
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
            {/* upcoming events */}
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
            <h1 className="blogs_title">Our Blogs !</h1>
            {/* blogs section */}
            <section className="blogs">
                <div className="blogs__imageContainer">
                    <img id="blogBg" src={BlogBg} alt="blog background" />
                    <img id="blogPhone" src={BlogPhone} alt="blog phone" />
                </div>
                <div className="blogs__infoContainer">
                    <h1>Doing NOTHING is somtimes<br />everything.</h1>
                    <p>By:- Oshika</p>
                    <div className="blogs__infoContainer__readBlog">
                        <p>Read Full Blog</p>
                    </div>
                </div>
            </section>
            <footer className="footer">
                <section className="footer-grid">
                    <section className="footer-grid__image">
                        <img src={FooterLogo} alt="" className="logoContainer" />
                    </section>
                    <section className="footer-grid__chapter">
                        <h1 className="footer-grid__chapter__title">
                            TED Links
                        </h1>
                        <span className="footer-grid__chapter__items">Terms of use</span><br />
                        <span className="footer-grid__chapter__items">Privacy Notice</span><br />
                        <span className="footer-grid__chapter__items">Cookie Policy</span><br />
                        <span className="footer-grid__chapter__items">Code Of Conduct</span><br />
                        <span className="footer-grid__chapter__items">Refer a Friend FAQ</span><br />
                    </section>
                    <section className="footer-grid__chapter">
                        <h1 className="footer-grid__chapter__title">
                            Resources
                        </h1>
                        <span className="footer-grid__chapter__items">About</span><br />
                        <span className="footer-grid__chapter__items">Contact Us</span><br />
                        <span className="footer-grid__chapter__items">Community</span><br />
                        <span className="footer-grid__chapter__items">Blog </span><br />
                        <span className="footer-grid__chapter__items">Media</span><br />
                    </section>
                    <section className="footer-grid__chapter">
                        <h1 className="footer-grid__chapter__title">
                            Contact Us
                        </h1>
                        <span className="footer-grid__chapter__items">+91 999999999999</span>
                        <span className="footer-grid__chapter__items">tedxvit@gmail.com</span>
                    </section>
                </section>
            </footer>
        </article>
    )
}

export default HomePage
