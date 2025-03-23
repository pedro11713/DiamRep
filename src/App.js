import Header from "./components/Header";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Artistas from "./components/Artistas";
import HomePageFormato from "./components/HomePageFormato";
import "./index.css";


function App() {
    return (
        <div className="App">
            <Header/>
            <Artistas/>
            <HomePageFormato/>
            <About/>
            <Gallery/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
