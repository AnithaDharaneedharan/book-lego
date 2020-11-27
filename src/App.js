import './App.css';
import React from 'react';
import Main from './components/Main';

function App() {
  return (
    <div className="grid-container">
      <header>
        <a href="/">Book Lego</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
            <Main />
          </div>
        </div>
      </main>
      <footer>all rights reserved</footer>
    </div>
  );
}

export default App;
