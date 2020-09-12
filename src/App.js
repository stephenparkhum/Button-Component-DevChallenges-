import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <aside>
        <h3>DevChallenges</h3>
        <ul className="NavList">
          <li>
            Button
          </li>
        </ul>
      </aside>
      <main>
        <Main />
      </main>
    </div>
  );
}

export default App;
