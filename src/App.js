import './App.css';
import ListaRenderizada from './components/ListaRenderizada';

function App() {
  const itens = ["adidas", "nike", "puma"]
  return (
    <div className="App">
      <h1>Renderização de listas</h1>
      <ListaRenderizada itens={itens}/>
      <ListaRenderizada itens={[]}/>
    </div>
  );
}


export default App;
