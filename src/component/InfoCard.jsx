import React from "react";
import "./InfoCard.css";

const InfoCard = (props) => {
  return (
    <div className="InfoCard">
      {/* <div className="centerContainer"> */}
        <img alt="Loading" src={props.image}></img>
        <div className="rightContent">
          <h3>{props.subtitle}</h3>
          <h2>{props.title}</h2>
          <p>{props.content}</p>
          <a href={props.link}>
            <span className="ArrowButton"></span>
            <span>➜</span>{props.button}
          </a>
        </div>
      {/* </div> */}
    </div>
  );
};

export default InfoCard;
