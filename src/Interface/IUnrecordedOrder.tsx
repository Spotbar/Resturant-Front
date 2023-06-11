import { IRestaurantIndex } from "./IRestaurantIndex";

export interface IUnrecordedOrder {
  Id: string;
  OrderDate: string;
  Restaurant: IRestaurantIndex;
  UnrecordCount: number;
}
