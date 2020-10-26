import React from 'react';
import {Link} from 'react-router-dom';
import {Popover} from 'antd';
import style from '../Assets/Header.module.css'
import '../Assets/Header.css';


const content = (
  <Link to='/register'> Logout </Link>
  );

const HeaderUi=()=>{
    return(
       
            <div className={style.Header}>
             <div className='row'>
                 <div className='col-8 col-sm-8 col-md-10 col-lg-10 col-xl-10 p-0'>
                 <ul className={style.Headerui}>
                 <Link to='/profile'>
                 <li className={style.HeaderLi}>
               Dashboard 
                 </li>
                 </Link>
                 <Link to='/search'>
                 <li className={style.HeaderLi}>
                  Search Courses 
                 </li>
                 </Link>
                 <Link to='/create/course'> 
                 <li className={style.HeaderLi}>
                  Create Course 
                 </li>
                 </Link>
                 </ul>
                 </div>
                 <div className=' p-0 col-4 col-sm-4 col-md-2 col-lg-2 col-xl-2'>
                 <ul className={style.RightNav} >
                 
                 <Popover placement="bottom" content={content}  >
                   <li className={style.HeaderLi}>
                  
                      
                      
                   </li>
                   </Popover>
                
                     </ul>
                 </div>
                 </div>
                
            
             
            </div>
       
    )
}
export default HeaderUi