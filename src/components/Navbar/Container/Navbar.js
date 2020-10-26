import React, { useEffect,useState } from 'react';
import NavbarUi from '../Ui/NavbarUi';
import {ContextOne} from '../../contexts/contextOne';
import login from "../api/login"
import getUserData from './../../../generalHelpers/apis/getUserData';
import { withRouter } from 'react-router-dom';

const Navbar=(props)=>{
  let  {state,dispatch}  = React.useContext(ContextOne);
  let [email,setEmail]=useState('');
  let [password,setPassword]=useState('');
  let [accessToken,setAccessToken]=useState('');
  let [user,setUser]=useState('');


  console.log(state);

  const onSetEmail=(value)=>{
    setEmail(value)
  }
  const onSetPassword=(value)=>{
    setPassword(value)
  }

  const onLogin=()=>{
  if(email.length<1 || password.length<1){
    alert("Please fill all the fields to login")
    return;
  }
    let data={
      email:email,
      password:password
    }

    login(data).then(result=>{

      console.log("lets see here",result)
      if(result.token){
        
        localStorage.setItem('accessToken',result.token)
        setUser(result.name);
        dispatch({type:'login'})
          props.history.push('/search')
         }
         else if(result.data){
           alert('Wrong credentials');
         } 
       })
  }
 useEffect(()=>{

let value= localStorage.getItem('accessToken');

console.log(value,"Navbar strike");
if(value ==null){
  setAccessToken(null);
}else{
  setAccessToken(value);
let data={accessToken:value}
  getUserData(data).then(result=>{
    if(result){
    setUser(result.name);
    }
    })
}
 },[state.status])
    return(
<NavbarUi
status={state.status}
dispatch={dispatch}
onSetEmail={onSetEmail}
onSetPassword={onSetPassword}
setAccessToken={setAccessToken}
accessToken={accessToken}
user={user}
onLogin={onLogin}/>
  )
}
export default withRouter( Navbar)