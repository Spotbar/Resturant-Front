import http from "../../httpService";
import headers from "../../header";
import IFactor from "../../../Interface/IFactor";

export default async function editFactorService(factor: IFactor) {
  try {
    return http.put(
      "/Factor/UpdateFactor",
      {
        id: factor.Id,
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
