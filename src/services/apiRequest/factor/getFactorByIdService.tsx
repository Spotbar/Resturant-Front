import http from "../../httpService";
import headers from "../../header";

export default async function getFactorByIdService(id: string) {
  try {
    const response = http.get(
      `/Factor/Get_Id?factorId=${id}`,
      // {
      //   id: id,
      // },
      {
        headers: await headers(),
      }
    );
    return JSON.parse((await response).data);
  } catch (error) {
    console.error(error);
    throw error;
  }
}
