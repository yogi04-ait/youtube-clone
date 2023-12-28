import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useCallback } from 'react';
import { API_KEY } from '../utils/constants';
import SearchVideoCard from './SearchVideoCard';

const Searchresult = () => {
  const { searchTxt } = useParams();
  const [searchResult, setSearchResult] = useState([]);

  const getResult = useCallback(async () => {
    try {
      const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchTxt}&key=${API_KEY}`);
      const data = await response.json();
      setSearchResult(data.items);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  }, [searchTxt]);

  useEffect(() => {
    const fetchData = async () => {
      await getResult();
    };
    fetchData();
  }, [getResult]);

  if (!searchResult) return null;

  return (
    <div className="flex flex-col gap-3">
      {searchResult.map((item) => (
        <Link key={item.id.videoId} to={`/watch?v=${item.id.videoId}`}>
          <SearchVideoCard data={item} />
        </Link>
      ))}
    </div>
  );
};

export default Searchresult;
