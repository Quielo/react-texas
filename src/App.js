import './App.css';

//const port = process.env.Port || 4001;
//const express = require('express');
//const app = express();

//app.use(express.static('public'));
//app.set('port', port)

const { Deck, Hand } = require('./components/deck');

const deck = new Deck();

let table = deck.dealTable(5);

//app.get('/table', (req, res) => {
//  res.send(table);
//});

//app.get('/deck/:size', (req, res) => {
//  const { size } = req.params;
//  res.send(deck.dealTable(size));
//});

function Home() {
  return (
    <div className="App">
      <header>
      </header>
      <body className="Home-body">
        <h1>Casino Texas Hold'em Poker</h1>
        <h2>Table</h2>
        <div class="deck table"></div>
        <h2>Player's Hand</h2>
        <div class="deck hand"></div>
      </body>
    </div>
  );
}

export default Home;
