import React, { useState } from "react";
import { Card, Modal, Rate, Button, Timeline } from "antd";
import moment from "moment";
const DegreeCardUi = ({
  courseName,
  totalCost,
  type,
  offlinetotal,
  totalNumberCourses,
  durationFrom,
  durationCrit,
  degreeType,
  hoursPerWeek,
  Dep,
  rev,
  uni,
  platform,
  country,
  cost,
  financialAid,
  AppDeadline,
  date,
  rate,
  language,
  course,
  facName,
  degreeOfferingInstitute,
  currency,
  startingdate,
  courseSpecification,
  online,
  offline,
  compulsory,
  optional,
  AppliedState,
  SavedState,
  onlinetotal,
  coursetotal,
  facultyInformation,
}) => {
  console.log(AppDeadline, "App Dead line");
  const [visible, setVisible] = useState(false),
    [courseList, setCourseList] = useState(false),
    [onlineList, setonlineList] = useState(false),
    [offlineList, setofflineList] = useState(false),
    [compulsoryList, setcompulsoryList] = useState(false),
    [optionalList, setoptionalList] = useState(false),
    showCourse = () => {
      setCourseList(true);
    },
    showCompulsory = () => {
      setcompulsoryList(true);
    },
    showOptional = () => {
      setoptionalList(true);
    },
    showModal = () => {
      setVisible(true);
    },
    handleOk = (e) => {
      console.log(e);
      setVisible(false);
    },
    hideCourse = () => {
      setCourseList(false);
    },
    hideOnline = () => {
      setonlineList(false);
    },
    hideOffline = () => {
      setofflineList(false);
    },
    hideCompulsory = () => {
      setcompulsoryList(false);
    },
    hideOptional = () => {
      setoptionalList(false);
    },
    handleCancel = (e) => {
      console.log(e);

      setVisible(false);
    };
  console.log("Course NAME", courseName);

  return (
    <div>
      <Card
        className="CourseCards"
        hoverable
        title={
          <div>
            <h6>
              {courseName}{" "}
              <label className="departmentLabel">{courseSpecification}</label>{" "}
            </h6>
          </div>
        }
        extra={
          <div>
            <label className="LinkedTitle"> {rev} Reviews </label>
            &nbsp; &nbsp; <Rate disabled defaultValue={3} />
          </div>
        }
        actions={[
          <Button type="primary"> Review </Button>,
          <Button type="primary"> {AppliedState}</Button>,
          <Button type="primary"> {SavedState} </Button>,
        ]}
      >
        <div className="row">
          <div className="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10">
            <label className="LinkedTitle">{degreeOfferingInstitute} </label>{" "}
            &nbsp; &nbsp; via &nbsp; &nbsp;{" "}
            <label className="LinkedTitle"> edx </label> &nbsp;{" "}
            <label className="smallLabel">-Masters </label>
          </div>

          <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
            <label
              className="LinkedTitle"
              style={{ textAlign: "right", float: "right" }}
            >
              {language}
            </label>
          </div>
        </div>

        <div className="row">
          <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 ">
            <label className="LabelTitle"> Duration: </label> &nbsp;{" "}
            <label className="LabelValue"> 2 Hour/W </label> &nbsp;{" "}
            <label className="LabelValue"> 2 Months </label>
          </div>
          <div className="col-7 col-sm-7 col-md-7 col-lg-7 col-xl-7 ">
            <label className="LabelTitle"> Courses: </label> &nbsp;{" "}
            <label className="LinkedCount" onClick={showCourse}>
              {" "}
              {totalNumberCourses}{" "}
            </label>
            &nbsp; <label className="smallLabel"> Compulsory</label> &nbsp;{" "}
            <label className="LinkedCount" onClick={showCompulsory}>
              {compulsory.length}{" "}
            </label>
            &nbsp; <label className="smallLabel">Optional</label> &nbsp;{" "}
            <label className="LinkedCount" onClick={showOptional}>
              {optional.length}{" "}
            </label>
          </div>
          <div className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
            <label className="LinkedTitle" onClick={showModal}>
              {" "}
              Faculty{" "}
            </label>
          </div>
        </div>
        <div className="row">
          <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
            <label className="LabelTitle"> Cost: </label> &nbsp; &nbsp; &nbsp;
            &nbsp;{" "}
            <label className="LabelValue">
              {" "}
              {totalCost}/{currency}{" "}
            </label>
          </div>
          <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
            <label className="LabelTitle"> Aid: </label> &nbsp; &nbsp; &nbsp;
            &nbsp; <label className="LabelValue"> {financialAid} </label>
          </div>
          <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
            <label className="LabelTitle">Location: </label>{" "}
            <label className="LabelValue">{country} </label>
          </div>
        </div>

        <div className="row">
          <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <label className="LabelTitle"> Application Deadline: </label> &nbsp;
            &nbsp; &nbsp; &nbsp;{" "}
            <label className="LabelValue">
              {moment(AppDeadline).format("MMMM Do, YYYY hh:mm A")}
            </label>
          </div>
          <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <label className="LabelTitle"> Start Date: </label> &nbsp; &nbsp;
            &nbsp; &nbsp;{" "}
            <label className="LabelValue">
              {" "}
              {moment(startingdate).format("MMMM Do, YYYY hh:mm A")}{" "}
            </label>
          </div>
          {/* <div className='col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3'> 
  <label className='LabelTitle'> Language: </label> &nbsp; &nbsp; &nbsp; &nbsp;  <label className='LabelValue'> {language} </label>
</div> */}
        </div>
      </Card>

      <br />
      <Modal
        title="Faculty"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={
          <Button type="primary" onClick={handleOk}>
            {" "}
            OK
          </Button>
        }
      >
        <Timeline>
          {facultyInformation &&
            facultyInformation.map((item) => {
              return (
                <div>
                  <Timeline.Item>
                    {" "}
                    <h6 className="ItemHeading">{item.facultyName} </h6>
                    <label className="ItemDesc">
                      {" "}
                      Faculty Introduction to be written here at this place{" "}
                    </label>
                  </Timeline.Item>
                </div>
              );
            })}
        </Timeline>
      </Modal>

      <Modal
        title="Courses"
        visible={courseList}
        onOk={hideCourse}
        onCancel={hideCourse}
        footer={
          <Button type="primary" onClick={hideCourse}>
            {" "}
            OK
          </Button>
        }
      >
        <Timeline>
          {course.map((course) => {
            return (
              <Timeline.Item>
                {" "}
                <h6 className="ItemHeading"> {course._courseName} </h6>
              </Timeline.Item>
            );
          })}
        </Timeline>
      </Modal>

      <Modal
        title="Online Courses"
        visible={onlineList}
        onOk={hideOnline}
        onCancel={hideOnline}
        footer={
          <Button type="primary" onClick={hideOnline}>
            {" "}
            OK
          </Button>
        }
      >
        {/* <Timeline>
          {online.map((online) => {
            return (
              <Timeline.Item>
                {" "}
                <h6 className="ItemHeading"> {online} </h6>
              </Timeline.Item>
            );
          })}
        </Timeline> */}
      </Modal>
      <Modal
        title="Offline Courses"
        visible={offlineList}
        onOk={hideOffline}
        onCancel={hideOffline}
        footer={
          <Button type="primary" onClick={hideOffline}>
            {" "}
            OK
          </Button>
        }
      >
        {/* <Timeline>
          {offline.map((offline) => {
            return (
              <Timeline.Item>
                {" "}
                <h6 className="ItemHeading"> {offline} </h6>
              </Timeline.Item>
            );
          })}
        </Timeline> */}
      </Modal>

      <Modal
        title="Compulsory Courses"
        visible={compulsoryList}
        onOk={hideCompulsory}
        onCancel={hideCompulsory}
        footer={
          <Button type="primary" onClick={hideCompulsory}>
            {" "}
            OK
          </Button>
        }
      >
        {compulsory.map((compulsory) => {
          return (
            <Timeline.Item>
              {" "}
              <h6 className="ItemHeading"> {compulsory} </h6>
            </Timeline.Item>
          );
        })}
      </Modal>

      <Modal
        title="Optional Courses"
        visible={optionalList}
        onOk={hideOptional}
        onCancel={hideOptional}
        footer={
          <Button type="primary" onClick={hideOptional}>
            {" "}
            OK
          </Button>
        }
      >
        <Timeline>
          {optional.map((optional) => {
            return (
              <Timeline.Item>
                {" "}
                <h6 className="ItemHeading"> {optional} </h6>
              </Timeline.Item>
            );
          })}
        </Timeline>
      </Modal>
    </div>
  );
};
export default DegreeCardUi;
