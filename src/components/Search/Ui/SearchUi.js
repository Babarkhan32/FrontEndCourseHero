import React from 'react';
import HeaderCont from '../../Header/Container/Header';
import style from '../Assets/Search.module.css';
import '../Assets/Search.css';
import CardUi from './CardUi';
import FiltersUi from './FiltersUi';
import DegreeCardUi from './DegreeCardUi';
import {Empty} from 'antd';
const SearchUi=(props)=>{
    return(
        <div className='MainCont'>
      <div className='PageWrapper'> 
<HeaderCont/>
<div className='container'>
    <div className='row'>
        <div className='col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3'>
<div className={style.FilterCont}>
<h6 className={style.Title}> Filters </h6>
<hr className='hr-def'/> 
<FiltersUi
 onSetOnline={props.onSetOnline}
 onSetOffline={props.onSetOffline}
 onSetSubject={props.onSetSubject}
 onSetCertificate={props.onSetCertificate}
 onSetNonCertificate={props.onSetNonCertificate}
 onSetAssociate={props.onSetAssociate}
 onSetBachelors={props.onSetBachelors}
 onSetMaster={props.onSetMaster}
 onSetPhd={props.onSetPhd}
 onSetPostDoc={props.onSetPostDoc}
 onSetCost={props.onSetCost}
 onSetDuration={props.onSetDuration}
 onSetCountry={props.onSetCountry}
 onSetLanguage={props.onSetLanguage}
 onSetCertificateCredit={props.onSetCertificateCredit}
/>
</div>
        </div>
        <div className='col-12 col-sm-9 col-md-9 col-lg-9 col-xl-9'>
      {
        props.data.length>0 ?
        props.data.map(course=>{
          console.log(course,"Rent wali garhi");
          return(
            
            course.isDegree? 
            <DegreeCardUi 
            SavedState={'Save'}
            AppliedState={'Apply'}
            compulsory={course.compulsory}
            online={course.online}
            totalCost={course.totalCost}
            courseName={course.courseName}
            country={course.courseCountry}
            startingdate={course.startingdate}
            course={course.course}
            courseSpecification={course.courseSpecification}
            facultyInfo={course.facultyInfo}
            language={course.courseLanguage}
            AppDeadline={course.endingDate}
            financialAid={course.financialAid}
            durationCrit={course.durationCrit}
            offline={course.offline}
            offlinetotal={course.offlinetotal}
            onlinetotal={course.onlinetotal}
            currency={course.currency}
            degreeOfferingInstitute={course.degreeOfferingInstitute}
            totalNumberCourses={course.totalNumberCourses}
            optional={course.optional}/>
            
            : !course.isDegree?
            <CardUi 
            SavedState={'Save'}
            type={course.type}
            AppliedState={'Apply'}
            currency={course.currency}
            Subject={course.courseName} 
            Dep={course.programSpecs}
            rev={course.totalCost} 
            uni={course.courseOfferingInstitute}
            rate={2}
            platform='Coursera' 
            facultyName={course.facultyName}
            country={course.courseCountry} 
            language={course.courseLanguage}
            cost={course.totalCost}
            courseSpecification={course.courseSpecification}
            aid={course.financialAid} deadline={course.endingDate} 
            date={course.startingDate} duration={course.duration}
            hoursPerWeek={course.hoursPerWeek} durationFor={course.durationFor} />
          :"")
        })
        :<div className='text-center mtt-10'><Empty/></div>
      }    
      
     
          
       {/* <br/>
       <CardUi Subject='Media Studies' Dep='(Personal Development)' rev='400' uni='Oxford University' rate={4} platform='Coursera' country=' Pakistan' cost='50000' aid='No' deadline=' 2020-08-01 ' date='2020-08-10'/>
     <br/>

       <CardUi Subject='Assembly Language' Dep='(Personal Development)' rev='50' uni='Oxford University' rate={3} platform='Coursera' country=' Pakistan' cost='50000' aid='No' deadline=' 2020-08-01 ' date='2020-08-10'/>
        <br/>
        <CardUi Subject='Human Computer Interaction' Dep='(Social Sciences)' rev='1000' uni='Satnford University' rate={5} platform='Coursera' country=' Pakistan' cost='100' aid='Yes' deadline=' 2020-08-01 ' date='2020-08-10'/>
  <br/>
  <CardUi Subject='Automata Theory' Dep='(Social Sciences)' rev='200' uni='Satnford University' rate={2} platform='Coursera' country=' Pakistan' cost='100' aid='Yes' deadline=' 2020-08-01 ' date='2020-08-10'/>
       <br/>
       <CardUi Subject='Media Studies' Dep='(Personal Development)' rev='400' uni='Oxford University' rate={4} platform='Coursera' country=' Pakistan' cost='50000' aid='No' deadline=' 2020-08-01 ' date='2020-08-10'/>
     <br/>

       <CardUi Subject='Assembly Language' Dep='(Personal Development)' rev='50' uni='Oxford University' rate={3} platform='Coursera' country=' Pakistan' cost='50000' aid='No' deadline=' 2020-08-01 ' date='2020-08-10'/>
        <br/>
        <CardUi Subject='Human Computer Interaction' Dep='(Social Sciences)' rev='1000' uni='Satnford University' rate={5} platform='Coursera' country=' Pakistan' cost='100' aid='Yes' deadline=' 2020-08-01 ' date='2020-08-10'/> */}
        </div>
    </div>
</div>
        </div>
        </div>
    )
}
export default SearchUi