import { useState } from "react";
import logo from "../assets/logo.png";

const Brandlogo = () => <img src={logo} alt="brandlogo" width={100} />;

const Navlist = () => (
  <ul>
    <li>Home</li>
    <li>Offers</li>
    <li>Sign In</li>
    <li>Cart</li>
  </ul>
);

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <div className="Header_style">
        <Brandlogo />
        <Navlist />
        {loggedIn ? (
          <button onClick={() => setLoggedIn(false)}>LOGIN</button>
        ) : (
          <button onClick={() => setLoggedIn(true)}>LOGOUT</button>
        )}
      </div>
    </>
  );
};

export default Header;
