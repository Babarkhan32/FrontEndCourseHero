import React from 'react';
import style from '../Assets/rate.module.css';
import { Rate,Input, Button} from 'antd';

import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';
const { TextArea } = Input;

const customIcons = {
    1: <FrownOutlined />,
    2: <FrownOutlined />,
    3: <FrownOutlined />,
    4: <MehOutlined />,
    5: <MehOutlined />,
    6: <SmileOutlined  rotate={180}/>,
    7: <SmileOutlined rotate={180} />,
    8: <SmileOutlined  rotate={180}/>,
    9: <SmileOutlined />,
    10: <SmileOutlined />
  };

  const desc = ['1', '2', '3', '4', '5','6','7','8','9','10'];

const RateUsUi=()=>{
    return(
        <div className='MainCont'>
        <div className='PageWrapper'> 
        <div className='container'>
        <h6 className={style.pageTitle}> Review Form </h6>
        <hr className='hr-def'/>
      <div className='row'>
          <div className='col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
          <div className='col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10'>
          <div className="card">
<div className="card-header">Rate Us</div>
<div className="card-body">
 
    
      <h6 className={style.FooterText} > Please rate us from 1-10 (1 is low, 10 is high) </h6>
      <Rate
      defaultValue={3}
      tooltips={desc}
      count={10}
      character={({ index }) => {
        return customIcons[index + 1];
      }}
    />
<br/> 
<br/> 
<h6 className={style.FooterText} > Please write your review  </h6>
<TextArea rows={4} />
<br/>     
          <div className='text-center'>
              <Button  type='primary'> Submit </Button>
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
export default RateUsUi