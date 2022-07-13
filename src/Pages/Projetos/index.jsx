import Particle from "../../Components/Background-Animation/particles";
import projectsLogo from "../../Assets/imgs/projects.png";
import techs from "../../DataBase/database";
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
                {techs.map((tech) => (
                    <div className="project">
                        <img src={tech.image} alt="img_projects" />
                        <div className="project_description">
                            <p>Projeto: {tech.project}</p>
                            <p>{tech.description}</p>
                        </div>
                        <div className="project_buttons">
                            <a href={tech.repository} target={"blank"}>
                                <button className="repository_button">Repositório</button>
                            </a>
                            <a href={tech.projectDemo} target={"__blank"}>
                                <button className="github_projects_button">Projeto</button>
                            </a>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default Projects;
