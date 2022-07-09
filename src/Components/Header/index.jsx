import React, { useState } from "react";
import "../styles/header.css";
import { Link, useNavigate } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import {
    AiFillStar,
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function Header() {
    const navigate = useNavigate();

    const goHome = () => {
        navigate("/");
        // toast.success("Bem vindo ao teste de Router Dom!");
    };

    const goAbout = () => {
        navigate("/about");
        // toast.success("Bem vindo ao teste de Router Dom!");
    };

    const goProjects = () => {
        navigate("/projects");
        // toast.success("Bem vindo ao teste de Router Dom!");
    };

    const goCurriculum = () => {
        navigate("/curriculum");
        // toast.success("Bem vindo ao teste de Router Dom!");
    };

    return (
        <div className="header_container">
            <div className="header_container_logo">
                <button className="header_logo" onClick={goHome}>
                    Gabriel Bezerra
                </button>
            </div>
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
