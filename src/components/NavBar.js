import { useContext, useState } from "react";
import { Context } from "..";
import { Link, useNavigate } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SITE_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";
import './navBar.css';


const NavBar = observer(()=>{
  const navigate = useNavigate()
    const {user} = useContext(Context)
    const logOut = () => {
      user.setUser({})
      user.setIsAuth(false)
    }
    return(
        <div>
            <nav className='navbar'> 
            <ul className='nav'>
          <li>
            <Link to = {SITE_ROUTE} className='linkstyle logo'>Maximum</Link>
            </li>
          </ul>
          {user.isAuth ?
            <div className="nav_user"  onClick={() => {logOut(); navigate(SITE_ROUTE) }}>LOGOUT</div>
            :
            <div className="nav_user"><Link to = {LOGIN_ROUTE} className='linkstyle lk'>ЛК</Link></div>
            }
          </nav>
            <div></div>
        </div>
    )
})
export default NavBar;