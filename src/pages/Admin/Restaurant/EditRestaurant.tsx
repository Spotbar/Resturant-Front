import { useMutation, useQuery } from "react-query";
import ICreateRestaurant from "../../../Interface/ICreateRestaurant";
import Main from "../../../components/Layout/Main";
import Restaurant from "../../../components/Restaurant/Restaurant";
import { AddRestaurant, editRestaurantById, getRestaurantById } from "../../../api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import IRestaurant from "../../../Interface/IRestaurant";

const EditRestaurant = () => {
  const { id } = useParams<{ id: string }>();
  const [Id, setId] = useState<string>("");
  const [restaurant, setRestaurant] = useState<IRestaurant>({
    Id: "",
    Name: "",
    Tel: "",
    OpratorName: "",
    Mobile: "",
    Address: "",
  });

  useEffect(() => {
    if (id) setId(id);
  }, [id]);



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

  useEffect(() => {
    setRestaurant(data);
  }, [data]);
  const editRestaurantMutation = useMutation(
    async (restaurant: IRestaurant) => {
      const data = await editRestaurantById(restaurant);
      if (data && data.data) {
        // Navigate("/Home");
      }
    }
  );

  const handleFormSubmit = async (restaurant: IRestaurant) => {
    editRestaurantMutation.mutate(restaurant);
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
        data={restaurant}
        btn={"ویرایش"}
        title={"ویرایش رستوران"}
        handleSubmit={handleFormSubmit}
      />
    </Main>
  );
};
export default EditRestaurant;
