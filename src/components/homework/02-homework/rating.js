import React from "react";
import "./rating.scss";

const Rating = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} className={i <= rating ? "star filled" : "star"}>
        ★
      </span>
    );
  }

  return <div className="rating">{stars}</div>;
};

export default Rating;
