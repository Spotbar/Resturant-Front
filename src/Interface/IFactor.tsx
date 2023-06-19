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


export interface ISelectFactor {
  Id: string;
  FactorNumber: string;
  DeliveryCost: number;
  FactorAmount: number;
  IsClosed: boolean;
  IsDeliveryByCompanyPaid: boolean;
}