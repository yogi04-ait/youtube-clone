import { useDispatch } from "react-redux";
import hamburger from "../assets/hamburger.png";
import icon from "../assets/pngwing.com.png";
import { toggleMenu } from "../utils/appSlice";

const Title = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="flex justify-between items-center p-4 lg:p-6">
      <img
        src={hamburger}
        onClick={() => toggleMenuHandler()}
        className="cursor-pointer mr-3"
        width="20px"
        alt="hamgurger-icon"
      />
      <a href="/">
        <img
          src={icon}
          width="70px"
          className="cursor-pointer"
          height="100px"
          alt="youtube-icon"
        />
      </a>
    </div>
  );
};

export default Title;
