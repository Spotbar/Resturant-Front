import { useMutation } from "react-query";
import ICreateRestaurant from "../../Interface/ICreateRestaurant";
import { AddRestaurant } from "../../api";
import Main from "../Layout/Main";
import { useFormik } from "formik";
import * as Yup from "yup";

const Restaurant = (props: any) => {
  const { title, btn, onSubmit } = props;
  const initialValues: ICreateRestaurant = {
    name: "",
    tell: 0,
    seller: "",
    mobile:0,
    address: "",
  };
  // const onSubmit = (restaurant: ICreateRestaurant) => {
  //   // // navigate("/Home");
  // };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required(" نام رستوران را وارد کنید"),
    tell: Yup.number().required("شماره تلفن رستوران را وارد کنید"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      onSubmit(values);
    },
    validationSchema,
    validateOnMount: true,
  });

  return (
    <div>
      <div className="text-amber-600 text-lg mb-6"> {title}</div>
      <form onSubmit={formik.handleSubmit} className="w-full h-full text-sm">
        <div className="w-full h-full grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="mb-4 col-span-2">
            <label className="block text-gray-700 font-bold mb-2">
              نام رستوران
            </label>
            <input
              className="w-full rounded-md border outline-amber-500 py-2 px-3 leading-tight  "
              id="name"
              type="text"
              placeholder=""
              {...formik.getFieldProps("name")}
              name="name"
            />
            {formik.errors.name && formik.touched.name && (
              <div className="w-full text-red-500 text-sm text-right">
                {formik.errors.name}
              </div>
            )}
          </div>
          <div className="mb-4 col-span-2">
            <label className="block text-gray-700 font-bold mb-2">تلفن</label>
            <input
              className="w-full rounded-md border outline-amber-500 py-2 px-3 leading-tight"
              id="tell"
              type="tel"
              // placeholder=""
              {...formik.getFieldProps("tell")}
              name="tell"
            />
            {formik.errors.tell && formik.touched.tell && (
              <div className="w-full text-red-500 text-sm text-right">
                {formik.errors.tell}
              </div>
            )}
          </div>
          <div className="mb-4 col-span-2">
            <label className="block text-gray-700 font-bold mb-2">
              اپراتور فروش
            </label>
            <input
              className="w-full rounded-md border outline-amber-500 py-2 px-3 leading-tight"
              id="seller"
              type="text"
              // placeholder=""
              {...formik.getFieldProps("seller")}
              name="seller"
            />
            {formik.errors.seller && formik.touched.seller && (
              <div className="w-full text-red-500 text-sm text-right">
                {formik.errors.tell}
              </div>
            )}
          </div>
          <div className="mb-4 col-span-2">
            <label className="block text-gray-700 font-bold mb-2">
              شماره همراه
            </label>
            <input
              className="w-full rounded-md border outline-amber-500 py-2 px-3 leading-tight"
              id="mobile"
              type="text"
              // placeholder=""
              {...formik.getFieldProps("mobile")}
              name="mobile"
            />
          </div>
          <div className="mb-4 col-span-4 ">
            <label className="block text-gray-700 font-bold mb-2">آدرس</label>
            <textarea
              className="w-full rounded-md border outline-amber-500 py-2 px-3 leading-tight"
              id="address"
              rows={3}
              // placeholder=""
              {...formik.getFieldProps("address")}
              name="address"
            ></textarea>
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

export default Restaurant;
