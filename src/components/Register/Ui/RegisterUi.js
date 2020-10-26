import React from 'react';
import {Input,Button} from 'antd';
import style from '../Assets/Register.module.css';

const RegisterUi=(props)=>{
    const {name,email,password,onNameChange,onEmailChange,onPasswordChange,onSubmitClick}=props;
    return(
        <div className='MainCont'>
        <div className='PageWrapper'> 
        <div className='container'>
            <h6 className={style.pageTitle}> Register </h6>
            <hr className='hr-def'/>
            <div className="card">
  <div className="card-header">Signup</div>
  <div className="card-body">
     
      <div className='row'>
          <div className='col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
          <div className='col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10'>
              <h6 className='Title'>Full Name</h6>
              <Input value={name} onChange={(e)=>onNameChange(e.target.value)} className={style.RegInput} type='text' placeholder='Enter Full Name' />
              <h6 className='Title mtt-15'>Email Address</h6>
              <Input value={email} onChange={(e)=>{onEmailChange(e.target.value)}} className={style.RegInput} type='email' placeholder='Enter Email Adress' />
              <h6 className='Title mtt-15'>Password</h6>
              <Input value={password} onChange={(e)=>{onPasswordChange(e.target.value)}} className={style.RegInput} type='password' placeholder='Enter Password' />

              <div className='text-center mbb-5 mtt-10'>
                  <Button onClick={onSubmitClick} type='primary'> Register</Button>
              </div>
              <hr className='hr-def mb-0'/>
            
             
              <p className={style.FooterText} > Already have an account?  <Button className={style.FooterLink} type="link" htmlType="button" >
          Login!
        </Button></p>
          </div>
          <div className='col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
      </div>
  </div>
</div>
        </div>
   </div>
   </div>
    )
}
export default RegisterUi