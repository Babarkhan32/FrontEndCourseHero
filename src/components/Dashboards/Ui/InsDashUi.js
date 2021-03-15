import React from 'react'
import HeaderCont from '../../Header/Container/Header';
import { Layout,Menu,Divider } from 'antd';
import Info from './InstituteMenu/Info';
import ContactDetails from './InstituteMenu/ContactDetails';
import InstitueGallery from './InstituteMenu/InstituteGallery';
import Distinction from './InstituteMenu/Distinction';
import StudentFacilitation from './InstituteMenu/StudentFacilitation';
import CampusList from './InstituteMenu/CampusList';
import ProgramList from './InstituteMenu/ProgramList';
import DepartmentList from './InstituteMenu/DepartmentList';
import FacultyList from './InstituteMenu/FacultyList';
import { Fragment } from 'react';

const InsDashUi=()=>{
    return(
      <Fragment>
      <HeaderCont/>
        <div className='MainCont'>
    <div className='PageWrapper'> 

        <div className='container'>
          <div className='row'>
              <div className='col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 mb-5'>
              <Menu  mode="inline" defaultSelectedKeys='1'>
              <h6 className='text-center mtt-5'> <b> Institute </b> </h6>
                  <hr className='hr-def mb-0'/>
                      <Menu.Item class="nav-link  active" id="Institute-Info" data-toggle="tab" href="#Info-Section" role="tab" aria-controls="Info-Section" aria-selected="true" key="1" >
                        Institute Info
                      </Menu.Item>
                        <Menu.Divider/>
                      
                      <Menu.Item class="nav-link" id="gallery" data-toggle="tab" href="#Gallery-Section" role="tab" aria-controls="Gallery-Section" aria-selected="false" key="3" >
                        Institute Gallery
                      </Menu.Item>
                          <Menu.Divider/>
                      <Menu.Item class="nav-link" id="distinction" data-toggle="tab" href="#Distinction-Section" role="tab" aria-controls="Distinction-Section" aria-selected="false" key="4"  >
                       Mark of Distinction
                      </Menu.Item>
                        <Menu.Divider/>
                      <Menu.Item class="nav-link" id="accounts" data-toggle="tab" href="#Accounts-Section" role="tab" aria-controls="Accounts-Section" aria-selected="false" key="5"  >
                      Accounts Section
                      </Menu.Item>
                         <Menu.Divider/>
                      <Menu.Item class="nav-link" id="facilitation" data-toggle="tab" href="#Student-Facilitation" role="tab" aria-controls="Student-Facilitation" aria-selected="false" key="6"  >
                      Student Faclitation
                      </Menu.Item>
                         <Menu.Divider/>
                      <Menu.Item class="nav-link" id="campus" data-toggle="tab" href="#Campus-List" role="tab" aria-controls="Campus-List" aria-selected="false" key="7"  >
                      Campus List
                      </Menu.Item>
                         <Menu.Divider/>
                      <Menu.Item class="nav-link" id="program" data-toggle="tab" href="#Program-List" role="tab" aria-controls="Program-List" aria-selected="false" key="8"  >
                      Program List
                      </Menu.Item>
                         <Menu.Divider/>
                      <Menu.Item class="nav-link" id="department" data-toggle="tab" href="#Department-List" role="tab" aria-controls="Department-List" aria-selected="false" key="9"  >
                      Department List
                      </Menu.Item>
                          <Menu.Divider/>
                      <Menu.Item class="nav-link" id="faculty" data-toggle="tab" href="#Faculty-List" role="tab" aria-controls="Faculty-List" aria-selected="false" key="10"  >
                      Faculty List
                      </Menu.Item>
                      <Menu.Divider/>
                      <Menu.Item class="nav-link" id="contact-details" data-toggle="tab" href="#Contact-Section" role="tab" aria-controls="Contact-Section" aria-selected="false" key="2"  >
                        Contact Details
                      </Menu.Item>
                      
                      </Menu>
                    </div>

                    <div className='col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9'>
                  <Layout style={{height:'auto'}}>

                    <div class="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
                      <div class="tab-pane fade show active" id="Info-Section" role="tabpanel" aria-labelledby="Institute-Info">
                          <Info/>
                      </div>
                      <div class="tab-pane fade " id="Contact-Section" role="tabpanel" aria-labelledby="contact-details">
                         <ContactDetails/>
                      </div>
                      <div class="tab-pane fade" id="Gallery-Section" role="tabpanel" aria-labelledby="gallery">
                          <InstitueGallery/>
                      </div>
                      <div class="tab-pane fade" id='Distinction-Section' role="tabpanel" aria-labelledby="distinction">
                          <Distinction/>
                      </div>
                      <div class="tab-pane fade" id='Accounts-Section' role="tabpanel" aria-labelledby="accounts">
                      <h6 className='SubTitle'> Account Details </h6>
                            <Divider/>
                      </div>

                      <div class="tab-pane fade" id='Student-Facilitation' role="tabpanel" aria-labelledby="facilitation">
                         <StudentFacilitation/>
                      </div>
                      
                      <div class="tab-pane fade" id='Campus-List' role="tabpanel" aria-labelledby="campus">
                        <CampusList/>
                      </div>
                      <div class="tab-pane fade" id='Program-List' role="tabpanel" aria-labelledby="program">
                       <ProgramList/>
                      </div>
                      <div class="tab-pane fade" id='Department-List' role="tabpanel" aria-labelledby="department">
                        <DepartmentList/>
                      </div>
                      <div class="tab-pane fade" id='Faculty-List' role="tabpanel" aria-labelledby="faculty">
                       <FacultyList/>
                      </div>
                      
                    </div>
                  
                  </Layout>
                  </div>
                    </div>
                    </div></div> </div>
      </Fragment>
    )
}


export default InsDashUi