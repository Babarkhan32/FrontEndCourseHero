
import React,{useEffect,useState} from 'react';
import getSearchedCourses from '../../Search/api/getSearchedCourses';
import HeaderCont from '../../Header/Container/Header';
import { Layout,Menu } from 'antd';
import SavedCourses from './DashRoutes/SavedCourses';
import AppliedCourses from './DashRoutes/AppliedCourses';
import SavedDegree from './DashRoutes/SavedDegree';
import AppliedDegree from './DashRoutes/AppliedDegree';
import getCourses from '../../Search/api/getCourses';
import getNavSearch from '../../Search/api/getNavSearch';
import EnrolledCourses from './DashRoutes/EnrolledCourses';
import CompletedCourse from './DashRoutes/CompletedCourse';
import EnrolledDegree from './DashRoutes/EnrolledDegree';
import CompletedDegree from './DashRoutes/CompletedDegree';
import PresentCourse from './DashRoutes/PresentCourses';
import PreviousCourses from './DashRoutes/PreviousCourses';
import PresentDegree from './DashRoutes/PresentDegree';
import PreviousDegree from './DashRoutes/PreviousDegree';


const DashboardUi=(props)=>{

return(
<div className='MainCont'>
    <div className='PageWrapper'> 
      <HeaderCont/>
        <div className='container'>
          <div className='row'>
              <div className='col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 mb-5'>
              <Menu  mode="inline" defaultSelectedKeys='1'>
                  <h6 className='text-center mtt-5'> <b> Student  </b> </h6>
                  <hr className='hr-def mb-0'/>
                      <Menu.Item class="nav-link active" id="degree-applied" data-toggle="tab" href="#App-Degree" role="tab" aria-controls="App-Degree" aria-selected="true" key="1" >
                        Applied Degrees
                      </Menu.Item>
                        <Menu.Divider/>
                      <Menu.Item class="nav-link" id="course-applied" data-toggle="tab" href="#App-Courses" role="tab" aria-controls="App-Courses" aria-selected="false" key="2"  >
                        Applied Courses
                      </Menu.Item>
                        <Menu.Divider/>
                      <Menu.Item class="nav-link" id="degree-saved" data-toggle="tab" href="#Sav-Degrees" role="tab" aria-controls="Sav-Degrees" aria-selected="false" key="3" >
                        Saved Degrees
                      </Menu.Item>
                          <Menu.Divider/>
                      <Menu.Item class="nav-link" id="course-saved" data-toggle="tab" href="#Sav-Courses" role="tab" aria-controls="Sav-Courses" aria-selected="false" key="4"  >
                        Saved Courses
                      </Menu.Item>
                        <Menu.Divider/>
                      <Menu.Item class="nav-link" id="degree-enrolled" data-toggle="tab" href="#Enrolled-Degrees" role="tab" aria-controls="Enrolled-Degrees" aria-selected="false" key="5"  >
                        Enrolled Degrees
                      </Menu.Item>
                        <Menu.Divider/>
                      <Menu.Item class="nav-link" id="course-enrolled" data-toggle="tab" href="#Enrolled-Courses" role="tab" aria-controls="Enrolled-Courses" aria-selected="false" key="6"  >
                        Enrolled Courses
                      </Menu.Item>
                          <Menu.Divider/>
                      <Menu.Item class="nav-link" id="degree-completed" data-toggle="tab" href="#Completed-Degrees" role="tab" aria-controls="Completed-Degrees" aria-selected="false" key="7"  >
                        Completed Degrees
                      </Menu.Item>
                          <Menu.Divider/>
                      <Menu.Item class="nav-link" id="course-completed" data-toggle="tab" href="#Completed-Courses" role="tab" aria-controls="Completed-Courses" aria-selected="false" key="8"  >
                        Completed Courses
                      </Menu.Item>
                        <Menu.Divider/>
                      <Menu.Item class="nav-link" id="profile" data-toggle="tab" href="#profile-Tab" role="tab" aria-controls="profile-Tab" aria-selected="false" key="9"  >
                      Edit Profile
                      </Menu.Item>
                        <Menu.Divider/>

                  <h6 className='text-center mtt-5'> <b> Teacher  </b> </h6>
                  <hr className='hr-def mb-0'/>

                      <Menu.Item class="nav-link" id="degree-applied" data-toggle="tab" href="#App-Degree" role="tab" aria-controls="App-Degree" aria-selected="true" key="10" >
                        Applied Degrees
                      </Menu.Item>
                        <Menu.Divider/>
                      <Menu.Item class="nav-link" id="course-applied" data-toggle="tab" href="#App-Courses" role="tab" aria-controls="App-Courses" aria-selected="false" key="11"  >
                        Applied Courses
                      </Menu.Item>
                        <Menu.Divider/>
                      <Menu.Item class="nav-link" id="degree-saved" data-toggle="tab" href="#Sav-Degrees" role="tab" aria-controls="Sav-Degrees" aria-selected="false" key="12" >
                        Saved Degrees
                      </Menu.Item>
                        <Menu.Divider/>
                      <Menu.Item class="nav-link" id="course-saved" data-toggle="tab" href="#Sav-Courses" role="tab" aria-controls="Sav-Courses" aria-selected="false" key="13"  >
                        Saved Courses
                      </Menu.Item>
                          <Menu.Divider/>
                      <Menu.Item class="nav-link" id="course-previous" data-toggle="tab" href="#Previous-Courses" role="tab" aria-controls="Previous-Courses" aria-selected="false" key="14"  >
                        Previous Courses
                      </Menu.Item>
                        <Menu.Divider/>
                      <Menu.Item class="nav-link" id="course-present" data-toggle="tab" href="#Present-Courses" role="tab" aria-controls="Present-Courses" aria-selected="false" key="15"  >
                        Present Courses
                      </Menu.Item>
                          <Menu.Divider/>
                      <Menu.Item class="nav-link" id="degree-present" data-toggle="tab" href="#Present-Degrees" role="tab" aria-controls="Present-Degrees" aria-selected="false" key="16"  >
                        Present Degrees
                      </Menu.Item>
                        <Menu.Divider/>
                      <Menu.Item class="nav-link" id="degree-previous" data-toggle="tab" href="#Previous-Degrees" role="tab" aria-controls="Present-Degrees" aria-selected="false" key="17"  >
                        Previous Degrees
                      </Menu.Item>
                          <Menu.Divider/>
                      <Menu.Item class="nav-link" id="profile" data-toggle="tab" href="#profile-Tab" role="tab" aria-controls="profile-Tab" aria-selected="false" key="18"  >
                      Edit Profile
                      </Menu.Item>
                          <Menu.Divider/>

                  <h6 className='text-center mtt-5'> <b> Institute  </b> </h6>
                  <hr className='hr-def mb-0'/>
                </Menu>
            
              </div>

              <div className='col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9'>
                  <Layout>

                    <div class="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
                      <div class="tab-pane fade show active" id="App-Degree" role="tabpanel" aria-labelledby="degree-applied">
                          <AppliedDegree />
                      </div>
                      <div class="tab-pane fade " id="App-Courses" role="tabpanel" aria-labelledby="course-applied">
                          <AppliedCourses/>
                      </div>
                      <div class="tab-pane fade" id="Sav-Degrees" role="tabpanel" aria-labelledby="degree-saved">
                          <SavedDegree/>
                      </div>
                      <div class="tab-pane fade" id='Sav-Courses' role="tabpanel" aria-labelledby="course-saved">
                          <SavedCourses/>
                      </div>
                      <div class="tab-pane fade" id='Enrolled-Degrees' role="tabpanel" aria-labelledby="degree-enrolled">
                     <EnrolledDegree/>
                      </div>
                      <div class="tab-pane fade" id='Enrolled-Courses' role="tabpanel" aria-labelledby="course-enrolled">
                     <EnrolledCourses/>
                      </div>
                      <div class="tab-pane fade" id='Completed-Degrees' role="tabpanel" aria-labelledby="degree-completed">
                      <CompletedDegree/>
                      </div>
                      <div class="tab-pane fade" id='Completed-Courses' role="tabpanel" aria-labelledby="course-completed">
                     <CompletedCourse/>
                      </div>
                      <div class="tab-pane fade" id='profile-Tab' role="tabpanel" aria-labelledby="profile">
                      Profile Needs to be integrated
                      </div>

                      <div class="tab-pane fade" id='Previous-Courses' role="tabpanel" aria-labelledby="course-previous">
                      <PreviousCourses/>
                      </div>

                      <div class="tab-pane fade" id='Present-Courses' role="tabpanel" aria-labelledby="course-present">
                      <PresentCourse/>
                      </div>

                      <div class="tab-pane fade" id='Present-Degrees' role="tabpanel" aria-labelledby="degree-present ">
                     <PresentDegree/>
                      </div>

                      <div class="tab-pane fade" id='Previous-Degrees' role="tabpanel" aria-labelledby="degree-previous ">
                     <PreviousDegree/>
                      </div>
                    </div>
                  
                  </Layout>
                </div>
          </div>
        </div>
    </div>
</div>)}

export default DashboardUi