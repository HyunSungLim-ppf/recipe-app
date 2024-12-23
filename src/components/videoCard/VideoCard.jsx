import React from "react";
import './VideoCard.css'
export const VideoCard = (props) => {
  return (
    <div className="videoCard_container">
      {/* Youtube Video */}
      <iframe
        width={props.width}
        height={props.height}
        src={props.youtubeUrl}
        title={props.title}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>

      {/* Food Info */}
      <div className="info_container">
        {/* Source */}
        <p id="source">{props.source}</p>
        {/* Food Name */}
        <h2 id="title">{props.title}</h2>
      </div>
    </div>
  );
};
