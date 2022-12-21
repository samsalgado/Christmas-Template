import React from 'react';
import './App.css';
import { Topbar } from './topbar';
import { TreeTemplate } from './body';
import footer from './footer';
const App: React.FC =() => {
  return (
    <div className="App">
      <header className="App-header">
        <Topbar />
      </header>
      <TreeTemplate />
      <footer>
        <footer />
      </footer>
    </div>
  );
}

export default App;
