import React,{useCallback} from 'react';
import HeaderCont from '../../Header/Container/Header';
import {useDropzone} from 'react-dropzone'//added by sulaiman
import {Input,Select,Radio,Button,DatePicker,Form,Divider, message, Modal} from 'antd';
import countryList from 'react-select-country-list'
import {  DeleteTwoTone } from '@ant-design/icons';
import csc from 'country-state-city'
import { Fragment } from 'react';

const { Option } = Select;
const { TextArea } = Input;


 
const CreateUi=(props)=>{
  var languages = require('langu-list')();
  console.log('langages list are',languages.getLanguageNames());
  const optionsLangauges=languages.getLanguageNames();
  const countries = countryList().getLabels();
  const cities = csc.getAllCities();
  console.log('Countries List', countries);
  console.log('cities List', cities);

  const citiesList= cities.map((item,i)=>(
    <Option key={i} value={item.name} > {item.name}</Option>
  ))
  
  console.log("props33",props);
  /* Dropzone React*/

  //suliaman's work
  const handlePreview = (file) => {
    if(file.type === "application/pdf") {
      Modal.info({
        title:file.name,
        okText: 'Close',
        content: 'No preview available for pdf files.'
      })
    } else {
      const reader = new FileReader()
    reader.onabort = () => message.warning('file reading was aborted.')
    reader.onerror = () => message.error('file reading failed')
    reader.onload = () => {
        Modal.info({
          title:file.name,
          okText: 'Close',
          width:"60%",
          content: <img alt='' src={reader.result} style={{width:'100%', height:'100%'}}/>,
        })
    }
    reader.readAsDataURL(file)
    }
    
  }

  const handleDelete = () => {
    // setVal(false);
    props.setResume(null)
  }

  const onDrop = useCallback(acceptedFiles => {
    props.setResume(acceptedFiles[0])
    if(acceptedFiles[0]) {
      message.success("File uploaded successfully.")
    } else {
      message.error("File uploading failed.")
    }
    // setVal(true);
  }, [props])
  
  const {getRootProps, getInputProps} = useDropzone({onDrop, multiple:false})
  

    return(
      <Fragment> 
        <HeaderCont/>
      <div className='MainCont'>
      <div className='PageWrapper'> 

 
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
      <Form onFinish={props.onFinish} name="control-hooks">
          <h6 className='Title mtt-15'> Course Name</h6>
          <Form.Item name="courseName"  rules={[{ required: true }]}> 
          <Input  type='text'/>
            </Form.Item>
          <h6 className='Title mtt-15'> Select Course Type </h6>
                {/* <Radio.Group name="type" defaultValue={'Disciplinary'}>
          <Radio  value='Disciplinary'>Disciplinary</Radio>
          <Radio value='Inter-Disciplinary'>Inter-Disciplinary</Radio>
        </Radio.Group> */}


      <Form.Item name="type"  rules={[{ required: false }]}>
        <Select
          placeholder="Select Course Type"
         
        >
          <Option value="Disciplinary">Disciplinary Course</Option>
          
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
            <Form.Item name="mainDisciplinarySubject"  rules={[{ required: true }]}> 
                          <Input type='text'/>
            </Form.Item>
              <h6 className='BlkTitle mtt-15'> Additional Subject</h6>
              <Form.Item name="additionalSubject1"  rules={[{ required: true }]}> 
              <Input type='text'/>
              </Form.Item>
              <h6 className='BlkTitle mtt-15'>Additional Subject</h6>
              <Form.Item name="additionalSubject2" > 
              <Input type='text'/>
              </Form.Item>
              <h6 className='BlkTitle mtt-15'> Additional Subject</h6>
              <Form.Item name="additionalSubject3"> 
              <Input type='text'/>
              </Form.Item>
              <hr className='hr-def'/>

                </div>
          ) : getFieldValue('type') === 'Disciplinary' ? (
            <div name="customizeType"  rules={[{ required: true }]}>
               <h6 className='BlkTitle mtt-15'> Enter Main Subject</h6>
               <Form.Item name="mainSubject"  rules={[{ required: true }]}> 
              <Input type='text'/>
              </Form.Item>
              <hr className='hr-def'/>

            </div>): null;
        }}
      </Form.Item>
      
  
      <h6 className='Title mtt-15'> Mode</h6>
      <Form.Item name="mode"  rules={[{ required: false }]}> 
          <Radio.Group name="radiogroup" defaultValue={'online'}>
    <Radio value={'Online'}>Online</Radio>
    <Radio  value={'Offline'}>Offline</Radio>
  </Radio.Group>
