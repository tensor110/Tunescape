import React from "react";
import "./stream.css";
import StreamCard from "@/components/StreamCard";
import random from "../../public/randomize-white.png"
import prevtrack from "../../public/previous-track-white.png"
import pause from "../../public/pause-white.png"
import play from "../../public/play-white.png"
import nexttrack from "../../public/next-track-white.png"
import repeat from "../../public/repeat-button-white.png"
import volume from "../../public/volume.png"
import Image from "next/image";
const page = () => {
  return (
    <div className="stream-holder">
      <div id="stream-container">
        <div id="stream-left">
          <img
            className="main__image"
            src="https://s3-alpha-sig.figma.com/img/badf/e7ce/9fb6cdb18355919755bbe5bdce881b9f?Expires=1694390400&Signature=j7H-UzlnVFjSyAdfEOISuRQzdKFCL-y-8v7GNh2Ul6sUkZhg591gHntEiJie55O8mG1BTpZzZMZB4~r2V1IEffpX-bxoGLcCHl4-rwiC8nmO18Pkd3DK-sI83U~86-XthVPPsFbdd8lCMjgUyS2OeKgtpQD8CXrC~qARRetYP5sXk6CM-ARv-RdRqjii6ZmhClwFtsRpRoCm7wBuFz~vryjuGZx79JkZlNXGIiEIGxYp5sRb4AdXLXL95OBo~9~7rOzuU8Ga9JdvYJYt1Bd1~9I1SQOGe9yiq9gE-57hy3Sg-i-lmnMOQWgKL9XqFxn1ONO7KHlsi9sF5qR3b08nyg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          />
          <h1 className="master__name">Song Name</h1>
          <h1 className="master__artist">Artist Name</h1>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2"
          height="450"
          viewBox="0 0 2 450"
          fill="none"
        >
          <path d="M1 0V450" stroke="white" />
        </svg>
        <div id="stream-right">
          <StreamCard Song="Count Me Out" Artist="Kendrick Lamar" time="5:06" />
          <StreamCard />
          <StreamCard />
          <StreamCard />
          <StreamCard />
        </div>
      </div>
      <div class="media-player ">
        <input type="range" id="seeker-bar" value="0" min="0" max="100" step="0.1" />
        <div class="media">
          <div class="media-buttons">
            <Image src={random} alt="" class="randomize" />
            <Image src={prevtrack} alt="" onclick="playPrevious()" class="previous" />
            <Image src={play} alt="" onclick="playPause(event)" id="play" class="play-pause" />
            <Image src={pause} alt="" onclick="playPause(event)" id="pause" style="display: none;" class="play-pause" />
            <Image src={nexttrack} alt="" onclick="playNext()" class="next" />
            <Image src={repeat} alt="" class="repeat" />
          </div>
          <div class="volume">
            <Image src={volume} alt="" />
                    <input type="range" value="100" min="0" max="100" id="volume-seeker" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
