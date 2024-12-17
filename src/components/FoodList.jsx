import React, { useEffect, useState } from "react";
import axios from "axios";
import Food from "./Food/Food";

const FoodList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [foods, setFoods] = useState([]);
  async function getFoodList() {
    const foodData = await axios.get(
      `https://openapi.foodsafetykorea.go.kr/api//COOKRCP01/json/1/10`
    );
    console.log(foodData.data.COOKRCP01.row);
    setFoods(foodData.data.COOKRCP01.row);
    setIsLoading(false);
  }

  /* useEffect Hook */
  useEffect(() => {
    getFoodList();
  }, []);
  return (
    <div>
      {isLoading ? (
        <div>...로딩중...</div>
      ) : (
        <div>
          {foods.map((food) => (
            <Food img={food.ATT_FILE_NO_MAIN} name={food.RCP_NM} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FoodList;
