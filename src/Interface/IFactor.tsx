interface Restaurant {
  Id: string;
  Name: string;
}

interface IFactor {
  Id: string;
  FactorNumber: string;
  FactorDate: string;
  DeliveryCost: number;
  FactorAmount: number;
  IsClosed: boolean;
  IsDeliveryByCompanyPaid: boolean;
  Restaurant: Restaurant;
}
export default IFactor;
