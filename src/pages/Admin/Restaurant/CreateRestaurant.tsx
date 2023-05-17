import { useMutation, useQueryClient } from "react-query";
import Main from "../../../components/Layout/Main";
import Restaurant from "../../../components/Restaurant/Restaurant";
import { AddRestaurant } from "../../../api";
import IRestaurant from "../../../Interface/IRestaurant";
import { useNavigate } from "react-router-dom";

const CreateRestaurant = () => {
  const navigate = useNavigate();
  const client = useQueryClient();
  const addRestaurantMutation = useMutation(async (restaurant: IRestaurant) => {
    const data = await AddRestaurant(restaurant);
    if (data && data.data) {
      client.invalidateQueries("restaurants", { refetchInactive: true });
      navigate("/Restaurants");
    }
  });

  const handleFormSubmit = (restaurant: IRestaurant) => {
    addRestaurantMutation.mutate(restaurant);
  };

  return (
    <Main>
      <Restaurant
        data={{}}
        btn={"ثبت"}
        title={"ثبت رستوران جدید"}
        handleSubmit={handleFormSubmit}
      />
    </Main>
  );
};
export default CreateRestaurant;
