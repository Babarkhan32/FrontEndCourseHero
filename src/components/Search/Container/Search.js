import React,{useEffect,useState} from 'react'
import SearchUi from '../Ui/SearchUi'
import getCourses from './../api/getCourses';

const Search=()=>{

    const [data,setData]=useState([]);
    useEffect(()=>{
            getCourses().then(result=>{
                setData(result.data);
                console.log(result,"Result for era");
            })
    },[])
    return(
        <SearchUi
        data={data}/>
    )
}
export default Search