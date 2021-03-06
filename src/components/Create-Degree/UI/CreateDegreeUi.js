import React, { useCallback, useEffect } from "react";
import HeaderCont from "../../Header/Container/Header";
import { useDropzone } from "react-dropzone"; //added by sulaiman
import {
  Input,
  Select,
  Radio,
  Button,
  DatePicker,
  Form,
  message,
  Modal,
} from "antd";
import {
  PlusOutlined,
  DeleteTwoTone,
  MinusCircleTwoTone,
} from "@ant-design/icons";
import { Fragment, useState } from "react";
import Loader from "../../Loader/Loader";
import getTextField from "../../../generalHelpers/apis/getTextField";
const { Option } = Select;
const { TextArea } = Input;

const CreateDegreeUi = (props) => {
  const [countries, setCountries] = useState([]);
  const [getCurrencyList, setCurrencies] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [showTeachingMedium, setShowTeachingMedium] = useState(false);

  useEffect(() => {
    getTextField().then((result) => {
      let myCurrencies = result.data[0].currencies;
      console.log("My Currencies", myCurrencies);
      console.log("Here is somehting to check", result);
      if (result && result.data) {
        setCountries(result.data[0].countries);
        setCurrencies(result.data[0].currencies);
        setLanguages(result.data[0].languages);
      }
    });
  }, []);

  const currency = getCurrencyList.map((item, i) => (
    <Option key={i} value={[item[0]]}>
      {" "}
      {item[0]}
    </Option>
  ));
  //Cities

  /* Dropzone React*/

  let tempArr = props.files ? props.files : [];

  const onDrop = useCallback(
    (acceptedFiles) => {
      tempArr.push(acceptedFiles[0]);
      props.setFiles(tempArr.map((file) => file));
      if (acceptedFiles[0]) {
        message.success("File uploaded successfully.");
      } else {
        message.error("File uploading failed.");
      }

      console.log("filesArr", props.files);
    },
    [props, tempArr]
  );
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handlePreview = (file) => {
    if (file.type === "application/pdf") {
      Modal.info({
        title: file.name,
        okText: "Close",
        content: "No preview available for pdf files.",
      });
    } else {
      const reader = new FileReader();
      reader.onabort = () => message.warning("file reading was aborted.");
      reader.onerror = () => message.error("file reading failed");
      reader.onload = () => {
        Modal.info({
          title: file.name,
          okText: "Close",
          width: "60%",
          content: (
            <img
              alt=""
              src={reader.result}
              style={{ width: "100%", height: "100%" }}
            />
          ),
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDelete = (fileId) => {
    let filteredArr = tempArr.filter((item) => item.id !== fileId);
    tempArr = filteredArr;
    props.setFiles([...tempArr]);
  };

  return (
    <Fragment>
      <HeaderCont />
      {props.load ? (
        <Loader />
      ) : (
        <div className="MainCont">
          <div className="PageWrapper">
            <div className="container">
              <div className="row">
                <div className="col-1 col-sm-1 col-md-2 col-lg-2 col-xl-2"></div>
                <div className="col-10 col-sm-10 col-md-8 col-lg-8 col-xl-8">
                  <div className="card">
                    <div className="card-header">New Degree</div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1"></div>
                        <div className="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10">
                          <Form onFinish={props.onFinish} name="control-hooks">
                            <h6 className="Title mtt-15"> Degree Name</h6>

                            <Form.Item
                              name="courseName"
                              rules={[{ required: true }]}
                            >
                              <Input type="text" />
                            </Form.Item>
                            <h6 className="Title mtt-15">
                              {" "}
                              Degree Specification
                            </h6>
                            <Form.Item
                              name="courseSpecification"
                              rules={[{ required: true }]}
                            >
                              <Select
                                style={{ width: "100%" }}
                                optionLabelProp="label"
                              >
                                <Option
                                  value="Non Certificate"
                                  label="Non Certificate"
                                >
                                  Non Certificate
                                </Option>{" "}
                                <Option
                                  value="Single Course"
                                  label="Single Course"
                                >
                                  Single Course
                                </Option>
                                <Option value="Certificate" label="Certificate">
                                  Certificate
                                </Option>
                                <Option value="Associate" label="Associate">
                                  Associate
                                </Option>
                                <Option value="Bachelor's" label="Bachelor's">
                                  Bachelor's
                                </Option>
                                <Option value="Master's" label="Master's">
                                  Master's
                                </Option>
                                <Option value="PHD" label="PHD">
                                  PHD
                                </Option>
                                <Option value="Post Doc" label="Post Doc">
                                  Post Doc
                                </Option>
                              </Select>
                            </Form.Item>
                            {/* <h6 className="Title mtt-15">
                              {" "}
                              Select Degree Type{" "}
                            </h6>
                            <Form.Item
                              name="type"
                              rules={[{ required: false }]}
                            >
                              <Select placeholder="Select Course Type">
                                <Option value="Disciplinary">
                                  Disciplinary Course
                                </Option>
                                <Option value="Interdisciplinary">
                                  Interdisciplinary Course
                                </Option>
                              </Select>
                            </Form.Item> */}
                            {/* <Form.Item
                              noStyle
                              shouldUpdate={(prevValues, currentValues) =>
                                prevValues.type !== currentValues.type
                              }
                            >
                              {({ getFieldValue }) => {
                                return getFieldValue("type") ===
                                  "Interdisciplinary" ? (
                                  <div
                                    name="customizeType"
                                    rules={[{ required: false }]}
                                  >
                                    <h6 className="BlkTitle mtt-15">
                                      {" "}
                                      Enter Main Disciplinary Subject
                                    </h6>
                                    <Form.Item
                                      name="MainDisciplinary"
                                      rules={[{ required: false }]}
                                    >
                                      <Input type="text" />
                                    </Form.Item>
                                    <h6 className="BlkTitle mtt-15">
                                      {" "}
                                      Additional Subject
                                    </h6>
                                    <Form.Item
                                      name="AdditionalSubject1"
                                      rules={[{ required: false }]}
                                    >
                                      <Input type="text" />
                                    </Form.Item>
                                    <h6 className="BlkTitle mtt-15">
                                      Additional Subject
                                    </h6>
                                    <Form.Item
                                      name="AdditionalSubject2"
                                      rules={[{ required: false }]}
                                    >
                                      <Input type="text" />
                                    </Form.Item>
                                    <h6 className="BlkTitle mtt-15">
                                      {" "}
                                      Additional Subject
                                    </h6>
                                    <Form.Item
                                      name="AdditionalSubject3"
                                      rules={[{ required: false }]}
                                    >
                                      <Input type="text" />
                                    </Form.Item>

                                    <hr className="hr-def" />
                                  </div>
                                ) : getFieldValue("type") === "Disciplinary" ? (
                                  <div
                                    name="customizeType"
                                    rules={[{ required: false }]}
                                  >
                                    <h6 className="BlkTitle mtt-15">
                                      {" "}
                                      Enter Main Subject
                                    </h6>
                                    <Form.Item
                                      name="mainSubject"
                                      rules={[{ required: false }]}
                                    >
                                      <Input type="text" />
                                    </Form.Item>
                                    <hr className="hr-def" />
                                  </div>
                                ) : null;
                              }}
                            </Form.Item> */}

                            <h6 className="Title mtt-15">
                              {" "}
                              Degree Importance/Overview{" "}
                            </h6>
                            <Form.Item
                              name="degreeOverview"
                              rules={[{ required: false }]}
                            >
                              <TextArea
                                rows={4}
                                showCount
                                maxLength={100}
                                placeholder="Brielfy explain the degree overview"
                              />
                            </Form.Item>
                            <h6 className="Title"> Degree Content</h6>
                            <Form.Item
                              name="degreeContent"
                              rules={[{ required: false }]}
                            >
                              <TextArea rows={4} />
                            </Form.Item>
                            <h6 className="Title mtt-15">
                              {" "}
                              Total Number of Courses
                            </h6>
                            <Form.Item
                              name="totalNumberCourses"
                              rules={[{ required: true }]}
                            >
                              <Input
                                placeholder="total courses"
                                type="number"
                              />
                            </Form.Item>
                            <h6 className="Title mtt-15">
                              {" "}
                              Total Number of Credit Hours
                            </h6>
                            <Form.Item
                              name="totalNumberCreditHours"
                              rules={[{ required: true }]}
                            >
                              <Input
                                placeholder="total courses"
                                type="number"
                              />
                            </Form.Item>

                            <Form.List name="course">
                              {(fields, { add, remove }, { errors }) => (
                                <>
                                  {fields.map(
                                    ({ key, name, fieldKey, ...restField }) => (
                                      <div
                                        style={{
                                          display: "flex",
                                          flexDirection: "column",
                                          marginBottom: 8,
                                        }}
                                        required={false}
                                        key={key}
                                      >
                                        <div className="row mtt-5">
                                          <div className="col-lg-11 col-sm-11 col-11 col-md-11 col-xl-11">
                                            <Form.Item
                                              {...restField}
                                              name={[name, "_courseName"]}
                                              fieldKey={[
                                                fieldKey,
                                                "_courseName",
                                              ]}
                                              validateTrigger={[
                                                "onChange",
                                                "onBlur",
                                              ]}
                                              rules={[
                                                {
                                                  required: true,
                                                  whitespace: true,
                                                  message:
                                                    "Please input course's name or delete this field.",
                                                },
                                              ]}
                                            >
                                              <Input placeholder="course name" />
                                            </Form.Item>
                                            <Form.Item
                                              {...restField}
                                              name={[
                                                name,
                                                "_courseDescription",
                                              ]}
                                              validateTrigger={[
                                                "onChange",
                                                "onBlur",
                                              ]}
                                              rules={[
                                                {
                                                  required: true,
                                                  whitespace: true,
                                                  message:
                                                    "Please input course's Description or delete this field.",
                                                },
                                              ]}
                                            >
                                              <Input placeholder="course description" />
                                            </Form.Item>
                                            <Form.Item
                                              {...restField}
                                              name={[name, "_facultyName"]}
                                              validateTrigger={[
                                                "onChange",
                                                "onBlur",
                                              ]}
                                              rules={[
                                                {
                                                  required: true,
                                                  whitespace: true,
                                                  message:
                                                    "Please input faculty name or delete this field.",
                                                },
                                              ]}
                                            >
                                              <Input placeholder="faculty name" />
                                            </Form.Item>
                                            <Form.Item
                                              {...restField}
                                              name={[name, "_CourseMode"]}
                                              validateTrigger={[
                                                "onChange",
                                                "onBlur",
                                              ]}
                                              rules={[
                                                {
                                                  required: true,
                                                  whitespace: true,
                                                  message:
                                                    "Please input course mode or delete this field.",
                                                },
                                              ]}
                                            >
                                              <Select
                                                style={{ width: "100%" }}
                                                placeholder="Please select Course Mode"
                                              >
                                                <Option
                                                  key={"Online"}
                                                  value="Online"
                                                >
                                                  Online
                                                </Option>
                                                <Option
                                                  key={"Offline"}
                                                  value="Offline"
                                                >
                                                  Offline
                                                </Option>
                                              </Select>
                                            </Form.Item>
                                          </div>

                                          <div className="col-lg-1 col-sm-1 col-1 col-md-1 col-xl-1">
                                            <MinusCircleTwoTone
                                              onClick={() => remove(name)}
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    )
                                  )}
                                  <div className="text-center mtt-10">
                                    <Button
                                      style={{ width: "100%" }}
                                      type="dashed"
                                      onClick={() => add()}
                                      icon={<PlusOutlined />}
                                    >
                                      Add Course Details
                                    </Button>

                                    <Form.ErrorList errors={errors} />
                                  </div>
                                </>
                              )}
                            </Form.List>
                            <Form.List name="facultyInfo">
                              {(fields, { add, remove }) => (
                                <>
                                  {fields.map((field, index) => (
                                    <div
                                      key={index}
                                      style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        marginBottom: 8,
                                      }}
                                      align="baseline"
                                    >
                                      <h6 className="Title mtt-15">
                                        {" "}
                                        Add Faculty{" "}
                                      </h6>
                                      <hr className="hr-def mb-0" />

                                      <h6 className="BlkTitle mtt-15">
                                        {" "}
                                        Faculty Name
                                      </h6>

                                      <Form.Item
                                        {...field}
                                        name={[field.name, "facultyAnother"]}
                                        fieldKey={[
                                          field.fieldKey,
                                          "faculty Another",
                                        ]}
                                        rules={[
                                          {
                                            required: true,
                                            message: "Missing faculty",
                                          },
                                        ]}
                                      >
                                        <Input placeholder="faculty" />
                                      </Form.Item>

                                      <div
                                        {...field}
                                        name={[field.name, "resume"]}
                                        fieldKey={[
                                          field.fieldKey + 1,
                                          "resume",
                                        ]}
                                        rules={[
                                          { required: true, message: "resume" },
                                        ]}
                                      >
                                        <h6 className="Title mtt-15">
                                          {" "}
                                          Faculty Resume
                                        </h6>
                                        {/* <Upload {...Uploadprops} >
    <Button style={{width:'100%'}} icon={<UploadOutlined />}>Upload CV</Button>
  </Upload> */}

                                        {props.files &&
                                        props.files.length > 0 &&
                                        props.files[field.fieldKey + 1] ? (
                                          <div
                                            className="row mt-1"
                                            key={
                                              props.files[field.fieldKey + 1].id
                                            }
                                          >
                                            <span className="col-5 mr-3 mt-1">
                                              <h6 style={{ color: "#096dd9" }}>
                                                {
                                                  props.files[
                                                    field.fieldKey + 1
                                                  ].name
                                                }
                                              </h6>
                                            </span>
                                            <Button
                                              className="col-3 mx-2"
                                              type="primary"
                                              onClick={() =>
                                                handlePreview(props.files[1])
                                              }
                                            >
                                              Preview
                                            </Button>
                                            <Button
                                              className="col-3"
                                              type="primary"
                                              onClick={() =>
                                                handleDelete(
                                                  props.files[
                                                    field.fieldKey + 1
                                                  ].id
                                                )
                                              }
                                            >
                                              Delete
                                            </Button>
                                          </div>
                                        ) : (
                                          <Form.Item
                                            name="imageSet"
                                            className="mt-2"
                                          >
                                            <div
                                              {...getRootProps()}
                                              style={{
                                                minHeight: 80,
                                                border: "2px dashed #d9d9d9",
                                                textAlign: "center",
                                              }}
                                              className="dropzone"
                                            >
                                              <input {...getInputProps()} />
                                              <h6
                                                style={{
                                                  color: "#d9d9d9",
                                                  marginTop: "5%",
                                                }}
                                              >
                                                drag and drop a file or click
                                                here to select a file
                                              </h6>
                                            </div>
                                          </Form.Item>
                                        )}
                                      </div>

                                      <DeleteTwoTone
                                        twoToneColor="red"
                                        className="mtt-10"
                                        onClick={() => remove(field.name)}
                                      />
                                    </div>
                                  ))}
                                  <div className="mtt-10">
                                    <Button
                                      style={{ width: "100%" }}
                                      type="dashed"
                                      onClick={() => add()}
                                      block
                                      icon={<PlusOutlined />}
                                    >
                                      Add Faculty
                                    </Button>
                                  </div>
                                </>
                              )}
                            </Form.List>

                            <h6 className="Title mtt-15">Language</h6>
                            <Form.Item
                              name="courseLanguage"
                              rules={[{ required: true }]}
                            >
                              <Select
                                showSearch
                                style={{ width: "100%" }}
                                placeholder="Please select"
                              >
                                {languages.map((item, i) => (
                                  <Option key={i} value={item}>
                                    {" "}
                                    {item}{" "}
                                  </Option>
                                ))}
                              </Select>
                            </Form.Item>
                            <h6 className="Title mtt-15"> Course Country</h6>
                            <Form.Item
                              name="courseCountry"
                              rules={[{ required: true }]}
                            >
                              <Select
                                showSearch
                                style={{ width: "100%" }}
                                placeholder="Please select"
                                optionLabelProp="label"
                              >
                                {countries.map((item, i) => (
                                  <Option
                                    key={i}
                                    value={[item[0]]}
                                    label={item[0]}
                                  >
                                    {" "}
                                    {item[0]}{" "}
                                  </Option>
                                ))}
                              </Select>
                            </Form.Item>
                            <h6 className="Title mtt-15"> Course City</h6>
                            <Form.Item
                              name="courseCity"
                              rules={[{ required: true }]}
                            >
                              {/* <Form.Item name="courseCity"  rules={[{ required: false }]}> 
         <Input 
    style={{ width: '100%' }}
  >
  </Input>
  </Form.Item> */}
                              <Input placeholder="Enter City" />
                            </Form.Item>

                            <Form.List name="compulsory">
                              {(fields, { add, remove }, { errors }) => (
                                <>
                                  {fields.map((field, index) => (
                                    <div
                                      style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        marginBottom: 8,
                                      }}
                                      required={false}
                                      key={index}
                                    >
                                      <div className="row mtt-5">
                                        <div className="col-lg-11 col-sm-11 col-11 col-md-11 col-xl-11">
                                          <Form.Item
                                            {...field}
                                            validateTrigger={[
                                              "onChange",
                                              "onBlur",
                                            ]}
                                            rules={[
                                              {
                                                required: true,
                                                whitespace: true,
                                                message:
                                                  "Please input compulsory's name or delete this field.",
                                              },
                                            ]}
                                          >
                                            <Input placeholder="compulsory name" />
                                          </Form.Item>
                                        </div>

                                        <div className="col-lg-1 col-sm-1 col-1 col-md-1 col-xl-1">
                                          <MinusCircleTwoTone
                                            onClick={() => remove(field.name)}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                  <div className="text-center mtt-10">
                                    <Button
                                      style={{ width: "100%" }}
                                      type="dashed"
                                      onClick={() => add()}
                                      icon={<PlusOutlined />}
                                    >
                                      Add Compulsory subjects
                                    </Button>

                                    <Form.ErrorList errors={errors} />
                                  </div>
                                </>
                              )}
                            </Form.List>
                            <Form.List name="optional">
                              {(fields, { add, remove }, { errors }) => (
                                <>
                                  {fields.map((field, index) => (
                                    <div
                                      style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        marginBottom: 8,
                                      }}
                                      required={false}
                                      key={index}
                                    >
                                      <div className="row mtt-5">
                                        <div className="col-lg-11 col-sm-11 col-11 col-md-11 col-xl-11">
                                          <Form.Item
                                            {...field}
                                            validateTrigger={[
                                              "onChange",
                                              "onBlur",
                                            ]}
                                            rules={[
                                              {
                                                required: true,
                                                whitespace: true,
                                                message:
                                                  "Please input optional 's name or delete this field.",
                                              },
                                            ]}
                                          >
                                            <Input placeholder="optional  name" />
                                          </Form.Item>
                                        </div>

                                        <div className="col-lg-1 col-sm-1 col-1 col-md-1 col-xl-1">
                                          <MinusCircleTwoTone
                                            onClick={() => remove(field.name)}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                  <div className="text-center mtt-10">
                                    <Button
                                      style={{ width: "100%" }}
                                      type="dashed"
                                      onClick={() => add()}
                                      icon={<PlusOutlined />}
                                    >
                                      Add Optional subjects
                                    </Button>

                                    <Form.ErrorList errors={errors} />
                                  </div>
                                </>
                              )}
                            </Form.List>

                            <h6 className="Title mtt-15">
                              {" "}
                              Degree Offering Institute
                            </h6>
                            <Form.Item
                              name="courseOfferingInstitute"
                              rules={[{ required: true }]}
                            >
                              <Input type="text" />
                            </Form.Item>

                            <h6 className="Title mtt-15">
                              {" "}
                              Institue Web Address
                            </h6>
                            <Form.Item
                              name="instituteWebAddress"
                              rules={[{ required: false }]}
                            >
                              <Input type="text" />
                            </Form.Item>
                            <h6 className="Title mtt-15">
                              Add Institute Details
                            </h6>
                            <Form.Item
                              name="instituteDetails: "
                              rules={[{ required: false }]}
                            >
                              <TextArea
                                rows={4}
                                showCount
                                maxLength={100}
                                placeholder="Brielfy explain the details"
                              />
                            </Form.Item>
                            <div className="text-center mtt-10">
                              <Button
                                style={{ width: "100%" }}
                                type="dashed"
                                onClick={() =>
                                  setShowTeachingMedium(!showTeachingMedium)
                                }
                                icon={<PlusOutlined />}
                              >
                                {!showTeachingMedium
                                  ? "Add teaching medium institute if Any"
                                  : "Remove Medium Institute"}
                              </Button>
                            </div>
                            {showTeachingMedium ? (
                              <div>
                                {" "}
                                <h6 className="Title mtt-15">
                                  Teaching Medium Institute
                                </h6>
                                <Form.Item
                                  name="medium"
                                  rules={[{ required: false }]}
                                >
                                  <Input type="text" />
                                </Form.Item>
                                <h6 className="Title mtt-15">
                                  Teaching Medium Institue Web Address
                                </h6>
                                <Form.Item
                                  name="mediumWebAddress"
                                  rules={[{ required: false }]}
                                >
                                  <Input type="text" />
                                </Form.Item>
                                <h6 className="Title mtt-15">
                                  Add Institute Details
                                </h6>
                                <Form.Item
                                  name="mediumDetails"
                                  rules={[{ required: false }]}
                                >
                                  <TextArea
                                    rows={4}
                                    showCount
                                    maxLength={100}
                                    placeholder="Brielfy explain the details"
                                  />
                                </Form.Item>{" "}
                              </div>
                            ) : (
                              ""
                            )}

                            <h6 className="Title mtt-15"> Duration For</h6>
                            <Form.Item
                              name="durationFor"
                              rules={[{ required: true }]}
                            >
                              <Select
                                style={{ width: "100%" }}
                                optionLabelProp="label"
                              >
                                <Option value="Weeks" label="Weeks">
                                  Weeks
                                </Option>
                                <Option value="Months" label="Months">
                                  Months
                                </Option>
                                <Option value="Years" label="Years">
                                  Years
                                </Option>
                              </Select>
                            </Form.Item>
                            <h6 className="Title mtt-15"> Duration</h6>
                            <Form.Item
                              name="duration"
                              rules={[{ required: true }]}
                            >
                              <Input type="number" />
                            </Form.Item>
                            <h6 className="Title mtt-15"> Hours Per week</h6>
                            <Form.Item
                              name="hoursPerWeek"
                              rules={[{ required: true }]}
                            >
                              <Input type="number" />
                            </Form.Item>
                            <h6 className="Title mtt-15"> Total Cost</h6>

                            <Form.Item
                              name="totalCost"
                              rules={[{ required: true }]}
                            >
                              <Input type="number" />
                            </Form.Item>
                            <h6 className="Title mtt-15"> Currency</h6>
                            <Form.Item
                              name="currency"
                              rules={[{ required: true }]}
                            >
                              <Select
                                showSearch
                                style={{ width: "100%" }}
                                placeholder="Please select"
                              >
                                {currency}
                                {/* {cities.map((item,i)=>(
      <Option key={i} value={item.name} > {item} </Option>
    ))} */}
                              </Select>
                              {/* <Select
    style={{ width: '100%' }}
   
    optionLabelProp="label"
  >
    <Option value="$" label="$">
      
    $
      
    </Option>

  </Select> */}
                            </Form.Item>
                            <h6 className="Title mtt-15"> Cost Breakdown</h6>
                            <Form.Item
                              name="breakDown"
                              rules={[{ required: false }]}
                            >
                              <TextArea rows={3} />
                            </Form.Item>
                            <h6 className="Title mtt-15"> Financial Aid</h6>
                            <Form.Item
                              name="financialAid"
                              rules={[{ required: false }]}
                            >
                              <Radio.Group name="radiogroup" defaultValue={""}>
                                <Radio value={"Yes"}>Yes</Radio>
                                <Radio value={"No"}>No</Radio>
                              </Radio.Group>
                            </Form.Item>
                            <h6 className="Title mtt-15">
                              {" "}
                              Financial Aid Details{" "}
                            </h6>
                            <Form.Item
                              name="financialAidDetails"
                              rules={[{ required: false }]}
                            >
                              <TextArea rows={3} />
                            </Form.Item>

                            <h6 className="Title mtt-15">Starting Date </h6>
                            <Form.Item
                              name="startingDate"
                              rules={[{ required: true }]}
                            >
                              <DatePicker style={{ width: "100%" }} />
                            </Form.Item>
                            <h6 className="Title mtt-15">
                              {" "}
                              Application Deadline{" "}
                            </h6>
                            <Form.Item
                              name="endingDate"
                              rules={[{ required: true }]}
                            >
                              <DatePicker style={{ width: "100%" }} />
                            </Form.Item>

                            <hr className="hr-def" />
                            <div className="text-center mtt-5">
                              <Button type="primary" htmlType="submit">
                                {" "}
                                Submit{" "}
                              </Button>
                            </div>
                          </Form>
                        </div>
                        <div className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-1 col-sm-1 col-md-2 col-lg-2 col-xl-2"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};
export default CreateDegreeUi;
