import React from 'react';
import CardUi from '../../../Search/Ui/CardUi';
import { Fragment } from 'react';
const SavedCourses=()=>{
    return(
        <Fragment>
        <CardUi 
        SavedState={'Saved'}
        AppliedState={'Apply'}
        Subject={'Theory of Automata'} 
        Dep={'Computer Science'}
        rev={'300'} 
        uni={'University of California'}
        rate={4}
        platform='Coursera' 
        country={'California'} 
        language={'English'}
        cost={'4000/$'}
        courseSpecification={'Certificate'}
        aid={'No'} deadline={'2021-12-21'} 
        date={'2020-12-15'} duration={'  2 Months'}
        hoursPerWeek={'2 Hour/W'} durationFor={' 7/ weeks  8/ weeks'}   />
      
      <br/>

      <CardUi 
        SavedState={'Saved'}
        AppliedState={'Apply'}
        Subject={'Theory of Automata'} 
        Dep={'Computer Science'}
        rev={'300'} 
        uni={'University of California'}
        rate={4}
        platform='Coursera' 
        country={'California'} 
        language={'English'}
        cost={'4000/$'}
        courseSpecification={'Certificate'}
        aid={'No'} deadline={'2021-12-21'} 
        date={'2020-12-15'} duration={'  2 Months'}
        hoursPerWeek={'2 Hour/W'} durationFor={' 7/ weeks  8/ weeks'}   />
      </Fragment>
    )
}

export default SavedCourses