import React from "react";
import "./Home.css";
import { Search } from "../../components/search/Search";
import { RecipeTabMenu } from "../../components/recipeTabMenu/RecipeTabMenu";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { VideoCard } from "../../components/videoCard/VideoCard";

export const Home = () => {
  const videoDataArr = [
    {
      title: "캐모마일티를 섞어서 웰컴드링크로 만들어보세요.",
      youtubeUrl: "https://www.youtube.com/embed/YmxGCiGgLLI",
      source: "만개의 레시피",
    },
    {
      title: "너무 맛있다고 와이프 친구들까지 극찬을 아끼지 않았던 실비김치",
      youtubeUrl: "https://www.youtube.com/embed/5YRdb1BZ0Ew",
      source: "1분요리 뚝딱이형",
    },
    {
      title: "백종원 최애 술안주 레시피 들기름 계란후라이",
      youtubeUrl: "https://www.youtube.com/embed/4pYVR9gYxIM",
      source: "백종원 요리비책",
    },
    {
      title:
        "퓨전한식 쉐프님께 배워온 파스타인데... 이거 진짜 말도 안되게 맛있습니다!!!",
      youtubeUrl: "https://www.youtube.com/embed/VDWg3mTm8yY",
      source: "1분요리 뚝딱이형",
    },
    {
      title:
        "이거 한 숟가락이면 반찬 걱정 끝! 떠먹는 장조림",
      youtubeUrl: "https://www.youtube.com/embed/eXTJCpQ5PjA",
      source: "만개의 레시피",
    },
  ];

  return (
    <div className="home_container">
      {/* Serch Section */}
      <div className="search_section">
        <Search />
      </div>

      {/* Recipe Section */}
      <section className="recipe_section">
        <RecipeTabMenu />
      </section>

      {/* Recipe Show More */}
      <div className="recipe_show_more">
        <Link to="/">자세히 보기</Link>
        <div className="line"></div>
      </div>

      {/* Video Recipe Section */}
      <section className="video_container">
        {/* Title */}
        <div className="label_container">
          <h2>비디오 레시피</h2>
          <p>우리와 함께라면 요리가 더욱 쉬워집니다</p>
        </div>

        {/* menu btn container */}
        <div className="video_card_container">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            slidesPerView={"auto"}
            spaceBetween={15}
            loop={true}
            className="mySwiper"
          >
            {videoDataArr.map((video, index) => (
              <SwiperSlide id="slide" key={index}>
                <VideoCard
                  width={500}
                  height={281.25}
                  title={video.title}
                  youtubeUrl={video.youtubeUrl}
                  source={video.source}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};
