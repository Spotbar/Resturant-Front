import http from "../../httpService";
import headers from "../../header";
import IFactor from "../../../Interface/IFactor";

export default async function addFactorService(factor: IFactor) {
  console.log(factor);
  try {
    return http.post(
      "/Factor/AddNewFactor",
      {
        id: "",
        factorNumber: factor.FactorNumber,
        factorDate: factor.FactorDate,
        deliveryCost: factor.DeliveryCost,
        factorAmount: factor.FactorAmount,
        isClosed: factor.IsClosed,
        isDeliveryByCompanyPaid: factor.IsDeliveryByCompanyPaid,
        restaurantId: factor.Restaurant.Id,
      },
      {
        headers: await headers(),
      }
    );
  } catch (error) {
    console.error(error);
    throw error;
  }
}
