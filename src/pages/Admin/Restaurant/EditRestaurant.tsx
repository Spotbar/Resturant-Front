import { useMutation } from "react-query";
import ICreateRestaurant from "../../../Interface/ICreateRestaurant";
import Main from "../../../components/Layout/Main";
import Restaurant from "../../../components/Restaurant/Restaurant";
import { AddRestaurant } from "../../../api";


const EditRestaurant = () => {

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


  
  return (
    <Main>
      <Restaurant btn={'ویرایش'} title={'ویرایش رستوران'} onSubmit={handleFormSubmit} />
    </Main>
  );
};
export default EditRestaurant;