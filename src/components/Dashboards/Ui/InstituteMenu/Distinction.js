import React from 'react'
import { Fragment } from 'react';
import {Divider, Typography } from 'antd';
const {  Paragraph} = Typography;


const Distinction=()=>{
    return(
    <Fragment>
            <h6 className='SubTitle'> Mark of Distinction </h6>
            <Divider/>
             <Typography>
                <Paragraph>
                    In the process of internal desktop applications development, many different design specs and
                    implementations would be involved, which might cause designers and developers difficulties and
                    duplication and reduce the efficiency of development.
                  </Paragraph>
                 </Typography>
    </Fragment>
    )
}

export default Distinction