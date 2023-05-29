import Restaurant from "./Restaurant";


interface IFactorCreate {
  Id: string;
  FactorNumber: string;
  FactorDate: string;
  DeliveryCost: number;
  FactorAmount: number;
  IsClosed: boolean;
  IsDeliveryByCompanyPaid: boolean;
  Restaurant: Restaurant;
}
export default IFactorCreate;
