import { Routes, Route, Link, Navigate} from 'react-router-dom';
import React, { useContext } from "react";
import { authRoutes, publicRoutes } from '../routes';
import { SITE_ROUTE } from '../utils/consts';
import { Context } from '..';
const AppRouter = () =>{
    const {user} = useContext(Context)
    
    return(
            <Routes>
                {authRoutes.map(({path, Component})=>
                    <Route key={path} path={path} element={<Component />} />
                )}
                {publicRoutes.map(({path, Component})=>
                    <Route key={path} path={path} element={<Component />} />
                )}
                <Route path='*' element={<Navigate to={SITE_ROUTE}/>} />
            </Routes>
    );
};

export default AppRouter;