import React from 'react'
import HeaderCont from '../../Header/Container/Header';
import {Input,Checkbox,Select,Radio,Button,DatePicker,Upload, Form} from 'antd';
import {InboxOutlined,  MinusCircleTwoTone, PlusOutlined } from '@ant-design/icons';
const { Option } = Select;
const { TextArea } = Input;


const normFile = e => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };
const InstituteRegUi=()=>{
    return(
        <div className='MainCont'>
        <div className='PageWrapper'> 
<HeaderCont/>
   
  <div className='container'>
  <div className='row'>
      <div className='col-1 col-sm-1 col-md-2 col-lg-2 col-xl-2'></div>
      <div className='col-10 col-sm-10 col-md-8 col-lg-8 col-xl-8'>
      <div className="card">
    <div className="card-header">Institute Registration</div>
    <div className="card-body">
        <div className='row'>
        <div className='col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
        <div className='col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10'>
        <Form name="dynamic_form_nest_item" autoComplete="off">
        <h6 className='Title'> Institute Type</h6>
          
          <Select
    style={{ width: '100%' }}
    optionLabelProp="label"
  >
    <Option value="University" label="University">
      
    University
      
    </Option>
    <Option value="College" label="College">
     
    College
      
    </Option>
    <Option value="School" label="School">
     
    School
    
    </Option>
  </Select>

  <h6 className='Title mtt-15'> Institute Name</h6>
          <Input type='text'/>

          <h6 className='Title mtt-15'> Institute Mode</h6>
          
          <Select
    style={{ width: '100%' }}
    optionLabelProp="label"
  >
    <Option value="Individual" label="Individual">
      
    Individual
      
    </Option>
    <Option value="Institution" label="Institution">
     
    Institution
      
    </Option>
   
  </Select>


  <h6 className='Title mtt-15'> Web Address </h6>
    <Input type='text' name='Website'/>

  <h6 className='Title mtt-15'> Email Address </h6>
    <Input type='text' name='Email'/>

    <h6 className='Title mtt-15'> Phone Number </h6>
    <Input type='text' name='Phone Number'/>

    <h6 className='Title mtt-15'> Whatsapp Number </h6>
    <Input type='text' name='Whatsapp Number'/>

    <h6 className='Title mtt-15'> Institute Address </h6>
    <Input type='text' name='Address'/>

    <h6 className='Title mtt-15'> Upload Pictures </h6>
        <Upload.Dragger name="files" action="/upload.do" listType="picture">
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
          </Upload.Dragger>

          <h6 className='Title mtt-15'> List of Campuses </h6>
          <Input placeholder="campus name"  />
          <Form.List name="campuses">
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
                      message: "Please input campus's name or delete this field.",
                    },
                  ]}
                >
                  <Input placeholder="campus name"  />
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
                Add another campus
              </Button>
             
              <Form.ErrorList errors={errors} />
            </div>
          </>
        )}
      </Form.List>
    
    
      <h6 className='Title mtt-15'> List of Departments </h6>
          <Input placeholder="department name"  />
          <Form.List name="department">
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
                      message: "Please input department's name or delete this field.",
                    },
                  ]}
                >
                  <Input placeholder="department name"  />
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
                Add another department
              </Button>
             
              <Form.ErrorList errors={errors} />
            </div>
          </>
        )}
      </Form.List>
    

      <h6 className='Title mtt-15'> List of Programs </h6>
          <Input placeholder="program name"  />
          <Form.List name="program">
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
                      message: "Please input program's name or delete this field.",
                    },
                  ]}
                >
                  <Input placeholder="program name"  />
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
                Add another program 
              </Button>
             
              <Form.ErrorList errors={errors} />
            </div>
          </>
        )}
      </Form.List>
    
    
      <h6 className='Title mtt-15'> List of Faculty </h6>
          <Input placeholder="faculty name"  />
          <Form.List name="faculty">
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
                      message: "Please input faculty's name or delete this field.",
                    },
                  ]}
                >
                  <Input placeholder="faculty name"  />
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
                Add another faculty
              </Button>
             
              <Form.ErrorList errors={errors} />
            </div>
          </>
        )}
      </Form.List>
    
    
      <h6 className='Title mtt-15'> Student Facilitation </h6>
  <TextArea rows={4} showCount maxLength={100} />

  <h6 className='Title'> Mark of Distinction </h6>
  <TextArea rows={4} showCount maxLength={1000} placeholder='What is different about your institution?' />


      <div className='mtt-10 text-center'>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
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
    )
}


export default InstituteRegUi