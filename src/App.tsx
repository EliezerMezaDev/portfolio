import "./App.css";

import { Home } from "./components/home/Home";

import { Header } from "./components/globals/Header";

import { Social } from "./components/globals/Social";
import { Mail } from "./components/globals/Mail";

import { Skills } from "./components/skills/Skills";
import { Projects } from "./components/projects/Projects";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/globals/Footer";

function App() {
  return (
    <>
      <div id="container-all" className="container-all">
        <Header />

        {/* ?---- Sections ----? */}

        <div className="container-all__wrapper">
          <Home />
          <Skills />
          <Projects />
          <Contact />

          <Footer />

          <Social />
          <Mail />
        </div>
      </div>
    </>
  );
}

export default App;
