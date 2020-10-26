import React,{Component} from 'react';
import { Redirect, Route } from 'react-router-dom';


const Authenticate=(props)=>{
 
    let val=localStorage.getItem('accessToken');

   return(
       <Route render={props=>(
val?
<Component {...props}/>
:<Redirect to={{pathname:"/register",state:{from:props.location}}} />
 
       )
       }/>
   )
    }

export default Authenticate;