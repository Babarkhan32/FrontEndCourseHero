import React from 'react';
import { Fragment } from 'react';
import { Descriptions,Divider,Carousel,Timeline, Typography,Avatar } from 'antd';
import style from '../Assets/Css/Profile.module.css';
const {  Paragraph} = Typography;

const InstitueImg=[];
for(let i=1; i<=4; i++){
    InstitueImg.push({
        src:'https://propakistani.pk/wp-content/uploads/2018/03/nust.jpg'
    })};

const CampusList=[];
for(let i=1; i<=3; i++){
  CampusList.push({
      key:`${i}`,
      name:'Nust EME',
  })};

const DepList=[];
for(let i=1; i<=3; i++){
  DepList.push({
      key:`${i}`,
      name:'Computer Science',
  })};


const ProgList=[];
for(let i=1; i<=3; i++){
  ProgList.push({
      key:`${i}`,
      name:'Bachelors of Computer Science',
  })};

  const FacultyList=[];
for(let i=1; i<=3; i++){
  FacultyList.push({
      key:`${i}`,
      avatar:'https://education.gov.gy/web/media/k2/items/cache/f1b8aeeb90e87d86cd6bf72988291f00_Generic.jpg',
      name:'Mr. Smith',
      designation:'Professor Doctor'
  })};
const InstituteProfile=()=>{

    return(
        <Fragment>
          <h6 className='Title text-center'> National University of Sciences & Technology </h6> 
             <Divider/>
             <h6 className='SubTitle'> Mark of Distinction </h6>
               <Typography>
                  <Paragraph>
                    In the process of internal desktop applications development, many different design specs and
                    implementations would be involved, which might cause designers and developers difficulties and
                    duplication and reduce the efficiency of development.
                  </Paragraph>
                </Typography>
               <Divider/>
               <div>
                 <br/>
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
                       <br/>
                        <Carousel >
                            {InstitueImg.map((data)=>(
                            <div>
                              <img className={style.CarouselStyle} src={data.src}/>
                            </div>
                            ))}
                        </Carousel>
                          <Descriptions
                              title=""
                              layout="vertical"
                              bordered
                              column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}>
                                <Descriptions.Item label="Type">University</Descriptions.Item>
                                <Descriptions.Item label="Mode">Institute</Descriptions.Item>
                                <Descriptions.Item label="Address">National University of Sciences & Technology (NUST) Campus, Sector H-12, Islamabad, Pakistan </Descriptions.Item>
                          </Descriptions>
                            <Divider/>
                            <h6 className='SubTitle'> Campus List </h6>
                            <Divider/>
                            <Timeline>
                                {CampusList.map((data)=>(
                                  <Timeline.Item dot={data.key} color="#096dd9">
                                    {data.name}
                                  </Timeline.Item>
                                ))}
                            </Timeline>

                            <h6 className='SubTitle'> Department List </h6>
                            <Divider/>
                            <Timeline>
                                {DepList.map((data)=>(
                                  <Timeline.Item dot={data.key} color="#096dd9">
                                    {data.name}
                                  </Timeline.Item>
                                ))}
                            </Timeline>

                            <h6 className='SubTitle'> Program List </h6>
                            <Divider/>
                            <Timeline>
                                {ProgList.map((data)=>(
                                  <Timeline.Item dot={data.key} color="#096dd9">
                                    {data.name}
                                  </Timeline.Item>
                                ))}
                            </Timeline>

                            <h6 className='SubTitle'> Faculty List </h6>
                            <Divider/>
                              <Timeline>
                                  {FacultyList.map((data)=>(
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
                              <Divider/>
                            <h6 className='SubTitle'> Student Facilitation </h6>
                            <Divider/>
                            <Typography>
                              <Paragraph>
                                In the process of internal desktop applications development, many different design specs and
                                implementations would be involved, which might cause designers and developers difficulties and
                                duplication and reduce the efficiency of development.
                              </Paragraph>
                            </Typography>

                          


                              
                              
                 </div>

        </Fragment>
    )
}

export default InstituteProfile