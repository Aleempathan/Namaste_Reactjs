import {useState, useEffect } from "react";

const useResturant =(id) =>{
    const [resturantsDetails, setResturantsDetails] = useState();

    useEffect(() => {
        getRestuarantMenu();
      }, []);
    
      async function getRestuarantMenu() {
        let dataIs = await fetch(
          `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0093478&lng=77.6779499&restaurantId=${id}&submitAction=ENTER`
        );
        dataIs = await dataIs.json();
        console.log(dataIs);
        setResturantsDetails(dataIs);
      }

    return resturantsDetails;
}

export default useResturant;