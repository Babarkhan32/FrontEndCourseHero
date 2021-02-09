import React, { useState } from "react";
import insertFaculty from "../apis/insertFaculty";
import FacultyRegUi from "../Ui/FacultyRegUi";

const FacultyReg = () => {
  const onFinish = (values) => {
    let degreeObj = {
      Degrees: values.degrees,
      DegreeInstitute: values.degreeFrom,
      year: values.degreePassingYear, 
      degreeType: values.degreeType,
    };

    let coursesTaughtObj = {
      CourseDetails: values.coursesDetails,
      courseinstitute: values.CourseTaughtinstitute,
      courseName: values.CourseName,
    };

    let history = {
      Position: values.previousPoistion,
      EmploymentInstitute: values.Previousinstitute,
      EmploymentRange: values.timePeriod,
    };
    if (values.DegreeDetails && values.DegreeDetails.length > 0) {
      values.DegreeDetails.push(degreeObj);
    } else {
      values.DegreeDetails = [degreeObj];
    }
    if (values.Expertise && values.Expertise.length > 0) {
      values.Expertise.push(values.Areaofexpertise);
    } else {
      values.Expertise = [values.Areaofexpertise];
    }
    if (values.courseTaughtList && values.courseTaughtList.length > 0) {
      values.courseTaughtList.push(coursesTaughtObj);
    } else {
      values.coursesTaughtList = [coursesTaughtObj];
    }
    if (values.empHistory && values.empHistory.length > 0) {
      values.empHistory.push(history);
    } else {
      values.empHistory = [history];
    }
   
    values.imageSet = fileList;
  
    delete values.degrees;
    delete values.degreeFrom;
    delete values.degreePassingYear;
    delete values.degreeType;


    delete values.Areaofexpertise;
    delete values.previousPosition;
    delete values.EmploymentHistoryInstitute;
    delete values.timePeriod;


    delete values.CourseName;
    delete values.CourseTaughtinstitute;
    delete values.coursesDetails;

    console.log(values);
    insertFaculty(values).then(result => {
      console.log(result);
    })

  };

  const [fileList, setFileList] = useState(null);

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    console.log(newFileList);
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
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


  return (
    <FacultyRegUi
      onFinish={onFinish}
      onPreview={onPreview}
      onChange={onChange}
      fileList={fileList}
      setFileList={setFileList}
    />
  );
};
export default FacultyReg;
