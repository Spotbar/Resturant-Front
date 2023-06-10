import { useEffect, useState } from "react";
import Order from "../../Interface/IOrder";
import CreateOrder from "../../components/Reserve/CreateOrder";
import ReserveList from "../../components/Reserve/ReserveList";
import Main from "../../components/Layout/Main";
import IOrder from "../../Interface/IOrder";

const Reserve = () => {
  const [order, setOrder] = useState<Order>();
  const [orders, setOrders] = useState<Order[]>([]);
  // const handleOrderChange = (newData: Order) => {
  //   setData(newData);
  // };

  useEffect(() => {
    if (order) {
      setOrders((prevOrders) => [...prevOrders, order]);
    }
  }, [order]);

  const handleFormSubmit = (order: IOrder) => {
    // setOrders((prevOrders) => [...prevOrders, order]);
 
    setOrder(order);
    // console.log(factor);
    // addFactorMutation.mutate(factor);
  };

  return (
    <Main>
      <div className="h-screen">
        <CreateOrder handleSubmit={handleFormSubmit} />
        <ReserveList orders={orders} />
      </div>
    </Main>
  );
};

export default Reserve;
