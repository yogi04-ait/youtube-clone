import { useEffect, useState, useCallback } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

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
    <p>Hello honey bunny</p>
  ) : (
    <div className="flex flex-row flex-wrap justify-around">
      {videoData.map((item) => (
        <Link to={"/watch?v="+ item.id} ><VideoCard info={item} key={item.id} /></Link>
      ))}
    </div>
  );
};

export default VideoContainer;
