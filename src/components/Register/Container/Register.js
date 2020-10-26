import React,{useContext, useState} from 'react'
import RegisterUi from '../Ui/RegisterUi'
import  insertUser from '../api/insertUser';
import { withRouter } from "react-router-dom";

import { ContextOne } from '../../contexts/contextOne';

const Register=(props)=>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
   let loginValue=useContext(ContextOne);

   console.log(loginValue);
    
    const onNameChange=(value)=>{
            setName(value);
}
const onEmailChange=(value)=>{
        setEmail(value)
}
const onPasswordChange=(value)=>{
    setPassword(value);
}

const onSubmitClick= async()=>{

    if(name.length<1 || email.length<1 || password.length<1){

        alert("Kindly enter the details properly");
        return
    }


    let data={
        name:name,
        email:email,
        password:password
    }
        insertUser(data).then(result=>{
            setEmail('');
            setName('');
            setPassword('');
            alert("Account Created :)");
            localStorage.setItem('accessToken', result.token);
            loginValue.dispatch({type:"login"});
            props.history.push("/Search")
             }
        )
        ;
}
    return(
        <RegisterUi
        name={name}
        email={email}
        password={password}
        onNameChange={onNameChange}
        onEmailChange={onEmailChange}
        onPasswordChange={onPasswordChange}
        onSubmitClick={onSubmitClick}/>
    )
}

export default withRouter (Register);