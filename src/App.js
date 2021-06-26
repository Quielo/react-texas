import './App.css';
import Decker from './components/deck';

function Home() {
  return (
    <div className="App">

      <header>
      </header>

      <body className="Home-body">

        <h1>Casino Texas Hold'em Poker</h1>

        <h2>Table</h2>
        <div class="deck table">
        <Decker title="Table" path="table" flipped="2" />
        </div>

        <h2>Player's Hand</h2>
        <div class="deck hand">
        <Decker title="Hand" path="deck/2" flipped="2" flipCards="flipCards" />
        </div>

      </body>
      
    </div>
  );
}

export default Home;
