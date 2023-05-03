import { useEffect, useState } from "react";
import Order from "../../Interface/Order";
import CreateOrder from "../../components/Reserve/CreateOrder";
import ReserveList from "../../components/Reserve/ReserveList";
import SelectDate from "../../components/Reserve/SelectDate";
import Main from "../../components/Layout/Main";

const Reserve = () => {
  const [data, setData] = useState<Order>();
  const [orders, setOrders] = useState<Order[]>([]);
  const handleOrderChange = (newData: Order) => {
    setData(newData);
  };


  useEffect(() => {
    if (data) {
      setOrders(prevOrders => [...prevOrders, data]);
    }
  }, [data]);


  return (
    <Main>
      <div className="h-screen">
        <SelectDate />
        <CreateOrder onOrderChange={handleOrderChange} />
        <ReserveList orders={orders} />
      </div>
    </Main>
  );
};

export default Reserve;
