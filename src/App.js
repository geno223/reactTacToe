import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Player from './components/Players';

///header
///players
///9 squares

function App() {
  return (
    <div className="App">
     <Header/>
     <Player whichPlayer= 'X'/>
     <Player whichPlayer='O'/>
    </div>
  );
}

export default App;
