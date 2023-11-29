import React from "react";
import { PlayCircleOutlined } from '@ant-design/icons';
// @ts-ignore
import video from "../../video/videoplayback.mp4";
import { Button } from "antd";

const MoviePlayer = ({ movie, playVideo, showButton, videoRef }) => {
  return (
    <div>
      <div className="head-player">{movie.film.Title}</div>
      <div className="video-container">
        <video ref={videoRef} controls className="film_video" src={video}></video>
        <Button
          className="btn_play"
          icon={<PlayCircleOutlined style={{ fontSize: "50px", color: "#fff" }} />}
          onClick={playVideo}
          style={{
            display: showButton ? "block" : "none",
          }}
        ></Button>
      </div>
    </div>
  );
};

export default MoviePlayer;