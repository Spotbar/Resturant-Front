import React from "react";

import Main from "../../../components/Layout/Main";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import {} from "../../../api";
import { useEffect, useState } from "react";
import UnRecordedOrdersTable from "../../../components/UnrecordedOrder/UnRecordedOrdersTable";
import { IUnrecordedOrder } from "../../../Interface/IUnrecordedOrder";

const UnRecordedOrders: React.FC = () => {
  // Sample data
  // const [factors, setFactors] = useState<IFactor[]>([]);
  // const { isLoading, error, data } = useQuery("factors", getFactors, {
  //   onSuccess(data) {
  //     console.log(data);
  //   },
  // });

  // useEffect(() => {
  //   if (data && data.length > 0) {
  //     setFactors(data);
  //   }
  // }, [data]);

  const ordersFromServer: IUnrecordedOrder[] = [
    {
      Id: "1",
      OrderDate: "2023-05-21T20:30:00.000Z",
      Restaurant: { Id: "", Name: "گلی" },
      UnrecordCount: 9,
    },
  ];

  const navigate = useNavigate();

  return (
    <Main>
      <div className="text-amber-600 text-lg mb-6"> لیست سفارشات ثبت نشده </div>
      <UnRecordedOrdersTable orders={ordersFromServer} />
    </Main>
  );
};

export default UnRecordedOrders;
