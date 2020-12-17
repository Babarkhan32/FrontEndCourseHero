import React from 'react';
import 'antd/dist/antd.css';
import {BrowserRouter as Router, Route, Switch,Redirect} from 'react-router-dom';
import Navbar from '../components/Navbar/Container/Navbar';
import Register from '../components/Register/Container/Register';
import Profile from '../components/Profile/Container/Profile';
import Create from '../components/Create-Course/Container/Create';
import Search from '../components/Search/Container/Search';
import RateUs from '../components/Rate-US/Container/RateUs';
import StudentRegistration from '../components/Student-Registration/Container/StudentRegistration';
import InstituteReg from '../components/Institute-Registration/Container/InstituteReg';
import FacultyReg from '../components/Faculty-Registration/Container/FacultyReg';
import CreateDegree from '../components/Create-Degree/Container/CreateDegree';
//routes

const Routes=()=>{

  
  function PrivateRoute({ children, ...rest }) {
    const token=localStorage.getItem('accessToken');
  
  
      return (
        <Route
          {...rest}
          render={({ location }) =>
        
            token ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: "/register",
                  state: { from: location }
                }}
              />
            )
          }
        />
      );
    }


    const isAuthenticated=()=>{
        let val=localStorage.getItem("accessToken");
        if(val){
            if(val.length===149){
                return true
            }else{
                return false
            }
        }else {
            return false
        }
        }
       isAuthenticated();
      return(
    <Router>
        <div>
       
<Navbar/>
 <Switch>
            <Route exact path='/' component={Search}/>
            <Route exact path='/register' component={Register}/>
<Route path="/profile"><Profile></Profile></Route>
<PrivateRoute  path='/create/course'><Create></Create></PrivateRoute>
<Route exact path='/search' component={Search}/>
<Route exact path='/Rate' component ={RateUs}/>
<Route exact path='/Student/Reg' component={StudentRegistration}/>
<Route exact path='/Institute/Reg' component={InstituteReg}/>
<Route exact path='/Faculty/Reg' component={FacultyReg}/>
<PrivateRoute exact path='/Create/Degree'><CreateDegree></CreateDegree></PrivateRoute>
</Switch>
        </div>
    </Router>
)







}

export default Routes