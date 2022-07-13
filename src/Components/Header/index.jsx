import React, { useState } from "react";
import "../styles/header.css";
import { useNavigate } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import {
    AiFillStar,
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function Header() {
    const [menuActive, setMenuActive] = useState(false);

    const navigate = useNavigate();

    const toggleMode = () => {
        setMenuActive(!menuActive);
    };

    const goHome = () => {
        navigate("/");
        setMenuActive(!menuActive);
        // toast.success("Bem vindo ao teste de Router Dom!");
    };

    const goAbout = () => {
        navigate("/about");
        setMenuActive(!menuActive);
        // toast.success("Bem vindo ao teste de Router Dom!");
    };

    const goProjects = () => {
        navigate("/projects");
        setMenuActive(!menuActive);
        // toast.success("Bem vindo ao teste de Router Dom!");
    };

    const goCurriculum = () => {
        navigate("/curriculum");
        setMenuActive(!menuActive);
        // toast.success("Bem vindo ao teste de Router Dom!");
    };

    return (
        <div className="header_container">
            <div className="header_container_logo">
                <button className="header_logo" onClick={goHome}>
                    Gabriel Bezerra
                </button>
            </div>
            {/* Hamburguer */}
            <div className="hamburguer_container">
                <div className={menuActive ? "icon iconActive" : "icon"} onClick={toggleMode}>
                    <div className="hamburguer hamburguerIcon"></div>
                </div>
                <div className={menuActive ? "menu menuOpen" : "menu menuClose"}>
                    <div className="list">
                        <ul className="listItems">
                            <li onClick={goHome}>Home</li>
                            <li onClick={goAbout}>Sobre</li>
                            <li onClick={goProjects}>Projetos</li>
                            <li onClick={goCurriculum}>Curriculo</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Hamburguer */}
            <div className="header_container_buttons">
                <button className="header_button" onClick={goHome}>
                    <AiOutlineHome
                        style={{ fontSize: "24px", marginRight: "5px", marginBottom: "-5px" }}
                    />
                    Home
                </button>

                <button className="header_button" onClick={goAbout}>
                    <AiOutlineUser
                        style={{ fontSize: "24px", marginRight: "5px", marginBottom: "-5px" }}
                    />
                    Sobre
                </button>
                <button className="header_button" onClick={goProjects}>
                    <AiOutlineFundProjectionScreen
                        style={{ fontSize: "24px", marginRight: "5px", marginBottom: "-5px" }}
                    />
                    Projetos
                </button>
                <button className="header_button" onClick={goCurriculum}>
                    <CgFileDocument
                        style={{ fontSize: "24px", marginRight: "5px", marginBottom: "-5px" }}
                    />
                    Curriculo
                </button>
                <a href="https://github.com/gabrielbvlk" target={"blank"}>
                    <button className="github_button">
                        <CgGitFork style={{ fontSize: "24px" }} />
                    </button>
                </a>
            </div>
        </div>
    );
}

export default Header;
