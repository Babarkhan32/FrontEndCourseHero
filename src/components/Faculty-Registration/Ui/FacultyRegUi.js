import React from 'react';
import HeaderCont from '../../Header/Container/Header';
import {Input,Select,DatePicker,Upload,Button,Form,Radio} from 'antd';
import {InboxOutlined,  MinusCircleTwoTone, DeleteTwoTone, PlusOutlined } from '@ant-design/icons';
const {TextArea} = Input;
const { Option } = Select;
const { RangePicker } = DatePicker;

const normFile = e => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };
const FacultyRegUi=()=>{
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
      <Form name="dynamic_form_nest_item" autoComplete="off">
      <h6 className='Title'> Name</h6>
      <Input type='text' name='Name'/>

      <h6 className='Title mtt-15'> Gender</h6>
      <Select placeholder='Select Gender' allowClear style={{ width: '100%' }}  optionLabelProp="label">
      <Option value="Male" label='Male'>Male</Option>
      <Option value="Female" label='Female'>Female</Option>
      <Option value="Other" label='Other' >
      Other
      </Option>
    </Select>


    <h6 className='Title mtt-15'> Date of Birth </h6>
    <DatePicker  style={{width:'100%'}}  />

    <h6 className='Title mtt-15'> Email Address </h6>
    <Input type='text' name='Email'/>

    <h6 className='Title mtt-15'> Phone Number </h6>
    <Input type='text' name='Phone Number'/>

    <h6 className='Title mtt-15'> Whatsapp Number </h6>
    <Input type='text' name='Whatsapp Number'/>

    <h6 className='Title mtt-15'> Permanent Address </h6>
    <Input type='text' name='Address'/>

    <h6 className='Title mtt-15'> Upload Picture </h6>
        <Upload.Dragger name="files" action="/upload.do" listType="picture">
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
          </Upload.Dragger>

    <h6 className='Title mtt-15'> Spoken Languages </h6>
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
       
  <h6 className='Title mtt-15'> Describe Yourself </h6>
  <TextArea rows={4} showCount maxLength={100} />

  <h6 className='BlkTitle mtt-15'>Education History</h6>
  <hr className='hr-def mb-0'/>
  <h6 className='Title mtt-15'>Degree Name </h6>
                  <Input placeholder="Degree Name" />
                  <h6 className='Title mtt-15'>Degree Type </h6>
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
  
  <h6 className='Title mtt-15'>Degree Institute </h6>
                     <Input placeholder="Degree Institute" />
                     <h6 className='Title mtt-15'>Passing Year </h6>
                     <DatePicker  style={{width:'100%'}}  />
                     
                     
      <Form.List name="users">
        {(fields, { add, remove }) => (
          <>
            {fields.map(field => (
              <div key={field.key} style={{ display: 'flex',flexDirection:'column', marginBottom: 8 }} align="baseline">
               
  <h6 className='BlkTitle mtt-15'> Add Degree Details </h6>
  <hr className='hr-def mb-0'/>
                <div
                  {...field}
                  name={[field.name, 'Degree']}
                  fieldKey={[field.fieldKey, 'Degree']}
                  rules={[{ required: true, message: 'Missing Degree' }]}
                >
                  <h6 className='Title mtt-15'>Degree Name </h6>
                  <Input placeholder="Degree Name" />
                </div>
                <div
                  {...field}
                  name={[field.name, 'type']}
                  fieldKey={[field.fieldKey, 'type']}
                  rules={[{ required: true, message: 'Missing type' }]}
                >
                     <h6 className='Title mtt-15'>Degree Type </h6>

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
                
                </div>

                <div
                  {...field}
                  name={[field.name, 'institute']}
                  fieldKey={[field.fieldKey, 'institute']}
                  rules={[{ required: true, message: 'Missing institute' }]}
                >
                     <h6 className='Title mtt-15'>Degree Institute </h6>
                     <Input placeholder="Degree Institute" />
                </div>

                <div
                  {...field}
                  name={[field.name, 'year']}
                  fieldKey={[field.fieldKey, 'year']}
                  rules={[{ required: true, message: 'Missing year' }]}
                >
                     <h6 className='Title mtt-15'>Passing Year </h6>
                     <DatePicker  style={{width:'100%'}}  />
                </div>

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
        <Button type="primary" >
          Save Degree
        </Button>
      </div>

      <h6 className='BlkTitle mtt-15'> Experience </h6>
  <hr className='hr-def mb-0'/>
  <h6 className='Title mtt-15'> Total Years of Experience</h6>
         <Input  type='number'/>

         <h6 className='Title mtt-15'> Area of Expertise</h6>
         <Input placeholder="Expertise"  />
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
                      <div
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
                  <Input placeholder="Course Name" />
                  <h6 className='Title mtt-15'>Course Details </h6>
                  <TextArea rows={4} showCount maxLength={100} />
                  <h6 className='Title'>Institute </h6>
                     <Input placeholder="Institute" />

                     <Form.List name="users">
        {(fields, { add, remove }) => (
          <>
            {fields.map(field => (
              <div key={field.key} style={{ display: 'flex',flexDirection:'column', marginBottom: 8 }} align="baseline">
               
  <h6 className='BlkTitle mtt-15'> Add Course Details </h6>
  <hr className='hr-def mb-0'/>
                <div
                  {...field}
                  name={[field.name, 'Course']}
                  fieldKey={[field.fieldKey, 'Course']}
                  rules={[{ required: true, message: 'Missing Course' }]}
                >
                  <h6 className='Title mtt-15'>Course Name </h6>
                  <Input placeholder="Course Name" />
                </div>
                <div
                  {...field}
                  name={[field.name, 'details']}
                  fieldKey={[field.fieldKey, 'details']}
                  rules={[{ required: true, message: 'Missing details' }]}
                >
                     <h6 className='Title mtt-15'>Course Details </h6>

                     <TextArea rows={4} showCount maxLength={100} />
                
                </div>

                <div
                  {...field}
                  name={[field.name, 'institute']}
                  fieldKey={[field.fieldKey, 'institute']}
                  rules={[{ required: true, message: 'Missing institute' }]}
                >
                     <h6 className='Title'>Institute </h6>
                     <Input placeholder="Institute" />
                </div>

                

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
         <Input  type='text'/>

         <h6 className='Title mtt-15'> Institute</h6>
         <Input  type='text'/>

         <h6 className='Title mtt-15'> Period From </h6>
         <DatePicker style={{width:'100%'}} />
         <hr className='hr-def mb-0'/>
         <h6 className='Title mtt-15'> Previous Position</h6>
         <Input  type='text'/>

         <h6 className='Title mtt-15'> Institute</h6>
         <Input  type='text'/>

         <h6 className='Title mtt-15'> Time Period </h6>
         <RangePicker style={{width:'100%'}} />


         <Form.List name="users">
        {(fields, { add, remove }) => (
          <>
            {fields.map(field => (
              <div key={field.key} style={{ display: 'flex',flexDirection:'column', marginBottom: 8 }} align="baseline">
               
  <h6 className='BlkTitle mtt-15'> Add Employment History </h6>
  <hr className='hr-def mb-0'/>
                <div
                  {...field}
                  name={[field.name, 'Position']}
                  fieldKey={[field.fieldKey, 'Position']}
                  rules={[{ required: true, message: 'Missing Position' }]}
                >
                  <h6 className='Title mtt-15'>Position</h6>
         <Input  type='text'/>
                </div>
               

                <div
                  {...field}
                  name={[field.name, 'institute']}
                  fieldKey={[field.fieldKey, 'institute']}
                  rules={[{ required: true, message: 'Missing institute' }]}
                >
                     <h6 className='Title'>Institute </h6>
                     <Input placeholder="Institute" />
                </div>

                <div
                  {...field}
                  name={[field.name, 'range']}
                  fieldKey={[field.fieldKey, 'range']}
                  rules={[{ required: true, message: 'Missing range' }]}
                >
                      <h6 className='Title mtt-15'> Time Period </h6>
         <RangePicker style={{width:'100%'}} />
                
                </div>

                

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
         <Input  type='text'/>

         <h6 className='Title mtt-15'> Are you available for free consultation to students?</h6>
         <Radio.Group name="radiogroup" defaultValue={'Yes'}>
    <Radio  value={'Yes'}>Yes</Radio>
    <Radio value={'No'}>No</Radio>
  </Radio.Group>

  <h6 className='Title mtt-15'> Please mention your preferable mode of consultation</h6>
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

  <hr className='hr-def'/>
          <div className='text-center mtt-5'>
              <Button  type='primary'> Submit </Button>
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