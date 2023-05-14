import { useContext, useState } from "react";
import { Context } from "..";
import { Link } from "react-router-dom";
import { REGISTRATION_ROUTE, SITE_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";
import './navBar.css';


const NavBar = observer(()=>{
    const {user} = useContext(Context)
    
    return(
        <div>
            <nav className='navbar'> 
            <ul className='nav'>
          <li>
            <Link to = {SITE_ROUTE} className='linkstyle'><a className = "logo">Maximus</a></Link>
            </li>
          </ul>
          {user.isAuth ? 
            <div>yes</div> 
            :
            <div className="nav_user"><Link to = {REGISTRATION_ROUTE} className='linkstyle'><a className = "lk">ЛК</a></Link></div>
            }
          </nav>
            <div></div>
        </div>
    )
})
export default NavBar;