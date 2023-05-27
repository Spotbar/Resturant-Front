import React from "react";
import FactorTable from "../../../components/Factor/factorTable";
import Main from "../../../components/Layout/Main";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { getFactors } from "../../../api";
import IFactor from "../../../Interface/IFactor";
import { useEffect, useState } from "react";

const Factors: React.FC = () => {
  // Sample data
  const [factors, setFactors] = useState<IFactor[]>([]);
  const { isLoading, error, data } = useQuery("factors", getFactors, {
    onSuccess(data) {
      console.log(data);
    },
  });

  useEffect(() => {
    if (data && data.length > 0) {
      setFactors(data);
    }
  }, [data]);
  // const data = [
  //   { id: 1, name: "John Doe", age: 25 },
  //   { id: 2, name: "Jane Smith", age: 30 },
  // ];

  const navigate = useNavigate();

  return (
    <Main>
      <div className="text-amber-600 text-lg mb-6"> لیست فاکتورها </div>
      <FactorTable factors={factors} />

      <div className="my-5">
        <button
          className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline w-full sm:w-auto sm:px-14 text-lg"
          onClick={() => {
            navigate("/CreateFactor");
          }}
        >
          فاکتور جدید
        </button>
      </div>
    </Main>
  );
};

export default Factors;
