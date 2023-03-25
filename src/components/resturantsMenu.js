import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CNDURL, restaurantList } from "../contants";

const Menulist = (propd) => {
  const res = propd.restr
  return (
    
    res?.card?.card?.title !== undefined ?
    <div className="restaurants_card_menu" style={{ marginTop: '23px !important' }}>
      {

        <div >
          <h1>
            {res?.card?.card?.title}
           <span > ({res?.card?.card?.itemCards?.length})</span>
          </h1>

          {res?.card?.card?.itemCards?.map((item, index) => {
            return (
              <div className="restaurants_card_menu_list_item" key={item.id} >
                <span>
                <h3 key={index} className="title_name">{item?.card?.info.name}</h3>
                <span className="rupees"> {(item?.card?.info.price)/100}</span>
                <h5 className="description"> {item?.card.info.description}</h5>
                </span>
                { item?.card?.info?.imageId !== undefined ?
                 <img src={IMG_CNDURL + item?.card?.info?.imageId} alt="" className="img_menu_list" />:''

                }
               
              </div>
            );
          })}
        </div>


      }
    </div>
    :
    ''
  )
}

const RestaurantsMenu = () => {
  const { id } = useParams();
  const [resturantsDetails, setResturantsDetails] = useState();
  const [resturantsMenu, setResturantsMenu] = useState();
  useEffect(() => {
    getRestuarantMenu();
  }, []);

  async function getRestuarantMenu() {
    let dataIs = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0093478&lng=77.6779499&restaurantId=${id}&submitAction=ENTER`
    );
    dataIs = await dataIs.json();
    console.log(dataIs);
    setResturantsMenu(
      dataIs.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards
    );
    setResturantsDetails(dataIs);
  }
  return (
    <>
      <h2>{resturantsDetails?.data.cards[0].card.card.info.name}</h2>
      <img
        src={
          IMG_CNDURL +
          resturantsDetails?.data?.cards[0]?.card?.card?.info?.cloudinaryImageId
        }
        alt=""
      />
      <h3>
        {resturantsDetails?.data?.cards[0]?.card?.card?.info?.costForTwoMessage}
      </h3>
      <h4>
        {resturantsDetails?.data?.cards[0]?.card?.card?.info?.cuisines.join(
          ","
        )}
      </h4>
      <h5>{resturantsDetails?.data?.cards[0]?.card?.card?.info?.locality}</h5>
      <h5>{resturantsDetails?.data?.cards[0]?.card?.card?.info?.city}</h5>

      <div className="menuList" style={{ marginTop: '13px' }}>
        {
          resturantsMenu?.map((resturant, index) => {
            return <Menulist restr={resturant} key={index} />
          })

        }
      </div>
    </>
  );
};

export default RestaurantsMenu;
