import './App.css';
import Helloworld from './components/Helloworld.js';
import Nome from './components/Nome.js';
import Pessoa from './components/Pessoa.js';
import Frase from './components/Frase.js';

function App() {
  const nome = "João"
  const url = "https://i.pinimg.com/564x/31/58/31/31583193f57c8b2448d7d4ddb1f5122a.jpg"
  return (
    <div className="App">
      <a href="https://open.spotify.com/intl-pt" > Spotify </a>
      <Frase nome={nome}/>
    </div>
  );
}


export default App;
