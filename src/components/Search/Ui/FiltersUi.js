import React from 'react';
import style from '../Assets/Search.module.css';
import { Card,Checkbox,Select,Input} from 'antd';
const { Option } = Select;


 
const FiltersUi=(props)=>{
  function handleChange(value) {
   props.onSetSubject(value)
  }

  function handleLanguageChange(value) {
    props.onSetLanguage(value);
  }

  function handleCountryChange(value) {
    props.onSetCountry(value);
  }
    return(
<div>
    <Card className={style.FilterCard} size="small" title="Single Course" >
     <Checkbox  onChange={(e)=>props.onSetCertificate(e.target)}> Certificate </Checkbox>
     <br/>
     <Checkbox  onChange={(e)=>props.onSetNonCertificate(e.target)}> Non-Certificate</Checkbox>
     <br/>
     <Checkbox onChange={(e)=>props.onSetCertificateCredit(e.target)}> Credit</Checkbox>
     <br/>
     <Checkbox > Non-Credit</Checkbox>
    </Card>

    <Card className={style.FilterCard} size="small" title="Degree" >
     <Checkbox onChange={(e)=>props.onSetAssociate(e.target)} > Associate's </Checkbox>
     <br/>
     <Checkbox onChange={(e)=>props.onSetBachelors(e.target)}> Bachelor's</Checkbox>
     <br/>
     <Checkbox onChange={(e)=>props.onSetMaster(e.target)}>Master's</Checkbox>
     <br/>
     <Checkbox onChange={(e)=>props.onSetPhd(e.target)}>PHD</Checkbox>
     <br/>
     <Checkbox onChange={(e)=>props.onSetPostDoc(e.target)}>Post Doc</Checkbox>
    </Card>

    <Card className={style.FilterCard} size="small" title="Mode" >
     <Checkbox onChange={(e)=>{props.onSetOffline(e.target)}}> Offline</Checkbox>
     <br/>
     <Checkbox onChange={(e)=>props.onSetOnline(e.target)}> Online</Checkbox>
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
    onChange={handleLanguageChange}
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
    onChange={handleCountryChange}
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

    <Card className={style.FilterCard} size="small" title="City" >
     <Select
    style={{ width: '100%' }}
    optionLabelProp="label"
  >
    <Option value="Islamabad" label="Islamabad">
      
    Islamabad
      
    </Option>
    <Option value="Peshawar" label="Peshawar">
    Peshawar
      
    </Option>
    <Option value="Wah Cantt" label="Wah Cantt">
     
    Wah Cantt
    
    </Option>
    <Option value="Rawalpindi" label="Rawalpindi">
      
    Rawalpindi
      
    </Option>
  </Select>
    </Card>

 
    <Card className={style.FilterCard} size="small" title="Cost" >
    <Checkbox> Free </Checkbox>
    <br/>
     <Input onChange={(e)=>props.onSetCost(e.target.value)}placeholder='Cost Upto' type='number' className='mtt-5'/> 
     <label className='mtt-10'> Curreny Type </label>
     <br/>

     <Select
    style={{ width: '100%' }}
    optionLabelProp="label"
  >
    <Option value=" Dollar ($)" label=" Dollar ($)">
 Dollar ($)
      
    </Option>
    <Option value="PKR (Rs)" label="PKR (Rs)">
PKR (Rs)
      
    </Option>
    <Option value="Riyal (SAR)" label="Riyal (SAR)">
     
    Riyal (SAR)
    
    </Option>
    <Option value="Renminbi (¥)" label="Renminbi (¥)">
      
    Renminbi (¥)
      
    </Option>
  </Select>
    </Card>
    <Card className={style.FilterCard} size="small" title="Duration" >
     <label> Upto (Months) </label>
     <br/>
     <Input onChange={(e)=>props.onSetDuration(e.target.value)} placeholder='Months' type='number'/> 
    </Card>

</div>
    )
}
export default FiltersUi