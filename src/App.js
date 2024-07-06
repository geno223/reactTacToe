import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Player from './components/Players';
import Board from './components/Board';
import "./styles.css"
///header
///players
///9 squares

function App() {
  return (
    <div>
     <Header/>
     
     <div className='players'>
      <Player player= 'X'/>
      <Player player='O'/>
     </div>

     <Board/>
     <a href='https://github.com/geno223'>Click me</a>
    </div>
  );
}

export default App;
