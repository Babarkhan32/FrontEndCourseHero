import React,{useState, useCallback} from 'react';
import HeaderCont from '../../Header/Container/Header';
import {Input,Select,DatePicker,Button,Form, message, Modal} from 'antd';
// import ImgCrop from 'antd-img-crop';
import insertStudent from './../api/insertStudent';

import {useDropzone} from 'react-dropzone'//added by sulaiman
import {DeleteTwoTone, PlusOutlined  } from '@ant-design/icons';
import { Fragment } from 'react';
const {TextArea} = Input;
const { Option } = Select;

const selectBefore = (
  <Select defaultValue="$" className="select-before">
    <Option value="$">$</Option>
  </Select>
);




const StudentRegUi=()=>{
const [fileList, setFileList] = useState(null);

  const onFinish=(values)=>{
    console.log('fileList', fileList)
    values.imageSet=fileList;

    let obj={
    Degree: values.degreeName,
    type: values.degreeType,
    institution:values.degreeInstitution,
    year:values.passingYear
    }

    if(values.degrees&&values.degrees.length>0){
      values.degrees.push(obj);
    }else{
      values.degrees=[obj]
    }

    delete values.degreeName;
    delete values.degreeType;
    delete values.degreeInstitution;
    delete values.passingYear


    console.log("Success",values);
    
    
      insertStudent(values).then(result=>{
      console.log(result);
  })
  }
  
  
  
  /* Dropzone React*/

  
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
   
    setFileList(null)
  }

  const onDrop = useCallback(acceptedFiles => {
    setFileList(acceptedFiles[0])
    if(acceptedFiles[0]) {
      message.success("File uploaded successfully.")
    } else {
      message.error("File uploading failed.")
    }
   
  }, [])
  
  const {getRootProps, getInputProps} = useDropzone({onDrop, multiple:false})

    return(
      console.log('fileList', fileList),
      <Fragment> 
          <HeaderCont/>
        <div className='MainCont'>
        <div className='PageWrapper'> 
      
        <div className='container'>
<div className='row'>
    <div className='col-1 col-sm-1 col-md-2 col-lg-2 col-xl-2'></div>
    <div className='col-10 col-sm-10 col-md-8 col-lg-8 col-xl-8'>
    <div className="card">
  <div className="card-header">Student Registration</div>
  <div className="card-body">

  <div className='row'>
      <div className='col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
      <div className='col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10'>
      <Form onFinish={onFinish} name="dynamic_form_nest_item" autoComplete="off">
      <h6 className='Title'> Name</h6>
      <Form.Item name="FullName"  rules={[{ required: true }]}> 
      <Input type='text' name='Name'/>
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
    <Form.Item name="DateOfBirth"  rules={[{ required: true }]}> 
    <DatePicker  style={{width:'100%'}}  />
</Form.Item>
    <h6 className='Title mtt-15'> Email Address </h6>
    <Form.Item name="emailAddress"  rules={[{ required: true }]}> 
    <Input type='text' name='Email'/>
</Form.Item>
    <h6 className='Title mtt-15'> Phone Number </h6>
    <Form.Item name="phoneNumber"  rules={[{ required: true }]}> 
    <Input type='text' name='Phone Number'/>
</Form.Item>
    <h6 className='Title mtt-15'> Whatsapp Number </h6>
    <Form.Item name="whatsapp"  rules={[{ required: true }]}> 
    <Input type='text' name='Whatsapp Number'/>
</Form.Item>
    <h6 className='Title mtt-15'> Permanent Address </h6>
    <Form.Item name="Address"  rules={[{ required: true }]}> 
    <Input type='text' name='Address'/>
</Form.Item>
    <h6 className='Title mtt-15'> Upload Picture </h6>
    {
      fileList ?
      <div className="row"> 
        <span class="col-5 mr-3 mt-1"><h6 style={{color: "#096dd9"}}>{fileList.name}</h6></span>
        <Button className="col-3 mx-2" type='primary'
          onClick={() => handlePreview(fileList)}
        >Preview</Button>
        <Button className="col-3" type='primary'
          onClick={handleDelete}
        >Delete
        </Button>
      </div>
      :
      <Form.Item name="imageSet">
    {/* <ImgCrop rotate> */}
   
      {/* <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
      >
        {fileList.length < 5 && '+ Upload'}
      </Upload> */}

{/* suliaman dropzone start*/}
          <div {...getRootProps()} style={{minHeight : 80, border: "2px dashed #d9d9d9", textAlign:'center'}} className="dropzone">
            <input {...getInputProps()}/>
            <h6 style={{ color: "#d9d9d9", marginTop: '5%'}}>drag and drop a file or click here to select a file</h6>
          </div>
{/* suliaman dropzone end*/}
{/* <Dropzone
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      maxFiles={1}
      onSubmit={handleSubmit}
      styles={{ dropzone: { minHeight: 80} }}
    /> */}
      
    {/* </ImgCrop> */}
    </Form.Item>
    // val?
    // <p>Your file has been uploaded</p>:""
}
    


      
    <h6 className='Title mtt-15'> Spoken Languages </h6>
    <Form.Item name="spokenLanguages"  rules={[{ required: true }]}> 
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
  <h6 className='BlkTitle mtt-15'> Education History </h6>
  <hr className='hr-def mb-0'/>

  <h6 className='Title mtt-15'>Degree Name </h6>
  <Form.Item name="degreeName"  rules={[{ required: true }]}> 
                  <Input placeholder="Degree Name" />
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
  <Form.Item name="degreeInstitute"  rules={[{ required: true }]}> 
                     <Input placeholder="Degree Institute" />
                     </Form.Item>
                     <h6 className='Title mtt-15'>Passing Year </h6>
                     <Form.Item name="passingYear"  rules={[{ required: true }]}> 
                     <DatePicker  style={{width:'100%'}}  />
                     
                     </Form.Item>
      <Form.List name="degrees">
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
                <Form.Item
                  {...field}
                  name={[field.name, 'institute']}
                  fieldKey={[field.fieldKey, 'institute']}
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
      {/* <div className='text-center mtt-10'>
        <Button type="primary" >
          Save Degree
        </Button>
      </div> */}

      <h6 className='BlkTitle mtt-15'> Specify your study plan </h6>
  <hr className='hr-def mb-0'/>

  <h6 className='Title mtt-15'> Brief Study Proposal </h6>
  <Form.Item name="studyProposal"  rules={[{ required: true }]}> 
     
  <TextArea rows={4} showCount maxLength={500} />
</Form.Item>
  <h6 className='Title'> Select Desired Program Type </h6>
  <Form.Item name="programType"  rules={[{ required: true }]}> 
 <Select
    style={{ width: '100%' }}
    optionLabelProp="label"
    placeholder='Program Type'
  >
    <Option value="Certificated Course" label="Certificated Course">
      
    Certificated Course
      
    </Option>
    <Option value="Non-Certificate Course" label=" Non-Certificate Course">
     
    Non-Certificated Course
      
    </Option>
    <Option value="Credit Course" label="Credit Course">
     
    Credit Course
    
    </Option>
    <Option value="Non-Credit Course" label="Non-Credit Course">
     
    Non-Credit Course
    
    </Option>

    <Option value="Associate Degree" label="Associate Degree">
     
    Associate Degree
     
     </Option>
     <Option value="Bachelor Degree" label="Bachelor Degree">
     
     Bachelor Degree
     
     </Option>
     <Option value="Masters Degree" label="Masters Degree">
     
     Masters Degree
     
     </Option>

     <Option value="PHD Degree" label="PHD Degree">
     
     PHD Degree
     
     </Option>
     <Option value="Post Doctorate Degree" label="Post Doctorate Degree">
     
     Post Doctorate Degree
     
     </Option>

  </Select>
  </Form.Item>

        <h6 className='Title mtt-15'> Enter Desired Discipline/Subject  </h6>    
        <Form.Item name="desireddisciplineName"  rules={[{ required: true }]}>  
        <Input placeholder="Discipline Name" />  
</Form.Item>
        <h6 className='Title mtt-15'> Select Desired Mode   </h6> 
        <Form.Item name="desiredMode"  rules={[{ required: true }]}> 
        <Select placeholder='Select Mode' allowClear style={{ width: '100%' }}  optionLabelProp="label">
      <Option value="Online" label='Online'>Online</Option>
      <Option value="Offline" label='Offline'>Offline</Option>
      <Option value="Other" label='Other' >
      Other
      </Option>
    </Select>
</Form.Item>
    <h6 className='Title mtt-15'> Approximate Afforable Cost   </h6> 
    <Form.Item name="affordableCost"  rules={[{ required: true }]}> 
    <Input addonBefore={selectBefore} placeholder='Cost' />
</Form.Item>

    <h6 className='Title mtt-15'> Preffered Country</h6>
    <Form.Item name="prefferedCountry"  rules={[{ required: true }]}> 
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
  <h6 className='Title mtt-15'> Preffered City</h6>
  <Form.Item name="prefferedCity"  rules={[{ required: true }]}> 
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
    <h6 className='Title mtt-15'> Preffered Language</h6>
    <Form.Item name="prefferedLanguages"  rules={[{ required: true }]}> 
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

<div className='text-center mtt-10'>
<Button type='primary' htmlType='submit'> Submit </Button>
</div>
      </Form>
       
          </div>
          </div>
      </div>
      </div>
      
    </div>
    </div>
    </div>
        </div>
        </div>
        </Fragment>
    )
}
export default StudentRegUi