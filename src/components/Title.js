import hamburger from "../assets/hamburger.png";
import icon from "../assets/pngwing.com.png";
const Title = ()=>{
    return (
        <div className="flex gap-4 items-center m-2 ">
            <img src={hamburger} className="ml-2 self-start cursor-pointer" width="20px" alt="hamgurger-icon"/>
            <img src={icon} width="70px" className="ml-1 self-stretch cursor-pointer" height="100px" alt="youtube-icon"/>
        </div>
    )
}

export default Title;