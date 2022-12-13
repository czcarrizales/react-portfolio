import "../css/App.css";
import Showcase from "../components/Showcase";
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Footer from '../components/Footer'

function App() {
  let portfolio = [
    {
      title: "Burning Letters",
      text: "Create a temporary message and share it with the world to see.",
      image: "https://images.unsplash.com/photo-1532045974417-fe87b46db62f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
      title: "Recipe App",
      text: "Allows users to store recipes.",
      image: "https://images.unsplash.com/photo-1556909211-36987daf7b4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
      title: "Game App",
      text: "Choose your own adventure type of game.",
      image: "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
    },
    {
      title: "Music Blog",
      text: "Blog about different types of music where users are able to comment freely.",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
  ];
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <h2 className="projects">PROJECTS</h2>
      <div className="portfolio-container">
        {portfolio.map((p) => {
          return <Showcase title={p.title} text={p.text} image={p.image} />;
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
