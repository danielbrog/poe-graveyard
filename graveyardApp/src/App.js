import './styles/App.css';
import GraveyardLayout from './components/GraveyardLayout';
import CorpseListLayout from './components/CorpseListLayout';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div className="header__text">PoE Graveyard Placer</div>
      </header>
      <GraveyardLayout />
      <CorpseListLayout />
    </div>
  );
}

export default App;
