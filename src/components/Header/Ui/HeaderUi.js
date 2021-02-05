import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {Modal,Card} from 'antd';
import style from '../Assets/Header.module.css'
import '../Assets/Header.css';
import degree from '../Assets/images/degree.jpg';
import course from '../Assets/images/course.png';
const {Meta}=Card;




const HeaderUi=()=>{
  const [addCourse, showAddCourse]=useState(false),

  show=()=>{
    showAddCourse(true)
  },
  hide=()=>{
    showAddCourse(false)
  };
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
               
                 <li className={style.HeaderLi} onClick={show}>
                  Create Course 
                 </li>
                 
                 </ul>
                 </div>
              
                 </div>
                
                 <Modal
          title="Create Course"
          visible={addCourse}
          onCancel={hide}
         footer={null}
        >

          <div className='row'>
            <div className='col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3'> </div>
            <div className='col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6'> 
            <Card className='CreateCards'
    hoverable 
   
    cover={   <Link to='/create/course'> <img alt="course" src={course} /> </Link>}
  >
       <Link to='/create/course'>
    <Meta title="Add Individual Course"  />
    </Link>
  </Card>
  <br/>
         <Card className='CreateCards'
    hoverable
 
    cover={   <Link to='/Create/Degree'> <img alt="degree" src={degree} /></Link>}
  >
       <Link to='/'>
    <Meta title="Add Degree"  />
    </Link>
  </Card>
            </div>
            <div className='col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3'> </div>
          
          </div>
 
 
        </Modal>
             
            </div>
       
    )
}
export default HeaderUi