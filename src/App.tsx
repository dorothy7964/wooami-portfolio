import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Stack from "./components/Stack";

function App() {
  return (
    <>
      <Intro />
      <Projects />
      <Stack />
      <About />
      <Contact />
    </>
  );
}

export default App;
