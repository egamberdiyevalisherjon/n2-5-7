import Nav from "./Nav";
import reactLogo from "../assets/react.svg";
// import uzumImagePath from "../assets/images/uzum.jpeg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">
        {/* <img src="/icons/house-solid.svg" alt="" /> */}
        <img src="/vite.svg" alt="" />
        <img src={reactLogo} alt="" />
        {/* <img width={50} src="/images/car.webp" alt="" /> */}
        {/* <img width={50} src={uzumImagePath} alt="" /> */}
      </Link>
      <Nav />
    </header>
  );
};

export default Header;
