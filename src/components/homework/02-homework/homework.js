import React from "react";
import "./homework.scss";
import Rating from "./rating";

const Homework = (props) => {
  const imgSrc = require(`../../../assets/img/${props.src}`);
  const profileBackgroundImage = {
    backgroundImage: `url(${imgSrc})`,
  };

  return (
    <div className="container-card">
      <div className="card">
        <div className="image" style={profileBackgroundImage}></div>
        <div className="content">
          <div className="product-card-footer">
            <Rating rating={props.rating} />
            <div className="title">{props.name}</div>
            <span className="price">{props.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homework;
