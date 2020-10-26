import React from 'react';
import HeaderCont from '../../Header/Container/Header';
import style from '../Assets/Search.module.css';
import '../Assets/Search.css';
import CardUi from './CardUi';
import FiltersUi from './FiltersUi';

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
<FiltersUi/>
</div>
        </div>
        <div className='col-12 col-sm-9 col-md-9 col-lg-9 col-xl-9'>
      {
        props.data.length>0 ?
        props.data.map(course=>{
          return(
            <CardUi Subject={course.name} Dep={course.subjectCategory} rev='200' uni={course.institute}
            rate={2} platform='Coursera' country={course.courseCountry}
             cost={course.cost} aid='Yes' deadline={course.ending_date}  date={course.starting_date}/>
          )
        })
        :<div>"Nothing"</div>
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