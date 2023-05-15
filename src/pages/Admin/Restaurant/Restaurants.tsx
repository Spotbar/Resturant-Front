import { useQuery } from "react-query";
import Main from "../../../components/Layout/Main";
import RestaurantsList from "../../../components/Restaurant/RestaurantsList";
import { getRestaurants } from "../../../api";
import { useEffect, useState } from "react";
import IRestaurants from "../../../Interface/IRestaurants";

const Restaurants = () => {
  // const restaurants: IRestaurantWithId[] = [];

  const [restaurants, setRestaurants] = useState<IRestaurants[]>([]);

  const editHandler = () => {};
  const deleteHandler = () => {};

  const { isLoading, error, data } = useQuery("restaurants", getRestaurants, {
    onSuccess(data) {
      console.log((data))
    },
  });

  useEffect(() => {
    if (data && data.length > 0 ) {
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
    </Main>
  );
};
export default Restaurants;
