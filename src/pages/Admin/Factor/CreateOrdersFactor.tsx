import { useMutation, useQueryClient } from "react-query";
import Main from "../../../components/Layout/Main";
import { AddFactor } from "../../../api";
import { useEffect, useState } from "react";
import IFactor from "../../../Interface/IFactor";
import { useNavigate, useParams } from "react-router-dom";
import Factor from "../../../components/Factor/Factor";
import FactorHeadDetails from "../../../components/Factor/FactorHeadDetails";
import SelectFactorItemsTable from "../../../components/Factor/SelectFactorItemsTable";

const CreateOrdersFactor = () => {
  const { id } = useParams<{ id: string }>();
  const [Id, setId] = useState<string>("");
  useEffect(() => {
    if (id) setId(id);
  }, [id]);

  // const initialValues: IFactor = {
  //   Id: "",
  //   FactorNumber: "",
  //   FactorDate: "",
  //   DeliveryCost: 0,
  //   FactorAmount: 0,
  //   IsClosed: false,
  //   IsDeliveryByCompanyPaid: false,
  //   Restaurant: { Id: "", Name: "" },
  // };
  // const navigate = useNavigate();
  // const client = useQueryClient();
  // const addFactorMutation = useMutation(async (factor: IFactor) => {
  //   const data = await AddFactor(factor);
  //   if (data && data.data) {
  //     client.invalidateQueries("factors", { refetchInactive: true });
  //     navigate("/Factors");
  //   }
  // });

  // const handleFormSubmit = (factor: IFactor) => {
  //   console.log(factor);
  //   addFactorMutation.mutate(factor);
  // };

  return (
    <Main>
      <div className="text-amber-600 text-lg mb-6"> ایجاد فاکتور</div>
      <FactorHeadDetails />
      <div className="w-auto h-[1px] m-5  border-2 border-dotted "></div>
      <SelectFactorItemsTable/>
    </Main>
  );
};
export default CreateOrdersFactor;
