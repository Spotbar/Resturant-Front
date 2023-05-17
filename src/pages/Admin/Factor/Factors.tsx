import React from "react";
import FactorTable from "../../../components/Factor/factorTable";
import Main from "../../../components/Layout/Main";

const Factors: React.FC = () => {
  // Sample data
  const data = [
    { id: 1, name: "John Doe", age: 25 },
    { id: 2, name: "Jane Smith", age: 30 },
  ];

  return (
    // <Main>
    //   <div>
    //     <h1>Searchable Table with Pagination</h1>
    //     <FactorTable />
    //   </div>
    // </Main>
    <Main>
    <div className="text-amber-600 text-lg mb-6"> لیست فاکتورها </div>
    <FactorTable

    />

    <div className="my-5">
      <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline w-full sm:w-auto sm:px-14 text-lg"
      onClick={()=>{
        // navigate('/NewFactor')
      }}>
         فاکتور جدید
      </button>
    </div>
  </Main>
  );
};

export default Factors;
