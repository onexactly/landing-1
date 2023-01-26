import React from "react";
import Header from "./Components/Header";
import Feature from "./Components/Feature";
import About from "./Components/About";
import Presentation from "./Components/Presentation";
import aboutimage from "./first-app-png/about.png";
import aboutimage1 from "./first-app-png/9.png";


function App() {
  return (
    <div className="App">
      <Header/>
      <Feature/>
      <About image={aboutimage} title="Comes With All You Need For Daily Life" button="Get The App" />
      <About image={aboutimage1} title="Download And Get The APP Now" button="Download" />
      <Presentation/>

    </div>
  );
}

export default App;
