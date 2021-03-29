import React from 'react';
import {Spin} from 'antd';
import './Loader.css';
import { Fragment } from 'react';

const Loader=()=>{
  return(
      <Fragment> 
          <div className="bar-container">
        <div className="bar barpulse"></div>
        </div> 
        <br/>

        <div className='SpinnerLoad'>
        <Spin size="large" />
    </div>
      </Fragment>
    
  )
}


export default Loader