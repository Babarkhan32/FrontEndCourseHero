import React,{useState} from 'react';
import { Card,Modal,Rate,Button } from 'antd';


const CardUi=({Subject,Dep,rev, uni, platform, country,cost, aid,deadline, date,rate})=>{

    const [visible,setVisible]=useState(false),

  showModal = () => {
   
      setVisible(true) 
   
  },

  handleOk = e => {
    console.log(e);
   setVisible(false)
    
  },

  handleCancel = e => {
    console.log(e);
   
      setVisible(false)
    
  };

    return(
        <div> 
        <Card className='CourseCards'
        title={
        <div> 
          <h6>{Subject}  <label className='departmentLabel'> {Dep}</label>  </h6> 
        
          </div>}
        extra={<div> 
          <label className='LinkedTitle'> {rev} Reviews </label>
         &nbsp;  &nbsp; <Rate disabled defaultValue={rate} />
          </div>}
  
  actions={[
    <Button type='primary' > Apply </Button>,
    <Button type='primary'> Save </Button>,
   
  ]}
      >
  <div className='row'>
    <div className='col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10'>
   <label className='LinkedTitle'>{uni} </label> &nbsp; &nbsp;  via &nbsp; &nbsp;  <label className='LinkedTitle'> {platform} </label>
    </div>
    
    <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2'>
    <label className='LabelTitle'>{country} </label> 
    </div>
  </div>
  <div className='row'>
  <div className='col-5 col-sm-5 col-md-5 col-lg-5 col-xl-5'> 
    <label className='LabelTitle'> Degree: </label> &nbsp; &nbsp; &nbsp; &nbsp;  <label className='LabelValue'> Master's </label>
    </div>
    <div className='col-5 col-sm-5 col-md-5 col-lg-5 col-xl-5'> 
    <label className='LabelTitle'> Language: </label> &nbsp; &nbsp; &nbsp; &nbsp;  <label className='LabelValue'> English </label>
    </div>
    <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2'> 
    <label className='LinkedTitle' onClick={showModal}> Faculty </label> 
     </div>
  </div>
  
  <div className='row'>
  <div className='col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8'> 
  <label className='LabelTitle'> Duration: </label> &nbsp; &nbsp; &nbsp; <label className='LabelValue'> 2 Hour/W </label> &nbsp; &nbsp; <label className='LabelValue'> 2 Months </label>
  </div>
  <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2'> 
  <label className='LabelTitle'> Courses: </label> &nbsp; &nbsp; &nbsp; &nbsp;  <label className='LinkedTitle'> 4 </label>
  </div>
  <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2'>
  <label className='LabelTitle'> Online: </label> &nbsp; &nbsp; &nbsp; &nbsp;  <label className='LinkedTitle'> 3 </label>
     </div>
  </div>
  
  <div className='row'>
  <div className='col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3'> 
  <label className='LabelTitle'> Cost: </label> &nbsp; &nbsp; &nbsp; &nbsp;  <label  className='LabelValue'> PKR {cost} </label >
  </div>
  <div className='col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3'> 
  <label className='LabelTitle'> Aid: </label> &nbsp; &nbsp; &nbsp; &nbsp;  <label className='LabelValue'> {aid} </label >
  </div>
  <div className='col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6'>  </div>
  </div>

  <div className='row'>
  <div className='col-5 col-sm-5 col-md-5 col-lg-5 col-xl-5'> 
  <label className='LabelTitle'> Application Deadline: </label> &nbsp; &nbsp; &nbsp; &nbsp;  <label  className='LabelValue'>{deadline}</label >
  </div>
  <div className='col-5 col-sm-5 col-md-5 col-lg-5 col-xl-5'> 
  <label className='LabelTitle'> Start Date: </label> &nbsp; &nbsp; &nbsp; &nbsp;  <label className='LabelValue'> {date} </label >
  </div>
  </div>
  
        </Card>
         <Modal
         title="Faculty"
         visible={visible}
         onOk={handleOk}
         onCancel={handleCancel}
         footer={
             <Button type='primary' onClick={handleOk}> OK</Button>
         }
       >
         <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

</p>
         
       </Modal>
       </div>
    )
}
export default CardUi