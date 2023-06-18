import React, { useEffect, useState } from 'react'
import {Route, Switch, Redirect} from "react-router-dom"
import AdminLayout from "layouts/Admin.js";
import Login from "layouts/Login";
import { useSelector } from 'react-redux'
import ProtectedRoute from 'views/Protected';

const App = () => {
    // const [isUser , setIsUser] = useState('');
    //  useEffect(()=>{ 
    //  window.addEventListener('storage' , setIsUser(localStorage.getItem("access")));
    //  return (()=> window.removeEventListener('storage', setIsUser(localStorage.getItem("access"))))
    //  })
    // useEffect(()=>{
    //    isUser = localStorage.getItem("access") ? true: false
    //    console.log(localStorage.getItem("access"));
    // } ,[localStorage.getItem("access")] );
    // console.log(localStorage.getItem("access"));
    // console.log(isUser);
    return (
        <Switch>
            <Route path="/auth/login" render={()=><Login/>}/>
            {/*<Route path="/auth/login" render={()=><Login/>}/> */}
            <Route path="/admin" render={(props) => <ProtectedRoute><AdminLayout {...props} /></ProtectedRoute>}/>
            <Redirect from="/" to="/auth/login" />
        </Switch>
    )
}

export default App;