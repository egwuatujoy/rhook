// App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlayersList from './PlayersList';
import './App.css'; 

function App() {
  return (
    <div className="App">
      <h1 style={{paddingTop: "20px"}}>Football Players</h1>
      <PlayersList />
    </div>
  );
}

export default App;