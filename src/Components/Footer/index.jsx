import React from "react";
import "../styles/footer.css";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
    return (
        <div className="footer_container">
            <div className="footer_container_logo">
                <button className="footer_logo">Gabriel Bezerra</button>
            </div>
            <div className="footer_container_logo">
                <p className="footer_logo">Desenvolvedor Front-End</p>
            </div>
            <div className="footer_container_buttons">
                <ul className="footer_social_list_links">
                    <li className="social_links">
                        <a
                            href="https://github.com/gabrielbvlk"
                            target="_blank"
                            rel="noreferrer"
                            className="color  footer_icons"
                        >
                            <AiFillGithub />
                        </a>
                    </li>
                    <li className="social_links">
                        <a
                            href="https://www.linkedin.com/in/gabriel-bezerra-vl/"
                            target="_blank"
                            rel="noreferrer"
                            className="color  footer_icons"
                        >
                            <FaLinkedinIn />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;
