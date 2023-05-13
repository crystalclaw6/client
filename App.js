import React from 'react';
import CodeEditor from './CodeEditor/Code.js';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <nav className='navbar'> 
          <ul className='nav'>
          <li className = "listItem">
            <a className = "logo">Upgrade</a>
            </li>
          </ul></nav>
      </header>
      <CodeEditor/>
    </div>
  );
}

export default App;
