import React from 'react';
import CodeEditor from './CodeEditor/Code.js';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter.js';
import Auth from './pages/Auth.js';
import { Routes, Route, Link} from 'react-router-dom';
import NavBar from './components/NavBar.js';

function App() {
  return (
    <BrowserRouter>
    
    <NavBar />
    <AppRouter/>
    
    </BrowserRouter>
  );
}

export default App;
