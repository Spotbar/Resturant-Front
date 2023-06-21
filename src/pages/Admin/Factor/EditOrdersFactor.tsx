import { useMutation, useQueryClient } from "react-query";
import Main from "../../../components/Layout/Main";
import { AddFactor } from "../../../api";
import { useEffect, useState } from "react";
import IFactor from "../../../Interface/IFactor";
import { useNavigate, useParams } from "react-router-dom";
import Factor from "../../../components/Factor/Factor";

import FactorHeadSelect from "../../../components/Factor/FactorHeadSelect";
import EditFactorItemsTable from "../../../components/Factor/EditSelectFactorItemsTable";
import FactorHeadDetails from "../../../components/Factor/FactorHeadDetails";

const EditOrdersFactor = () => {
  const { id } = useParams<{ id: string }>();
  const [Id, setId] = useState<string>("");
  useEffect(() => {
    if (id) setId(id);
  }, [id]);

  const factor: IFactor = {
    Id: "",
    FactorNumber: "123",
    FactorDate: "",
    DeliveryCost: 20000,
    FactorAmount: 81700,
    IsClosed: false,
    IsDeliveryByCompanyPaid: false,
    Restaurant: { Id: "", Name: "گلی" },
  };
  const [selectedOrdersIds, setSelectedOrdersIds] = useState<string[]>([]);
  const [ordersCost, setOrdersCost] = useState<number>(0);

  const handleSelectionChange = (selectedIds: string[], totalCost: number) => {
    setSelectedOrdersIds(selectedIds);
    setOrdersCost(totalCost);
  };

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
      <div className="text-amber-600 text-lg mb-6"> ویرایش سفارشات فاکتور  {factor.FactorNumber}</div>
      <FactorHeadDetails factor={factor} />
      {/* <div className="w-auto h-[1px] m-5  border-2 border-dotted "></div> */}
      <br />
      <EditFactorItemsTable onSelectionChange={handleSelectionChange} />
      <div className="text-base mt-4">
        {" "}
        مجموع سفارشات ثبت شده{" "}
        <span className="text-yellow-900">{ordersCost} </span>{" "}
      </div>
      <div className="text-base mt-4">
        {" "}
        مجموع سفارشات همراه با پیک{" "}
        <span className="text-yellow-900">{ordersCost + 20000}</span>
      </div>
      <div className="my-5">
        <button
          className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline w-full sm:w-auto sm:px-14 text-lg"
          onClick={() => {
            // navigate("/CreateFactor");
          }}
        >
          ویرایش سفارشات
        </button>
      </div>
    </Main>
  );
};
export default EditOrdersFactor;
