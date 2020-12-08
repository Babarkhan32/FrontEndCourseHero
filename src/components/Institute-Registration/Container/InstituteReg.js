import React ,{useState} from 'react';
import InstituteRegUi from '../Ui/InstituteRegUi';
import insertInstitute from './../api/insertInstitute';
const InstituteReg=()=>{
    const [fileList, setFileList] = useState([]);
  
    const onFinish=(values)=>{
        values.imageSet=[];
        for(let i=0;i<fileList.length;i++){
      values.imageSet.push(fileList[i].originFileObj);
        }
      values.campuses.push(values.instituteCampus);
      values.department.push(values.instituteDepartments);
      values.program.push(values.institutePorgram);
      values.faculty.push(values.facultyList);


      
      delete values.facultyList;
      delete values.instituteCampus;
      delete values.instituteDepartments;
      delete values.instituteProgram;

      console.log("Success",values);

      insertInstitute(values).then(result=>{
          console.log(result);
      })
    }
    
    
    const onChange = ({ fileList: newFileList }) => {
      setFileList(newFileList);
      console.log(newFileList);
    };
    
    
    const onPreview = async file => {
      let src = file.url;
      if (!src) {
        src = await new Promise(resolve => {
          const reader = new FileReader();
          reader.readAsDataURL(file.originFileObj);
          reader.onload = () => resolve(reader.result);
        });
      }
      const image = new Image();
      image.src = src;
      const imgWindow = window.open(src);
      imgWindow.document.write(image.outerHTML);
    };
    
    
    return <InstituteRegUi
    onFinish={onFinish}
    onChange={onChange}
    onPreview={onPreview}
    fileList={fileList}
    />
}
export default InstituteReg