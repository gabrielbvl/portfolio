import { useNavigate } from "react-router-dom";
import Particle from "../../Components/Background-Animation/particles";
import projectsLogo from "../../Assets/imgs/projects.png";
import projectBanner1 from "../../Assets/imgs/project1.png";
import projectBanner2 from "../../Assets/imgs/project2.png";
import projectBanner3 from "../../Assets/imgs/project3.png";
import projectBanner4 from "../../Assets/imgs/project4.png";
import projectBanner5 from "../../Assets/imgs/project5.png";
import projectBanner6 from "../../Assets/imgs/project6.png";
import projectBanner7 from "../../Assets/imgs/project7.png";
import projectBanner8 from "../../Assets/imgs/project8.png";
import projectBanner9 from "../../Assets/imgs/project9.png";
import projectBanner10 from "../../Assets/imgs/project10.png";
import "../../Styles/projects.css";

function Projects() {
    return (
        <div className="projects_container">
            <Particle />

            <div className="img_projects">
                <h1>Gostaria de conhecer alguns projetos criados por mim? É só descer!</h1>
                <img src={projectsLogo} alt="img_projects" />
            </div>

            <section className="projects_container_internal">
                <div className="project">
                    <img src={projectBanner1} alt="img_projects" />
                    <div className="project_description">
                        <p>Projeto:</p>
                        <p>Descrição:</p>
                    </div>
                    <div className="project_buttons">
                        <button>Repositório</button>
                        <button>Projeto</button>
                    </div>
                </div>
                <div className="project">
                    <img src={projectBanner2} alt="img_projects" />
                    <div className="project_description">
                        <p>Projeto:</p>
                        <p>Descrição:</p>
                    </div>
                    <div className="project_buttons">
                        <button>Repositório</button>
                        <button>Projeto</button>
                    </div>
                </div>
                <div className="project">
                    <img src={projectBanner3} alt="img_projects" />
                    <div className="project_description">
                        <p>Projeto:</p>
                        <p>Descrição:</p>
                    </div>
                    <div className="project_buttons">
                        <button>Repositório</button>
                        <button>Projeto</button>
                    </div>
                </div>
                <div className="project">
                    <img src={projectBanner4} alt="img_projects" />
                    <div className="project_description">
                        <p>Projeto:</p>
                        <p>Descrição:</p>
                    </div>
                    <div className="project_buttons">
                        <button>Repositório</button>
                        <button>Projeto</button>
                    </div>
                </div>
                <div className="project">
                    <img src={projectBanner5} alt="img_projects" />
                    <div className="project_description">
                        <p>Projeto:</p>
                        <p>Descrição:</p>
                    </div>
                    <div className="project_buttons">
                        <button>Repositório</button>
                        <button>Projeto</button>
                    </div>
                </div>
                <div className="project">
                    <img src={projectBanner6} alt="img_projects" />
                    <div className="project_description">
                        <p>Projeto:</p>
                        <p>Descrição:</p>
                    </div>
                    <div className="project_buttons">
                        <button>Repositório</button>
                        <button>Projeto</button>
                    </div>
                </div>
                <div className="project">
                    <img src={projectBanner7} alt="img_projects" />
                    <div className="project_description">
                        <p>Projeto:</p>
                        <p>Descrição:</p>
                    </div>
                    <div className="project_buttons">
                        <button>Repositório</button>
                        <button>Projeto</button>
                    </div>
                </div>
                <div className="project">
                    <img src={projectBanner8} alt="img_projects" />
                    <div className="project_description">
                        <p>Projeto:</p>
                        <p>Descrição:</p>
                    </div>
                    <div className="project_buttons">
                        <button>Repositório</button>
                        <button>Projeto</button>
                    </div>
                </div>
                <div className="project">
                    <img src={projectBanner9} alt="img_projects" />
                    <div className="project_description">
                        <p>Projeto:</p>
                        <p>Descrição:</p>
                    </div>
                    <div className="project_buttons">
                        <button>Repositório</button>
                        <button>Projeto</button>
                    </div>
                </div>
                <div className="project">
                    <img src={projectBanner10} alt="img_projects" />
                    <div className="project_description">
                        <p>Projeto:</p>
                        <p>Descrição:</p>
                    </div>
                    <div className="project_buttons">
                        <button>Repositório</button>
                        <button>Projeto</button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Projects;
