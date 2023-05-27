interface IFactor {
  Id: string;
  FactorNumber: string;
  FactorDate: string;
  DeliveryCost: number;
  FactorAmount: number;
  IsClosed: boolean;
  IsDeliveryByCompanyPaid: boolean;
  RestaurantId: string;
}
export default IFactor;
