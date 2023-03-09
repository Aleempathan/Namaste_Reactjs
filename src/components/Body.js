 import { IMG_CNDURL,restaurantList } from "../contants";


const Restaurant = ({name,cloudinaryImageId,cuisines,avgRating}) =>(
    <>
     <div className="restaurants_card">
      <img src={IMG_CNDURL+cloudinaryImageId} alt="restaurants_image" />
      <span className="title">{name}</span>
      <span className="tags">{cuisines.join(",")}</span>
      <span className="rating">{avgRating}</span>
    </div>
    </>
  )
  
  const Body =() =>(
  <>
  <div className="restaurantList">
  { restaurantList.map((restaurant) =>{
    return <Restaurant {...restaurant.data} key={restaurant.data.id}  />
  })
  }
  </div>
  </>
  )

  export default Body;