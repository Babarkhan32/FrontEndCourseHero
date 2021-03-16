import React from 'react'
import { Fragment } from 'react'
import { Divider, Typography } from 'antd';
const {  Paragraph} = Typography;
const StudentFacilitation=()=>{
    return(
        <Fragment>
             <h6 className='SubTitle'> Student Facilitation </h6>
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


export default StudentFacilitation