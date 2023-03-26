import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Error from "./components/Error";
import About from "./components/About";
import Contact from "./components/Contact";
// import RestaurantsMenu from "./components/RestaurantsMenu";
import RestaurantsMenu from "./components/resturantsMenu";
import Profile from "./components/Profile";
const AppLayout= () =>(
  <>
    <Header />
    <Outlet/>
    <Footer />
  </>
)

const router = createBrowserRouter([
  { path: "",
  element: <AppLayout/> ,
  errorElement:<Error/>,
  children:[
    { path: "/",  element:<Body />},
    { path: "/about",  element:<About/>},
    { path: "/contact",  element:<Contact />},
    { path: "/resturant/:id",  element:<RestaurantsMenu/>},
  
  ]},
])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);

