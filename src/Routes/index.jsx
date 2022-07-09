import { Routes, Route } from "react-router-dom";
import Curriculum from "../Pages/Curriculo";
import Home from "../Pages/Home/index";
import Projects from "../Pages/Projetos";
import About from "../Pages/Sobre";

const ProjectRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/curriculum" element={<Curriculum />} />
            </Routes>
        </>
    );
};

export default ProjectRoutes;
