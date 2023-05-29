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
import { PickerChangeHandlerContext } from "@mui/x-date-pickers/internals/hooks/usePicker/usePickerValue.types";
import { DateValidationError } from "@mui/x-date-pickers";

const Factor = (props: any) => {
  const { title, btn, handleSubmit, factorData } = props;
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [selectRestaurant, setSelectRestaurant] = useState<Restaurant>();

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

    useEffect(() => {
    if (selectRestaurant) {
      formik.setFieldValue("Restaurant", {Id:selectRestaurant.id, Name:selectRestaurant.label} );
    }
  }, [selectRestaurant]);

  const initialValues: IFactor = {
    Id: "",
    FactorNumber: "",
    FactorDate: "",
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
      // formik.setFieldValue("Restaurant", factorData.Restaurant || "");
    }
  }, [factorData]);

  const validationSchema = Yup.object().shape({
    // FactorDate: Yup.string().required("تاریخ را انتخاب کنید"),
    FactorNumber: Yup.string().required("شماره فاکتور را وارد کنید"),
    DeliveryCost: Yup.number().required("هزینه پیک فاکتور را وارد کنید"),
    FactorAmount: Yup.number().required("مبلغ فاکتور را وارد کنید"),
    // IsClosed: Yup.boolean(),
    // IsDeliveryByCompanyPaid: Yup.boolean(),
    // Restaurant: Yup.object().shape({
    //   Id: Yup.string().required("رستوران را انتخاب کنید").min(32, "رستوران را انتخاب کنید باید حداقل 0 کاراکتر باشد"),
    //   Name: Yup.string(),
    // }),
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
      formik.setFieldValue("Restaurant", factorData.Restaurant || "");
      setSelectRestaurant(option)
    }
  };

  const handleDateChange = (
    value: Date | null,
    context: PickerChangeHandlerContext<DateValidationError>
  ) => {
    const formattedDate = value?.toISOString();
    console.log(formattedDate);
    formik.setFieldValue("FactorDate", formattedDate || "");
  };

  return (
    <div>
      <div className="text-amber-600 text-lg mb-6"> {title}</div>
      <form onSubmit={formik.handleSubmit} className="w-full h-full text-sm">
        <div className="mb-12 flex flex-row justify-start items-center gap-2">
          {/* <label className=" text-gray-700 font-bold mb-2">تاریخ</label> */}

          <JalaliDatepicker onDateChange={handleDateChange} />

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

            {formik.errors.Restaurant?.Id && formik.touched.Restaurant?.Id && (
              <div className="w-full text-red-500 text-sm text-right">
                {formik.errors.Restaurant?.Id}
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
