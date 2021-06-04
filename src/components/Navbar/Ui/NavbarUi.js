import React, { useState } from "react";
import "antd/dist/antd.css";
import { Menu } from "antd";
import { SettingTwoTone } from "@ant-design/icons";
import { Link, withRouter } from "react-router-dom";
import { Input, Modal, Button, Checkbox } from "antd";
import {
  UserOutlined,
  LockOutlined,
  PicCenterOutlined,
} from "@ant-design/icons";
import style from "../Assets/Navbar.module.css";
import "../Assets/Navbar.css";

const { Search } = Input;

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

const NavbarUi = (props) => {
  console.log(props, "pROPS");
  const { SubMenu } = Menu;
  const [login, setLogin] = useState(false),
    [loading, setLoading] = useState(false),
    [searchString, setSearchString] = useState("");

  const showModal = () => {
      setLogin(true);
    },
    handleOk = () => {
      props.onLogin();
      setLoading(true);
      setTimeout(() => {
        setLogin(false);
      }, 500);
      setLoading(false);
    },
    handleCancel = () => {
      setLogin(false);
    };

  const onSetLogout = () => {
    localStorage.removeItem("accessToken");
    props.setAccessToken(null);
    props.dispatch({ type: "logout" });
    props.history.push("/search");
  };
  return (
    <nav className="BGNavBar navbar navbar-fixed-top navbar-expand-lg">
      <button
        type="button"
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon">
          <PicCenterOutlined />{" "}
        </span>
      </button>

      <Link to="/" className={style.Brand}>
        allGoodCourses.com
      </Link>

      <div
        className="collapse navbar-collapse justify-content-between"
        id="navbarCollapse"
      >
        <div className="navbar-nav">
          <Search
            className={style.Searchbar}
            placeholder="Search Subject"
            onChange={(e) => setSearchString(e.target.value)}
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
          />
          <Button
            className={style.SearchBtn}
            type="primary"
            onClick={() =>
              props.history.push("/search", { user: searchString })
            }
          >
            {" "}
            Search{" "}
          </Button>
        </div>
        {!props.accessToken ? (
          <div className="navbar-nav">
            <label
              className={style.LoginTitle}
              onClick={showModal}
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              Login
            </label>
          </div>
        ) : (
          <div className="navbar-nav">
            <Menu>
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <SettingTwoTone />
                    <span>{props.user}</span>
                  </span>
                }
              >
                <Menu key="1">
                  <Menu.Item key="1">Settings</Menu.Item>
                  <Menu.Divider />
                  <Menu.Item onClick={onSetLogout} key="2">
                    Logout
                  </Menu.Item>
                </Menu>
              </SubMenu>
            </Menu>
          </div>
        )}
      </div>

      <Modal
        visible={login}
        title="Login"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            Login
          </Button>,
        ]}
      >
        <Input
          className={style.EmailInput}
          onChange={(e) => props.onSetEmail(e.target.value)}
          placeholder="Email"
          addonBefore={<UserOutlined />}
        />
        <br />
        <br />
        <Input.Password
          className={style.PasswordInput}
          onChange={(e) => props.onSetPassword(e.target.value)}
          addonBefore={<LockOutlined />}
          placeholder="Password"
        />
        <br />
        <br />
        <Checkbox onChange={onChange}>Remember me</Checkbox>
        <hr className="hr-def mb-0" />
        <p className={style.FooterText}>
          {" "}
          Don't have an account?{" "}
          <Button className={style.FooterLink} type="link" htmlType="button">
            <Link to="/register"> Register! </Link>
          </Button>
        </p>
      </Modal>
    </nav>
  );
};
export default withRouter(NavbarUi);
