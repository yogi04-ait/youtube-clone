import { useEffect, useState, useCallback } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const VideoContainer = () => {
  const [videoData, setVideoData] = useState([]);

  const getVideos = useCallback(async () => {
    try {
      const data = await fetch(YOUTUBE_VIDEOS_API);
      const json = await data.json();
      setVideoData(json.items);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  }, []); // Empty dependency array as there are no external dependencies

  useEffect(() => {
    const fetchData = async () => {
      await getVideos();
    };
    fetchData();
  }, [getVideos]); // Include getVideos in the dependency array

  return !videoData[0]?.snippet ? (
    <Shimmer/>
  ) : (
<div className="flex flex-row flex-wrap gap-1 justify-around ">
      {videoData.map((item) => (
        <Link to={"/watch?v="+ item.id} key={item.id} ><VideoCard info={item} /></Link>
      ))}
    </div>
  );
};

export default VideoContainer;
