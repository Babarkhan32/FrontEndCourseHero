import React from 'react';
import {Link} from 'react-router-dom';
import HeaderCont from '../../Header/Container/Header';
import {Input,Checkbox,Select,Radio,Button,DatePicker,Form,Divider,Upload, message,} from 'antd';
import { UploadOutlined,PlusOutlined, DeleteTwoTone,MinusCircleTwoTone,InboxOutlined } from '@ant-design/icons';

const { Option } = Select;
const { TextArea } = Input;


const CreateDegreeUi =()=>{

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
      <Form  name="control-hooks" >
      <h6 className='Title mtt-15'> Degree Name</h6>
          <Input type='text'/>

          <h6 className='Title mtt-15'> Degree Specification</h6>

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
      

      <h6 className='Title mtt-15'> Degree Importance/Overview </h6>
  <TextArea rows={4} showCount maxLength={100} placeholder='Brielfy explain the degree overview' />

  <h6 className='Title'> Degree Content</h6>
          <TextArea  rows={4} /> 

          <h6 className='Title mtt-15'> Total Number of Courses</h6>
          <Input placeholder="total courses" type='number'  />

          <h6 className='BlkTitle mtt-15'> Course Name</h6>
          <Input placeholder="course name"  />
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
                      <div
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
                </div>
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
          <Input placeholder="total courses" type='number'  />
          <h6 className='BlkTitle mtt-15'> Online Course Name</h6>
          <Input placeholder="online course name"  />

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
                      <div
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
                  <Input placeholder="online course name"  />
                </div>
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
          <Input placeholder="total courses" type='number'  />
          <h6 className='BlkTitle mtt-15'> Offline Course Name</h6>
          <Input placeholder="offline course name"  />

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
                      <div
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
                  <Input placeholder="offline name"  />
                </div>
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
       <Input type='text'/>

          <h6 className='BlkTitle mtt-15'> Faculty Resume</h6>
          <Upload {...Uploadprops} >
    <Button style={{width:'100%'}} icon={<UploadOutlined />}>Upload CV</Button>
  </Upload>

  <Divider><label> or  </label></Divider>
  <Link to='/Faculty/Reg' target="_blank">
         <Button type="default" block>
      Create Resume
       </Button>
       </Link> 

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
       <Input type='text'/>

                </div>
                <div
                  {...field}
                  name={[field.name, 'resume']}
                  fieldKey={[field.fieldKey, 'resume']}
                  rules={[{ required: true, message: 'resume' }]}
                >
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
     
      <h6 className='Title mtt-15'> Course Country</h6>
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


      <h6 className='Title mtt-15'> List of Compulsory Subjects </h6>
          <Input placeholder="compulsory subject name"  />

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
                      <div
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
                </div>
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
          <Input placeholder="optional subject name"  />

          <Form.List name="optional ">
        {(fields, { add, remove }, { errors }) => (
          <>
            {fields.map((field, index) => (
              <div  style={{ display: 'flex',flexDirection:'column', marginBottom: 8 }}
                required={false}
                key={field.key}
              >
                  <div className='row mtt-5'>
                      <div className='col-lg-11 col-sm-11 col-11 col-md-11 col-xl-11'>
                      <div
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
                </div>
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
         <Input  type='text'/>
         <h6 className='Title mtt-15'> Institue Web Address</h6>
         <Input  type='text'/>
         <h6 className='Title mtt-15'>Add Institute Details</h6>
         <TextArea rows={4} showCount maxLength={100} placeholder='Brielfy explain the details' />

         <Divider><label> Add Institute Complete Profile </label></Divider>
         <Link to='/Institute/Reg' target="_blank">
         <Button type="default" block>
       Register Institiute 
       </Button>
       </Link> 

         <h6 className='Title mtt-15'>Teaching Medium Institute</h6>
         <Input  type='text'/>
         <h6 className='Title mtt-15'>Teaching Medium Institue Web Address</h6>
         <Input  type='text'/>
         <h6 className='Title mtt-15'>Add Institute Details</h6>
 <TextArea rows={4} showCount maxLength={100} placeholder='Brielfy explain the details' />

         <Divider><label> Add Institute Complete Profile </label></Divider>
         <Link to='/Institute/Reg' target="_blank">
         <Button type="default" block>
       Register Institiute 
       </Button>
       </Link>

       <h6 className='Title mtt-15'> Duration</h6>
         <Input  type='number'/>
         <h6 className='Title mtt-15'> Duration For</h6>
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

  <h6 className='Title mtt-15'> Hours Per week</h6>
         <Input  type='number'/>

         <h6 className='Title mtt-15'> Total Cost</h6>
         <Input  type='number'/>

         <h6 className='Title mtt-15'> Currency</h6>
         <Select
    style={{ width: '100%' }}
   
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
         <Input  type='number'/>

         <h6 className='Title mtt-15'> Financial Aid</h6>
         <Radio.Group name="radiogroup" defaultValue={'online'}>
    <Radio  value={'Yes'}>Yes</Radio>
    <Radio   value={'No'}>No</Radio>
  </Radio.Group>

  <h6 className='Title mtt-15'> Financial Aid Details </h6>
          <TextArea  rows={3} />
          <h6 className='Title mtt-15'>Starting Date </h6>
          <DatePicker  style={{width:'100%'}}  />
          <h6 className='Title mtt-15'> Application Deadline </h6>
          <DatePicker   style={{width:'100%'}}  />

          <h6 className='BlkTitle mtt-15'>Add Course Details  </h6>
  <hr className='hr-def mb-0'/>
  <Link to='/create/course' target="_blank">
         <Button className='mtt-10' type="default" block>
       Add Course
       </Button>
       </Link>

  <hr className='hr-def'/>
          <div className='text-center mtt-5'>
              <Button type='primary'> Submit </Button>
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