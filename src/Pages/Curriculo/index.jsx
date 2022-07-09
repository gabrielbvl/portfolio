import { useNavigate } from "react-router-dom";
import curriculo from "../../Assets/imgs/Curriculo_Gabriel_Junho22_page-0001.jpg";
import "../../Styles/curriculum.css";
import Particle from "../../Components/Background-Animation/particles";

function Curriculum() {
    const goToDownload =
        "https://drive.google.com/file/d/1y8URgJHBytRRs2zcuQ69vz7jspZkxsHw/view?usp=sharing";

    return (
        <div className="curriculum_container">
            <Particle />
            <section className="curriculum_section">
                <a href={goToDownload} target={"blank"}>
                    <button className="curriculum_button">Download</button>
                </a>
                <img className="curriculum" src={curriculo} alt="Curriculo Gabriel"></img>
            </section>
        </div>
    );
}

export default Curriculum;
