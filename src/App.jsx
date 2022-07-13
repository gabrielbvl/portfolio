import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ProjectRoutes from "./Routes";

function App() {
    return (
        <div className="App">
            <Header />
            <ProjectRoutes />
            <Footer />
        </div>
    );
}

export default App;
