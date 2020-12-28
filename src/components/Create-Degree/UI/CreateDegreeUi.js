import React,{useState, useCallback} from 'react';
import {Link} from 'react-router-dom';
import HeaderCont from '../../Header/Container/Header';
import Dropzone from 'react-dropzone-uploader';
import {useDropzone} from 'react-dropzone'//added by sulaiman
import {Input,Checkbox,Select,Radio,Button,DatePicker,Form,Divider,Upload, message,} from 'antd';
import { UploadOutlined,PlusOutlined, DeleteTwoTone,MinusCircleTwoTone,InboxOutlined } from '@ant-design/icons';

const { Option } = Select;
const { TextArea } = Input;



const CreateDegreeUi =(props)=>{
const [val,setVal]=useState(false);
    /* Dropzone React*/

    const getUploadParams = () => {
      return { url: 'https://httpbin.org/post' }
    }
  
    const handleChangeStatus = ({ meta }, status) => {
      console.log(status, meta)
    }
  
    const handleSubmit = (files, allFiles) => {

      props.setFiles(allFiles);
      console.log(files.map(f => f.meta))
      allFiles.forEach(f => f.remove())
      setVal(true);
    }


    let tempArr = props.files ? props.files : []
  // let tempImagesURLs = imagesURL ? imagesURL : []
  const onDrop = useCallback(acceptedFiles => {
    tempArr.push(acceptedFiles[0]);
    // const reader = new FileReader()
    // let progressNum = 0;
    // reader.onabort = () => console.log('file reading was aborted.')
    // reader.onerror = () => console.log('file reading failed')
    // reader.onprogress = (file) => console.log('progress', Math.ceil(file.total - file.loaded)/ file.total * 10) 
    // reader.onload = () => {
    //   const binaryStr = reader.result
    //   tempImagesURLs.push(binaryStr)
    //   setImagesURL(tempImagesURLs.map(file => file))
    // }
    // reader.readAsDataURL(acceptedFiles[0])
    props.setFiles(tempArr.map((file) => file))
    setVal(true);
    console.log('filesArr', props.files)
  }, [])
  const {getRootProps, getInputProps, acceptedFiles} = useDropzone({onDrop})

  const handleRemove = () => {
    console.log('removed');
  }
    // const Uploadprops = {
    //     name: 'file',
    //     action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    //     headers: {
    //       authorization: 'authorization-text',
    //     },
    //     onChange(info) {
    //       if (info.file.status !== 'uploading') {
    //         console.log(info.file, info.fileList);
    //       }
    //       if (info.file.status === 'done') {
    //         message.success(`${info.file.name} file uploaded successfully`);
    //       } else if (info.file.status === 'error') {
    //         message.error(`${info.file.name} file upload failed.`);
    //       }
    //     },
    //   };


    return(

       <div className='MainCont'>
      <div className='PageWrapper'> 
<HeaderCont/>
 
<div className='container'>
<div className='row'>
    <div className='col-1 col-sm-1 col-md-2 col-lg-2 col-xl-2'></div>
    <div className='col-10 col-sm-10 col-md-8 col-lg-8 col-xl-8'>
    <div className="card">
  <div className="card-header">New Degree</div>
  <div className="card-body">
      <div className='row'>
      <div className='col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
      <div className='col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10'>
      <Form onFinish={props.onFinish}  name="control-hooks" >
      <h6 className='Title mtt-15'> Degree Name</h6>

      <Form.Item name="courseName"  rules={[{ required: true }]}>
          <Input type='text'/>
          </Form.Item>
          <h6 className='Title mtt-15'> Degree Specification</h6>
          <Form.Item name="courseSpecification"  rules={[{ required: true }]}>
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
  <h6 className='Title mtt-15'> Select Degree Type </h6>
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
<Form.Item name="MainDisciplinary"  rules={[{ required: true }]}>

              <Input type='text'/>
</Form.Item>
              <h6 className='BlkTitle mtt-15'> Additional Subject</h6>
              <Form.Item name="AdditionalSubject1"  rules={[{ required: true }]}>

<Input type='text'/>
</Form.Item>
          <h6 className='BlkTitle mtt-15'>Additional Subject</h6>
          <Form.Item name="AdditionalSubject2"  rules={[{ required: true }]}>
<Input type='text'/>
</Form.Item>
          <h6 className='BlkTitle mtt-15'> Additional Subject</h6>
          <Form.Item name="AdditionalSubject3"  rules={[{ required: true }]}>

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
      

      <h6 className='Title mtt-15'> Degree Importance/Overview </h6>
      <Form.Item name="degreeOverview"  rules={[{ required: true }]}>
  <TextArea rows={4} showCount maxLength={100} placeholder='Brielfy explain the degree overview' />
</Form.Item>
  <h6 className='Title'> Degree Content</h6>
  <Form.Item name="degreeContent"  rules={[{ required: true }]}>
          <TextArea  rows={4} /> 
          </Form.Item>
          <h6 className='Title mtt-15'> Total Number of Courses</h6>
      <Form.Item name="totalNumberCourses"  rules={[{ required: true }]}>
          
          <Input placeholder="total courses" type='number'  />
          </Form.Item>

          <h6 className='BlkTitle mtt-15'> Course Name</h6>
      <Form.Item name="coursename"  rules={[{ required: true }]}>

          <Input placeholder="course name"  />
          </Form.Item>
          <Form.List name="course">
        {(fields, { add, remove }, { errors }) => (
          <>
            {fields.map((field, index) => (
              <div  style={{ display: 'flex',flexDirection:'column', marginBottom: 8 }}
                required={false}
                key={field.key}
              >
                  <div className='row mtt-5'>
                      <div className='col-lg-11 col-sm-11 col-11 col-md-11 col-xl-11'>
                      <Form.Item
                  {...field}
                  validateTrigger={['onChange', 'onBlur']}
                  rules={[
                    {
                      required: true,
                      whitespace: true,
                      message: "Please input course's name or delete this field.",
                    },
                  ]}
                >
                  
                  <Input placeholder="course name"  />
</Form.Item>
                 
               
                      </div>

                      <div className='col-lg-1 col-sm-1 col-1 col-md-1 col-xl-1'>
                     
                  <MinusCircleTwoTone
                    onClick={() => remove(field.name)}
                  />
              
                      </div>
                      </div> 
            
                
              </div>
            ))}
            <div className='text-center mtt-10'>
              <Button
             style={{width:'100%'}}
                type="dashed"
                onClick={() => add()}
                icon={<PlusOutlined />}
              >
                Add another course
              </Button>
             
              <Form.ErrorList errors={errors} />
            </div>
          </>
        )}
      </Form.List>
        
      <h6 className='Title mtt-15'> Total Number of Online Courses</h6>
      <Form.Item name="totalCourses"  rules={[{ required: true }]}>
      
          <Input placeholder="total courses" type='number'  />
          </Form.Item>

          <h6 className='BlkTitle mtt-15'> Online Course Name</h6>
      <Form.Item name="onlinecoursename"  rules={[{ required: true }]}>
         
          <Input placeholder="online course name"  />
          </Form.Item>
          <Form.List name="online">
        {(fields, { add, remove }, { errors }) => (
          <>
            {fields.map((field, index) => (
              <div  style={{ display: 'flex',flexDirection:'column', marginBottom: 8 }}
                required={false}
                key={field.key}
              >
                  <div className='row mtt-5'>
                      <div className='col-lg-11 col-sm-11 col-11 col-md-11 col-xl-11'>
                      <Form.Item
                  {...field}
                  validateTrigger={['onChange', 'onBlur']}
                  rules={[
                    {
                      required: true,
                      whitespace: true,
                      message: "Please input online's name or delete this field.",
                    },
                  ]}
                >
               

<Input placeholder="course name"  />

                </Form.Item>
                      </div>

                      <div className='col-lg-1 col-sm-1 col-1 col-md-1 col-xl-1'>
                     
                  <MinusCircleTwoTone
                    onClick={() => remove(field.name)}
                  />
              
                      </div>
                      </div> 
            
                
              </div>
            ))}
            <div className='text-center mtt-10'>
              <Button
             style={{width:'100%'}}
                type="dashed"
                onClick={() => add()}
                icon={<PlusOutlined />}
              >
                Add another course
              </Button>
             
              <Form.ErrorList errors={errors} />
            </div>
          </>
        )}
      </Form.List>
        

      <h6 className='Title mtt-15'> Total Number of Offline Courses</h6>
      <Form.Item name="offlinetotal"  rules={[{ required: true }]}>
     <Input placeholder="total courses" type='number'  />
          </Form.Item>
          <h6 className='BlkTitle mtt-15'> Offline Course Name</h6>
      <Form.Item name="offlinename"  rules={[{ required: true }]}>
          
          <Input placeholder="offline course name"  />
</Form.Item>
          <Form.List name="offline">
        {(fields, { add, remove }, { errors }) => (
          <>
            {fields.map((field, index) => (
              <div  style={{ display: 'flex',flexDirection:'column', marginBottom: 8 }}
                required={false}
                key={field.key}
              >
                  <div className='row mtt-5'>
                      <div className='col-lg-11 col-sm-11 col-11 col-md-11 col-xl-11'>
                      <Form.Item
                  {...field}
                  validateTrigger={['onChange', 'onBlur']}
                  rules={[
                    {
                      required: true,
                      whitespace: true,
                      message: "Please input offline's name or delete this field.",
                    },
                  ]}
                >
              
      <Input placeholder="offline name" />
</Form.Item>
              
                      </div>

                      <div className='col-lg-1 col-sm-1 col-1 col-md-1 col-xl-1'>
                     
                  <MinusCircleTwoTone
                    onClick={() => remove(field.name)}
                  />
              
                      </div>
                      </div> 
            
                
              </div>
            ))}
            <div className='text-center mtt-10'>
              <Button
             style={{width:'100%'}}
                type="dashed"
                onClick={() => add()}
                icon={<PlusOutlined />}
              >
                Add another course
              </Button>
             
              <Form.ErrorList errors={errors} />
            </div>
          </>
        )}
      </Form.List>
      <h6 className='Title mtt-15'> Faculty Name</h6>
      <Form.Item name="facName"  rules={[{ required: true }]}>
    
       <Input type='text'/>
</Form.Item>


          {/* <h6 className='BlkTitle mtt-15'> Faculty Resume</h6>
          <Upload {...Uploadprops} >

          <h6 className='BlkTitle mtt-15'> Faculty Resume</h6>
          <Dropzone
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      onSubmit={handleSubmit}
      styles={{ dropzone: { minHeight: 80} }}
    />
          {/* <Upload {...Uploadprops} >

    <Button style={{width:'100%'}} icon={<UploadOutlined />}>Upload CV</Button>
  </Upload> */}

<h6 className='BlkTitle mtt-15'> Faculty Resume</h6>
{
  props.files && props.files.length && 
  <div>
    {props.files[0].name}
  </div>
}
{/* {
       props.fileList && props.fileList.map((file, index) => (
        <div>
           <ul>
          <li>{index + 1}- {file.name}
          <Button type="primary" className="mx-3">preview</Button>
          <Button type="primary">Remove</Button>
          </li>
          
        </ul>
        </div>
       
      ))
    } */}
    <Form.Item name="imageSet">
    <div {...getRootProps()} style={{minHeight : 80, border: "2px dashed #d9d9d9", textAlign:'center'}} className="dropzone">
            <input {...getInputProps()}/>
            <h6 style={{ color: "#d9d9d9", marginTop: '5%'}}>drag and drop a file or click here to select a file</h6>
          </div>
    </Form.Item>

          {/* <Dropzone
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      onSubmit={handleSubmit}
      styles={{ dropzone: { minHeight: 80} }}
    />
  <Divider><label> or  </label></Divider> */}
  {/* <Link to='/Faculty/Reg' target="_blank">
         <Button type="default" block>
      Create Resume
       </Button>
       </Link>  */}
       {/* {val?
    <p>Your files have beenn uploaded</p>:""
} */}

       <Form.List name="degree">
        {(fields, { add, remove }) => (
          <>
            {fields.map(field => (
              <div key={field.key} style={{ display: 'flex',flexDirection:'column', marginBottom: 8 }} align="baseline">
               
  <h6 className='Title mtt-15'> Add Faculty </h6>
  <hr className='hr-def mb-0'/>
                <div
                  {...field}
                  name={[field.name, 'faculty']}
                  fieldKey={[field.fieldKey, 'faculty']}
                  rules={[{ required: true, message: 'Missing faculty' }]}
                >
                  
                  <h6 className='BlkTitle mtt-15'> Faculty Name</h6>
                  <Form.Item name="faculty"  rules={[{ required: true }]}>

<Input placeholder="faculty"  />
</Form.Item>

                </div>
                <div
                  {...field}
                  name={[field.name, 'resume']}
                  fieldKey={[field.fieldKey, 'resume']}
                  rules={[{ required: true, message: 'resume' }]}
                >
                        <h6 className='Title mtt-15'> Faculty Resume</h6>
          {/* <Upload {...Uploadprops} >
    <Button style={{width:'100%'}} icon={<UploadOutlined />}>Upload CV</Button>
  </Upload> */}

<Form.Item name="imageSet">
    <div {...getRootProps()} style={{minHeight : 80, border: "2px dashed #d9d9d9", textAlign:'center'}} className="dropzone">
            <input {...getInputProps()}/>
            <h6 style={{ color: "#d9d9d9", marginTop: '5%'}}>drag and drop a file or click here to select a file</h6>
          </div>
    </Form.Item>
{/* <Dropzone
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      onSubmit={handleSubmit}
      styles={{ dropzone: { minHeight: 80} }}
    />

  <Divider><label> or  </label></Divider> */}
  <Link to='/Faculty/Reg' target="_blank">
         <Button type="default" block>
      Create Resume
       </Button>
       </Link> 
                </div>

                <DeleteTwoTone twoToneColor='red' className='mtt-10' onClick={() => remove(field.name)} />
              </div>
            ))}
            <div className='mtt-10'>
              <Button style={{width:'100%'}} type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Add Faculty
              </Button>
            </div>
          </>
        )}
      </Form.List> 
  
          <h6 className='Title mtt-15'>Language</h6>
          <Form.Item name="courseLanguage"  rules={[{ required: true }]}>
<Input type='text'/>
</Form.Item>
      <h6 className='Title mtt-15'> Course Country</h6>
      <Form.Item name="country"  rules={[{ required: true }]}>
      
         <Select
    style={{ width: '100%' }}
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
</Form.Item>
  <h6 className='Title mtt-15'> Course City</h6>
  <Form.Item name="city"  rules={[{ required: true }]}>
  
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
</Form.Item>

      <h6 className='Title mtt-15'> List of Compulsory Subjects </h6>
      <Form.Item name="compulsorySubject"  rules={[{ required: true }]}>
      
          <Input placeholder="compulsory subject name"  />
</Form.Item>
          <Form.List name="compulsory">
        {(fields, { add, remove }, { errors }) => (
          <>
            {fields.map((field, index) => (
              <div  style={{ display: 'flex',flexDirection:'column', marginBottom: 8 }}
                required={false}
                key={field.key}
              >
                  <div className='row mtt-5'>
                      <div className='col-lg-11 col-sm-11 col-11 col-md-11 col-xl-11'>
                      <Form.Item
                  {...field}
                  validateTrigger={['onChange', 'onBlur']}
                  rules={[
                    {
                      required: true,
                      whitespace: true,
                      message: "Please input compulsory's name or delete this field.",
                    },
                  ]}
                >
                  <Input placeholder="compulsory name"  />
                </Form.Item>
                      </div>

                      <div className='col-lg-1 col-sm-1 col-1 col-md-1 col-xl-1'>
                     
                  <MinusCircleTwoTone
                    onClick={() => remove(field.name)}
                  />
              
                      </div>
                      </div> 
            
                
              </div>
            ))}
            <div className='text-center mtt-10'>
              <Button
            style={{width:'100%'}}
                type="dashed"
                onClick={() => add()}
                icon={<PlusOutlined />}
              >
                Add another subject
              </Button>
             
              <Form.ErrorList errors={errors} />
            </div>
          </>
        )}
      </Form.List>
        

      <h6 className='Title mtt-15'> List of Optional Subjects </h6>
      <Form.Item name="optionalSubname"  rules={[{ required: true }]}>

          <Input placeholder="optional subject name"  />
</Form.Item>
          <Form.List name="optional">
        {(fields, { add, remove }, { errors }) => (
          <>
            {fields.map((field, index) => (
              <div  style={{ display: 'flex',flexDirection:'column', marginBottom: 8 }}
                required={false}
                key={field.key}
              >
                  <div className='row mtt-5'>
                      <div className='col-lg-11 col-sm-11 col-11 col-md-11 col-xl-11'>
                      <Form.Item
                  {...field}
                  validateTrigger={['onChange', 'onBlur']}
                  rules={[
                    {
                      required: true,
                      whitespace: true,
                      message: "Please input optional 's name or delete this field.",
                    },
                  ]}
                >
                  <Input placeholder="optional  name"  />
                </Form.Item>
                      </div>

                      <div className='col-lg-1 col-sm-1 col-1 col-md-1 col-xl-1'>
                     
                  <MinusCircleTwoTone
                    onClick={() => remove(field.name)}
                  />
              
                      </div>
                      </div> 
            
                
              </div>
            ))}
            <div className='text-center mtt-10'>
              <Button
            style={{width:'100%'}}
                type="dashed"
                onClick={() => add()}
                icon={<PlusOutlined />}
              >
                Add another subject
              </Button>
             
              <Form.ErrorList errors={errors} />
            </div>
          </>
        )}
      </Form.List>
        
      <h6 className='Title mtt-15'> Degree Offering Institute</h6>
      <Form.Item name="degreeOfferingInstitute"  rules={[{ required: true }]}>

         <Input  type='text'/>
         </Form.Item>
         
         <h6 className='Title mtt-15'> Institue Web Address</h6>
      <Form.Item name="webaddress"  rules={[{ required: true }]}>
         
         <Input  type='text'/>
         </Form.Item>
         <h6 className='Title mtt-15'>Add Institute Details</h6>
      <Form.Item name="instDetails"  rules={[{ required: true }]}>
         
         <TextArea rows={4} showCount maxLength={100} placeholder='Brielfy explain the details' />
         </Form.Item>

         {/* <Divider><label> Add Institute Complete Profile </label></Divider>
         <Link to='/Institute/Reg' target="_blank">
         <Button type="default" block>
       Register Institiute 
       </Button>
       </Link>  */}

         <h6 className='Title mtt-15'>Teaching Medium Institute</h6>
      <Form.Item name="teachingmedium"  rules={[{ required: true }]}>

         <Input  type='text'/>
         </Form.Item>

         <h6 className='Title mtt-15'>Teaching Medium Institue Web Address</h6>
      <Form.Item name="teachingmediumweb"  rules={[{ required: true }]}>

         <Input  type='text'/>
         </Form.Item>
         <h6 className='Title mtt-15'>Add Institute Details</h6>
      <Form.Item name="inssdetails"  rules={[{ required: true }]}>

 <TextArea rows={4} showCount maxLength={100} placeholder='Brielfy explain the details' />
</Form.Item>
         {/* <Divider><label> Add Institute Complete Profile </label></Divider>
         <Link to='/Institute/Reg' target="_blank">
         <Button type="default" block>
       Register Institiute 
       </Button>
       </Link> */}

       <h6 className='Title mtt-15'> Duration</h6>
      <Form.Item name="durationfrom"  rules={[{ required: true }]}>

         <Input  type='number'/>
         </Form.Item>
         <h6 className='Title mtt-15'> Duration For</h6>
      <Form.Item name="durationCrit"  rules={[{ required: true }]}>

         <Select
    style={{ width: '100%' }}
   
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
</Form.Item>
  <h6 className='Title mtt-15'> Hours Per week</h6>
  <Form.Item name="hoursPerWeek"  rules={[{ required: true }]}>

         <Input  type='number'/>
</Form.Item>
         <h6 className='Title mtt-15'> Total Cost</h6>

      <Form.Item name="totalCost"  rules={[{ required: true }]}>

         <Input  type='number'/>
</Form.Item>
         <h6 className='Title mtt-15'> Currency</h6>
      <Form.Item name="currency"  rules={[{ required: true }]}>

         <Select
    style={{ width: '100%' }}
   
    optionLabelProp="label"
  >
    <Option value="$" label="$">
      
    $
      
    </Option>
    {/* <Option value="PKR" label="PKR">
     
    PKR
      
    </Option>
    <Option value="Pound" label="Pound">
     
    Pound
    
    </Option> */}
  </Select>
 </Form.Item>
         <h6 className='Title mtt-15'> Cost Breakdown</h6>
      <Form.Item name="breakDown"  rules={[{ required: true }]}>

         <TextArea rows={3}/>
</Form.Item>
         <h6 className='Title mtt-15'> Financial Aid</h6>
      <Form.Item name="financialAid"  rules={[{ required: true }]}>

         <Radio.Group name="radiogroup" defaultValue={'online'}>
           
    <Radio  value={'Yes'}>Yes</Radio>
    <Radio   value={'No'}>No</Radio>
  </Radio.Group>
</Form.Item>
  <h6 className='Title mtt-15'> Financial Aid Details </h6>
  <Form.Item name="financialAidDetails"  rules={[{ required: true }]}>
           <TextArea  rows={3} />
           </Form.Item>
           
          <h6 className='Title mtt-15'>Starting Date </h6>
  <Form.Item name="startingdate"  rules={[{ required: true }]}>

          <DatePicker  style={{width:'100%'}}  />
          </Form.Item>
          <h6 className='Title mtt-15'> Application Deadline </h6>
          <Form.Item name="AppDeadline"  rules={[{ required: true }]}>

          <DatePicker   style={{width:'100%'}}  />
          </Form.Item>

          {/* <h6 className='BlkTitle mtt-15'>Add Course Details  </h6>
  <hr className='hr-def mb-0'/>
  <Link to='/create/course' target="_blank">
         <Button className='mtt-10' type="default" block>
       Add Course
       </Button>
       </Link> */}

  <hr className='hr-def'/>
          <div className='text-center mtt-5'>
              <Button type='primary' htmlType="submit"> Submit </Button>
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
export default CreateDegreeUi 