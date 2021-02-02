import React from 'react'
import { Fragment } from 'react';
import { Descriptions,Divider,Carousel,Timeline, Typography,Avatar } from 'antd';
import style from '../../Assets/Css/Profile.module.css';
const InstitueImg=[];
for(let i=1; i<=4; i++){
    InstitueImg.push({
        src:'https://propakistani.pk/wp-content/uploads/2018/03/nust.jpg'
    })};


const InstitueGallery=()=>{
    return(
        <Fragment>
        <h6 className='SubTitle'> Institute Gallery </h6>
          <Divider/>

                 <Carousel >
                            {InstitueImg.map((data)=>(
                            <div>
                              <img className={style.CarouselStyle} src={data.src}/>
                            </div>
                            ))}
                </Carousel>

           </Fragment>
    )
}


export default InstitueGallery