import React from "react";
import "./FoodCard.css";

export const FoodCard = (props) => {
  return (
    <div className="food_card_container">
      {/* Food Image */}
      <div className="image_container">
        <img src={props.img} alt={props.name + " 이미지"} />
      </div>
      {/* Food Info */}
      <div className="info_container">
        {/* Food Way */}
        <p id="way">{props.way}</p>
        {/* Food Name */}
        <h2 id="name">{props.name}</h2>
        {/* Food Energy */}
        <p id="eng">{props.eng} cal</p>
      </div>
    </div>
  );
};
