import React,{useState, useCallback} from 'react';
// import ImgCrop from 'antd-img-crop';
import HeaderCont from '../../Header/Container/Header';
import {Input,Select,DatePicker,Upload,Button,Form,Radio} from 'antd';
import Dropzone from 'react-dropzone-uploader';
import {useDropzone} from 'react-dropzone'//added by sulaiman
import {InboxOutlined,  MinusCircleTwoTone, DeleteTwoTone, PlusOutlined } from '@ant-design/icons';
const {TextArea} = Input;
const { Option } = Select;
const { RangePicker } = DatePicker;



const FacultyRegUi=(props)=>{
  const [imageURI, setImageURI] = useState(null);
  const [progressPercent, setProgressPercent] = useState(0);
  const [val,setVal]=useState(false);
    /* Dropzone React*/

    const getUploadParams = () => {
      return { url: 'https://httpbin.org/post' }
    }
  
    const handleChangeStatus = ({ meta }, status) => {
      console.log(status, meta)
    }
  
    const handleSubmit = (files, allFiles) => {

      props.setFileList(allFiles);
      console.log("All files",allFiles);
      console.log(files.map(f => f.meta))
      allFiles.forEach(f => f.remove())
      setVal(true);
    }

    const normFile = e => {
      console.log('Upload event:', e);
      if (Array.isArray(e)) {
        return e;
      }
      return e && e.fileList;
    };
    
    const onDrop = useCallback(acceptedFiles => {
      console.log('acceptedFiles', acceptedFiles)
      const reader = new FileReader()
      // let progressNum = 0;
      reader.onabort = () => console.log('file reading was aborted.')
      reader.onerror = () => console.log('file reading failed')
      // reader.onprogress = (file) => console.log('progress', Math.ceil(file.total - file.loaded)/ file.total * 10) 
      reader.onload = () => {
        const binaryStr = reader.result
        setImageURI(binaryStr)
      }
      reader.readAsDataURL(acceptedFiles[0])
      props.setFileList(acceptedFiles[0])
      setVal(true);
    }, [])
    const {getRootProps, getInputProps, acceptedFiles} = useDropzone({onDrop, multiple:false})

  const handleRemove = () => {
    console.log('removed');
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
  <div className="card-header">
    Faculty Registration Form 
    
    </div>
  <div className="card-body">
      <div className='row'>
      <div className='col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
      <div className='col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10'>
      <Form name="dynamic_form_nest_item" autoComplete="off"
      onFinish={props.onFinish}>
      <h6 className='Title'> Name</h6>
      <Form.Item name="FullName"  rules={[{ required: true }]}> 
                     <Input placeholder="Name" />
                     </Form.Item>

      <h6 className='Title mtt-15'> Gender</h6>
      <Form.Item name="gender"  rules={[{ required: true }]}>
      <Select placeholder='Select Gender' allowClear style={{ width: '100%' }}  optionLabelProp="label">
      <Option value="Male" label='Male'>Male</Option>
      <Option value="Female" label='Female'>Female</Option>
      <Option value="Other" label='Other' >
      Other
      </Option>
    </Select>
    </Form.Item>


    <h6 className='Title mtt-15'> Date of Birth </h6>
    <Form.Item name="dateofbirth"  rules={[{ required: true }]}> 
    <DatePicker  style={{width:'100%'}}  />
</Form.Item>
    <h6 className='Title mtt-15'> Email Address </h6>
    <Form.Item name="email"  rules={[{ required: true }]}>
       <Input type='email' placeholder='Email Address'/>
       </Form.Item>


    <h6 className='Title mtt-15'> Phone Number </h6>
    <Form.Item name="phone"  rules={[{ required: true }]}>
       <Input type='Number' name='PhoneNumber'/>
       </Form.Item>

    <h6 className='Title mtt-15'> Whatsapp Number </h6>
    <Form.Item name="whatsapp"  rules={[{ required: true }]}> 
    <Input type='Number' name='WhatsApp'/>
    </Form.Item>


    <h6 className='Title mtt-15'> Permanent Address </h6>
    <Form.Item name="address"  rules={[{ required: true }]}> 
    <Input type='text' name='Address'/>
    </Form.Item>


    {/* <h6 className='Title mtt-15'> Upload Picture </h6>
    <Dropzone
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      onSubmit={handleSubmit}
      styles={{ dropzone: { minHeight: 80} }}
    /> */}
        {/* <Upload.Dragger name="files" action="/upload.do" listType="picture">
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
          </Upload.Dragger> */}


    <h6 className='Title mtt-15'> Upload Picture </h6>
     {
      props.fileList && imageURI ?
      <>
        <div> 
          <h6 className='col-5'>your file has been uploaded</h6>
          <Button type='primary' className='col-3' onClick={() => {
            props.setFileList(null)
            setImageURI(null)
          }
          }>Remove</Button>
        </div>
        <img src={imageURI} className="container-fluid"/>
      </>
      :
     <Form.Item name="imageSet">
        <div {...getRootProps()} style={{minHeight : 80, border: "2px dashed #d9d9d9", textAlign:'center'}} className="dropzone">
            <input {...getInputProps()}/>
            <h6 style={{ color: "#d9d9d9", marginTop: '5%'}}>drag and drop a file or click here to select a file</h6>
          </div>
 {/* <Dropzone //commented out by sulaiman
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      onSubmit={handleSubmit}
      styles={{ dropzone: { minHeight: 80} }}
    /> */}
    {/* <ImgCrop rotate>
   
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={props.fileList}
        onChange={props.onChange}
        onPreview={props.onPreview}
      >
        {props.fileList.length < 5 && '+ Upload'}
      </Upload>
      
    </ImgCrop> */}
    </Form.Item>
  }
    {/* {val?
    <p>your files have been uploaded</p>:''
    } */}
    <h6 className='Title mtt-15'> Spoken Languages </h6>
    <Form.Item name="spokenlanguages"  rules={[{ required: true }]}>
    <Select
    style={{ width: '100%' }}
    optionLabelProp="label"
  >
    <Option value="English" label="English">
      
    English
      
    </Option>
    <Option value="Urdu" label="Urdu">
     
    Urdu
      
    </Option>
    <Option value="Arabic" label="Arabic">
     
    Arabic
    
    </Option>
  </Select>
       </Form.Item>
  <h6 className='Title mtt-15'> Describe Yourself </h6>
  <Form.Item name="introduction"  rules={[{ required: true }]}> 
  <TextArea rows={4} showCount maxLength={100} />
</Form.Item>
  <h6 className='BlkTitle mtt-15'>Education History</h6>
  <hr className='hr-def mb-0'/>
  <h6 className='Title mtt-15'>Degree Name </h6>
  <Form.Item name="degrees"  rules={[{ required: true }]}> 
  <Input type='text' />
</Form.Item>
                  <h6 className='Title mtt-15'>Degree Type </h6>
  <Form.Item name="degreeType"  rules={[{ required: true }]}> 
                 <Select
    style={{ width: '100%' }}
    optionLabelProp="label"
    placeholder='Program Type'
  >
      <Option value="Post Doc" label="Post Doc">
      Post Doc
        
      </Option>
      <Option value="Masters" label="Masters">
      
      Masters
      
    </Option>
    <Option value="Bachelors" label="Bachelors">
      
    Bachelors
      
    </Option>
    <Option value="Intermediate" label="Intermediate">
     
    Intermediate
      
    </Option>
    <Option value="Matriculation" label="Matriculation">
     
    Matriculation
    
    </Option>
    
  </Select>
  </Form.Item>
  <h6 className='Title mtt-15'>Degree Institute </h6>
  <Form.Item name="degreeFrom"  rules={[{ required: true }]}> 
                     <Input placeholder="Degree Institute" />
                     </Form.Item>
                     <h6 className='Title mtt-15'>Passing Year </h6>
  <Form.Item name="degreePassingYear"  rules={[{ required: true }]}> 
                     <DatePicker  style={{width:'100%'}}  />
                     </Form.Item>
                     
                     
      <Form.List name="DegreeDetails">
        {(fields, { add, remove }) => (
          <>
            {fields.map(field => (
              <div key={field.key} style={{ display: 'flex',flexDirection:'column', marginBottom: 8 }} align="baseline">
               
  <h6 className='BlkTitle mtt-15'> Add Degree Details </h6>
  <hr className='hr-def mb-0'/>
  <h6 className='Title mtt-15'>Degree Name </h6>
                <Form.Item
                  {...field}
                  name={[field.name, 'Degree']}
                  fieldKey={[field.fieldKey, 'Degree']}
                  rules={[{ required: true, message: 'Missing Degree' }]}
                >
                  
 
                  <Input placeholder="Degree Name" />
              
                </Form.Item>
                <h6 className='Title mtt-15'>Degree Type </h6>

                <Form.Item
                  {...field}
                  name={[field.name, 'type']}
                  fieldKey={[field.fieldKey, 'type']}
                  rules={[{ required: true, message: 'Missing type' }]}
                >
                     
  
                     <Select
    style={{ width: '100%' }}
    optionLabelProp="label"
    placeholder='Degree Type'
  >
      <Option value="Post Doc" label="Post Doc">
      Post Doc
        
      </Option>
      <Option value="Masters" label="Masters">
      
      Masters
      
    </Option>
    <Option value="Bachelors" label="Bachelors">
      
    Bachelors
      
    </Option>
    <Option value="Intermediate" label="Intermediate">
     
    Intermediate
      
    </Option>
    <Option value="Matriculation" label="Matriculation">
     
    Matriculation
    
    </Option>
    
  </Select>
                
                </Form.Item>
                <h6 className='Title mtt-15'>Degree Institute </h6>
                <Form.Item
                  {...field}
                  name={[field.name, 'DegreeInstitute']}
                  fieldKey={[field.fieldKey, 'DegreeInstitute']}
                  rules={[{ required: true, message: 'Missing institute' }]}
                >
                    
 
                     
                     <Input placeholder="Degree Institute" />
                  
                </Form.Item>
                <h6 className='Title mtt-15'>Passing Year </h6>
                  <Form.Item
                  {...field}
                  name={[field.name, 'year']}
                  fieldKey={[field.fieldKey, 'year']}
                  rules={[{ required: true, message: 'Missing year' }]}
                >
                     
                     <DatePicker  style={{width:'100%'}}  />
                
                </Form.Item>

                <DeleteTwoTone twoToneColor='red' className='mtt-10' onClick={() => remove(field.name)} />
              </div>
            ))}
            <div className='mtt-10'>
              <Button type="dashed" style={{width:'100%'}} onClick={() => add()} block icon={<PlusOutlined />}>
                Add Another Degree
              </Button>
            </div>
          </>
        )}
      </Form.List>
      <div className='text-center mtt-10'>
       
      </div>

      <h6 className='BlkTitle mtt-15'> Experience </h6>
  <hr className='hr-def mb-0'/>
  <h6 className='Title mtt-15'> Total Years of Experience</h6>
  <Form.Item name="experience"  rules={[{ required: true }]}> 
         <Input  type='number'/>
</Form.Item>
         <h6 className='Title mtt-15'> Area of Expertise</h6>
  <Form.Item name="Areaofexpertise"  rules={[{ required: true }]}> 
         <Input placeholder="Area of expertise"  />
         </Form.Item>
          <Form.List name="Expertise">
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
                      message: "Please input Expertise's name or delete this field.",
                    },
                  ]}
                >

                  <Input placeholder="Expertise name"  />
                 
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
                Add another expertise
              </Button>
             
              <Form.ErrorList errors={errors} />
            </div>
          </>
        )}
      </Form.List>
      <h6 className='BlkTitle mtt-15'> Details of Courses Taught </h6>
      <hr className='hr-def mb-0'/>
      <h6 className='Title mtt-15'>Course Name </h6>
               <Form.Item name="CourseName"  rules={[{ required: true }]}> 
         <Input placeholder="Course Name"  />
         </Form.Item>      
        
                  <h6 className='Title mtt-15'>Course Details </h6>
                <Form.Item name="coursesDetails"  rules={[{ required: true }]}> 
         <TextArea  row={3} placeholder="coursesTaught"  />
         </Form.Item>
                  <h6 className='Title'>Institute </h6>
               <Form.Item name="CourseTaughtinstitute"  rules={[{ required: true }]}> 
                 <Input placeholder="institute"  />
         </Form.Item>

                     <Form.List name="courseTaughtList">
        {(fields, { add, remove }) => (
          <>
            {fields.map(field => (
              <div key={field.key} style={{ display: 'flex',flexDirection:'column', marginBottom: 8 }} align="baseline">
               
  <h6 className='BlkTitle mtt-15'> Add Course Details </h6>
  <hr className='hr-def mb-0'/>
  <h6 className='Title mtt-15'>Course Name </h6>
                <Form.Item
                  {...field}
                  name={[field.name, 'CourseDetails']}
                  fieldKey={[field.fieldKey, 'CourseDetails']}
                  rules={[{ required: true, message: 'Missing Course' }]}
                >
                
         <Input placeholder="courseName"  />
                </Form.Item>
                <h6 className='Title mtt-15'>Course Details </h6>
                <Form.Item
                  {...field}
                  name={[field.name, 'courseName']}
                  fieldKey={[field.fieldKey, 'courseName']}
                  rules={[{ required: true, message: 'Missing details' }]}
                >
                     

                    
         <TextArea rows={3} maxLength={100} placeholder="coursesTaught"  />
       
           
                
                </Form.Item>
                <h6 className='Title'>Institute </h6>
                <Form.Item
                  {...field}
                  name={[field.name, 'courseinstitute']}
                  fieldKey={[field.fieldKey, 'courseinstitute']}
                  rules={[{ required: true, message: 'Missing institute' }]}
                >
                  
                   
             <Input placeholder="institute"  />
        
            
                </Form.Item>

                

                <DeleteTwoTone twoToneColor='red' className='mtt-10' onClick={() => remove(field.name)} />
              </div>
            ))}
            <div className='mtt-10'>
              <Button type="dashed" style={{width:'100%'}} onClick={() => add()} block icon={<PlusOutlined />}>
                Add Another Course
              </Button>
            </div>
          </>
        )}
      </Form.List>
      <div className='text-center mtt-10'>
        <Button type="primary" >
          Save Details
        </Button>
      </div>

      <h6 className='BlkTitle mtt-15'> Employment History </h6>
  <hr className='hr-def mb-0'/>

  <h6 className='Title mtt-15'> Current Position</h6>
  <Form.Item name="currentPosition"  rules={[{ required: true }]}> 
         <Input placeholder="current Position"  />
         </Form.Item>
            

         <h6 className='Title mtt-15'> Institute</h6>
         <Form.Item name="EmploymentHistoryInstitute"  rules={[{ required: true }]}> 
         <Input placeholder="institute"  />
         </Form.Item>
            

         <h6 className='Title mtt-15'> Period From </h6>
         <Form.Item name="periodFrom"  rules={[{ required: true }]}> 
         <DatePicker style={{width:"100%"}}  />
         </Form.Item>
      
         <hr className='hr-def mb-0'/>
         <h6 className='Title mtt-15'> Previous Position</h6>
         <Form.Item name="previousPoistion"  rules={[{ required: true }]}> 
         <Input placeholder="previous position"  />
         </Form.Item>
            
         <h6 className='Title mtt-15'> Institute</h6>
         <Form.Item name="Previousinstitute"  rules={[{ required: true }]}> 
         <Input placeholder="institute"  />
         </Form.Item>
            

         <h6 className='Title mtt-15'> Time Period </h6>
         <Form.Item name="timePeriod"  rules={[{ required: true }]}> 
         <RangePicker sytle={{width:"100%"}}  />
         </Form.Item>
        


         <Form.List name="empHistory">
        {(fields, { add, remove }) => (
          <>
            {fields.map(field => (
              <div key={field.key} style={{ display: 'flex',flexDirection:'column', marginBottom: 8 }} align="baseline">
               
  <h6 className='BlkTitle mtt-15'> Add Employment History </h6>
  <hr className='hr-def mb-0'/>
  <h6 className='Title mtt-15'>Position</h6>
                <Form.Item
                  {...field}
                  name={[field.name, 'Position']}
                  fieldKey={[field.fieldKey, 'Position']}
                  rules={[{ required: true, message: 'Missing Position' }]}
                >
                  
                  
         <Input placeholder="Position"  />
      
            
                </Form.Item>
               
                <h6 className='Title'>Institute </h6>
                <Form.Item
                  {...field}
                  name={[field.name, 'EmploymentInstitute']}
                  fieldKey={[field.fieldKey, 'EmploymentInstitute']}
                  rules={[{ required: true, message: 'Missing institute' }]}
                >
                     
                   
         <Input placeholder="institute"  />
      
            
                </Form.Item>
                <h6 className='Title mtt-15'> Time Period </h6>
                <Form.Item
                  {...field}
                  name={[field.name, 'EmploymentRange']}
                  fieldKey={[field.fieldKey, 'EmploymentRange']}
                  rules={[{ required: true, message: 'Missing range' }]}
                >
                      
                      
         <RangePicker style={{width:"100%"}}  />
         
            
     
                
                </Form.Item>

                

                <DeleteTwoTone twoToneColor='red' className='mtt-10' onClick={() => remove(field.name)} />
              </div>
            ))}
            <div className='mtt-10'>
              <Button type="dashed" style={{width:'100%'}} onClick={() => add()} block icon={<PlusOutlined />}>
                Add Employment
              </Button>
            </div>
          </>
        )}
      </Form.List>

      <h6 className='BlkTitle mtt-15'> Specify your Carrer Plan </h6>
  <hr className='hr-def mb-0'/>
  <h6 className='Title mtt-15'> Enter desired course name to teach</h6>
  <Form.Item name="desiredCourse"  rules={[{ required: true }]}> 
         <Input placeholder="desired Course"  />
         </Form.Item>
            

         <h6 className='Title mtt-15'> Are you available for free consultation to students?</h6>
         <Form.Item name="availability"  rules={[{ required: true }]}> 
         <Radio.Group name="radiogroup" >
    <Radio  value={'Yes'}>Yes</Radio>
    <Radio value={'No'}>No</Radio>
  </Radio.Group>
         </Form.Item>
           

  <h6 className='Title mtt-15'> Please mention your preferable mode of consultation</h6>
  <Form.Item name="consultation"  rules={[{ required: true }]}> 
  <Select
    style={{ width: '100%' }}
    optionLabelProp="label"
  >
    <Option value="Email" label="Email">
      
    Email
      
    </Option>
    <Option value="Phone" label="Phone">
     
    Phone
      
    </Option>
    <Option value="Whatsapp" label="Whatsapp">
     
    Whatsapp
    
    </Option>
  </Select>
         </Form.Item>
         

  <hr className='hr-def'/>
          <div className='text-center mtt-5'>
              <Button  type='primary' htmlType='submit'> Submit </Button>
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
export default FacultyRegUi