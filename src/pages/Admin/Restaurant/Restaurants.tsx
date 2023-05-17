import { useQuery } from "react-query";
import Main from "../../../components/Layout/Main";
import RestaurantsList from "../../../components/Restaurant/RestaurantsList";
import { getRestaurants } from "../../../api";
import { useEffect, useState } from "react";
import IRestaurant from "../../../Interface/IRestaurant";
import { useNavigate } from "react-router-dom";

const Restaurants = () => {
  // const restaurants: IRestaurantWithId[] = [];
  const navigate = useNavigate();
  const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);

  const editHandler = (restaurant: IRestaurant) => {
    navigate(`/EditRestaurant/${restaurant.Id}`);
  };

  const deleteHandler = () => {};

  const { isLoading, error, data } = useQuery("restaurants", getRestaurants, {
    onSuccess(data) {
      console.log(data);
    },
  });

  useEffect(() => {
    if (data && data.length > 0) {
      setRestaurants(data);
    }
  }, [data]);

  return (
    <Main>
      <div className="text-amber-600 text-lg mb-6"> لیست رستوران ها</div>
      <RestaurantsList
        restaurants={restaurants}
        onEdit={editHandler}
        onDelete={deleteHandler}
      />

      <div className="my-5">
        <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline w-full sm:w-auto sm:px-14 text-lg"
        onClick={()=>{
          navigate('/CreateRestaurant')
        }}>
          رستوران جدید
        </button>
      </div>
    </Main>
  );
};
export default Restaurants;
