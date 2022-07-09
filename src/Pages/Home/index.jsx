import React from "react";
import "../../Styles/home.css";
import "../../Styles/global.css";
import Typewriter from "typewriter-effect";
import homeLogo from "../../Assets/imgs/programer.svg";
import Particle from "../../Components/Background-Animation/particles";
import photo from "../../Assets/imgs/foto.jpeg";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

function Home() {
    return (
        <section>
            <section section className="home1_external_container" id="home">
                <Particle />
                <div className="home1_internal_container">
                    <div className="home1_container">
                        <div className="home1_presentation">
                            <h1 className="iam">
                                Olá, eu me chamo
                                <span className="name"> GABRIEL BEZERRA</span>
                                <p>É um prazer ter você aqui!</p>
                            </h1>

                            <div className="typewriter">
                                <div className="writer">
                                    <Typewriter
                                        options={{
                                            strings: [
                                                "Atualmente eu sou...",
                                                "Desenvolvedor Front-End",
                                                "Atuando com JS e ReactJS",
                                                "Apaixonado por UI/UX",
                                            ],
                                            autoStart: true,
                                            loop: true,
                                            deleteSpeed: 50,
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="img_home">
                            <img src={homeLogo} alt="img_home1" />
                        </div>
                    </div>
                    <div className="more">
                        <IoIosArrowDown style={{ fontSize: "80px" }} />
                    </div>
                </div>
            </section>
            <section fluid className="home2_external_container" id="about">
                <section>
                    <section md={8} className="home2_about_me">
                        <h1 style={{ fontSize: "2.6em" }}>
                            UM BREVE RESUMO SOBRE <span className="blue_light"> MIM </span>
                        </h1>
                        <div className="photo">
                            <div>
                                <img src={photo} alt="my_photo" />
                            </div>
                        </div>
                        <p className="home2_description" id="first">
                            Sou um ex perssonal trainer, com bacharelado e licenciatura em Educação
                            Física, já fui professor de crianças e adolescentes, nos ensinos
                            infantil, fundamental e medio e de adultos, na universidade.
                        </p>
                        <p className="home2_description">
                            Hoje eu conheço e adoro trabalhar com
                            <i>
                                <b className="blue_light"> Javascript, React e NodeJs </b>
                            </i>
                        </p>
                        <p className="home2_description">
                            Eu desejo uma oportunidade de inserção no mercado como &nbsp;
                            <i>
                                <b className="blue_light">Desenvolvedor Front-End</b> futuramente,
                                pretendo estudar e quem sabe trabalhar com{" "}
                                <b className="blue_light">desenvolvimento de jogos.</b>
                            </i>
                        </p>
                        <p className="home2_description">
                            Hoje estudo Back-End, vendo{" "}
                            <b className="blue_light">SQL, Postgress, Docker, Python, Typscript </b>{" "}
                            e outras tecnologias relevantes para o back.
                        </p>
                    </section>
                    <section>
                        <div className="home2_social">
                            <h6>
                                Seja bem vindo ao meu <span className="blue_light">GitHub </span>e
                                conect-se comigo no <span className="blue_light">Linkedin </span>
                            </h6>
                            <ul className="home2_social_list_links">
                                <li className="social_links">
                                    <a
                                        href="https://github.com/gabrielbvlk"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="color  home2_icons"
                                    >
                                        <AiFillGithub />
                                    </a>
                                </li>
                                <li className="social_links">
                                    <a
                                        href="https://www.linkedin.com/in/gabriel-bezerra-vl/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="color  home2_icons"
                                    >
                                        <FaLinkedinIn />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </section>
                </section>
            </section>
        </section>
    );
}

export default Home;
