import React from 'react';
import {Link} from 'react-router-dom';
import {Form, Field} from 'react-final-form';
import { Input, Button } from 'antd';
import { UserOutlined, LockOutlined} from '@ant-design/icons';
import style from '../Assets/Login.module.css';

const onSubmit = values => window.alert(JSON.stringify(values,0,2));

const LoginUi=()=>{
return(
    <div className='MainCont'>
    <div className='PageWrapper'> 
    <div className='container'>
        <h6 className={style.pageTitle}> Login </h6>
        <hr className='hr-def'/>
      <div className='row'>
          <div className='col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
          <div className='col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10'>
          <div className="card">
<div className="card-header">Signin</div>
<div className="card-body">
  <div className='row'>
      <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2'></div>
      <div className='col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8'>

      <Form onSubmit={onSubmit} render={({ handleSubmit, values }) => (
    <form onSubmit={handleSubmit}>


          <Field name='Email' render={({input,meta})=>
         (
           <div className='mtt-10'>
                <Input  className={style.EmailInput} placeholder="Email"  {...input} addonBefore={<UserOutlined/>}  />
        
        {meta.touched && meta.error && <span>{meta.error}</span>}</div> )} />

          
    <br/>

    <Field name='Password' render={({input,meta})=>
         (
           <div>
               <Input.Password className={style.PasswordInput}   {...input}  addonBefore={<LockOutlined/>}  placeholder="Password" />
        
        
        {meta.touched && meta.error && <span>{meta.error}</span>}</div> )} />

         
      
    
<div className='mtt-10'> 
         <label className='checkbox-wrapper'>
                <Field
                className='Checkbox'
                  name="Remember me"
                  component="input"
                  type="checkbox"
                  value="Remember me"
                />{' '}
              Remember me
              </label>
              </div>

         <div className='text-center mtt-10 mbb-5'>
          <button type='primary' className='Primarybtn'> Login</button>
      </div>

         <hr className='hr-def mb-0'/>

         
         <p className={style.FooterText} > Don't have an account?  <Button className={style.FooterLink} type="link" htmlType="button" >
          <Link to='/register'> Register! </Link>
        </Button></p>

         
       
    </form>
      )}>

      </Form>

      </div>
      <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2'></div>
    
  </div>
</div>
</div>
          </div>
          <div className='col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
      </div>
    </div>
</div>
</div>

)
}

export default LoginUi