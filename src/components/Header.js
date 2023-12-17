import { useState } from "react";
import Title from "./Title.js";
import bell from "../assets/bell.png";
import user from "../assets/unnamed.jpg";
const Header = ()=> {
    const [searchTxt, setSearchTxt] = useState("");
    return(
        <div className="flex justify-between mx-3 items-start mt-2 align-top shadow-md pb-2">
            <Title/>
            <div>
            <input placeholder="Search" className="px-5 py-2 border focus:outline-none focus:border-blue-500 border-gray-400 w-[500px] rounded-l-full" text={searchTxt} onClick={(e)=>setSearchTxt(e.target.value)}/>
            <button className="rounded-r-full border hover:bg-slate-200  mt-[-0.2px] border-gray-300 px-4 py-2">🔍</button>
            </div>
            <div className="flex align-middle items-center cursor-pointer gap-3">
                <img src={bell} alt="bell" width="25px"/>
                <img src={user} alt="user" width="35px" className="rounded-full mr-3" />
            </div>
        </div>
    )
}


export default Header;
