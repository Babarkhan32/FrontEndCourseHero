import React from 'react';
import { Fragment } from 'react';
import { Descriptions,Divider} from 'antd';
const Info=()=>{
    return(
        <Fragment>
              <h6 className='Title text-center'> National University of Sciences & Technology </h6> 
                <Divider/>

                <Descriptions
                              title=""
                              layout="vertical"
                              bordered
                              column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}>
                                <Descriptions.Item label="Type">University</Descriptions.Item>
                                <Descriptions.Item label="Mode">Institute</Descriptions.Item>
                                <Descriptions.Item label="Address">National University of Sciences & Technology (NUST) Campus, Sector H-12, Islamabad, Pakistan </Descriptions.Item>
                          </Descriptions>
        </Fragment>
    )
}



export default Info