import React from 'react';
import './App.css';

import Styles from './index.module.scss'

const App = () => {
  return (
    <div className="App">
      <div className={Styles.xxx}>124</div>
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;