import React from 'react'
import { Fragment } from 'react';
import { Descriptions,Divider,Carousel,Timeline, Typography,Avatar } from 'antd';


const ContactDetails=()=>{
    return(
        <Fragment>
          <h6 className='SubTitle'> Contact Us </h6>
          <Divider/>
             <Descriptions
                      title=""
                      bordered
                      layout="vertical"
                      column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}>
                        <Descriptions.Item label="Web Address">https://nust.edu.pk/</Descriptions.Item>
                        <Descriptions.Item label="Email Address">prorectoranr@nust.edu.pk</Descriptions.Item>
                        <Descriptions.Item label="Phone Number"> +92-51-111-11-6878</Descriptions.Item>
                        <Descriptions.Item label="Whatsapp Number"> +92-51-111-11-6878</Descriptions.Item>
                  </Descriptions>
             </Fragment>
    )
}

export default ContactDetails