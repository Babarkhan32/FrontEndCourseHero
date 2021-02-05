import React from 'react'
import { Fragment } from 'react'
import { Descriptions,Divider,Carousel,Timeline, Typography,Avatar } from 'antd';

const List=[];
for(let i=1; i<=3; i++){
  List.push({
      key:`${i}`,
      avatar:'https://education.gov.gy/web/media/k2/items/cache/f1b8aeeb90e87d86cd6bf72988291f00_Generic.jpg',
      name:'Mr. Smith',
      designation:'Professor Doctor'
  })};

const FacultyList=()=>{
    return(
        <Fragment>
                 <h6 className='SubTitle'> Faculty List </h6>
                            <Divider/>
                              <Timeline>
                                  {List.map((data)=>(
                                    <Timeline.Item color="#096dd9">
                                      <div className='row'>
                                          <div className='col-lg-1'>
                                            <Avatar src={data.avatar} className='FacImg'/>
                                          </div>
                                          <div className='col-lg-11'>
                                            <h6 className='FacHeading '> {data.name} </h6>
                                            <label className='FacDesc'>  {data.designation} </label> 
                                          </div>
                                      </div>
                                    </Timeline.Item>
                                  ))}
                              </Timeline>
        </Fragment>
    )
}

export default FacultyList