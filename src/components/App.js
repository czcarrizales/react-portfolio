import "../css/App.css";
import Showcase from "../components/Showcase";
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Footer from '../components/Footer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Contact from "./Contact";
import Journey from "./Journey"

function App() {
  let portfolio = [
    {
      title: "Burning Letters",
      text: "Create a temporary message and share it with the world to see.",
      image: "images/burningletter.png",
      websiteLink: "https://burning-letters.vercel.app/",
      githubLink: "https://github.com/czcarrizales/burning-letters-project"
    },
    {
      title: "Tamagotchi Clone",
      text: "Adopt, play with, and feed your pet! You can even see other pets put up for adoption by other users!",
      image: "images/tamagotchi-clone.png",
      websiteLink: "https://tamagotchi-clone.vercel.app/",
      githubLink: "https://github.com/czcarrizales/tamagotchi-clone"
    },
    {
      title: "Quiz App (In Progress)",
      text: "Create your own quizzes, and play other quizzes!",
      image: "images/quizgame.png",
      githubLink: "https://github.com/czcarrizales/chazz-quiz-project"
    },
    
  ];
  return (
    
    <div>
      <BrowserRouter>
      <Navbar />

    <Routes>
      {/* <Route path="/contact" element={<Contact/>} /> */}
      <Route path='/' element={(
        <div>
<Hero />
<hr></hr>
      <About />
      <hr></hr>
      <div className="portfolio-container">
      <h2 className="projects">PROJECTS</h2>
        {portfolio.map((p) => {
          return <Showcase title={p.title} text={p.text} image={p.image} githubLink={p.githubLink} websiteLink={p.websiteLink} />;
        })}
      </div>
        </div>
        
      )} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/journey" element={<Journey />} />
    </Routes>
    <Footer />
    </BrowserRouter>
      
    </div>
  );
}

export default App;
