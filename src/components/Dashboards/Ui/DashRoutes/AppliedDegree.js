import React from 'react';
import { Fragment } from 'react';
import DegreeCard from '../DegreeCard';

const AppliedDegree=()=>{
    return(
        <Fragment>
        <DegreeCard courseName={'Theory'} totalCost={'400/$'} type={'certifcate'} offlinetotal={3} totalNumberCourses={'8'}
    durationFrom={'duration start'} durationCrit={'end dur'} degreeType={'degree type'} hoursPerWeek={'20'} Dep={'CS'} rev={'3000'}
     uni={'uni'} platform={'academia'} country={'pak'} cost={'3000'} financialAid={'yes'} AppDeadline={'dead'} date={'23-09-2021'}
     rate={'5'} language={'English'} course={'course'} facName={'smith'} degreeOfferingInstitute={'offering ins'} currency={'3000'} startingdate={'starting'}
     courseSpecification={'sopecs'} online={'3'} offline={'4'} compulsory={'5'} optional={'6'} AppliedState={'Applied'} SavedState={'Save'} onlinetotal={'4'} 
     coursetotal={'10'} ApbtnStatus={'disabled'} SavStatus={'primary'}/>
        
        </Fragment>
    )
}


export default AppliedDegree