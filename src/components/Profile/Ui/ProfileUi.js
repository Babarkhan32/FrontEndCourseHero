import React from 'react'
import HeaderCont from '../../Header/Container/Header';
import '../Assets/Profile.css';
import { Layout, Menu } from 'antd';



const ProfileUi=()=>{
    return(
        <div className='MainCont'>
          <div className='PageWrapper'> 
         <HeaderCont/>
         <div className='container'>
<div className='row'>
    <div className='col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 mb-5'>
    <Menu  mode="inline" defaultSelectedKeys='1'>
        <h6 className='text-center mtt-5'> Activity </h6>
        <hr className='hr-def mb-0'/>
        
        <Menu.Item class="nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true" key="1" >
     Saved Courses
        </Menu.Item>
        <Menu.Divider/>
        <Menu.Item class="nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false" key="2"  >
  Applied Courses
        </Menu.Item>
       
      </Menu>
    </div>
    <div className='col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9'>
    <Layout>
    
    <div class="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
    <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
				Saved Courses
					</div>
					<div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
					Applied Courses
					</div>
  
</div>
  </Layout>
        </div>
</div>
         </div>
        </div>
        </div>
    )
}
export default ProfileUi