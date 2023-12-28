import React, { useEffect, useState, useCallback } from "react";
import Title from "./Title.js";
import bell from "../assets/bell.png";
import user from "../assets/unnamed.jpg";
import { SUGGESTION_API } from "../utils/constants.js";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";

const Header = () => {
  const [searchTxt, setSearchTxt] = useState('');
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const getSearchSuggestion = useCallback(async () => {
    const data = await fetch(SUGGESTION_API + searchTxt);
    const json = await data.json();
    setSuggestion(json[1]);
  }, [searchTxt]);

  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestion(), 200);
    return () => clearTimeout(timer);
  }, [searchTxt, getSearchSuggestion]);

  return (
    <div className="shadow-md pb-2 mb-2">
      <div className="flex justify-between mx-3 items-start mt-2 align-top">
        <Title />

        <div className="flex flex-nowrap">
          <input
            placeholder="Search"
            className="custom-css px-5 py-2 border  focus:outline-none focus:border-blue-500 border-gray-400 rounded-l-full"
            value={searchTxt}
            onChange={(e) => setSearchTxt(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <Link to={searchTxt ? "results/" + searchTxt : "#"}>
            <button className="rounded-r-full border hover:bg-slate-200  mt-[-0.2px] border-gray-300 px-4 py-2"><IoIosSearch className="inline-block text-lg" /></button>
          </Link>
        </div>

        <div className="flex align-middle items-center cursor-pointer gap-3">
          <img src={bell} alt="bell" width="25px" />
          <img src={user} alt="user" width="35px" className="rounded-full mr-3" />
        </div>
      </div>

      {showSuggestion && (
        <div className="absolute left-[29.3rem] top-[3.12rem] text-ellipsis overflow-hidden bg-white rounded-xl mt-[2px] w-[435px]  border-gray-400">
          <ul>
            {suggestion.map((s, index) => (
              <li key={index} onClick={() => { console.log('Clicked suggestion:', s); setSearchTxt(s); }} className="hover:bg-gray-300 p-1">
              <IoIosSearch className="inline-block mr-1" /> {s}
            </li>
            
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
