import React, { useEffect, useState } from "react";
import axios from "axios";
import { FoodCard } from "../foodCard/FoodCard";
import "./FoodList.css";

const FoodList = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [foods, setFoods] = useState([]);
  const [foodType, setFoodType] = useState(props.foodType);

  // Get Random Food List
  async function getFoodList(type) {
    try {
      const foodData = await axios.get(
        `https://openapi.foodsafetykorea.go.kr/api//COOKRCP01/json/1/10/RCP_PAT2=${type}`
      );
      setFoods(foodData.data.COOKRCP01.row);
      console.log(foods);
      setIsLoading(false);
    } catch {
    }
  }

  useEffect(() => {
    setFoodType(props.foodType);
    getFoodList(foodType);
  }, [foodType]);

  return (
    <div>
      {isLoading ? (
        <div className="list_loding">...로딩중...</div>
      ) : (
        <div className="foodList_container">
          {foods.map((food) => (
            // <Food img={food.ATT_FILE_NO_MAIN} name={food.RCP_NM}/>
            <FoodCard
              img={food.ATT_FILE_NO_MAIN}
              name={food.RCP_NM}
              way={food.RCP_WAY2}
              eng={food.INFO_ENG}
            />
          ))}
        </div>
      )}
    </div>
  );

};

export default FoodList;
