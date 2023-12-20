import { useDispatch } from "react-redux";
import hamburger from "../assets/hamburger.png";
import icon from "../assets/pngwing.com.png";
import { toggleMenu } from "./appSlilce";

const Title = ()=>{

    const dispatch = useDispatch();

    const toggleMenuHandler = ()=>{
        dispatch(toggleMenu());
    }

    return (
        <div className="flex gap-4 items-center m-2 ">

          <img src={hamburger} onClick={()=>toggleMenuHandler()}  className="ml-2 self-start cursor-pointer" width="20px" alt="hamgurger-icon"/>
            <a href="/"><img src={icon} width="70px" className="ml-1 self-stretch cursor-pointer" height="100px" alt="youtube-icon"/></a>

        </div>
    )
}

export default Title;