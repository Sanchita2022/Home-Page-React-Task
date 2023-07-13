import React from "react";
import "./Nav.css";

const navArr = [
  {
    name: "Home",
    route: "/home",
    option: "",
  },
  {
    name: "AboutUs",
    route: "/about",
    option: "",
  },
  {
    name: "Academics",
    route: "/academics",
    option: "",
  },
  {
    name: "Courses",
    route: "/courses",
    option: "",
  },
  {
    name: "Become a Instructor",
    route: "/instruct",
    option: "",
  },
  {
    name: "Become a Teacher",
    route: "/teach",
    option: "",
  },
  {
    name: "Contact Us",
    route: "/contact",
    option: "",
  },
];

const Nav = () => {
  return (
    <div className="Nav">
      
      <div className="logo">
        <img src="/images/logo.png" alt="logo" />
      </div>

      <div className="right-nav">
      
        <div className="upper-icons">
          <div className="bag">
            <img src="/images/bag.png" alt="bag" />
          </div>
          {/* <div className="buttons"> */}
            <button className="LoginButton"> Login <span>⌄</span></button>
            <button className="SignupButton"> Signup </button>
          {/* </div> */}
        </div>

        <div className="content">
          {navArr.map((e,id) => (
            <h4 key ={id}><a href={e.route}>{e.name}</a></h4>
          ))}
          <span className="search">🔍</span>
        </div>

      </div>
    </div>
  );
};

export default Nav;
