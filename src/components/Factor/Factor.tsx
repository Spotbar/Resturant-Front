import { useFormik } from "formik";
import * as Yup from "yup";
import IFactor from "../../Interface/IFactor";
import { useEffect, useState } from "react";
import SelectCustomStyles from "../../styles/SelectCustomStyles";
import Select from "react-select";
import Restaurant from "../../Interface/Restaurant";
import JalaliDatepicker from "../DatePickerX/JalaliDatepicker";
import IRestaurant from "../../Interface/IRestaurant";
import { useQuery } from "react-query";
import { getRestaurants } from "../../api";

const Factor = (props: any) => {
  const { title, btn, handleSubmit, factorData } = props;
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  const { isLoading, error, data } = useQuery("restaurants", getRestaurants, {
    onSuccess(data) {},
  });

  useEffect(() => {
    if (data) {
      const options = data.map(function (row: IRestaurant) {
        return { value: row.Id, label: row.Name };
      });
      setRestaurants(options);
    }
  }, [data]);

  const initialValues: IFactor = {
    Id: "",
    FactorNumber: "",
    FactorDate: "2023-05-22T09:55:00.020Z",
    DeliveryCost: 0,
    FactorAmount: 0,
    IsClosed: false,
    IsDeliveryByCompanyPaid: false,
    Restaurant: { Id: "", Name: "" },
  };

  useEffect(() => {
    if (factorData) {
      formik.setFieldValue("Id", factorData.Id || "");
      formik.setFieldValue("FactorNumber", factorData.FactorNumber || "");
      formik.setFieldValue(
        "FactorDate",
        factorData.FactorDate || "2023-05-27T07:30:14.150Z"
      );
      formik.setFieldValue("DeliveryCost", factorData.DeliveryCost || "");
      formik.setFieldValue("FactorAmount", factorData.FactorAmount || "");
      formik.setFieldValue("isClosed", factorData.isClosed || false);
      formik.setFieldValue(
        "isDeliveryByCompanyPaid",
        factorData.isDeliveryByCompanyPaid || false
      );
      formik.setFieldValue("Restaurant", factorData.Restaurant || "");
    }
  }, [factorData]);

  const validationSchema = Yup.object().shape({
    FactorNumber: Yup.string().required("شماره فاکتور را وارد کنید"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      handleSubmit(values); // Call the parent's form submission handler function
    },
    validationSchema,
    validateOnMount: true,
  });

  const handleRestaurantSelectionChange = (option: Restaurant | null) => {
    if (option) {
      // setOrder({ ...order, restaurant: option });
      formik.setFieldValue(
        "Restaurant",
        factorData.Restaurant || "475028d9-6ba3-4ddc-050c-08db56c002c1"
      );
    }
  };

  return (
    <div>
      <div className="text-amber-600 text-lg mb-6"> {title}</div>
      <form onSubmit={formik.handleSubmit} className="w-full h-full text-sm">
        <div className="mb-12 flex flex-row justify-start items-center gap-2">
          {/* <label className=" text-gray-700 font-bold mb-2">تاریخ</label> */}

          <JalaliDatepicker />

          {formik.errors.FactorDate && formik.touched.FactorDate && (
            <div className="w-full text-red-500 text-sm text-right">
              {formik.errors.FactorDate}
            </div>
          )}
        </div>

        <div className="w-full h-full grid grid-cols-2 gap-4 sm:grid-cols-4">
          {/* FactorNumber */}
          <div className="mb-4 col-span-2">
            <label className="block text-gray-700 font-bold mb-2">
              شماره فاکتور
            </label>
            <input
              className="w-full rounded-md border outline-amber-500 py-2 px-3 leading-tight"
              id="FactorNumber"
              type="text"
              placeholder=""
              {...formik.getFieldProps("FactorNumber")}
              name="FactorNumber"
            />
            {formik.errors.FactorNumber && formik.touched.FactorNumber && (
              <div className="w-full text-red-500 text-sm text-right">
                {formik.errors.FactorNumber}
              </div>
            )}
          </div>
          {/* restaurant */}
          <div className="mb-4 col-span-2">
            <label className="block text-gray-700 font-bold mb-2">
              رستوران
            </label>
            <Select
              styles={SelectCustomStyles}
              classNamePrefix="restaurantDropDown"
              // value={}
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

            {formik.errors.Restaurant && formik.touched.Restaurant && (
              <div className="w-full text-red-500 text-sm text-right">
                {/* {formik.errors.Restaurant} */}
              </div>
            )}
          </div>

          {/* FactorAmount */}
          <div className="mb-4 col-span-2">
            <label className="block text-gray-700 font-bold mb-2">
              مبلغ فاکتور
            </label>
            <input
              className="w-full rounded-md border outline-amber-500 py-2 px-3 leading-tight"
              id="FactorAmount"
              type="text"
              // placeholder=""
              {...formik.getFieldProps("FactorAmount")}
              name="FactorAmount"
            />
            {formik.errors.FactorAmount && formik.touched.FactorAmount && (
              <div className="w-full text-red-500 text-sm text-right">
                {formik.errors.FactorAmount}
              </div>
            )}
          </div>
          {/* DeliveryCost */}
          <div className="mb-4 col-span-2">
            <label className="block text-gray-700 font-bold mb-2">
              هزینه پیک
            </label>
            <input
              className="w-full rounded-md border outline-amber-500 py-2 px-3 leading-tight"
              id="DeliveryCost"
              type="number"
              // placeholder=""
              {...formik.getFieldProps("DeliveryCost")}
              name="DeliveryCost"
            />
            {formik.errors.DeliveryCost && formik.touched.DeliveryCost && (
              <div className="w-full text-red-500 text-sm text-right">
                {formik.errors.DeliveryCost}
              </div>
            )}
          </div>

          {/* isClosed */}
          <div className="mb-4 col-span-2">
            <div className="flex flex-row gap-2">
              <input
                className="cursor-pointer accent-amber-600 focus:accent-amber-600"
                type="checkbox"
                name="check"
                // checked={order.isShared}
                // defaultChecked={order.isShared}
                onChange={(event) => {
                  // setOrder({ ...order, isShared: !order.isShared });
                }}
              />

              <label className=" block whitespace-nowrap w-full h-fit p-1 cursor-pointer  ">
                بسته شده
              </label>
            </div>
          </div>
          {/* isDeliveryByCompanyPaid */}
          <div className="mb-4 col-span-2">
            <div className="flex flex-row gap-2 ">
              <input
                className="cursor-pointer accent-amber-600 focus:accent-amber-600"
                type="checkbox"
                name="check"
                // checked={order.isShared}
                // defaultChecked={order.isShared}
                onChange={(event) => {
                  // setOrder({ ...order, isShared: !order.isShared });
                }}
              />

              <label className=" block whitespace-nowrap w-full h-fit p-1 cursor-pointer  ">
                پیک شرکت
              </label>
            </div>
          </div>

          <div className="col-span-4 flex justify-end ">
            <button
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full sm:w-auto sm:px-14"
              type="submit"
            >
              {btn}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Factor;
