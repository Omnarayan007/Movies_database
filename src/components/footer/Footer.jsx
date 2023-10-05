import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                </ul>
                <div className="infoText">
                Welcome to CineTube, your ultimate destination for all movies.
                Dive into our extensive and user-friendly database, 
                where you'll discover a curated collection of films from various genres and eras. 
                Immerse yourself in the world of cinema as you explore detailed information about each movie,
                including cast, status, summaries, release dates, and production trivia. 
                Watch captivating movie trailers and let your love for movies soar to new heights.
                Join us at CineTube, where movies come to life.
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
