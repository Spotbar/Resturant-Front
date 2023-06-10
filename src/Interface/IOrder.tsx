import { IRestaurantIndex } from "./IRestaurantIndex";
import SharedGroup from "./SharedGroup";

interface IOrder {
  Id: string;
  Name: string;
  Cost: number;
  IsShared: boolean;
  IsAccept: boolean;
  Restaurant: IRestaurantIndex;
  UserOrders: SharedGroup[];
}
export default IOrder;
