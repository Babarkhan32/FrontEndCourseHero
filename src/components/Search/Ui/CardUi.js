import React, { useState } from "react";
import { Card, Modal, Rate, Button, Popover } from "antd";
import moment from "moment";

const CardUi = ({
  Subject,
  Dep,
  rev,
  uni,
  platform,
  country,
  cost,
  aid,
  deadline,
  date,
  rate,
  language,
  duration,
  durationFor,
  hoursPerWeek,
  courseSpecification,
  AppliedState,
  SavedState,
  facultyName,
  facultyInformation,
  currency,
  type,
}) => {
  const [visible, setVisible] = useState(false),
    showModal = () => {
      setVisible(true);
    },
    handleOk = (e) => {
      console.log(e);
      setVisible(false);
    },
    handleCancel = (e) => {
      console.log(e);

      setVisible(false);
    };

  return (
    <div>
      <Card
        className="CourseCards"
        hoverable
        title={
          <div>
            <h6>
              {Subject}{" "}
              <label className="departmentLabel">
                {" "}
                {Dep} / {type}
              </label>{" "}
            </h6>
          </div>
        }
        extra={
          <div>
            <label className="LinkedTitle"> {rev} Reviews </label>
            &nbsp; &nbsp; <Rate disabled defaultValue={rate} />
          </div>
        }
        actions={[
          <Button type="primary"> Review </Button>,
          <Button type="primary"> {AppliedState} </Button>,
          <Button type="primary"> {SavedState} </Button>,
        ]}
      >
        <div className="row">
          <div className="col-9 col-sm-9 col-md-9 col-lg-9 col-xl-9">
            <label className="LinkedTitle">{uni} </label> &nbsp; &nbsp; via
            &nbsp; &nbsp; <label className="LinkedTitle"> {platform} </label>
          </div>

          <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
            <label className="LinkedTitle">
              {courseSpecification}
              <label className="smallLabel">{courseSpecification} </label>{" "}
            </label>
          </div>
        </div>

        <div className="row">
          <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
            <label className="LabelTitle"> Duration: </label> &nbsp; &nbsp;
            &nbsp;{" "}
            <label className="LabelValue">
              {hoursPerWeek}/ {durationFor}{" "}
            </label>{" "}
            &nbsp; &nbsp;{" "}
            <label className="LabelValue">
              {" "}
              {duration}/ {durationFor}{" "}
            </label>
          </div>

          <div className="col-5 col-sm-5 col-md-5 col-lg-5 col-xl-5">
            <label className="LabelTitle"> Mode: </label> &nbsp; &nbsp; &nbsp;{" "}
            <label className="LabelValue"> Online </label>
          </div>
          {/* <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2'> 
  <label className='LabelTitle'> Courses: </label> &nbsp; &nbsp; &nbsp; &nbsp;  <label className='LinkedTitle'> 4 </label>
  </div> */}
          <Popover
            content={facultyInformation && facultyInformation[0].facultyName}
            placement="left"
            trigger="hover"
          >
            <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
              <label onClick={showModal} className="LinkedTitle">
                {" "}
                Faculty{" "}
              </label>
              {/* <label className='LabelTitle'> Online: </label> &nbsp; &nbsp; &nbsp; &nbsp;  <label className='LinkedTitle'> 3 </label> */}
            </div>
          </Popover>
        </div>

        {/* <div className='row'>
  <div className='col-5 col-sm-5 col-md-5 col-lg-5 col-xl-5'> 
    <label className='LabelTitle'> Degree: </label> &nbsp; &nbsp; &nbsp; &nbsp;  <label className='LabelValue'> Master's </label>
    </div>
    <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2'> 
    <label className='LinkedTitle' onClick={showModal}> Faculty </label> 
     </div>
  </div>
   */}

        <div className="row">
          <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
            <label className="LabelTitle"> Cost: </label> &nbsp; &nbsp; &nbsp;
            &nbsp;{" "}
            <label className="LabelValue">
              {" "}
              {currency} {cost}{" "}
            </label>
          </div>
          <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
            <label className="LabelTitle"> Aid: </label> &nbsp; &nbsp; &nbsp;
            &nbsp; <label className="LabelValue"> {aid} </label>
          </div>
          <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3"></div>

          <div className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
            <label className="LabelTitle">{country} </label>
          </div>

          <div className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
            <label className="LabelTitle">{""} </label>
          </div>
        </div>

        <div className="row">
          <div className="col-5 col-sm-5 col-md-5 col-lg-5 col-xl-5">
            <label className="LabelTitle"> Application Deadline: </label> &nbsp;
            &nbsp; &nbsp; &nbsp;{" "}
            <label className="LabelValue">
              {moment(deadline).format("MMMM Do, YYYY hh:mm A")}
            </label>
          </div>
          <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
            <label className="LabelTitle"> Start Date: </label> &nbsp; &nbsp;
            &nbsp; &nbsp;{" "}
            <label className="LabelValue">
              {" "}
              {moment(date).format("MMMM Do, YYYY hh:mm A")}{" "}
            </label>
          </div>
          <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
            <label className="LabelTitle"> Language: </label> &nbsp; &nbsp;
            &nbsp; &nbsp; <label className="LabelValue"> {language} </label>
          </div>
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
        <p>{facultyInformation && facultyInformation[0].facultyName}</p>
      </Modal>
    </div>
  );
};
export default CardUi;
