import React from 'react';
import style from '../Assets/Search.module.css';
import { Card,Checkbox,Select,Input} from 'antd';
const { Option } = Select;

function handleChange(value) {
    console.log(`selected ${value}`);
  }
 
const FiltersUi=()=>{
    return(
<div>
<Card className={style.FilterCard} size="small" title="Mode" >
     <Checkbox> Offline</Checkbox>
     <br/>
     <Checkbox> Online</Checkbox>
    </Card>

    <Card className={style.FilterCard} size="small" title="Course" >
     <Checkbox> Certificate </Checkbox>
     <br/>
     <Checkbox> Non-Certificate</Checkbox>
     <br/>
     <Checkbox> Certificate/Credit</Checkbox>
    </Card>

    <Card className={style.FilterCard} size="small" title="Degree" >
     <Checkbox> Associate's </Checkbox>
     <br/>
     <Checkbox> Bachelor's</Checkbox>
     <br/>
     <Checkbox>Master's</Checkbox>
     <br/>
     <Checkbox>Post Doc</Checkbox>
     <br/>
     <Checkbox>PHD</Checkbox>
    </Card>

    <Card className={style.FilterCard} size="small" title="Subject" >
     <Select
    style={{ width: '100%' }}
    onChange={handleChange}
    optionLabelProp="label"
  >
    <Option value="Automata" label="Automata">
      
    Automata
      
    </Option>
    <Option value="Data Sciences" label="Data Sciences">
     
    Data Sciences
      
    </Option>
    <Option value="Assembly Language" label="Assembly Language">
     
    Assembly Language
    
    </Option>
    <Option value="HCI" label="HCI">
      
    Human Computer Interation
      
    </Option>
  </Select>
    </Card>

    <Card className={style.FilterCard} size="small" title="Language" >
     <Select
    style={{ width: '100%' }}
    onChange={handleChange}
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
    <Option value="Malay" label="Malay">
      
Malay
      
    </Option>
  </Select>
    </Card>
    <Card className={style.FilterCard} size="small" title="University/Institute" >
    <Input type='text' placeholder='Institute'/>
    </Card>
    <Card className={style.FilterCard} size="small" title="Country" >
     <Select
    style={{ width: '100%' }}
    onChange={handleChange}
    optionLabelProp="label"
  >
    <Option value="China" label="China">
      
    China
      
    </Option>
    <Option value="Pakistan" label="Pakistan">
Pakistan
      
    </Option>
    <Option value="Saudi Arabia" label="Saudi Arabia">
     
    Saudi Arabia
    
    </Option>
    <Option value="Australia" label="Australia">
      
    Australia
      
    </Option>
  </Select>
    </Card>
    <Card className={style.FilterCard} size="small" title="Cost" >
    <Checkbox> Free </Checkbox>
    <br/>
     <Input placeholder='Cost Upto' type='number' className='mtt-5'/> 
    </Card>
    <Card className={style.FilterCard} size="small" title="Duration" >
     <label> Upto (Months) </label>
     <br/>
     <Input placeholder='Months' type='number'/> 
    </Card>

</div>
    )
}
export default FiltersUi