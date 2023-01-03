import React from 'react';
import './App.css';
import { Topbar } from './topbar';
import { TreeTemplate } from './body';
const App: React.FC =() => {
  return (
    <div>
      <header>
        <Topbar />
      </header>
      <TreeTemplate />
      <br />
      <footer>
        <h1 className="centerfooter">Merry Christmas</h1>
      </footer>
    </div>
  );
}

export default App;
