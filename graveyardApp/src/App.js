import './styles/App.css';
import GraveyardLayout from './components/GraveyardLayout';
import CorpseListLayout from './components/CorpseListLayout';
import ModList from './components/ModList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div className="header__text">PoE Graveyard Placer</div>
      </header>
      <div className='main__app'>
        <div className='main__app__left'>
          <GraveyardLayout />
          <ModList />
        </div>
        <div className='main__app_right'>
          <CorpseListLayout />
        </div>
      </div>
    </div>
  );
}

export default App;
