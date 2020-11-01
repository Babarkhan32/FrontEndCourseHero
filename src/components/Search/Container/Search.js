import React,{useEffect,useState} from 'react'
import getSearchedCourses from '../api/getSearchedCourses';
import SearchUi from '../Ui/SearchUi'
import getCourses from './../api/getCourses';

const Search=()=>{

    const [data,setData]=useState([]);
    const[online,setOnline]=useState('');
    const [offline,setOffline]=useState('');
    const [certificate,setCertificate]=useState('');
    const [nonCertificate,setNonCertificate]=useState('');
    const [certificateCredit,setCertificateCredit]=useState('');
    const [associate,setAssociate]=useState('');
    const [bachelor,setBachelor]=useState('');
    const [master,setMaster]=useState('');
    const [phd,setPhd]=useState('');
    const [postDoc,setPostDoc]=useState('');
    const [type,setType]=useState('');
    const [language,setLanguage]=useState('');
    const [country,setCountry]=useState('');
    const [subject,setSubject]=useState('');
    const [cost,setCost]=useState('');
    const [duration,setDuration]=useState('');
    const [university,setUniversity]=useState('');

    let query={
        online:online,
        offline:offline,
        certificate:certificate,
        nonCertificate:nonCertificate,
        associate:associate,
        bachelor:bachelor,
        master:master,
        phd:phd,
        postDoc:postDoc,
        language:language,
        country:country,
        subject:subject,
        cost:cost,
        duration:duration,
        university:university
    };

    const onSetOnline=(value)=>{

        console.log(value);


        
      if(value.checked==true){
        query.online='Online'
        setOnline('Online')
      }else{
        query.online=''
        setOnline('');
      };
      getSearchedCourses(query).then(result=>{
          if(result){
              
              setData(result.data);
          }
      })

   
     
    }
   const onSetCertificateCredit=(value)=>{
    if(value.checked==true){
        query.certificateCredit='Certificate/Credit'
        setCertificateCredit('Certificate/Credit');
      }else{
        query.certificateCredit=''
        setCertificateCredit('');

      }
      console.log(query);
      getSearchedCourses(query).then(result=>{
        if(result){
            console.log(result.data)
            setData(result.data);
        }
    })

    }
   
    const onSetCertificate=(value)=>{
        console.log(query);
        if(value.checked==true){
        query.certificate='Certificate'
        setCertificate('Certificate');
          
          }else{
            query.certificate=''
            setCertificate('');

          }
          getSearchedCourses(query).then(result=>{
            console.log(result.data)
            if(result){
                setData(result.data);
            }
    
        })
  

    }
    const onSetNonCertificate=(value)=>{
        console.log(query);
        if(value.checked==true){
        setNonCertificate('Non-Certificate');

        query.nonCertificate='Non-Certificate'
            
          }else{
              onSetNonCertificate('');
            query.nonCertificate=''

          }
          getSearchedCourses(query).then(result=>{
              
            console.log(result.data)
            if(result){
                setData(result.data);
            }
       
        })
  
    }
    const onSetAssociate=(value)=>{
        if(value.checked==true){
            query.associate='Associate'
            setAssociate('Associate')

          }else{
            query.associate=''
            setAssociate('')

          }
          getSearchedCourses(query).then(result=>{
            console.log(query);
            if(result){
                setData(result.data);
            }
        })
  
    }
    const onSetBachelors=(value)=>{
        if(value.checked==true){
            query.bachelor='Bachelor'
            setBachelor('Bachelor')

          }else{
            query.bachelor=''
            setBachelor('')


          }
          getSearchedCourses(query).then(result=>{
            if(result){
                setData(result.data);
            }
        })
  
    }
    const onSetMaster=(value)=>{
        if(value.checked==true){
            query.master='Master'
            setMaster('Master')

          }else{
            query.master=''
            setMaster('')

          }
          getSearchedCourses(query).then(result=>{
            if(result){
                setData(result.data);
            }
        })
  
    }
    const onSetPhd=(value)=>{
        if(value.checked==true){
            query.phd='PHD'
            setPhd('PHD')

          }else{
            query.phd=''
            setPhd('');
          }
          getSearchedCourses(query).then(result=>{
            if(result){
                setData(result.data);
            }
        })
  
    }
    const onSetPostDoc=(value)=>{
        if(value.checked==true){
            query.postDoc='PostDoc';
            setPostDoc('PostDoc')
            
          }else{
            query.postDoc='';
            setPostDoc('')

        }
        getSearchedCourses(query).then(result=>{
            if(result){
                setData(result.data);
            }
        })
  
    }
    const onSetOffline=(value)=>{
        if(value.checked==true){
            query.offline='Offline'
            setOffline('Offline')

          }else{
            query.offline=''
            setOffline('')

          }
          getSearchedCourses(query).then(result=>{
            console.log(result.data)
            if(result){
                setData(result.data);
            }
        })
  

    }
    const onSetLanguage=(value)=>{
        query.language=value
        getSearchedCourses(query).then(result=>{
            if(result){
                setData(result.data);
            }
        })
  

    }
    const onSetCountry=(value)=>{
       query.country=value;
       getSearchedCourses(query).then(result=>{
        if(result){
            setData(result.data);
        }
    })

    }
    const onSetCost=(value)=>{
       query.cost=value;
       getSearchedCourses(query).then(result=>{
        if(result){
            setData(result.data);
        }
    })

    }
    const onSetSubject=(value)=>{
     query.subject=value;
     getSearchedCourses(query).then(result=>{
        if(result){
            setData(result.data);
        }
    })

    }
    const onSetDuration=(value)=>{
      query.duration=value
      getSearchedCourses(query).then(result=>{
          if(result){
              setData(result.data)
          }
        console.log("Result",result);
    })

    }

    useEffect(()=>{
            getCourses().then(result=>{
                if(result){
                setData(result.data);
                console.log(result,"Result for era");
                }
            })
    },[])
    return(
        <SearchUi
         onSetOnline={onSetOnline}
         onSetOffline={onSetOffline}
        onSetSubject={onSetSubject}
        onSetCertificate={onSetCertificate}
        onSetNonCertificate={onSetNonCertificate}
        onSetAssociate={onSetAssociate}
        onSetBachelors={onSetBachelors}
        onSetMaster={onSetMaster}
        onSetPhd={onSetPhd}
        onSetPostDoc={onSetPostDoc}
        onSetCost={onSetCost}
        onSetDuration={onSetDuration}
        onSetCountry={onSetCountry}
        onSetLanguage={onSetLanguage}
        onSetCertificateCredit={onSetCertificateCredit}
        data={data}/>
    )
}
export default Search