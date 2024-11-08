import './App.css';
import Helloworld from './components/Helloworld.js';
import Nome from './components/Nome.js';
import Pessoa from './components/Pessoa.js';

function App() {
  const nome = "João"
  const url = "https://i.pinimg.com/564x/31/58/31/31583193f57c8b2448d7d4ddb1f5122a.jpg"
  return (
    <div className="App">
      <Pessoa foto={url} nome={nome} idade = "22" profissao="Programador"/>
      <a HLTV href="https://www.hltv.org/"></a>
    </div>
  );
}


export default App;
