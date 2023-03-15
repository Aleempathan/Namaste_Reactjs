import { IMG_CNDURL,restaurantList } from "../../contants";
import { useState } from "react";
import './Body.css'

export const Restaurant = ({name,cloudinaryImageId,cuisines,avgRating}) =>(
    <>
     <div className="restaurants_card">
      <img src={IMG_CNDURL+cloudinaryImageId} alt="restaurants_image" />
      <span className="title">{name}</span>
      <span className="tags">{cuisines.join(",")}</span>
      <span className="rating">{avgRating}</span>
    </div>
    </>
  )

  const Body =() =>{

  let [searchText,setSearchText] = useState("");
  let [restaurantListData,setrestaurantListData] = useState(restaurantList);
  function filterdata(Text){
    setrestaurantListData(restaurantList.filter(va =>va.data.name.toLowerCase().includes(Text.toLowerCase()))) 
  }

  return (
    <>
    <div  className="inputContainer">
    <input  className="userInput"  type="text" placeholder="search" value={searchText} onChange={(e) => {filterdata(e.target.value),setSearchText(e.target.value)}} />
    <button className="searchButton" onClick={()=>filterdata(searchText)}><i className="fa fa-search" aria-hidden="true"></i></button>
    </div>

    <div className="restaurantList">
    { restaurantListData.map((restaurant) =>{
      return <Restaurant {...restaurant.data} key={restaurant.data.id}  />
    })
    }
    </div>
    </>
  )
  }

  export default Body;