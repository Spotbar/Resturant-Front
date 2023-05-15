import { useMutation, useQuery } from "react-query";
import ICreateRestaurant from "../../../Interface/ICreateRestaurant";
import Main from "../../../components/Layout/Main";
import Restaurant from "../../../components/Restaurant/Restaurant";
import { AddRestaurant, getRestaurantById } from "../../../api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const EditRestaurant = () => {
  const { id } = useParams<{ id: string }>();
  const [Id, setId] = useState<string>("");

  useEffect(() => {
    if (id) setId(id);
  }, [id]);

  // const { isLoading, error, data } = useQuery(
  //   "restaurantById",
  //     getRestaurantById("id"),
  //   {
  //     onSuccess(data) {
  //       console.log(data);
  //     },
  //   }
  // );

  const { isLoading, error, data } = useQuery(
    ["restaurantById", Id],
    () => getRestaurantById(Id),
    {
      enabled: !!Id,

      onSuccess(data) {
        console.log(data);
      },
    }
  );

  const addRestaurantMutation = useMutation(
    async (restaurant: ICreateRestaurant) => {
      const data = await AddRestaurant(restaurant);
      if (data && data.data) {
        // Navigate("/Home");
      }
    }
  );

  const handleFormSubmit = async (restaurant: ICreateRestaurant) => {
    addRestaurantMutation.mutate(restaurant);
    console.log(restaurant);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error:</div>;
  }

  if (!data) {
    return null;
  }

  return (
    <Main>
      <Restaurant
        data={data}
        btn={"ویرایش"}
        title={"ویرایش رستوران"}
        onSubmit={handleFormSubmit}
      />
    </Main>
  );
};
export default EditRestaurant;
