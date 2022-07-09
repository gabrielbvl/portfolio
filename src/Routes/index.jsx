import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/index";
import About from "../Pages/Sobre";
// import Password from "../pages/password";
// import PageOne from "../pages/pageOne";

const ProjectRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<About />} />
                <Route path="/curriculum" element={<About />} />
            </Routes>
        </>
    );
};

export default ProjectRoutes;
