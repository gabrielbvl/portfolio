import { useNavigate } from "react-router-dom";
import Typewriter from "typewriter-effect";
import "../../Styles/about.css";
import aboutLogo from "../../Assets/imgs/programer2.png";
import html from "../../Assets/imgs/html.png";
import css from "../../Assets/imgs/css.png";
import js from "../../Assets/imgs/js.png";
import git from "../../Assets/imgs/git.png";
import react from "../../Assets/imgs/react.png";
import node from "../../Assets/imgs/node.png";
import Particle from "../../Components/Background-Animation/particles";

function About() {
    return (
        <section className="about_container">
            <Particle />

            <div className="img_about">
                <h1>Sobre Mim</h1>
                <img src={aboutLogo} alt="img_about" />
            </div>
            {/* <div className="typewriter">
                <div className="writer">
                    <Typewriter
                        options={{
                            strings: [
                                "Algumas curiosidades que vocês verão abaixo...",
                                "Sou profissional de educação fisica por formação.",
                                "Sou faixa azul de jiu-jitsu.",
                                "Já trabalhei como desenvolvedor front-end.",
                                "Já ouvi que não confiavam no meu trabalho.",
                                "Tenho uma meta como dev e irei chegar la.",
                            ],
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 50,
                        }}
                    />
                </div>
            </div> */}
            <div className="about_principal">
                <h1>
                    Olá, me chamo <b className="blue_light">Gabriel Bezerra</b> e irei apresentar
                    minhas tecnologias e alguns fatos sobre mim <b className="blue_light">antes</b>{" "}
                    e <b className="blue_light">depois</b> da programação.
                </h1>

                <section className="techs">
                    <div className="techs_internal">
                        <div className="tech">
                            <img src={html} alt="img_about" />
                        </div>
                        <div className="tech">
                            <img src={css} alt="img_about" />
                        </div>
                        <div className="tech">
                            <img src={js} alt="img_about" />
                        </div>
                    </div>
                    <div className="techs_internal">
                        <div className="tech" id="react">
                            <img src={react} alt="img_about" />
                        </div>
                        <div className="tech">
                            <img src={node} alt="img_about" />
                        </div>
                        <div className="tech" id="git">
                            <img src={git} alt="img_about" />
                        </div>
                    </div>
                </section>

                <section className="about_no_tech">
                    <h2>
                        Alguns fatos sobre mim que <b className="blue_light">não se relacionam</b> a
                        programação...
                    </h2>
                    <p className="about_description">
                        1 - Sou{" "}
                        <b className="blue_light">bacharel e licenciado em Educação Física</b> desde
                        2017.
                    </p>
                    <p className="about_description">
                        2 - Atuei como <b className="blue_light">personal trainer</b> entre 2013 e
                        2021, durante 8 anos, parando apenas por conta da pandemia.
                    </p>
                    <p className="about_description">
                        3 - <b className="blue_light">Empreendo</b> desde cedo, meu{" "}
                        <b className="blue_light">maior sucesso</b> foi uma loja de produtos
                        personalizados feitos por mim, desde a criação da arte até a confecção de
                        produtos, a <b className="blue_light">Buttons Store</b> esteve ativa de 2018
                        até 2022.
                    </p>
                    <p className="about_description">
                        4 - Sou entusiasta das lutas,{" "}
                        <b className="blue_light">faixa azul de jiu-jitsu</b> e venho treinando,
                        além dele, o <b className="blue_light">muay thai</b> desde 2012.
                    </p>
                </section>
                <div className="about_tech">
                    <h2>
                        Alguns fatos sobre mim <b className="blue_light">relacionados</b> a
                        programação...
                    </h2>
                    <p className="about_description">
                        1 - Fiz o curso da <b className="blue_light">Kenzie Academy Brasil</b> de
                        programação full stack, durante 1 ano,{" "}
                        <b className="blue_light">2 mil horas</b>.
                    </p>
                    <p className="about_description">
                        2 - Apesar de ter estudado front e back, minha{" "}
                        <b className="blue_light">paixão</b> é pelo{" "}
                        <b className="blue_light">front</b>, tanto na programação quanto no designer
                        de paginas e produtos.
                    </p>
                    <p className="about_description">
                        3 - Encerrei meu empreendimento pois{" "}
                        <b className="blue_light">consegui um trabalho</b> como programador
                        front-end em 2022, entretanto, não deu certo, mas não voltei com a loja,
                        continuo me <b className="blue_light">especializando</b> e buscando um{" "}
                        <b className="blue_light">novo trabalho</b>.
                    </p>
                    <p className="about_description">
                        4 - Com 2 semanas de trabalho ouvi essa frase{" "}
                        <b className="red_light">"Eu não confio no seu trabalho."</b>. 🙂
                    </p>
                    <p className="about_description">
                        5 - Acho que o segredo de se vencer na vida é{" "}
                        <b className="blue_light">compreender a dor de agora</b>, ninguem nasceu no{" "}
                        <b className="blue_light">topo da montanha</b>, continuei estudando, decidi
                        abrir mão do back pelo menos por enquanto e{" "}
                        <b className="blue_light">focar 100% no front</b>.
                    </p>
                    <p className="about_description">
                        6 - Minha maior vontade é um dia chegar na posição de{" "}
                        <b className="blue_light">liderar/treinar</b> pessoas e dizer para elas
                        todos os dias{" "}
                        <b className="blue_light">
                            "Eu confio no seu trabalho, qualquer dúvida me procure, iremos aprender
                            juntos!"
                        </b>{" "}
                        pois um dia ouvi o contrario e espero
                        <b className="blue_light">nunca</b> fazer o mesmo.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;
