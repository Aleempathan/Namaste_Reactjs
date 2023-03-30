import logo from "../assets/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../Utils/useOnline"
const Brandlogo =()=>(
    <img src={logo} alt="brandlogo" width={100} />
    )
    
    const Navlist = () =>{
      const isOnline = useOnline()
      return (
        <>
        <ul>
        <Link to="/">
        <li>Home</li>
        </Link>
        <Link to="/about">
        <li>About</li>
        </Link>
        <Link to="/contact">
        <li>Contact Us</li>
        </Link>
        <Link to="/instamat">
        <li>Instamart</li>
        </Link>
       
        <li>Offers</li>
        <li>Sign In</li>
        <li>Cart</li>

        {
          isOnline ?'✅':'🔴'
        }
      </ul>
      </>
      )
    }

    
      
    
    
    

const Header = () =>{
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
  )
 
}

  export default Header;