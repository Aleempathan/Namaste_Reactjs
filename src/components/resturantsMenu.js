import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CNDURL, restaurantList } from "../contants";
import useResturant from "../Utils/useResturant";

const Menulist = (propd) => {
  const res = propd.restr;
  return res?.card?.card?.title !== undefined ? (
    <div
      className="restaurants_card_menu"
      style={{ marginTop: "23px !important" }}
    >
      {
        <div>
          <h1>
            {res?.card?.card?.title}
            <span> ({res?.card?.card?.itemCards?.length})</span>
          </h1>
          {res?.card?.card?.itemCards?.map((item, index) => {
            return (
              <div className="restaurants_card_menu_list_item" key={item.id}>
                <span>
                  <h3 key={index} className="title_name">
                    {item?.card?.info.name}
                  </h3>
                  <span className="rupees">
                    {" "}
                    {item?.card?.info.price / 100}
                  </span>
                  <h5 className="description">
                    {" "}
                    {item?.card.info.description}
                  </h5>
                </span>
                {item?.card?.info?.imageId !== undefined ? (
                  <img
                    src={IMG_CNDURL + item?.card?.info?.imageId}
                    alt=""
                    className="img_menu_list"
                  />
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>
      }
    </div>
  ) : (
    ""
  );
};

const RestaurantsMenu = () => {
  const { id } = useParams();
  const [resturantsMenu, setResturantsMenu] = useState();
  const resturat = useResturant(id);
  
  useEffect(()=>{
    setResturantsMenu(
    resturat?.data?.cards[2]?.groupedCard?.cardGroupMap.REGULAR.cards
  );
  },[resturat])
  return (
    <>
      <h2>{resturat?.data.cards[0].card.card.info.name}</h2>
      {resturat?.data?.cards[0]?.card?.card?.info?.cloudinaryImageId !==undefined?<img
        src={
          IMG_CNDURL +
          resturat?.data?.cards[0]?.card?.card?.info?.cloudinaryImageId
        }
        alt=""
      />:''}
      <h3>{resturat?.data?.cards[0]?.card?.card?.info?.costForTwoMessage}</h3>
      <h4>{resturat?.data?.cards[0]?.card?.card?.info?.cuisines.join(",")}</h4>
      <h5>{resturat?.data?.cards[0]?.card?.card?.info?.locality}</h5>
      <h6>{resturat?.data?.cards[0]?.card?.card?.info?.city}</h6>
      <div className="menuList" style={{ marginTop: "13px" }}>
        {resturantsMenu?.map((resturant, index) => {
          return <Menulist restr={resturant} key={index} />;
        })}
      </div>
    </>
  );
};

export default RestaurantsMenu;
