import React from "react";
import { Link } from "react-router-dom";
import style from "../Assets/Header.module.css";
import "../Assets/Header.css";

const HeaderUi = () => {
  return (
    <div className={style.Header}>
      <div className="row">
        <div className="col-8 col-sm-8 col-md-10 col-lg-10 col-xl-10 p-0">
          <ul className={style.Headerui}>
            <Link to="/profile">
              <li className={style.HeaderLi}>Dashboard</li>
            </Link>
            <Link to="/search">
              <li className={style.HeaderLi}>Search Courses</li>
            </Link>
            <Link to="/Create/Degree">
              <li className={style.HeaderLi}>Create Course</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default HeaderUi;
