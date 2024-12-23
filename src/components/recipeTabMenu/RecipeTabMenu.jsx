import React, { act, useState } from "react";
import FoodList from "../foodList/FoodList";
import "./RecipeTabMenu.css";

export const RecipeTabMenu = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, label: "밥", content: <FoodList key="0" foodType="밥" /> },
    { id: 1, label: "국&찌개", content: <FoodList key="1" foodType="국" /> },
    { id: 2, label: "반찬", content: <FoodList key="2" foodType="반찬" /> },
    { id: 3, label: "후식", content: <FoodList key="3" foodType="후식" /> },
    { id: 4, label: "일품", content: <FoodList key="4" foodType="일품" /> },
  ];


  return (
    <div className="recipeTabMenu_container">
      {/* Title */}
      <div className="label_container">
        <h2>레시피</h2>
        <p>같이 뭔가 맛있는 걸 요리해요</p>
      </div>

      {/* menu btn container */}
      <div className="menu_btn_container">
        {tabs.map((tab, idx) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.id);
            }}
            className={`btn${(idx == activeTab ? "_active" : "")}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {tabs.find((tab) => tab.id === activeTab)?.content}
      {/* <div>{tabs.find((tab) => tab.id === activeTab)?.content}</div> */}
    </div>
  );
};
