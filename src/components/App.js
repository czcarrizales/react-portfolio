import '../css/App.css'
import Showcase from '../components/Showcase.js'

function App() {
  let portfolio = [
    {
        title: 'first project',
        text: 'text for the first project and such'
    },
    {
        title: 'the second',
        text: 'oh just some more text for the second one'
    },
    {
      title: 'third...',
      text: 'getting into some beefy things with the third project, that is pretty funny'
    }
]
  return (
    <div className="App">
      {portfolio.map((p) => {
        return <Showcase title={p.title} text={p.text} />
      })}
    </div>
  );
}

export default App;
