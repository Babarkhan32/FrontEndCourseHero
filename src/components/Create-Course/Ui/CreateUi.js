import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import HeaderCont from '../../Header/Container/Header';
import {Input,Checkbox,Select,Radio,Button,DatePicker,Form,Divider,Upload, message,} from 'antd';
import { UploadOutlined,PlusOutlined, DeleteTwoTone } from '@ant-design/icons';
const { Option } = Select;
const { TextArea } = Input;


 
const CreateUi=(props)=>{

  const Uploadprops = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  function handleChangeCategory(value) {
    props.setSubjectCategory(value);
   }
   function handleChangeDurationFor(value){
     props.setDurationFor(value);
   }
   function handleChangeAid(value){
     props.setFinancialAid(value);
   }
   function handleSelectChange(value){
     props.setCourseType(value);
   }
   function handleChangeCategory(value){
      props.setSubjectCategory(value);
   }
   function onChangeStartingDate(date, dateString) {
     props.setStartingDate(dateString);
   }
   function onChangeApplicationDeadLine(date, dateString) {
     props.setApplicationDeadLine(dateString);
   }
   function handleChangeCountry(value){
     props.setCourseCountry(value)
   }
   function handleChangeLanguage(value){
     props.setCourseLanguage(value);
   }
   function handleChangeCurrency(value){
     props.setCurrency(value);
   }
   function handleChangeMode(value){
     props.setMode(value);
   }


   
  


    return(
      <div className='MainCont'>
      <div className='PageWrapper'> 
<HeaderCont/>
 
<div className='container'>
<div className='row'>
    <div className='col-1 col-sm-1 col-md-2 col-lg-2 col-xl-2'></div>
    <div className='col-10 col-sm-10 col-md-8 col-lg-8 col-xl-8'>
    <div className="card">
  <div className="card-header">New Course</div>
  <div className="card-body">
      <div className='row'>
      <div className='col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
      <div className='col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10'>
      <Form  name="control-hooks">
          <h6 className='Title mtt-15'> Course Name</h6>
          <Input onChange={(e)=>props.setCourseName(e.target.value)} type='text'/>

          <h6 className='Title mtt-15'> Select Course Type </h6>
          {/* <Radio.Group name="type" defaultValue={'Disciplinary'}>
    <Radio  value='Disciplinary'>Disciplinary</Radio>
    <Radio value='Inter-Disciplinary'>Inter-Disciplinary</Radio>
  </Radio.Group> */}


      <Form.Item name="type"  rules={[{ required: true }]}>
        <Select
          placeholder="Select Course Type"
         
        >
          <Option value="Disciplinary">Disciplinary Course</Option>
          <Option value="Interdisciplinary">Interdisciplinary Course</Option>
        </Select>
      </Form.Item>
      <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) => prevValues.type !== currentValues.type}
      >
        {({ getFieldValue }) => {
          return getFieldValue('type') === 'Interdisciplinary' ? (
            <div name="customizeType" rules={[{ required: true }]}>

<h6 className='BlkTitle mtt-15'> Enter Main Disciplinary Subject</h6>
              <Input type='text'/>

              <h6 className='BlkTitle mtt-15'> Additional Subject</h6>
          <Input type='text'/>
          <h6 className='BlkTitle mtt-15'>Additional Subject</h6>
          <Input type='text'/>
          <h6 className='BlkTitle mtt-15'> Additional Subject</h6>
          <Input type='text'/>

          <hr className='hr-def'/>

            </div>
          ) : getFieldValue('type') === 'Disciplinary' ? (
            <div name="customizeType"  rules={[{ required: true }]}>
               <h6 className='BlkTitle mtt-15'> Enter Main Subject</h6>
              <Input type='text'/>
              <hr className='hr-def'/>

            </div>): null;
        }}
      </Form.Item>
      
  
      <h6 className='Title mtt-15'> Mode</h6>
          <Radio.Group name="radiogroup" defaultValue={'online'}>
    <Radio onChange={handleChangeMode} value={'Online'}>Online</Radio>
    <Radio onChange={handleChangeMode} value={'Offline'}>Offline</Radio>
  </Radio.Group>

  <h6 className='Title mtt-15'> Course Language</h6>
         <Select
    style={{ width: '100%' }}
    onChange={handleChangeLanguage}
    optionLabelProp="label"
  >
    <Option value="English" label="Englishn">
      
    English
      
    </Option>
    <Option value="Urdu" label="Urdu">
     
    Urdu
      
    </Option>
    <Option value="Arabic" label="Arabic">
     
    Arabic
    
    </Option>
  </Select>
       
  <h6 className='Title mtt-15'> Course Importance & Breakdown </h6>
  <TextArea rows={4} showCount maxLength={100} placeholder='Brielfy explain the course breakdown' />

  <h6 className='Title'> Faculty Name</h6>
       <Input onChange={(e)=>props.setFaculty(e.target.value)}/>

          <h6 className='Title mtt-15'> Faculty Resume</h6>
          <Upload {...Uploadprops} >
    <Button style={{width:'100%'}} icon={<UploadOutlined />}>Upload CV</Button>
  </Upload>

  <Divider><label> or  </label></Divider>
  <Link to='/Faculty/Reg' target="_blank">
         <Button type="default" block>
      Create Resume
       </Button>
       </Link> 

          <h6 className='Title mtt-15'> Course Specification</h6>

          <Select
    style={{ width: '100%' }}
    onChange={handleSelectChange}
    optionLabelProp="label"
  >
    <Option value="Certificate" label="Certificate">
      
   Certificate
      
    </Option>
    <Option value="Non-Certificate" label="Non-Certificate">
     
    Non-Certificate
      
    </Option>
    <Option value="Certificate/Credit" label="Certificate/Credit">
     
    Certificate/Credit
    
    </Option>
  </Select>


  <h6 className='Title mtt-15'> Course Offering Institute</h6>
         <Input onChange={(e)=>props.setCourseOfferingInstitute(e.target.value)} type='text'/>
         <h6 className='Title mtt-15'> Institue Web Address</h6>
         <Input onChange={(e)=>props.setInstituteWebAddress(e.target.value)} type='text'/>
         <h6 className='Title mtt-15'>Add Institute Details</h6>
         <TextArea rows={4} showCount maxLength={100} placeholder='Brielfy explain the details' />

         <Divider><label> Add Institute Complete Profile </label></Divider>
         <Link to='/Institute/Reg' target="_blank">
         <Button type="default" block>
       Register Institiute 
       </Button>
       </Link> 

         <h6 className='Title mtt-15'>Teaching Medium Institute</h6>
         <Input onChange={(e)=>props.setMediumInstitute(e.target.value)}  type='text'/>
         <h6 className='Title mtt-15'>Teaching Medium Institue Web Address</h6>
         <Input onChange={(e)=>props.setMediumInstituteWebAddress(e.target.value)} type='text'/>
         <h6 className='Title mtt-15'>Add Institute Details</h6>
 <TextArea rows={4} showCount maxLength={100} placeholder='Brielfy explain the details' />

         <Divider><label> Add Institute Complete Profile </label></Divider>
         <Link to='/Institute/Reg' target="_blank">
         <Button type="default" block>
       Register Institiute 
       </Button>
       </Link>

       <h6 className='Title mtt-15'> Course Country</h6>
         <Select
    style={{ width: '100%' }}
    onChange={handleChangeCountry}
    optionLabelProp="label"
  >
    <Option value="Pakistan" label="Pakistan">
      
    Pakistan
      
    </Option>
    <Option value="Saudi Arabia" label="Saudi Arabia">
     
    Saudi Arabia
      
    </Option>
    <Option value="China" label="China">
     
    China
    
    </Option>
  </Select>

  <h6 className='Title mtt-15'> Course City</h6>
         <Select
    style={{ width: '100%' }}
    optionLabelProp="label"
  >
    <Option value="Islamabad" label="Islamabad">
      
  Islamabad
      
    </Option>
    <Option value="Wah Cantt" label="Wah Cantt">
     
    Wah Cantt
      
    </Option>
    <Option value="Peshawar" label="Peshawar">
     
    Peshawar
    
    </Option>
  </Select>

          <h6 className='Title mtt-15'> Duration</h6>
         <Input onChange={(e)=>props.setDuration(e.target.value)} type='number'/>
         <h6 className='Title mtt-15'> Duration For</h6>
         <Select
    style={{ width: '100%' }}
    onChange={handleChangeDurationFor}
    optionLabelProp="label"
  >
    <Option value="Weeks" label="Weeks">
      
    Weeks
      
    </Option>
    <Option value="Months" label="Months">
     
    Months
      
    </Option>
    <Option value="Years" label="Years">
     
    Years
    
    </Option>
  </Select>

  <h6 className='Title mtt-15'> Hours Per week</h6>
         <Input onChange={(e)=>props.setHoursPerWeek(e.target.value)} type='number'/>

         <h6 className='Title mtt-15'> Total Cost</h6>
         <Input onChange={e=>{props.setTotalCost(e.target.value)}} type='number'/>

         <h6 className='Title mtt-15'> Currency</h6>
         <Select
    style={{ width: '100%' }}
    onChange={handleChangeCurrency}
    optionLabelProp="label"
  >
    <Option value="$" label="$">
      
    $
      
    </Option>
    <Option value="PKR" label="PKR">
     
    PKR
      
    </Option>
    <Option value="Pound" label="Pound">
     
    Pound
    
    </Option>
  </Select>
 
         <h6 className='Title mtt-15'> Cost Breakdown</h6>
         <Input onChange={(e)=>props.setCostBreakDown(e.target.value)} type='number'/>

         <h6 className='Title mtt-15'> Financial Aid</h6>
         <Radio.Group name="radiogroup" defaultValue={'online'}>
    <Radio onChange={handleChangeAid} value={'Yes'}>Yes</Radio>
    <Radio  onChange={handleChangeAid} value={'No'}>No</Radio>
  </Radio.Group>

  <h6 className='Title mtt-15'> Financial Aid Details </h6>
          <TextArea onChange={(e)=>props.setFinancialAidDetails(e.target.value)} rows={3} />
          <h6 className='Title mtt-15'>Starting Date </h6>
          <DatePicker onChange={onChangeStartingDate} style={{width:'100%'}}  />
          <h6 className='Title mtt-15'> Application Deadline </h6>
          <DatePicker onChange={onChangeApplicationDeadLine}  style={{width:'100%'}}  />
          <h6 className='BlkTitle mtt-15'>Is this course is a part of any other program/degree ?  </h6>
  <hr className='hr-def mb-0'/>
  
  <Form.Item name="part"  rules={[{ required: true }]}>
        <Select
          placeholder="Specify Course"
         
        >
          <Option value="Yes">Yes</Option>
          <Option value="No">No</Option>
        </Select>
      </Form.Item>
      <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) => prevValues.part !== currentValues.part}
      >
        {({ getFieldValue }) => {
          return getFieldValue('part') === 'Yes' ? (
            <div name="customizeType" rules={[{ required: true }]}>

<h6 className='Title mtt-15'> Program Specification</h6>
<Select
    style={{ width: '100%' }}
    optionLabelProp="label"
  >
     <Option value="Certificate" label="Certificate">
      
     Certificate
        
        </Option>
    <Option value="Associate" label="Associate">
      
    Associate
      
      </Option>
     <Option value="Bachelor's" label="Bachelor's">
      
      Bachelor's
      
      </Option>
       <Option value="Master's" label="Master's">
     
     Master's
     
     </Option>
    
   
    <Option value="PHD" label="PHD">
     
    PHD
      
    </Option>
    <Option value="Post Doc" label="Post Doc">
      
      Post Doc
        
      </Option>
 
  </Select>

              <h6 className='Title mtt-15'> Program Name</h6>
              <Input type='text'/>

              <h6 className='Title mtt-15'> Program Type</h6>
              <Form.Item name="type"  rules={[{ required: true }]}>
        <Select
          placeholder="Select Course Type"
         
        >
          <Option value="Disciplinary">Disciplinary Course</Option>
          <Option value="Interdisciplinary">Interdisciplinary Course</Option>
        </Select>
      </Form.Item>
      <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) => prevValues.type !== currentValues.type}
      >
        {({ getFieldValue }) => {
          return getFieldValue('type') === 'Interdisciplinary' ? (
            <div name="customizeType" rules={[{ required: true }]}>

<h6 className='BlkTitle mtt-15'> Enter Main Disciplinary Subject</h6>
              <Input type='text'/>

              <h6 className='BlkTitle mtt-15'> Additional Subject</h6>
          <Input type='text'/>
          <h6 className='BlkTitle mtt-15'>Additional Subject</h6>
          <Input type='text'/>
          <h6 className='BlkTitle mtt-15'> Additional Subject</h6>
          <Input type='text'/>

          <hr className='hr-def'/>

            </div>
          ) : getFieldValue('type') === 'Disciplinary' ? (
            <div name="customizeType"  rules={[{ required: true }]}>
               <h6 className='BlkTitle mtt-15'> Enter Main Subject</h6>
              <Input type='text'/>
              <hr className='hr-def'/>

            </div>): null;
        }}
      </Form.Item>
      

      <Form.List name="degree">
        {(fields, { add, remove }) => (
          <>
            {fields.map(field => (
              <div key={field.key} style={{ display: 'flex',flexDirection:'column', marginBottom: 8 }} align="baseline">
               
  <h6 className='BlkTitle mtt-15'> Add Program Details </h6>
  <hr className='hr-def mb-0'/>
                <div
                  {...field}
                  name={[field.name, 'specification']}
                  fieldKey={[field.fieldKey, 'specification']}
                  rules={[{ required: true, message: 'Missing specification' }]}
                >
                  
<h6 className='Title mtt-15'> Program Specification</h6>
<Select
    style={{ width: '100%' }}
    optionLabelProp="label"
  >
     <Option value="Certificate" label="Certificate">
      
     Certificate
        
        </Option>
    <Option value="Associate" label="Associate">
      
    Associate
      
      </Option>
     <Option value="Bachelor's" label="Bachelor's">
      
      Bachelor's
      
      </Option>
       <Option value="Master's" label="Master's">
     
     Master's
     
     </Option>
    
   
    <Option value="PHD" label="PHD">
     
    PHD
      
    </Option>
    <Option value="Post Doc" label="Post Doc">
      
      Post Doc
        
      </Option>
 
  </Select>

                </div>
                <div
                  {...field}
                  name={[field.name, 'name']}
                  fieldKey={[field.fieldKey, 'name']}
                  rules={[{ required: true, message: 'name' }]}
                >
                      <h6 className='Title mtt-15'> Program Name</h6>
              <Input type='text'/>
                </div>

                <div
                  {...field}
                  name={[field.name, 'type']}
                  fieldKey={[field.fieldKey, 'type']}
                  rules={[{ required: true, message: 'Missing type' }]}
                >
                     <h6 className='Title mtt-15'> Program Type</h6>
              <Form.Item name="type"  rules={[{ required: true }]}>
        <Select
          placeholder="Select Course Type"
         
        >
          <Option value="Disciplinary">Disciplinary Course</Option>
          <Option value="Interdisciplinary">Interdisciplinary Course</Option>
        </Select>
      </Form.Item>
      <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) => prevValues.type !== currentValues.type}
      >
        {({ getFieldValue }) => {
          return getFieldValue('type') === 'Interdisciplinary' ? (
            <div name="customizeType" rules={[{ required: true }]}>

<h6 className='BlkTitle mtt-15'> Enter Main Disciplinary Subject</h6>
              <Input type='text'/>

              <h6 className='BlkTitle mtt-15'> Additional Subject</h6>
          <Input type='text'/>
          <h6 className='BlkTitle mtt-15'>Additional Subject</h6>
          <Input type='text'/>
          <h6 className='BlkTitle mtt-15'> Additional Subject</h6>
          <Input type='text'/>

          <hr className='hr-def'/>

            </div>
          ) : getFieldValue('type') === 'Disciplinary' ? (
            <div name="customizeType"  rules={[{ required: true }]}>
               <h6 className='BlkTitle mtt-15'> Enter Main Subject</h6>
              <Input type='text'/>
              <hr className='hr-def'/>

            </div>): null;
        }}
      </Form.Item>
      

                </div>

             

                <DeleteTwoTone twoToneColor='red' className='mtt-10' onClick={() => remove(field.name)} />
              </div>
            ))}
            <div className='mtt-10'>
              <Button style={{width:'100%'}} type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Add Another Program
              </Button>
            </div>
          </>
        )}
      </Form.List>
     
          <hr className='hr-def'/>

            </div>
          ) : null;
        }}
      </Form.Item>

          {/* <h6 className='Title mtt-15'> Course Overview</h6>
          <TextArea onChange={(e)=>props.setCourseOverView(e.target.value)}   rows={3} />
          <h6 className='Title mtt-15'> Course Content</h6>
          <TextArea  onChange={(e)=>props.setCourseContent(e.target.value)} rows={3} /> */}
          
         

          {/* <Select
    style={{ width: '100%' }}
    onChange={handleChangeMode}
    optionLabelProp="label"
  >
    <Option value="online" label="Online">
      
    online
      
    </Option>
    <Option value="offline" label="offline">
     
   offline 
       </Option>
  </Select> */}
         {/* <h6 className='Title mtt-15'> Course Info</h6>
         <TextArea onChange={(e)=>props.setCourseInfo(e.target.value)} rows={3} /> */}
         {/* <h6 className='Title mtt-15'> Subject Category</h6>
         <Select
    style={{ width: '100%' }}
    onChange={handleChangeCategory}
    optionLabelProp="label"
  >
    <Option value="HCI" label="HCI">
      
  Human Computer Interaction
      
    </Option>
    <Option value="Automata Thoery" label="Automata Thoery">
     
    Automata Thoery
      
    </Option>
    <Option value="Data Structures" label="Data Structures">
     
    Data Structures
    
    </Option>
  </Select> */}
         
       
        
         {/* <Radio onChange={()=>props.setFinancialAid('yes')}>Yes</Radio> &nbsp; &nbsp; &nbsp; <Radio onChange={()=>props.setFinancialAid('no')}>No</Radio>  */}
         
       <hr className='hr-def'/>
          <div className='text-center mtt-5'>
              <Button onClick={props.onSubmit} type='primary'> Submit </Button>
          </div>
          </Form> 
      </div>
      <div className='col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
     
      </div>
      </div>
      </div>
    </div>
    <div className='col-1 col-sm-1 col-md-2 col-lg-2 col-xl-2'></div>
    </div>
    </div>
    
        </div>
        </div>
    )
}
export default CreateUi