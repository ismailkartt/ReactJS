import React from "react";
import "./homework.scss";

const Homework1 = ({ title, image, price, discount, rate }) => {
  const discountedPrice = discount
    ? (price - price * (discount / 100)).toFixed(2) : price;
    

  return (
    <div className="product-card">
      {discount && <div className="discount-tag">-{discount}%</div>}
      <img src={image} alt={title} className="product-image" />
      <h2 className="product-title">{title}</h2>
      <div className="rating">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < rate ? "star filled" : "star"}>
            ★
          </span>
        ))}
      </div>
      <p className={discount ? "original-price" : "price"}>
        ${price.toFixed(2)}
      </p>
      {discount && <p className="discounted-price">${discountedPrice}</p>}
    </div>
  );
};

export default Homework1;