</Form.Item>
  <h6 className='Title mtt-15'> Course Language</h6>
  <Form.Item name="courseLanguage"  rules={[{ required: true }]}> 
  {/* <ReactLanguageSelect
    searchable={true}
    searchPlaceholder="Search for a language" /> */}
    <Select
    showSearch
    style={{ width: '100%' }}
    placeholder="Please select"
    optionLabelProp="label"
    >
    {optionsLangauges.map((item,i)=>(
      <Option key={i} value={item} label={item}> {item} </Option>
    ))}
    </Select>
       </Form.Item>
  <h6 className='Title mtt-15'> Course Importance & Breakdown </h6>
  <Form.Item name="breakDown"  rules={[{ required: false }]}> 
  <TextArea rows={4} showCount maxLength={100} placeholder='Brielfy explain the course breakdown' />
</Form.Item>
  <h6 className='Title'> Faculty Name</h6>
  <Form.Item name="facultyName"  rules={[{ required: true }]}> 
       <Input/>
</Form.Item>
          <h6 className='Title mtt-15'> Faculty Resume</h6>
          {
      props.resume ?
      <div className="row"> 
        <span class="col-5 mr-3 mt-1"><h6 style={{color: "#096dd9"}}>{props.resume && props.resume.name}</h6></span>
        <Button className="col-3 mx-2" type='primary'
          onClick={() => handlePreview(props.resume)}
        >Preview</Button>
        <Button className="col-3" type='primary'
          onClick={handleDelete}
        >Delete
        </Button>
      </div>
      :
          <Form.Item name="facultyResume"> 
          <div {...getRootProps()} style={{minHeight : 80, border: "2px dashed #d9d9d9", textAlign:'center'}} className="dropzone">
            <input {...getInputProps()}/>
            <h6 style={{ color: "#d9d9d9", marginTop: '5%'}}>drag and drop a file or click here to select a file</h6>
          </div>
          {/* <Dropzone
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      maxFiles={1}
      onSubmit={handleSubmit}
      styles={{ dropzone: { minHeight: 80} }}
    /> */}


          {/* <Upload {...Uploadprops} >
    <Button style={{width:'100%'}} icon={<UploadOutlined />}>Upload CV</Button>
  </Upload> */}
  
  </Form.Item>
}
          {/* <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
  {({getRootProps, getInputProps}) => (
    <section>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
    </section>
  )}
</Dropzone> */}


  <Divider><label> or  </label></Divider>
  {/* <Link to='/Faculty/Reg' target="_blank">
         <Button type="default" block>
      Create Resume
       </Button>
       </Link>  */}

          <h6 className='Title mtt-15'> Course Specification</h6>
          <Form.Item name="courseSpecification"  rules={[{ required: true }]}> 
          <Select
    style={{ width: '100%' }}
   
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
</Form.Item>

  <h6 className='Title mtt-15'> Course Offering Institute</h6>
  <Form.Item name="courseOfferingInstitute"  rules={[{ required: true }]}> 
         <Input type='text'/>
         </Form.Item>
         <h6 className='Title mtt-15'> Institue Web Address</h6>
         <Form.Item name="instituteWebAddress"> 
         <Input type='text'/>
         </Form.Item>
         <h6 className='Title mtt-15'>Add Institute Details</h6>
         <Form.Item name="instituteDetails"  rules={[{ required: false }]}> 
         <TextArea rows={4} showCount maxLength={100} placeholder='Brielfy explain the details' />
</Form.Item>
         {/* <Divider><label> Add Institute Complete Profile </label></Divider>
         <Link to='/Institute/Reg' target="_blank">
         <Button type="default" block>
       Register Institiute 
       </Button>
       </Link>  */}

         <h6 className='Title mtt-15'>Teaching Medium Institute</h6>
         <Form.Item name="medium" > 
         <Input   type='text'/>
         </Form.Item>
         <h6 className='Title mtt-15'>Teaching Medium Institue Web Address</h6>
         <Form.Item name="mediumWebAddress"> 
         <Input type='text'/>
         </Form.Item>
         <h6 className='Title mtt-15'>Add Institute Details</h6>
         <Form.Item name="mediumDetails" > 
 <TextArea rows={4} showCount maxLength={100} placeholder='Brielfy explain the details' />
 </Form.Item>

         {/* <Divider><label> Add Institute Complete Profile </label></Divider>
         <Link to='/Institute/Reg' target="_blank">
         <Button type="default" block>
       Register Institiute 
       </Button>
       </Link> */}

       <h6 className='Title mtt-15'> Course Country</h6>
       <Form.Item name="courseCountry"  rules={[{ required: true }]}> 
       <Select
       showSearch
    style={{ width: '100%' }}
    placeholder="Please select"
    >
    {countries.map((item,i)=>(
      <Option key={i} value={item}> {item} </Option>
    ))}
    </Select>
