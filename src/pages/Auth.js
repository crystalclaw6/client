import React, { useContext, useState } from "react";
import { COURSES_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SITE_ROUTE } from "../utils/consts";
import { Link, useLocation, useNavigate } from "react-router-dom";
import './Auth.css'
import { login, registration } from "../http/userAPI";
import { observer } from "mobx-react-lite";
import { Context } from "..";

const Auth = observer(() =>{
    const {user} = useContext(Context)
    const navigate = useNavigate()
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isError, setError] = useState(false)

    const click = async () => {
        try{
            let data;
            if (!email || !password){
                setError(true)
            }
            if (isLogin){
                
                data = await login(email, password);
            }
            else{
                data = await registration(email, password);
            }
            user.setUser(data)
            user.setIsAuth(true)
            navigate(COURSES_ROUTE)
        }catch(e){
            alert(e.response.data.message)
        }
        
        
    }
    return(
        <div className="auth_box">
            {isLogin ?
            <a className="action_title">Авторизация</a>
            :
            <a className="action_title">Регистрация</a>}
            <div className="input_form">
         <div className="action_wrap"><a>e-mail</a><input type="email" placeholder="Введите e-mail" className={`action_form ${!email.length && isError ? 'error' : ''}`} value = {email} onChange={e => {setEmail(e.target.value); setError(false);}}></input></div>
         <div className="action_wrap"><a>пароль</a><input placeholder="Введите пароль" className={`action_form ${!password.length && isError ? 'error' : ''}`} type = "password" value = {password} onChange={e => {setPassword(e.target.value); setError(false);}}></input></div>
         </div>
          <button className="action_button" onClick={click}>
          {isLogin ? 'Войти' : 'Зарегистрироваться' }</button>
         {isLogin ? <div className="suggest">Нет аккаунта? <Link to = {REGISTRATION_ROUTE} className="suggest_link">Зарегистрируйтесь</Link></div>
         :
         <div className="suggest">Есть аккаунт? <Link to = {LOGIN_ROUTE} className="suggest_link">Авторизуйтесь</Link></div>
        }
        </div>
    )
})
export default Auth;