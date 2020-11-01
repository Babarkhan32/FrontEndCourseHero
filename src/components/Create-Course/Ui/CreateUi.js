import React from 'react'
import HeaderCont from '../../Header/Container/Header';
import {Input,Checkbox,Select,Radio,Button,DatePicker} from 'antd';
const { Option } = Select;
const { TextArea } = Input;


 
const CreateUi=(props)=>{
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
          <h6 className='Title'> Course Type</h6>
          
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

          <h6 className='Title mtt-15'> Course Name</h6>
          <Input onChange={(e)=>props.setCourseName(e.target.value)} type='text'/>
          <h6 className='Title mtt-15'> Course Overview</h6>
          <TextArea onChange={(e)=>props.setCourseOverView(e.target.value)}   rows={3} />
          <h6 className='Title mtt-15'> Course Content</h6>
          <TextArea  onChange={(e)=>props.setCourseContent(e.target.value)} rows={3} />
          <h6 className='Title mtt-15'> Faculty</h6>
          <TextArea  onChange={(e)=>props.setFaculty(e.target.value)} rows={3} />
          <h6 className='Title mtt-15'> Mode</h6>
          <Radio.Group name="radiogroup" defaultValue={'online'}>
    <Radio onChange={handleChangeMode} value={'Online'}>Online</Radio>
    <Radio onChange={handleChangeMode} value={'Offline'}>Offline</Radio>
  </Radio.Group>

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
         <h6 className='Title mtt-15'> Course Info</h6>
         <TextArea onChange={(e)=>props.setCourseInfo(e.target.value)} rows={3} />
         <h6 className='Title mtt-15'> Subject Category</h6>
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
  </Select>
         
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
         <h6 className='Title mtt-15'> Course Offering Institute</h6>
         <Input onChange={(e)=>props.setCourseOfferingInstitute(e.target.value)} type='text'/>
         <h6 className='Title mtt-15'> Institue Web Address</h6>
         <Input onChange={(e)=>props.setInstituteWebAddress(e.target.value)} type='text'/>
         <h6 className='Title mtt-15'>Medium Institute</h6>
         <Input onChange={(e)=>props.setMediumInstitute(e.target.value)}  type='text'/>
         <h6 className='Title mtt-15'> Medium Institue Web Address</h6>
         <Input onChange={(e)=>props.setMediumInstituteWebAddress(e.target.value)} type='text'/>
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
         {/* <Radio onChange={()=>props.setFinancialAid('yes')}>Yes</Radio> &nbsp; &nbsp; &nbsp; <Radio onChange={()=>props.setFinancialAid('no')}>No</Radio>  */}
         <h6 className='Title mtt-15'> Financial Aid Details </h6>
          <TextArea onChange={(e)=>props.setFinancialAidDetails(e.target.value)} rows={3} />
          <h6 className='Title mtt-15'>Starting Date </h6>
          <DatePicker onChange={onChangeStartingDate} size='large' style={{width:'100%'}}  />
          <h6 className='Title mtt-15'> Application Deadline </h6>
          <DatePicker onChange={onChangeApplicationDeadLine} size='large' style={{width:'100%'}}  />
       <hr className='hr-def'/>
          <div className='text-center mtt-5'>
              <Button onClick={props.onSubmit} type='primary'> Submit </Button>
          </div>

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