</Form.Item>
  <h6 className='Title mtt-15'> Course City</h6>
  <Form.Item name="courseCity	"  rules={[{ required: false }]}>
  {/* <Form.Item name="courseCity"  rules={[{ required: false }]}> 
         <Input 
    style={{ width: '100%' }}
  >
  </Input>
  </Form.Item> */}
         <Select
     showSearch
     style={{ width: '100%' }}
     placeholder="Please select"
  >
    {citiesList}
    {/* {cities.map((item,i)=>(
      <Option key={i} value={item.name} > {item} </Option>
    ))} */}
  </Select>
</Form.Item>
  {/* <Form.Item name="courseCity"  rules={[{ required: true }]}> 
         <Input 
    style={{ width: '100%' }}
  >
  </Input>
  </Form.Item> */}

          <h6 className='Title mtt-15'> Duration</h6>
          <Form.Item name="duration"  rules={[{ required: true }]}> 
         <Input type='number'/>
         </Form.Item>
         <h6 className='Title mtt-15'> Duration For</h6>
         <Form.Item name="durationFor"  rules={[{ required: true }]}> 
         <Input type='text'/>
   
 </Form.Item>

  <h6 className='Title mtt-15'> Hours Per week</h6>
  <Form.Item name="hoursPerWeek"  rules={[{ required: true }]}> 
         <Input type='number'/>
</Form.Item>
         <h6 className='Title mtt-15'> Total Cost</h6>
         <Form.Item name="totalCost"  rules={[{ required: true }]}> 
         <Input type='number'/>
</Form.Item>
         <h6 className='Title mtt-15'> Currency</h6>
         <Form.Item name="currency"  rules={[{ required: false }]}> 
         <Select
    style={{ width: '100%' }}
    optionLabelProp="label"
  >
    <Option value="$" label="$">
       $
    </Option>
  </Select>
  </Form.Item>
 
      
         <h6 className='Title mtt-15'> Financial Aid</h6>
         <Form.Item name="financialAid"  rules={[{ required: false }]}> 
         <Radio.Group name="radiogroup" defaultValue={''}>
    <Radio value={'Yes'}>Yes</Radio>
    <Radio  value={'No'}>No</Radio>
  </Radio.Group>
  </Form.Item>

  <h6 className='Title mtt-15'> Financial Aid Details </h6>
  <Form.Item name="financialAidDetails"  rules={[{ required: false }]}> 
          <TextArea rows={3} />
          </Form.Item>
          <h6 className='Title mtt-15'>Starting Date </h6>
          <Form.Item name="startingDate"  rules={[{ required: true }]}> 
          <DatePicker style={{width:'100%'}}  />
          </Form.Item>
          <h6 className='Title mtt-15'> Application Deadline </h6>
          <Form.Item name="endingDate"  rules={[{ required: true }]}> 
          <DatePicker  style={{width:'100%'}}  />
          </Form.Item>
          <h6 className='BlkTitle mtt-15'>Is this course is a part of any other program/degree ?  </h6>
  <hr className='hr-def mb-0'/>
  
  <Form.Item name="part"  rules={[{ required: false}]}>
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
<Form.Item name="programSpecs"  rules={[{ required: true }]}> 
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
  </Form.Item>

              <h6 className='Title mtt-15'> Program Name</h6>
              <Form.Item name="programName"  rules={[{ required: true }]}> 
              <Input type='text'/>
