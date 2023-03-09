import logo from "../assets/logo.png";

const Brandlogo =()=>(
    <img src={logo} alt="brandlogo" width={100} />
    )
    
    const Navlist = () =>(
      <ul>
        <li>Home</li>
        <li>Offers</li>
        <li>Sign In</li>
        <li>Cart</li>
      </ul>
    )
    

const Header = () =>(
    <>
    <div className="Header_style">
    <Brandlogo />
    <Navlist />
    </div>
    </>
  )

  export default Header;