import React from 'react'
import './styles.css'
import Logo from '../../assets/images/logo/logo.png'
import Design1 from '../../assets/images/backgrounds/design_1.svg'
import Design2 from '../../assets/images/backgrounds/design_2.svg'
import Design3 from '../../assets/images/backgrounds/design_3.svg'
import MerakiLogo from '../../assets/images/events/meraki.svg'
import Logo2 from '../../assets/images/logo/logo2.svg'
import Copyright from "../../assets/images/backgrounds/Copyright.svg"


const LandingPage = () => {
    return (
        <>
            <div className="bgimg">
                <div className=" modification_1">
                    <div className="navbar navbar-expand-md nav-custom fixed-top">
                        <a className="logoChanges">
                            <img src={Logo} alt="TEDx VIT Vellore" />
                        </a>

                        <div className="collapse navbar-collapse text-center navCustom2" id="collapsenbar">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a href="" className="nav-link">Home</a>
                                </li>

                                <li className="nav-item">
                                    <a href="" className="nav-link">Blogs</a>
                                </li>

                                <li className="nav-item">
                                    <a href="" target="_blank" className="nav-link">About Us</a>
                                </li>

                                <li className="nav-item">
                                    <a href="" className="nav-link">Team</a>
                                </li>

                                <li className="nav-item">
                                    <a href="" target="_blank" className="nav-link">Sponsors</a>
                                </li>

                            </ul>
                        </div>
                    </div>

                    <section className="container-fluid text-center mySection">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-10 col-10 m-auto">
                                <h1 className="name">Ideas worth spreading. </h1>
                                <p></p>
                                <p className="aboutMe">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <a className="knowMore" href="" target="_blank"> Upcoming Events </a>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-10 col-10 align-content-center">
                                <a className="align-content-center lotti1">
                                    <img src={Design1} alt="Design" />
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <section className="container-fluid text-center certificate">
                <h1>Upcoming Events !</h1>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-10 col-10 d-block m-auto">
                        <img src={MerakiLogo} alt="Meraki Logo" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-10 col-10 d-block m-auto">
                        <div>
                            <h2>
                                Meraki
                        </h2>
                        </div>
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam
                        </p>
                        </div>
                        <div>
                            <p>
                                30-31st Jan 2021
                        </p>
                        </div>
                        <div>
                            <p>
                                Virtual
                        </p>
                        </div>
                        <div>
                            <a className="certify" href="" target="_blank"> Register </a>
                        </div>

                    </div>
                </div>
            </section>



            <section className="container-fluid text-center " id="animation">
                <div className="row justify-content-center">
                    <div className="col-lg-2 col-md-2 col-sm-10 col-10 d-block m-auto">
                        <a className="align-items-center">
                            <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
                            <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_gm3r0gxr.json"
                                background="transparent" speed="2" style={{ width: "300px", height: "300px" }} loop autoplay>
                            </lottie-player>
                        </a>
                    </div>
                </div>
            </section>


            <section className="container-fluid text-center certificate">
                <h1>Our Blogs !</h1>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-10 col-10 d-block m-auto">
                        <img src={Design2} alt="Design2" />
                        <img className="top" src={Design3} alt="Design3" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-10 col-10 d-block m-auto">
                        <div>
                            <h2 className="blogEdit">
                                Doing NOTHING is sometimes everything.
                        </h2>
                        </div>
                        <div>
                            <p style={{ color: "rgba(255, 255, 255, 0.5)" }}>
                                By:- Oshika
                        </p>
                        </div>
                        <div>
                            <a className="certify2" href="" target="_blank"> Read Full Blog </a>
                        </div>

                    </div>
                    <div style={{ padding: "60px 600px 10px" }}>
                        <a className="certify3" href="" target="_blank"> All Blogs </a>
                    </div>
                </div>

            </section>




            <section className="bgimg2 text-center">
                <div className="container-fluid justify-content-center">
                    <div className="row">
                        <div className="modification_2">
                            <div className="row">
                                <div style={{ paddingLeft: "130px" }}>
                                    <a className="logoChanges">
                                        <img src={Logo2} alt="TEDx VIT Vellore" />
                                    </a>
                                    <div className="row">
                                        <a href="" target="_blank" className=" d-block m-auto" id="imgSetting1">
                                            <script
                                                src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
                                            <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_ayl5c9tf.json"
                                                background="transparent" speed="1" style={{ width: "30px", height: "30px" }} loop
                                                autoplay></lottie-player>
                                        </a>
                                        <a href="" target="_blank" className=" d-block m-auto" id="imgSetting2">
                                            <script
                                                src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
                                            <lottie-player id="lotti2"
                                                src="https://assets3.lottiefiles.com/packages/lf20_0widRq.json"
                                                background="transparent" speed="2" style={{ width: "30px", height: "30px" }} loop
                                                autoplay></lottie-player>
                                        </a>
                                        <a href="" target="_blank" className=" d-block m-auto" id="imgSetting3">
                                            <script
                                                src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
                                            <lottie-player id="lotti3"
                                                src="https://assets8.lottiefiles.com/packages/lf20_mMWTg2.json"
                                                background="transparent" speed="2" style={{ width: "65px", height: "65px" }} loop
                                                autoplay></lottie-player>
                                        </a>
                                        <a href="" target="_blank" className=" d-block m-auto" id="imgSetting4">
                                            <script
                                                src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
                                            <lottie-player id="lotti4"
                                                src="https://assets5.lottiefiles.com/packages/lf20_dgBN4P.json"
                                                background="transparent" speed="2" style={{ width: "30px", height: "30px" }} loop
                                                autoplay></lottie-player>
                                        </a>
                                        <a href="" target="_blank" className=" d-block m-auto" id="imgSetting5">
                                            <script
                                                src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
                                            <lottie-player
                                                src="https://assets4.lottiefiles.com/private_files/lf30_3xg9szyw.json"
                                                background="#000000" speed="1" style={{ width: '30px', height: '30px' }} loop autoplay>
                                            </lottie-player>
                                        </a>
                                    </div>
                                    <a>
                                        <img src={Copyright} alt="Copyright" />
                                    </a>
                                </div>
                                <div className="copyrightColumn">
                                    <h4 className="footTitle">
                                        TED Links
                                </h4>
                                    {/* <p> */}
                                    <ul className="footBody navCustom3">
                                        <li>
                                            <a href="" className="nav-link">Terms Of Use</a>
                                        </li>
                                        <li>
                                            <a href="" className="nav-link">Privacy Notice</a>
                                        </li>
                                        <li>
                                            <a href="" className="nav-link">Cookie Policy </a>
                                        </li>
                                        <li>
                                            <a href="" className="nav-link">Code Of Conduct </a>
                                        </li>
                                        <li>
                                            <a href="" className="nav-link">Refer a friend FAQ</a>
                                        </li>
                                        <li>
                                            <a href="" className="nav-link">Premium Services Terms</a>
                                        </li>
                                    </ul>
                                    {/* </p> */}
                                </div>
                                <div className="copyrightColumn">
                                    <h4 className="footTitle">
                                        Resources
                                </h4>
                                    {/* <p> */}
                                    <ul className="footBody navCustom3">
                                        <li>
                                            <a href="" className="nav-link">About</a>
                                        </li>
                                        <li>
                                            <a href="" className="nav-link">Contact Us</a>
                                        </li>
                                        <li>
                                            <a href="" className="nav-link">Community</a>
                                        </li>
                                        <li>
                                            <a href="" className="nav-link">Media</a>
                                        </li>
                                    </ul>
                                    {/* </p> */}
                                </div>
                                <div className="copyrightColumn">
                                    <h4 className="footTitle">
                                        Contact Us
                                </h4>
                                    {/* <p> */}
                                    <ul className="footBody navCustom3">
                                        <li>
                                            <a href="" className="nav-link">+91 9999999999</a>
                                        </li>
                                        <li>
                                            <a href="" className="nav-link">tedxvit@gmail.com</a>
                                        </li>
                                    </ul>
                                    {/* </p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default LandingPage;



