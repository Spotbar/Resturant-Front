import { ChangeEvent, useEffect, useState } from "react";
import Select from "react-select";
import FactorNumber from "../../Interface/FactorNumbers";
import Order from "../../Interface/IOrder";
import SelectCustomStyles from "../../styles/SelectCustomStyles";
import SharedList from "./SharedList";
import SharedGroup from "../../Interface/SharedGroup";
import { IRestaurantSelect } from "../../Interface/IRestaurantIndex";
import IOrder from "../../Interface/IOrder";
import JalaliDatepicker from "../DatePickerX/JalaliDatepicker";
import { PickerChangeHandlerContext } from "@mui/x-date-pickers/internals/hooks/usePicker/usePickerValue.types";
import { DateValidationError } from "@mui/x-date-pickers";
import { useQuery } from "react-query";
import { getRestaurants } from "../../api";
import IRestaurant from "../../Interface/IRestaurant";
import { useFormik } from "formik";
import * as Yup from "yup";

interface OrderProps {
  // onOrderChange: (newData: Order) => void;
  handleSubmit: (order: IOrder) => void;
}
const CreateOrder: React.FC<OrderProps> = ({ handleSubmit }) => {
  const SharedGroupListHandler = (sharedList: SharedGroup[]) => {
    // do something with value in parent component, like save to state
    console.log(sharedList);
    formik.setFieldValue("UserOrders", sharedList);
  };

  const initialValues: IOrder = {
    Id: "",
    Name: "",
    Cost: 0,
    IsShared: false,
    IsAccept: false,
    Restaurant: { Id: "", Name: "" },
    UserOrders: [],
  };

  const [restaurants, setRestaurants] = useState<IRestaurantSelect[]>([]);
  const [selectRestaurant, setSelectRestaurant] = useState<IRestaurantSelect>({
    id: "",
    label: "",
  });
  const { isLoading, error, data } = useQuery("restaurants", getRestaurants, {
    onSuccess(data) {},
  });
  useEffect(() => {
    if (data) {
      const options = data.map(function (row: IRestaurant) {
        return { id: row.Id, label: row.Name };
      });
      setRestaurants(options);
    }
  }, [data]);

  const handleRestaurantSelectionChange = (
    option: IRestaurantSelect | null
  ) => {
    if (option) {
      setSelectRestaurant(option);
      formik.setFieldValue("Restaurant", {
        Id: option.id,
        Name: option.label,
      });
    }
  };

  const handleDateChange = (
    value: Date | null,
    context: PickerChangeHandlerContext<DateValidationError>
  ) => {
    const formattedDate = value?.toISOString();
    console.log(formattedDate);
  };

  // useEffect(() => {}, [orders]);

  const validationSchema = Yup.object().shape({
    // FactorDate: Yup.string().required("تاریخ را انتخاب کنید"),
    Name: Yup.string().required(" سفارش را وارد کنید"),
    Cost: Yup.number(),
  });

  const formik = useFormik({
    initialValues,
    onSubmit: (values, { resetForm }) => {
      handleSubmit(values); // Call the parent's form submission handler function
      resetForm();
    },
    validationSchema,
    validateOnMount: true,
  });

  useEffect(() => {
    if (!formik.getFieldProps("IsShared").value) {
      formik.setFieldValue("UserOrders", []);
    }
  }, [formik.getFieldProps("IsShared").value]);

  return (
    <div>
      <div className="text-amber-600 text-lg mb-6"> ثبت سفارش</div>
      <form onSubmit={formik.handleSubmit} className="w-full h-full text-sm">
        <div className="mb-12 flex flex-col justify-center items-start gap-2">
          <JalaliDatepicker selectedDate="" onDateChange={handleDateChange} />
        </div>

        <div className="w-full h-full grid grid-cols-2 gap-4 sm:grid-cols-4">
          {/* restaurant */}
          <div className="mb-4 col-span-4 sm:col-span-2 ">
            <label className="block text-gray-700 font-bold mb-2">
              رستوران
            </label>
            <Select
              styles={SelectCustomStyles}
              classNamePrefix="restaurantDropDown"
              // value={formik.getFieldProps("Restaurant.Name").value}
              value={selectRestaurant}
              name="Restaurant.Id"
              onChange={handleRestaurantSelectionChange}
              options={restaurants}
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

          {/* Name */}
          <div className="mb-4 col-span-4 sm:col-span-2">
            <label className="block text-gray-700 font-bold mb-2">سفارش</label>
            <input
              className="w-full rounded-md border outline-amber-500 py-2 px-3 leading-tight"
              id="Name"
              type="text"
              // placeholder=""
              {...formik.getFieldProps("Name")}
              name="Name"
            />
            {formik.errors.Name && formik.touched.Name && (
              <div className="w-full text-red-500 text-sm text-right">
                {formik.errors.Name}
              </div>
            )}
          </div>
          {/* Cost */}
          <div className="mb-4 col-span-4 sm:col-span-2">
            <label className="block text-gray-700 font-bold mb-2">مبلغ</label>
            <input
              className="w-full rounded-md border outline-amber-500 py-2 px-3 leading-tight"
              id="Cost"
              type="number"
              // placeholder=""
              {...formik.getFieldProps("Cost")}
              name="Cost"
            />
          </div>

          {/* IsShared */}
          <div className="mb-4 col-span-4 sm:col-span-2">
            <br />

            <div className="w-full flex flex-row items-center justify-center gap-2 mt-3 ">
              <input
                className="cursor-pointer accent-amber-600 focus:accent-amber-600 "
                type="checkbox"
                name="IsClosed"
                checked={formik.getFieldProps("IsShared").value}
                // defaultChecked={order.isShared}
                onChange={(event) => {
                  formik.setFieldValue(
                    "IsShared",
                    !formik.getFieldProps("IsShared").value
                  );
                }}
              />

              <label className=" block whitespace-nowrap w-full h-fit p-1 cursor-pointer  ">
                سفارش اشتراکی
              </label>
            </div>
          </div>
          <div className="mb-4 col-span-4 sm:col-span-4">
            {formik.getFieldProps("IsShared").value ? (
              <SharedList SharedGroupList={SharedGroupListHandler} />
            ) : (
              <div></div>
            )}
          </div>
          <div className="col-span-4 flex justify-end  ">
            <button
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full sm:w-auto sm:px-14"
              type="submit"
            >
              ثبت سفارش
            </button>
          </div>
        </div>
      </form>
    </div>
    // <div className="flex flex-col border-1 text-base ">
    //   {/* factor & restaurant */}
    //   <div className="w-full flex flex-col sm:flex-row ">
    //   <JalaliDatepicker selectedDate="" onDateChange={handleDateChange} />
    //     <div className="flex flex-row p-1 sm:w-1/2">

    //     </div>
    //     <div className="flex flex-row p-1 sm:w-1/2 ">
    //       <p className="w-2/6 px-5 py-1">رستوران</p>
    //       <Select
    //         className="w-4/6"
    //         styles={SelectCustomStyles}
    //         classNamePrefix="restaurantDropDown"
    //         value={order.Restaurant}
    //         // onChange={handleRestaurantSelectionChange}
    //         // options={RestaurantList}
    //         isRtl={true}
    //         maxMenuHeight={250}
    //         isSearchable={true}
    //         theme={(theme) => ({
    //           ...theme,
    //           colors: {
    //             ...theme.colors,
    //             primary: "#d97706",
    //             primary25: "#d97706",
    //             primary50: "#d97706",
    //           },
    //         })}
    //       />
    //     </div>
    //   </div>

    //   {/* order */}

    //   <div className="w-full flex flex-col sm:flex-row">
    //     <div className="flex flex-row p-1 sm:w-1/2">
    //       <p className="w-2/6  px-5 py-1">سفارش</p>
    //       <input
    //         className="w-4/6 border-2 rounded-md outline-amber-500 text-center"
    //         value={order.Name}
    //         onChange={(event: ChangeEvent<HTMLInputElement>) => {
    //           setOrder({ ...order, Name: event.target.value });
    //         }}
    //       />
    //     </div>
    //     <div className="flex flex-row p-1 sm:w-1/2 ">
    //       <p className="w-2/6 px-5 py-1">مبلغ</p>
    //       <input
    //         className="w-4/6 border-2 rounded-md outline-amber-500 text-center"
    //         placeholder="ريال"
    //         value={order.Cost == 0 ? "" : order.Cost}
    //         onChange={(event: ChangeEvent<HTMLInputElement>) => {
    //           setOrder({ ...order, Cost: Number(event.target.value) });
    //         }}
    //       />
    //     </div>
    //   </div>

    //   {/* shared */}
    //   <div className="w-full flex flex-col sm:flex-row items-start m-5 ">
    //     <div className="flex flow-row  ">
    //       <input
    //         className="cursor-pointer accent-amber-600 focus:accent-amber-600"
    //         type="checkbox"
    //         name="check"
    //         checked={order.IsShared}
    //         // defaultChecked={order.isShared}
    //         onChange={(event) => {
    //           setOrder({ ...order, IsShared: !order.IsShared });
    //         }}
    //       />

    //       <label className=" block whitespace-nowrap w-full h-fit p-1 cursor-pointer  ">
    //         سفارش اشتراکی
    //       </label>
    //     </div>
    //     {order.IsShared ? (
    //       <SharedList SharedGroupList={SharedGroupListHandler} />
    //     ) : (
    //       <div></div>
    //     )}
    //   </div>

    //   {/* create */}
    //   <div className="w-full flex justify-end">
    //     <button
    //       className="w-2/6  bg-amber-600 p-2 rounded-md text-white text-lg"
    //       onClick={() => {
    //         // if (orders?.length > 0) {
    //         setOrders([...orders, order]);
    //         onOrderChange(order);
    //         // } else {
    //         //   setOrders([order]);
    //         // }console.log(orders)

    //         setOrder({
    //           Id: "",
    //           Name: "",
    //           Cost: 0,
    //           IsShared: false,
    //           IsAccept: false,
    //           Restaurant: { Id: "", Name: "" },
    //           UserOrders: [],
    //         });

    //         setSharedItems([]);
    //       }}
    //     >
    //       ثبت
    //     </button>
    //   </div>
    // </div>
  );
};
export default CreateOrder;
