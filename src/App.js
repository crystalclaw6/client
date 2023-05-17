import React, { useContext, useEffect, useState } from 'react';
import CodeEditor from './CodeEditor/Code.js';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter.js';
import Auth from './pages/Auth.js';
import { Routes, Route, Link} from 'react-router-dom';
import NavBar from './components/NavBar.js';
import { Context } from './index.js';
import { check } from './http/userAPI.js';
import { observer } from "mobx-react-lite";
const App = observer(() => {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
      check().then(data => {
        user.setUser(true)
        user.setIsAuth(true)
      }).finally(()=> setLoading(false))
    
  },[])
  if (loading){
    return <div>Загрузка..</div>
  }
  return (
    <BrowserRouter>
    
    <NavBar />
    <AppRouter/>
    
    </BrowserRouter>
  );
})

export default App;
