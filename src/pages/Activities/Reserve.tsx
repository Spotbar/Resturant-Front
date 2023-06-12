import { useEffect, useState } from "react";
import CreateOrder from "../../components/Reserve/CreateOrder";
import ReserveList from "../../components/Reserve/ReserveList";
import Main from "../../components/Layout/Main";
import IOrder from "../../Interface/IOrder";


const Reserve = () => {
  const [order, setOrder] = useState<IOrder>();
  const [orders, setOrders] = useState<IOrder[]>([]);
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

  const handleDeleteOrder = (orderId: string) => {
    // Filter out the order that needs to be deleted
    const updatedOrderList = orders.filter((order) => order.Id !== orderId);
    setOrders(updatedOrderList)
    console.log("delete");
  };

  return (
    <Main>
      <div className="h-screen">
        <CreateOrder handleSubmit={handleFormSubmit} />
        <ReserveList orders={orders} onDelete={handleDeleteOrder} />
      </div>
    </Main>
  );
};

export default Reserve;
