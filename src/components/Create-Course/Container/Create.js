import React,{useState} from 'react';
import { withRouter } from 'react-router-dom';

import CreateUi from '../Ui/CreateUi';
import insertCourse from './../api/insertCourse';

const Create=(props)=>{
     const [courseType,setCourseType]=useState('');
   const [courseName,setCourseName]=useState('');
   const [courseOverView,setCourseOverView]=useState('');
   const [courseContent,setCourseContent]=useState('');
   const [faculty,setFaculty]=useState('');
   const [mode,setMode]=useState('');
   const [courseInfo,setCourseInfo]=useState('');
   const [courseCountry,setCourseCountry]=useState('');
   const [subjectCategory,setSubjectCategory]=useState('');
   const [courseOfferingInstitute,setCourseOfferingInstitute]=useState('');
    const [instituteWebAddress,setInstituteWebAddress]=useState('');
    const [mediumInstituteWebAddress,setMediumInstituteWebAddress]=useState('');
    const[mediumInstitute,setMediumInstitute]=useState('');
    const[duration,setDuration]=useState('');
    const [durationFor,setDurationFor]=useState('');
    const [hoursPerWeek,setHoursPerWeek]=useState('');
    const [totalCost,setTotalCost]=useState('');
    const [costBreakDown,setCostBreakDown]=useState('');
    const [financialAid,setFinancialAid]=useState('');
    const [financialAidDetails,setFinancialAidDetails]=useState('');
    const [startingDate,setStartingDate]=useState('');
    const [applicationDeadline,setApplicationDeadLine]=useState('');
    const [courseLanguage,setCourseLanguage]=useState('')
    const [currency,setCurrency]=useState('');
    

const onSubmit=()=>{

    if(courseType.length<1){
        alert("Please enter Course Type");
        return;
    }
    if(courseName.length<1){
        alert("Please enter Course Name");
        return;

    }
    if(courseOverView.length<1){
        alert("Please enter Course OverView");
        return;

    }
    if(courseContent.length<1){
        alert("Please enter Course Content");
        return;

    }
    if(faculty.length<1){
        alert("Please enter faculty");
        return;

    }
    if(mode.length<1){
        alert("Please enter mode");
        return;

    }
    if(courseInfo.length<1){
        alert("Please enter Course Info");
        return;

    }
    if(subjectCategory.length<1){
        alert("Please enter Subject Category");
        return;

    }
    if(courseCountry.length<1){
        alert("Please enter Course Country");
        return;

    }
    if(courseLanguage.length<1){
        alert("Please enter Course Language");
        return;

    }
    if(courseOfferingInstitute.length<1){
        alert("Please enter Course Offering institute");
        return;

    }
    if(instituteWebAddress.length<1){
        alert("Please enter Institute Web Address");
        return;

    }
    if(mediumInstitute.length<1){
        alert("Please enter medium Institute");
        return;

    }
    if(duration.length<1){
        alert("Please enter duration");
        return;

    }
    if(durationFor.length<1){
        alert("Please enter durationFor");
        return;

    }
    if(totalCost.length<1){
        alert("Please enter Total Cost");
        return;

    }
    if(currency.length<1){
        alert("Please enter Currency");
        return;

    }
    if(costBreakDown.length<1){
        alert("Please enter Course Break Down Details");
        return;

    }
    if(courseContent.length<1){
        alert("Please enter Course Content");
        return;

    }
    if(financialAid.length<1){
        alert("Please enter Financial Aid");
        return;

    }
    if(financialAidDetails.length<1){
        alert("Please enter Financial Aid Details");
        return;

    }
    if(startingDate.length<1){
        alert("Please enter starting date");
        return;

    }
    if(applicationDeadline.length<1){
        alert("Please enter application deadline");
        return;

    } if(hoursPerWeek.length<1){
        alert("Please enter hours per week");
        return;

    } if(mediumInstitute.length<1){
        alert("Please enter medium Institute");
        return;

    }
    if(applicationDeadline<startingDate){
        alert("Application deadline date is greater than starting date");
        return;
    }
    let data={
        type:courseType,
        name:courseName,
        courseOverView:courseOverView,
        courseContent:courseContent,
        teacher:faculty,
        mode:mode.target.value,
        courseInfo:courseInfo,
        subjectCategory:subjectCategory,
        courseCountry:courseCountry,
        courseLanguage:courseLanguage,
        institute:courseOfferingInstitute,
        instituteWebAddress:instituteWebAddress,
        mediumInstitute:mediumInstituteWebAddress,
        duration:duration,
        durationFor:durationFor,
        cost:totalCost,
        currency:currency,
        costBreakDown:costBreakDown,
        financialAid:financialAid.target.value,
        financialDetails:financialAidDetails,
        starting_date:startingDate,
        ending_date:applicationDeadline,
        hoursPerWeek:hoursPerWeek,
        mediumInstitute:mediumInstitute
        }
        console.log(data,"600")
                insertCourse(data).then(result=>{
                    console.log("Result",result);
                    alert("Course inserted Successfully")
                })
    }
   
 return(
        <CreateUi
        setCourseType={setCourseType}
        setCourseName={setCourseName}
        setCourseOverView={setCourseOverView}
        setCourseContent={setCourseContent}
        setFaculty={setFaculty}
        setMode={setMode}
        setCourseInfo={setCourseInfo}
        setCourseCountry={setCourseCountry}
        setSubjectCategory={setSubjectCategory}
        setCourseOfferingInstitute={setCourseOfferingInstitute}
        setInstituteWebAddress={setInstituteWebAddress}
        setMediumInstituteWebAddress={setMediumInstituteWebAddress}
        setDuration={setDuration}
        setDurationFor={setDurationFor}
        setHoursPerWeek={setHoursPerWeek}
        setTotalCost={setTotalCost}
        setCostBreakDown={setCostBreakDown}
        setFinancialAid={setFinancialAid}
        setFinancialAidDetails={setFinancialAidDetails}
        setStartingDate={setStartingDate}
        setApplicationDeadLine={setApplicationDeadLine}
        setHoursPerWeek={setHoursPerWeek}
        setCourseLanguage={setCourseLanguage}
        setCurrency={setCurrency}
        setMediumInstitute={setMediumInstitute}
        onSubmit={onSubmit}
        
    />
    )
}
export default withRouter(Create)