import '../css/App.css'
import Showcase from '../components/Showcase.js'

function App() {
  let portfolio = [
    {
        title: 'First Project',
        text: 'Text for the first project and such.'
    },
    {
        title: 'The Second',
        text: 'Oh, just some more text for the second one.'
    },
    {
      title: 'Third',
      text: 'Getting into some beefy things with the third project. That is pretty funny.'
    },
    {
      title: 'Fourth Test',
      text: 'Testing purposes and such for this fourth little piece of text.'
    }
]
  return (
    <div className="portfolio-container">
      {portfolio.map((p) => {
        return <Showcase title={p.title} text={p.text} />
      })}
    </div>
  );
}

export default App;
