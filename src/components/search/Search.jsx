import React from "react";
import "./Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";

export const Search = () => {
  return (
    <div className="search_container">
      <form action="/search" role="search">
        {/* Label */}
        <label for="user-search">어떤 음식을 만들어 볼까요?</label>

        {/* Input Container */}
        <div className="input_container">
          {/* Icon */}
          <FontAwesomeIcon icon={faUtensils} id="icon" />

          {/* Search Input */}
          <input
            type="search"
            id="user-search"
            name="foodName"
            placeholder="만들고 싶은 요리를 검색해 주세요."
          />

          {/* Saerch BTN */}
          <button type="submit" className="search_btn">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>

        {/* Search info text */}
        <p>
          핵심 단어를 쉼표로 구분하세요. 예를 들어 다음과 같이 입력 : "버섯",
          "두부"
        </p>
      </form>
    </div>
  );
};
