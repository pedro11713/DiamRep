import React from "react";
import Header from "./Header";
import About from "./About";
import Artistas from "./Artistas";
import Gallery from "./Gallery";
import Contacts from "./Contacts";
import Footer from "./Footer";
import HomePageFormato from "./HomePageFormato";


const HomePage = () => (
  <div className="HomePage">

            <Header/>
            <About/>
            <Artistas/>

            <HomePageFormato/>
            <Gallery/>
            <Contacts/>
            <Footer/>
        </div>
);

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;
