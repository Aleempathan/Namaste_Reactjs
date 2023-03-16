import { IMG_CNDURL, restaurantList } from "../../contants";
import { useState, useEffect } from "react";
import "./Body.css";
import Shimmer from "../shimmer";
import logo from "../../assets/11174.jpg";

export const Restaurant = ({
  name,
  cloudinaryImageId,
  cuisines,
  avgRating,
}) => (
  <>
    <div className="restaurants_card">
      <img src={IMG_CNDURL + cloudinaryImageId} alt="restaurants_image" />
      <span className="title">{name}</span>
      <span className="tags">{cuisines.join(",")}</span>
      <span className="rating">{avgRating}</span>
    </div>
  </>
);
const Body = () => {
  let [searchText, setSearchText] = useState("");
  let [restaurantListData, setrestaurantListData] = useState([]);
  let [allrestaurantListData, setallrestaurantListData] = useState([]);
  function filterdata(Text) {
    setrestaurantListData(
      allrestaurantListData.filter((va) =>
        va.data?.name?.toLowerCase().includes(Text?.toLowerCase())
      )
    );
  }

  useEffect(() => {
    getrestraunt();
  }, []);

  async function getrestraunt() {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0093478&lng=77.6779499&page_type=DESKTOP_WEB_LISTING"
    );
    let json = await data.json();

    setrestaurantListData(json?.data?.cards[2]?.data?.data?.cards);
    setallrestaurantListData(json?.data?.cards[2]?.data?.data?.cards);
  }
  return allrestaurantListData.length > 0 ? (
    <>
      <span className="inputContainer">
        <input
          className="userInput"
          type="text"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            filterdata(e.target.value), setSearchText(e.target.value);
          }}
        />
        <button className="searchButton" onClick={() => filterdata(searchText)}>
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </span>

      <div className="restaurantList">
        {restaurantListData.length > 0 ? (
          restaurantListData?.map((restaurant) => {
            return <Restaurant {...restaurant.data} key={restaurant.data.id} />;
          })
        ) : (
          <div>
            <div className="image_container">
              <img src={logo} alt="no restaurant" />
            </div>
            <div className="image_nofound">
              <h1>No Restaurant found</h1>
            </div>
          </div>
        )}
      </div>
    </>
  ) : (
    <Shimmer className="shimmerEffectsStyle" />
  );
};

export default Body;
