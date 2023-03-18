import { ChangeEvent, useState } from "react";
import Select from "react-select";
import FactorNumber from "../../Interface/FactorNumbers";
import Order from "../../Interface/Order";
import Restaurant from "../../Interface/Restaurant";
import SelectCustomStyles from "../../styles/SelectCustomStyles";
import SharedList from "./SharedList";

const CreateOrder = () => {
  const FactorNumberList: FactorNumber[] = [
    {
      id: "1",
      label: "123",
    },
    {
      id: "1",
      label: "123",
    },
    {
      id: "2",
      label: "52431",
    },
    {
      id: "3",
      label: "54548",
    },
  ];

  const RestaurantList: Restaurant[] = [
    {
      id: "1",
      label: "آریایی",
    },
    {
      id: "2",
      label: "پارسی",
    },
    {
      id: "3",
      label: "گلی خانوم",
    },
    {
      id: "4",
      label: "سورنا",
    },
    {
      id: "5",
      label: "ناصریان",
    },
    {
      id: "6",
      label: "کارن",
    },
    {
      id: "7",
      label: "ترنج",
    },
    {
      id: "8",
      label: "الیپی",
    },
  ];

  const [order, setOrder] = useState<Order>({
    factorNumber: { id: "", label: "انتخاب کنید" },
    restaurant: { id: "", label: "انتخاب کنید" },
    ordertitle: "",
    cost: 0,
    isShared: false,
    sharedList: [],
  });
  const [orders, setOrders] = useState<Order[]>([]);

  const handleFactorSelectionChange = (option: FactorNumber | null) => {
    if (option) {
      setOrder({ ...order, factorNumber: option });
    }
  };

  const handleRestaurantSelectionChange = (option: Restaurant | null) => {
    if (option) {
      setOrder({ ...order, restaurant: option });
    }
  };

  return (
    <div className="flex flex-col border-2 border-dashed border-amber-600 rounded-md text-base p-5">
      {/* factor & restaurant */}
      <div className="w-full flex flex-col sm:flex-row ">
        <div className="flex flex-row p-1 sm:w-1/2">
          <p className="w-2/6 px-5 py-1">فاکتور</p>
          <Select
            className="w-4/6"
            styles={SelectCustomStyles}
            maxMenuHeight={250}
            classNamePrefix="factorDropDown"
            value={order.factorNumber}
            onChange={handleFactorSelectionChange}
            options={FactorNumberList}
            isRtl={true}
            isSearchable={true}
            theme={(theme) => ({
              ...theme,
              colors: {
                ...theme.colors,
                primary: "#d97706",
                primary25: "#d97706",
                primary50: "#d97706",
              },
            })}
          />
        </div>
        <div className="flex flex-row p-1 sm:w-1/2 ">
          <p className="w-2/6 px-5 py-1">رستوران</p>
          <Select
            className="w-4/6"
            styles={SelectCustomStyles}
            classNamePrefix="restaurantDropDown"
            value={order.restaurant}
            onChange={handleRestaurantSelectionChange}
            options={RestaurantList}
            isRtl={true}
            maxMenuHeight={250}
            isSearchable={true}
            theme={(theme) => ({
              ...theme,
              colors: {
                ...theme.colors,
                primary: "#d97706",
                primary25: "#d97706",
                primary50: "#d97706",
              },
            })}
          />
        </div>
      </div>

      {/* order */}

      <div className="w-full flex flex-col sm:flex-row ">
        <div className="flex flex-row p-1 sm:w-1/2">
          <p className="w-2/6  px-5 py-1">سفارش</p>
          <input
            className="w-4/6 border-2 rounded-md outline-amber-500 text-center"
            value={order.ordertitle}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setOrder({ ...order, ordertitle: event.target.value });
            }}
          />
        </div>
        <div className="flex flex-row p-1 sm:w-1/2 ">
          <p className="w-2/6 px-5 py-1">مبلغ</p>
          <input
            className="w-4/6 border-2 rounded-md outline-amber-500 text-center"
            placeholder="ريال"
            value={order.cost == 0 ? "" : order.cost}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setOrder({ ...order, cost: Number(event.target.value) });
            }}
          />
        </div>
      </div>

      {/* shared */}
      <div className="w-full flex flex-col sm:flex-row items-start m-5 ">
        <div className="flex flow-row  ">
          <input
            className="cursor-pointer accent-amber-600 focus:accent-amber-600"
            type="checkbox"
            name="check"
            defaultChecked={order.isShared}
            onChange={(event) => {
              setOrder({ ...order, isShared: !order.isShared });
            }}
          />

          <label className=" block whitespace-nowrap w-full h-fit p-1 cursor-pointer  ">
            سفارش اشتراکی
          </label>
        </div>
        {order.isShared ? <SharedList /> : <div></div>}
      </div>

      {/* create */}
      <div className="w-full flex justify-end">
        <button
          className="w-2/6  bg-amber-600 p-2 rounded-md text-white text-lg"
          onClick={() => {
            if (orders?.length > 0) {
              setOrders([...orders, order]);
            } else {
              setOrders([order]);
            }console.log(orders)

            setOrder({
              factorNumber: { id: "", label: "انتخاب کنید" },
              restaurant: { id: "", label: "انتخاب کنید" },
              ordertitle: "",
              cost: 0,
              isShared: false,
              sharedList: [],
            });
          }}
        >
          ثبت
        </button>
      </div>
    </div>
  );
};
export default CreateOrder;
