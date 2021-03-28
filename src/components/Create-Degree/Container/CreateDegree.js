import React, { useState } from 'react';
import CreateDegreeUi from '../UI/CreateDegreeUi';
import newDegree from './../apis/insertDegree';

const CreateDegree = () => {
  const [files, setFiles] = useState(null);
  const onFinish = async (values) => {
    console.log(values);

let facArray=[];

    facArray=values.facultyInfo?values.facultyInfo.map(item=>item.facultyAnother):[];
      facArray.unshift(values.facName)
      values.facultyInfo=facArray;
      values.status=1;
      values.owner_type=0;
    if (values.compulsory && values.compulsory.length > 0) {
      values.compulsory.push(values.compulsorySubject);
    } else {
      values.compulsory = [values.compulsorySubject]
    }

    if (values.course && values.course.length > 0) {
      values.course.push(values.coursename)
    } else {
      values.course = [values.coursename]
    }

    if (values.optional && values.optional.length > 0) {
      values.optional.push(values.optionalSubname)
    } else {
      values.optional = [values.optionalSubname]
    }

    if (values.online && values.online.length > 0) {
      values.online.push(values.onlinecoursename);
    } else {
      values.online = [values.onlinecoursename]
    }

    if (values.offline && values.offline.length > 0) {
      values.offline.push(values.offlinename)
    } else {
      values.offline = [values.offlinename]
    }
    
    values.imageSet = files;
    delete values.coursename;
    delete values.compulsorySubject;
    delete values.onlinecoursename;
    delete values.optionalSubname;
    delete values.offlinename;

    await newDegree(values).then(result => {
      console.log("Degree of babar khan ", result);
    })
  };

  return <CreateDegreeUi
    onFinish={onFinish}
    setFiles={setFiles}
    files={files}
  />
}
export default CreateDegree