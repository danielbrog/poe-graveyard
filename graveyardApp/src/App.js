import './styles/App.css';
import './components/GraveyardLayout'
import GraveyardLayout from './components/GraveyardLayout';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div className="header__text">PoE Graveyard Placer</div>
      </header>
      <GraveyardLayout />
    </div>
  );
}

export default App;
