import { useFormik } from "formik";
import * as Yup from "yup";
import IFactor from "../../Interface/IFactor";
import { FormEvent, useEffect, useState } from "react";
import SelectCustomStyles from "../../styles/SelectCustomStyles";
import Select from "react-select";
import Restaurant from "../../Interface/Restaurant";
import JalaliDatepicker from "../DatePickerX/JalaliDatepicker";
import IRestaurant from "../../Interface/IRestaurant";
import { useQuery } from "react-query";
import { getRestaurants } from "../../api";
import { PickerChangeHandlerContext } from "@mui/x-date-pickers/internals/hooks/usePicker/usePickerValue.types";
import { DateValidationError } from "@mui/x-date-pickers";

interface FactorComponentProps {
  title: string;
  btn: string;
  factorData: IFactor;
  handleSubmit: (factor: IFactor) => void;
}

const Factor = (props: FactorComponentProps) => {
  const { title, btn, handleSubmit, factorData } = props;

  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  const [selectRestaurant, setSelectRestaurant] = useState<Restaurant>({
    id: factorData.Restaurant.Id,
    label: factorData.Restaurant.Name,
  });

  useEffect(() => {
    console.log(factorData);
  }, []);

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
      formik.setValues({
        Id: factorData.Id,
        FactorNumber: factorData.FactorNumber,
        FactorDate: factorData.FactorDate,
        DeliveryCost: factorData.DeliveryCost,
        FactorAmount: factorData.FactorAmount,
        IsClosed: factorData.IsClosed,
        IsDeliveryByCompanyPaid: factorData.IsDeliveryByCompanyPaid,
        Restaurant: {
          Id: factorData.Restaurant.Id,
          Name: factorData.Restaurant.Name,
        },
      });
      setSelectRestaurant({
        id: factorData.Restaurant.Id,
        label: factorData.Restaurant.Name,
      });
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
      formik.setFieldValue("Restaurant", {
        Id: option.id,
        Name: option.label,
      });

      setSelectRestaurant(option);
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

          <JalaliDatepicker
            selectedDate={factorData.FactorDate}
            onDateChange={handleDateChange}
          />

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
                name="IsClosed"
                checked={formik.getFieldProps("IsClosed").value}
                // defaultChecked={order.isShared}
                onChange={(event) => {
                  formik.setFieldValue(
                    "IsClosed",
                    !formik.getFieldProps("IsClosed").value
                  );
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
                name="IsDeliveryByCompanyPaid"
                checked={formik.getFieldProps("IsDeliveryByCompanyPaid").value}
                // defaultChecked={order.isShared}
                onChange={(event) => {
                  formik.setFieldValue(
                    "IsDeliveryByCompanyPaid",
                    !formik.getFieldProps("IsDeliveryByCompanyPaid").value
                  );
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
