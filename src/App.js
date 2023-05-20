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
  var style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "relative",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
}
  return (
    <BrowserRouter>
    
    <NavBar />
    <AppRouter/>
    
    
    </BrowserRouter>
  );
})

export default App;
