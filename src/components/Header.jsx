import "./Header.css";
import LoginButton from "./LoginButton.jsx";

const Header = () => {
  return (
    <div className="header">
      <div className="header--name">Placeholder</div>
      <div className="header--login">
        <LoginButton />
      </div>
    </div>
  );
};

export default Header;