</Form.Item>
              <h6 className='Title mtt-15'> Program Type</h6>
              <Form.Item name="ProgramType"  rules={[{ required: true }]}>
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
          return getFieldValue('ProgramType') === 'Interdisciplinary' ? (
            <div name="customizeType" rules={[{ required: true }]}>

<h6 className='BlkTitle mtt-15'> Enter Main Disciplinary Subject</h6>
<Form.Item name="DisciplinarySubject"  rules={[{ required: true }]}> 
              <Input type='text'/>
</Form.Item>
              <h6 className='BlkTitle mtt-15'> Additional Subject</h6>
              <Form.Item name="programAdditionalSubject1"  rules={[{ required: true }]}> 
          <Input type='text'/>
          </Form.Item>
          <h6 className='BlkTitle mtt-15'>Additional Subject</h6>
          <Form.Item name="programAdditionalSubject2"  rules={[{ required: true }]}> 
          <Input type='text'/>
          </Form.Item>
          <h6 className='BlkTitle mtt-15'> Additional Subject</h6>
          <Form.Item name="programAdditionalSubject3"  rules={[{ required: true }]}> 
          <Input type='text'/>
          </Form.Item>
          <hr className='hr-def'/>

            </div>
          ) : getFieldValue('type') === 'ProgramDisciplinary' ? (
            <div name="customizeType"  rules={[{ required: true }]}>
               <h6 className='BlkTitle mtt-15'> Enter Main Subject</h6>
               <Form.Item name="mainSubject"  rules={[{ required: true }]}> 
              <Input type='text'/>
              </Form.Item>
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
  <h6 className='Title mtt-15'> Program Specification</h6>
                <Form.Item
                  {...field}
                  name={[field.name, 'specification']}
                  fieldKey={[field.fieldKey, 'specification']}
                  rules={[{ required: true, message: 'Missing specification' }]}
                >
                  

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

                </Form.Item>
                <h6 className='Title mtt-15'> Program Name</h6>
                <Form.Item
                  {...field}
                  name={[field.name, 'programName']}
                  fieldKey={[field.fieldKey, 'programName']}
                  rules={[{ required: true, message: 'name' }]}
                >
                      
              <Input type='text'/>
                </Form.Item>
                <h6 className='Title mtt-15'> Program Type</h6>
                <Form.Item
                  {...field}
                  name={[field.name,'programType']}
                  fieldKey={[field.fieldKey, 'programType']}
                  rules={[{ required: true, message: 'Missing type' }]}
                >
                     
             
        <Select
          placeholder="Select Course Type"
         
        >
          <Option value="ProgramDisciplinary">Disciplinary Course</Option>
          <Option value="ProgramInterdisciplinary">Interdisciplinary Course</Option>
        </Select>
    
      {/* <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) => prevValues.type !== currentValues.type}
      >
        {({ getFieldValue }) => {
          return getFieldValue(' programType') === 'ProgramInterdisciplinary' ? (
            <div name="customizeType" rules={[{ required: true }]}>

<h6 className='BlkTitle mtt-15'> Enter Main Disciplinary Subject</h6>
              <h6 className='BlkTitle mtt-15'> Enter Main Disciplinary Subject</h6>
              <Form.Item name="mainDisciplinarySubject1"  rules={[{ required: true }]}>
              <Input type='text'/>
              </Form.Item>

              <h6 className='BlkTitle mtt-15'> Additional Subject</h6>
              <Form.Item name="addionalSubject11"  rules={[{ required: true }]}>
          <Input type='text'/>
          </Form.Item>
          <h6 className='BlkTitle mtt-15'>Additional Subject</h6>
          <Form.Item name="acditionalSubject22"  rules={[{ required: true }]}>
          <Input type='text'/>
          </Form.Item>
          <h6 className='BlkTitle mtt-15'> Additional Subject</h6>
          <Form.Item name="additionalSubject33"  rules={[{ required: true }]}>
          <Input type='text'/>
                </Form.Item>
          <hr className='hr-def'/>

            </div>
          ) : getFieldValue('programType') === 'ProgramDisciplinary' ? (
            <div name="customizeType"  rules={[{ required: true }]}>
               <h6 className='BlkTitle mtt-15'> Enter Main Subject</h6>
               <Form.Item name="mainSubject"  rules={[{ required: true }]}>
              <Input type='text'/>
              </Form.Item>
              <hr className='hr-def'/>

            </div>): null;
        }}
      </Form.Item> */}
      

                </Form.Item>

             

                <DeleteTwoTone twoToneColor='red' className='mtt-10' onClick={() => remove(field.name)} />
              </div>
            ))}
            {/* <div className='mtt-10'>
              <Button style={{width:'100%'}} type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Add Another Program
              </Button>
            </div> */}
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
              <Button htmlType='submit' type='primary'> Submit </Button>
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
        </Fragment>
    )
}
export default CreateUi