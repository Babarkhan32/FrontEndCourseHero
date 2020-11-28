import React from 'react';
import HeaderCont from '../../Header/Container/Header';
import {Input,Select,DatePicker,Upload,Button,Form} from 'antd';
import {InboxOutlined,  MinusCircleFilled, DeleteTwoTone, PlusOutlined } from '@ant-design/icons';
const {TextArea} = Input;
const { Option } = Select;

const selectBefore = (
  <Select defaultValue="$" className="select-before">
    <Option value="$">$</Option>
    <Option value="Pkr">Pkr</Option>
  </Select>
);

const normFile = e => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

const StudentRegUi=()=>{
    return(
        <div className='MainCont'>
        <div className='PageWrapper'> 
        <HeaderCont/>
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

  <h6 className='BlkTitle mtt-15'> Education History </h6>
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

      <h6 className='BlkTitle mtt-15'> Specify your study plan </h6>
  <hr className='hr-def mb-0'/>

  <h6 className='Title mtt-15'> Brief Study Proposal </h6>
  <TextArea rows={4} showCount maxLength={500} />

  <h6 className='Title'> Select Desired Program Type </h6>
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

        <h6 className='Title mtt-15'> Enter Desired Discipline/Subject  </h6>     
        <Input placeholder="Discipline Name" />  

        <h6 className='Title mtt-15'> Select Desired Mode   </h6> 
        <Select placeholder='Select Mode' allowClear style={{ width: '100%' }}  optionLabelProp="label">
      <Option value="Online" label='Online'>Online</Option>
      <Option value="Offline" label='Female'>Offline</Option>
      <Option value="Both" label='Both' >
      Other
      </Option>
    </Select>

    <h6 className='Title mtt-15'> Approximate Afforable Cost   </h6> 
    <Input addonBefore={selectBefore} placeholder='Cost' />


    <h6 className='Title mtt-15'> Preffered Country</h6>
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

  <h6 className='Title mtt-15'> Preffered City</h6>
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

    <h6 className='Title mtt-15'> Preffered Language</h6>
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


<div className='text-center mtt-10'>
<Button type='primary'> Submit </Button>
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
export default StudentRegUi