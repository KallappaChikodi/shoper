import React from "react";
import "./item.css";

const Item = (props) => {
  return (
    <div className="item">
      <img src={props.image} alt="" />
      <p>{props.title}</p>
      <div className="item-prices">
        <div className="new-prize">
          ${props.new_price}</div>
        <div className="old-price">
          ${props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
