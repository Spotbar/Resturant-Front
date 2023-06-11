import React from "react";

import Main from "../../../components/Layout/Main";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import {  } from "../../../api";
import { useEffect, useState } from "react";
import UnRecordedOrdersTable from "../../../components/UnrecordedOrder/UnRecordedOrdersTable";

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


  const navigate = useNavigate();

  return (
    <Main>
      <div className="text-amber-600 text-lg mb-6"> لیست سفارشات ثبت نشده </div>
      <UnRecordedOrdersTable orders={[]}/>

    </Main>
  );
};

export default UnRecordedOrders;